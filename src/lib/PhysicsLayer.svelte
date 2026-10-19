<script lang="ts">
	import P5, { type Sketch } from 'p5-svelte';
	import { type Body } from 'matter-js';
	import rough from 'roughjs';
	import type { RoughCanvas } from 'roughjs/bin/canvas';
	import type { Drawable } from 'roughjs/bin/core';

	import Matter from 'matter-js';
	const { Engine, Events, Bodies, Composite, Mouse, MouseConstraint, Query } = Matter;

	let {layer} = $props();

	const sketch: Sketch = (p5) => {
	    // Define engine variables
	    const engine = Engine.create();
		let walls: Body[] = [];
		let rc: RoughCanvas;
		let scale: number = 0.8;

		// Define circles variables so easily accessible
		let radius: number;
		let circleBody: Body;
		let circleShape: Drawable;

		// Define square variables
		let size: number;
		let squareBody: Body;
		let squareShape: Drawable;

		// Define triangle variables
		let side: number;
		let triangleBody: Body;
		let triangleShape: Drawable;

		// Define mouse variables
		let mouseConstraint: Matter.MouseConstraint;
		let mouse: Matter.Mouse;
		let dormant: Set<Matter.Body>;


		// Little function to turn matter vectors into points
		const toRough = (pts: Matter.Vector[]): [number, number][] => pts.map(p => [p.x, p.y]);

		function buildWalls() {
		    // In case walls exist, remove them
			Composite.remove(engine.world, walls);
			const t = 200; // thick so fast bodies can't tunnel through
			const w = p5.width;
			const h = p5.height;

			// Define the walls
			walls = [
				Bodies.rectangle(w / 2, h + t / 2, w + t * 2, t, { isStatic: true }), // floor
				Bodies.rectangle(-t / 2, h / 2, t, h * 4, { isStatic: true }), // left
				Bodies.rectangle(w + t / 2, h / 2, t, h * 4, { isStatic: true }), // right
				Bodies.rectangle(w / 2, -t / 2, w + t * 2, t, { isStatic: true }),
			];

			// Add the walls to the engine
			Composite.add(engine.world, walls);
		}

		p5.setup = () => {
		    // Make a full window canvas
			p5.createCanvas(p5.windowWidth, p5.windowHeight);

			// Setup the roughJS canvas, using the p5 canvas
			rc = rough.canvas(p5.drawingContext.canvas as HTMLCanvasElement);

			// CIRCLE
			// Make the circle in matter
			radius = 90 * scale;

			let circlePos = [0.7, 0.7]
			circleBody = Bodies.circle(circlePos[0] * p5.width, circlePos[1] * p5.height, radius, { restitution: 0.5 });

			// Generate for the circle
			circleShape = rc.generator.circle(0, 0, radius * 2, {
				roughness: 1.5,
				fill: 'rgba(59, 130, 246, 0.5)',
				fillStyle: 'solid',
				strokeWidth: 2,
				curveFitting: 0.98,
				seed: 49
			});

			// SQUARE
			// Setup in matter
			size = 150 * scale;
			let padding = 7

			let squarePos = [0.2, 0.45]
			squareBody = Bodies.rectangle(squarePos[0] * p5.width, squarePos[1] * p5.height, size + padding, size + padding, { restitution: 1, angle: Math.PI / 6 });

			// Build the roughJS generator
			squareShape = rc.generator.rectangle(-size / 2, -size / 2, size, size, {
			    roughness: 2,
				fill: 'rgb(5, 223, 114, 0.5)',
				fillStyle: 'solid',
				strokeWidth: 2,
				curveFitting: 0.98,
				seed: 49
			});

			// TRIANGLE
			// Setup in matter
			side = 150 * scale;
			let a = side / Math.sqrt(3);
			let a1 = a * Math.sin(Math.PI / 6)
			let a2 = a * Math.cos(Math.PI / 6)

			padding = -4

			let points: Matter.Vector[][] = [[
			    {x: 0+padding, y: -a+padding},
				{x: a2+padding, y: a1+padding},
				{x: -a2+padding, y: a1+padding}
			]];

			let trianglePos = [0.65, 0.3]

			triangleBody = Bodies.fromVertices(trianglePos[0] * p5.width, trianglePos[1] * p5.height, points, { restitution: 1, angle: -Math.PI / 4 });

			// Build the roughJS generator
			triangleShape = rc.generator.polygon(toRough(points[0]), {
			    roughness: 2,
				fill: 'rgb(251, 44, 54, 0.5)',
				fillStyle: 'solid',
				strokeWidth: 2,
				curveFitting: 0.98,
				seed: 49
			});

			// Make the shapes static to start
			Matter.Body.setStatic(circleBody, true);
			Matter.Body.setStatic(squareBody, true);
			Matter.Body.setStatic(triangleBody, true);
			dormant = new Set([circleBody, squareBody, triangleBody]);

			// Setup the mouse interaction
			mouse = Mouse.create(p5.drawingContext.canvas as HTMLCanvasElement);
			mouse.pixelRatio = p5.pixelDensity();

			mouseConstraint = MouseConstraint.create(engine, {
			    mouse,
				constraint: {
                stiffness: 0.1, // lower = floatier drag, higher = snappier
                render: { visible: false } // you aren't using Matter's renderer
				}
			});

			Events.on(mouseConstraint, 'mousedown', (e) => {
                const hit = Query.point([...dormant], e.mouse.position)[0];
                if (hit) {
                    Matter.Body.setStatic(hit, false);
                    dormant.delete(hit);
                }
			});

			Composite.add(engine.world, [circleBody, squareBody, triangleBody, mouseConstraint]);
			buildWalls();

		};

		p5.windowResized = () => {
			p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
			buildWalls();
		};

		// Update the shape to fit matter
		function drawShape(body: Body, shape: Drawable) {
		    const { x, y } = body.position;
            p5.push();
            p5.translate(x, y);
            p5.rotate(body.angle);
            rc.draw(shape);
            p5.pop();
		}

		// Hand-drawn callout inviting the user to drag the circle
		function drawDragHint() {
			// Hide the hint once the circle is no longer dormant
			if (!dormant.has(circleBody)) return;

			const { x, y } = circleBody.position;
			const angle = -Math.PI / 4;
			const cos = Math.cos(angle);
			const sin = Math.sin(angle);

			const tip = { x: x + cos * (radius + 16), y: y + sin * (radius + 16) };
			const tail = { x: x + cos * (radius + 160), y: y + sin * (radius + 160) };

			const lineOpts = { roughness: 1.4, stroke: 'black', strokeWidth: 2, seed: 7 };
			rc.line(tip.x, tip.y, tail.x, tail.y, lineOpts);

			// Arrow head
			const head = 18;
			const spread = 0.5;
			rc.line(
				tip.x,
				tip.y,
				tip.x + Math.cos(angle + spread) * head,
				tip.y + Math.sin(angle + spread) * head,
				lineOpts
			);
			rc.line(
				tip.x,
				tip.y,
				tip.x + Math.cos(angle - spread) * head,
				tip.y + Math.sin(angle - spread) * head,
				lineOpts
			);

			// Label
			p5.push();
			p5.noStroke();
			p5.fill(0);
			p5.textFont('Shadows Into Light');
			p5.textSize(30);
			p5.textAlign(p5.LEFT, p5.CENTER);
			p5.text('Drag me', tail.x + 10, tail.y);
			p5.pop();
		}

		// Continually updates the drawing
		p5.draw = () => {
		    // Keep the canvas transparent so the Grid behind it shows through
            p5.clear();

            // Move the engine forward, but cap the time by 33.3ms intervals
            Engine.update(engine, Math.min(p5.deltaTime, 1000 / 30));

            drawShape(circleBody, circleShape);
            drawShape(squareBody, squareShape);
            drawShape(triangleBody, triangleShape);

            drawDragHint();



            // Check the cursor
            const over = Query.point([...dormant], mouse.position).length > 0;
            p5.cursor(over ? 'pointer' : 'default');
            p5.cursor(mouseConstraint.body ? 'grabbing' : 'default');
		};
	};
</script>

<div class="absolute inset-0 z-10">
    <P5 {sketch} />
</div>

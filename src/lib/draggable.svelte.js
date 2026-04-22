import { onMount } from 'svelte';

export function createDraggable({ radius = 100 } = {}) {
	let dragging = $state(false);
	let offsetX = $state(0);
	let offsetY = $state(0);
	let startX = $state(0);
	let startY = $state(0);
	let originPx = $state({ x: 0, y: 0 });
	let shapeEl = $state(null);
	let svgEl = $state(null);
	let animFrame;

	onMount(() => {
		setTimeout(() => {
			const shapeRect = shapeEl.getBoundingClientRect();
			const svgRect = svgEl.getBoundingClientRect();
			originPx = {
				x: shapeRect.left + shapeRect.width / 2 - svgRect.left,
				y: shapeRect.top + shapeRect.height / 2 - svgRect.top
			};
		}, 0);
	});

	function onPointerDown(e) {
		dragging = true;
		document.body.classList.add('select-none');
		startX = e.clientX - offsetX;
		startY = e.clientY - offsetY;
		window.addEventListener('pointermove', onPointerMove);
		window.addEventListener('pointerup', onPointerUp);
	}

	function onPointerMove(e) {
		if (!dragging) return;
		const x = e.clientX - startX;
		const y = e.clientY - startY;
		const dist = Math.hypot(x, y);
		if (dist > radius) {
			const angle = Math.atan2(y, x);
			offsetX = Math.cos(angle) * radius;
			offsetY = Math.sin(angle) * radius;
		} else {
			offsetX = x;
			offsetY = y;
		}
	}

	function onPointerUp() {
		dragging = false;
		document.body.classList.remove('select-none');
		springBack();
		window.removeEventListener('pointermove', onPointerMove);
		window.removeEventListener('pointerup', onPointerUp);
	}

	function springBack() {
		cancelAnimationFrame(animFrame);
		function step() {
			offsetX = offsetX + (0 - offsetX) * 0.15;
			offsetY = offsetY + (0 - offsetY) * 0.15;
			if (Math.abs(offsetX) > 0.01 || Math.abs(offsetY) > 0.01) {
				animFrame = requestAnimationFrame(step);
			} else {
				offsetX = 0;
				offsetY = 0;
			}
		}
		animFrame = requestAnimationFrame(step);
	}

	return {
		get dragging() {
			return dragging;
		},
		get offsetX() {
			return offsetX;
		},
		get offsetY() {
			return offsetY;
		},
		get originPx() {
			return originPx;
		},
		get shapeEl() {
			return shapeEl;
		},
		set shapeEl(v) {
			shapeEl = v;
		},
		get svgEl() {
			return svgEl;
		},
		set svgEl(v) {
			svgEl = v;
		},
		onPointerDown
	};
}

/**
 * POWERHOUSE GYM - DOWNTOWN MIAMI
 * Interactive 3D Gym Object (Olympic Hex Dumbbell) Engine
 * Rendered using Three.js with High-Specular Studio Lighting
 */

(function () {
  let scene, camera, renderer, dumbbellGroup, particles;
  let targetRotationX = 0;
  let targetRotationY = 0;
  let currentRotationX = 0;
  let currentRotationY = 0;
  let isDragging = false;
  let previousMousePosition = { x: 0, y: 0 };
  let canvas, container;

  function init() {
    canvas = document.getElementById('hero3dCanvas');
    container = document.getElementById('hero3dWrapper');
    if (!canvas || !container || typeof THREE === 'undefined') return;

    const width = container.clientWidth || 480;
    const height = container.clientHeight || 480;

    // 1. Scene
    scene = new THREE.Scene();

    // 2. Camera
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 14);

    // 3. Renderer
    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    // 4. Studio Lighting (High-Contrast Monochrome Specular)
    setupLighting();

    // 5. Procedural Olympic Dumbbell Model
    createOlympicDumbbell();

    // 6. Ambient Floating Dust Particles
    createFloatingParticles();

    // 7. Event Listeners
    setupInteractions();

    // 8. Start Animation Loop
    animate();

    window.addEventListener('resize', onWindowResize);
  }

  function setupLighting() {
    // Soft Ambient Base
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Main Studio Key Light (Pure White)
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
    keyLight.position.set(8, 12, 10);
    scene.add(keyLight);

    // Sharp Silver Rim Light (Highlights silhouette)
    const rimLight = new THREE.DirectionalLight(0xffffff, 3.2);
    rimLight.position.set(-10, -5, -8);
    scene.add(rimLight);

    // Top Overhead Light
    const topLight = new THREE.PointLight(0xffffff, 1.8, 50);
    topLight.position.set(0, 10, 5);
    scene.add(topLight);

    // Subtle Under-Glow Fill
    const underLight = new THREE.PointLight(0xffffff, 0.8, 30);
    underLight.position.set(0, -8, 2);
    scene.add(underLight);
  }

  function createOlympicDumbbell() {
    dumbbellGroup = new THREE.Group();

    // Material 1: Polished Knurled Chrome Steel (Handle & Accents)
    const chromeMaterial = new THREE.MeshStandardMaterial({
      color: 0xf5f5f7,
      metalness: 0.96,
      roughness: 0.18,
      envMapIntensity: 1.5
    });

    // Material 2: Matte Obsidian Cast Iron (Hex Plates)
    const castIronMaterial = new THREE.MeshStandardMaterial({
      color: 0x141416,
      metalness: 0.82,
      roughness: 0.35
    });

    // Material 3: Brushed Steel Trim Rings
    const trimMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4d4d8,
      metalness: 0.92,
      roughness: 0.22
    });

    // --- Center Steel Handle with Knurled Rings ---
    const handleLength = 5.2;
    const handleRadius = 0.4;
    const handleGeo = new THREE.CylinderGeometry(handleRadius, handleRadius, handleLength, 32);
    const handle = new THREE.Mesh(handleGeo, chromeMaterial);
    handle.rotation.z = Math.PI / 2;
    dumbbellGroup.add(handle);

    // Knurling Grips (Grooved Rings)
    const ringCount = 14;
    for (let i = 0; i < ringCount; i++) {
      const ringGeo = new THREE.TorusGeometry(handleRadius + 0.02, 0.025, 12, 32);
      const ring = new THREE.Mesh(ringGeo, trimMaterial);
      ring.position.x = -1.8 + (i * 0.28);
      ring.rotation.y = Math.PI / 2;
      dumbbellGroup.add(ring);
    }

    // --- Collar Rings on both inner sides ---
    [-2.2, 2.2].forEach(posX => {
      const collarGeo = new THREE.CylinderGeometry(0.72, 0.72, 0.3, 32);
      const collar = new THREE.Mesh(collarGeo, chromeMaterial);
      collar.rotation.z = Math.PI / 2;
      collar.position.x = posX;
      dumbbellGroup.add(collar);
    });

    // --- Hexagonal Weight Heads (Left & Right) ---
    function createHexHead(posX, isFlipped) {
      const headGroup = new THREE.Group();
      headGroup.position.x = posX;

      // Base Hex Plate (6-sided cylinder)
      const hexGeo = new THREE.CylinderGeometry(1.9, 1.9, 1.4, 6);
      const hexPlate = new THREE.Mesh(hexGeo, castIronMaterial);
      hexPlate.rotation.z = Math.PI / 2;
      hexPlate.rotation.y = Math.PI / 6;
      headGroup.add(hexPlate);

      // Outer Beveled Tier
      const bevelGeo = new THREE.CylinderGeometry(1.65, 1.9, 0.4, 6);
      const bevelPlate = new THREE.Mesh(bevelGeo, castIronMaterial);
      bevelPlate.rotation.z = Math.PI / 2;
      bevelPlate.rotation.y = Math.PI / 6;
      bevelPlate.position.x = isFlipped ? 0.8 : -0.8;
      headGroup.add(bevelPlate);

      // Chrome Endcap Badge
      const capGeo = new THREE.CylinderGeometry(0.85, 0.85, 0.1, 32);
      const cap = new THREE.Mesh(capGeo, chromeMaterial);
      cap.rotation.z = Math.PI / 2;
      cap.position.x = isFlipped ? 1.05 : -1.05;
      headGroup.add(cap);

      // Steel Bolt Center
      const boltGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.25, 6);
      const bolt = new THREE.Mesh(boltGeo, trimMaterial);
      bolt.rotation.z = Math.PI / 2;
      bolt.position.x = isFlipped ? 1.15 : -1.15;
      headGroup.add(bolt);

      // Inner Accent Rim
      const innerRimGeo = new THREE.TorusGeometry(1.65, 0.05, 12, 6);
      const innerRim = new THREE.Mesh(innerRimGeo, trimMaterial);
      innerRim.position.x = isFlipped ? 0.7 : -0.7;
      innerRim.rotation.y = Math.PI / 2;
      innerRim.rotation.z = Math.PI / 6;
      headGroup.add(innerRim);

      return headGroup;
    }

    dumbbellGroup.add(createHexHead(-3.2, false));
    dumbbellGroup.add(createHexHead(3.2, true));

    // Initial cinematic tilt
    dumbbellGroup.rotation.z = THREE.MathUtils.degToRad(-22);
    dumbbellGroup.rotation.x = THREE.MathUtils.degToRad(18);
    dumbbellGroup.rotation.y = THREE.MathUtils.degToRad(35);

    scene.add(dumbbellGroup);
  }

  function createFloatingParticles() {
    const particleCount = 45;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 16;
      positions[i + 1] = (Math.random() - 0.5) * 12;
      positions[i + 2] = (Math.random() - 0.5) * 10;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.08,
      transparent: true,
      opacity: 0.45
    });

    particles = new THREE.Points(geometry, material);
    scene.add(particles);
  }

  function setupInteractions() {
    // Mouse Drag on Canvas
    canvas.addEventListener('mousedown', (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mousemove', (e) => {
      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        targetRotationY += deltaX * 0.008;
        targetRotationX += deltaY * 0.008;

        previousMousePosition = { x: e.clientX, y: e.clientY };
      } else {
        // Smooth Cursor Following Tilt
        const rect = container.getBoundingClientRect();
        const mouseX = (e.clientX - (rect.left + rect.width / 2)) / (window.innerWidth / 2);
        const mouseY = (e.clientY - (rect.top + rect.height / 2)) / (window.innerHeight / 2);

        targetRotationY = mouseX * 0.75;
        targetRotationX = mouseY * 0.5;
      }
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    // Touch Support for Mobile
    canvas.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (isDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - previousMousePosition.x;
        const deltaY = e.touches[0].clientY - previousMousePosition.y;

        targetRotationY += deltaX * 0.01;
        targetRotationX += deltaY * 0.01;

        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    }, { passive: true });

    window.addEventListener('touchend', () => {
      isDragging = false;
    });
  }

  function onWindowResize() {
    if (!container || !camera || !renderer) return;
    const width = container.clientWidth || 480;
    const height = container.clientHeight || 480;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  let clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);

    const elapsedTime = clock.getElapsedTime();

    if (dumbbellGroup) {
      // 1. Idle Sinusoidal Floating Levitation
      dumbbellGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.35;

      // 2. Slow Ambient 360 Rotation
      if (!isDragging) {
        dumbbellGroup.rotation.y += 0.003;
      }

      // 3. Smooth Damping to Target Cursor Rotation
      currentRotationX += (targetRotationX - currentRotationX) * 0.06;
      currentRotationY += (targetRotationY - currentRotationY) * 0.06;

      dumbbellGroup.rotation.x = THREE.MathUtils.degToRad(18) + currentRotationX;
      dumbbellGroup.rotation.y += currentRotationY * 0.03;
    }

    // Ambient floating particles drift
    if (particles) {
      particles.rotation.y = elapsedTime * 0.03;
      particles.rotation.x = Math.sin(elapsedTime * 0.02) * 0.05;
    }

    renderer.render(scene, camera);
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

<script>
  /**
   * @type {{ slides: Array<{ src: string, alt: string, caption: string, description: string, width: number, height: number }> }}
   */
  let { slides } = $props();

  let current = $state(0);
  let touchStartX = $state(0);
  let touchEndX = $state(0);

  function next() {
    current = (current + 1) % slides.length;
  }

  function prev() {
    current = (current - 1 + slides.length) % slides.length;
  }

  function goTo(index) {
    current = index;
  }

  function handleKeydown(e) {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  }

  function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
  }

  function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  }
</script>

<div
  class="relative w-full max-w-4xl mx-auto"
  role="toolbar"
  aria-label="Screenshot carousel"
  aria-roledescription="carousel"
  tabindex="0"
  onkeydown={handleKeydown}
  ontouchstart={handleTouchStart}
  ontouchend={handleTouchEnd}
>
  <!-- Slide Container + Arrows (arrows anchored to image area) -->
  <div
    class="relative overflow-hidden rounded-xl border border-surface-200 dark:border-surface-700 shadow-sm"
  >
    <div
      class="flex transition-transform duration-500 ease-in-out"
      style="transform: translateX(-{current * 100}%)"
    >
      {#each slides as slide, i}
        <div
          class="w-full shrink-0"
          role="group"
          aria-roledescription="slide"
          aria-label="{slide.caption} — {slide.description} (slide {i +
            1} of {slides.length})"
        >
          <img
            src={slide.src}
            alt={slide.alt}
            width={slide.width}
            height={slide.height}
            class="w-full h-auto"
            loading="lazy"
            decoding="async"
          />
        </div>
      {/each}
    </div>

    <!-- Previous / Next Buttons (inside image container so they stay centered on the image) -->
    <button
      onclick={prev}
      class="absolute top-1/2 left-2 sm:left-3 -translate-y-1/2 bg-white/80 dark:bg-surface-800/80 backdrop-blur-sm text-surface-700 dark:text-surface-200 rounded-full p-2 shadow-md hover:bg-white dark:hover:bg-surface-700 transition-colors cursor-pointer"
      aria-label="Previous slide"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>

    <button
      onclick={next}
      class="absolute top-1/2 right-2 sm:right-3 -translate-y-1/2 bg-white/80 dark:bg-surface-800/80 backdrop-blur-sm text-surface-700 dark:text-surface-200 rounded-full p-2 shadow-md hover:bg-white dark:hover:bg-surface-700 transition-colors cursor-pointer"
      aria-label="Next slide"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>

  <!-- Caption -->
  <div class="mt-4 text-center">
    <span class="font-semibold text-surface-900 dark:text-white"
      >{slides[current].caption}</span
    >
    <span class="text-surface-500 dark:text-surface-400">
      · {slides[current].description}</span
    >
  </div>

  <!-- Dot Indicators -->
  <div class="flex justify-center gap-2 mt-4">
    {#each slides as _, i}
      <button
        onclick={() => goTo(i)}
        class="w-2.5 h-2.5 rounded-full transition-colors cursor-pointer {i ===
        current
          ? 'bg-primary-500'
          : 'bg-surface-300 dark:bg-surface-600 hover:bg-surface-400 dark:hover:bg-surface-500'}"
        aria-label="Go to slide {i + 1}"
        aria-current={i === current ? "true" : undefined}
      ></button>
    {/each}
  </div>
</div>

import { extendTailwindMerge } from 'tailwind-merge';

// Create a custom instance of Tailwind Merge with the desired configuration as a singleton
const twMerge = extendTailwindMerge({
  prefix: 'tw',
});

// Export the `twMerge` function that merges classes
export { twMerge };

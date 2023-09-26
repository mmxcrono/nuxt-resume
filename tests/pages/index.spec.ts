import { describe, test, expect } from 'vitest';
import { setup, $fetch } from '@nuxt/test-utils';

describe('Index Tests', async () => {
  await setup({});

  test('My Resume text should appear', async () => {
    const html = await $fetch('/');

    expect(html).toContain('My Resume');
  });
});

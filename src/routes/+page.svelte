<script lang="ts">
    import { getContext } from 'svelte';
    import Score from '../components/Score.svelte';
    import Chakram from '../components/Chakram.svelte';
    import type { DinarContextStore } from '../contexts/DinarContext.svelte';
    import type { LevelContextStore } from '../contexts/LevelContext.svelte';
    import Shop from '../components/shop/Shop.svelte';

    const dinars: DinarContextStore = getContext('DinarStore');
    const level: LevelContextStore = getContext('LevelStore');

    dinars.subscribe((value) => {
        const newLevel = Math.floor(Math.log2(value / 10) + 1);
        if (newLevel > $level && newLevel !== $level) {
            $level = newLevel;
        }
    });
</script>

<div class="m-12">
    <div class="absolute top-25 right-50 text-5xl leading-normal"><Score /></div>
    <div class="absolute top-0 -left-1/4 flex h-full w-full items-center justify-center">
        <Chakram />
    </div>
    {#if $level >= 2}
        <Shop />
    {/if}
</div>

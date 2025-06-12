<script lang="ts">
    import { getContext } from 'svelte';
    import Score from '../components/Score.svelte';
    import Chakram from '../components/Chakram.svelte';
    import Salmoneus from '../components/Salmoneus.svelte';
    import Scroll from '../components/Scroll.svelte';
    import type { DinarContextStore } from '../contexts/DinarContext.svelte';

    const dinars: DinarContextStore = getContext('DinarStore');

    let maxDinars = $dinars;

    dinars.subscribe((value) => {
        if (value > maxDinars) {
            maxDinars = value;
        }
    });
</script>

<div class="m-12">
    <div class="absolute top-25 right-50 text-5xl leading-normal"><Score /></div>
    <div class="absolute top-0 -left-1/4 flex h-full w-full items-center justify-center">
        <Chakram />
    </div>
    <div class="absolute right-1/8 bottom-5">
        <Scroll />
    </div>
    {#if maxDinars > 20}
        <div class="absolute -right-5 -bottom-5 max-h-60 max-w-60 scale-x-[-1] rotate-340">
            <Salmoneus />
        </div>
    {/if}
</div>

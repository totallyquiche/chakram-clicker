<script lang="ts">
    import { getContext } from 'svelte';
    import type { DinarContextStore } from '../contexts/DinarContext.svelte';
    import type { GrowthRateContextStore } from '../contexts/GrowthRateContext.svelte';

    const dinars: DinarContextStore = getContext('DinarStore');
    const growthRate: GrowthRateContextStore = getContext('GrowthRateStore');

    const handleClick = () => {
        const points = Math.ceil(1 * $growthRate);

        $dinars += points;
    };
</script>

<div>
    <button
        class="h-32 w-32 transition-all duration-100 hover:scale-110 active:scale-95"
        on:click={handleClick}
    >
        <img
            src="/chakram.png"
            width="560"
            height="553"
            alt="Xena's fabled weapon, the Chakram, a circular metal throwing blade painted with a simple pattern."
        />
    </button>
</div>

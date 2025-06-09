<script lang="ts">
    import { getContext } from 'svelte';
    import type { DinarContextStore } from '../contexts/DinarContext.svelte';
    import type { GrowthRateContextStore } from '../contexts/GrowthRateContext.svelte';
    import PointsGained from './PointsGained.svelte';

    const dinars: DinarContextStore = getContext('DinarStore');
    const growthRate: GrowthRateContextStore = getContext('GrowthRateStore');

    let pointsGainedInstances: { points: number; id: number }[] = [];
    let nextId = 0;

    const handleClick = () => {
        const points = Math.ceil(1 * $growthRate);
        $dinars += points;
        pointsGainedInstances = [...pointsGainedInstances, { points, id: nextId++ }];

        setTimeout(() => {
            pointsGainedInstances = pointsGainedInstances.filter(
                (instance) => instance.id !== nextId
            );
        }, 1000);
    };
</script>

<div class="relative">
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
    {#each pointsGainedInstances as instance (instance.id)}
        <PointsGained points={instance.points} />
    {/each}
</div>

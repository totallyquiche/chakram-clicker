<script lang="ts">
    import { getContext } from 'svelte';
    import type { DinarContextStore } from '../contexts/DinarContext.svelte';
    import type { GrowthRateContextStore } from '../contexts/GrowthRateContext.svelte';
    import PointsGained from './PointsGained.svelte';

    const dinars: DinarContextStore = getContext('DinarStore');
    const growthRate: GrowthRateContextStore = getContext('GrowthRateStore');

    let pointsGainedInstances: { points: number; id: number }[] = [];
    let nextId = 0;

    $: console.log($growthRate);

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
    <button class="h-24 w-24" on:click={handleClick}>
        <img
            src="/chakram.png"
            width="560"
            height="553"
            alt="Xena's fabled weapon, the Chakram, a circular metal throwing blade painted with a simple pattern."
        />
    </button>
    {#each pointsGainedInstances as instance (instance.id)}
        <div class="animate-float absolute top-0 left-0">
            <PointsGained points={instance.points} />
        </div>
    {/each}
</div>

<style>
    .animate-float {
        animation: float 1s ease-out forwards;
    }

    @keyframes float {
        0% {
            transform: translateY(0);
            opacity: 1;
        }
        100% {
            transform: translateY(-20px);
            opacity: 0;
        }
    }
</style>

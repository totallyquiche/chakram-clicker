<script lang="ts">
    import { getContext, onMount } from 'svelte';
    import type { DinarContextStore } from '../../../contexts/DinarContext.svelte';
    import type { GrowthRateContextStore } from '../../../contexts/GrowthRateContext.svelte';

    const dinars: DinarContextStore = getContext('DinarStore');
    const growthRate: GrowthRateContextStore = getContext('GrowthRateStore');

    const maxLevel = 10;

    let level = $state(0);
    let levelUpCost = $state(200);
    let levelUpCostRounded = $derived(Math.round(levelUpCost / 100) * 100);
    let disabled = $state(true);
    let audio: HTMLAudioElement;

    $effect(() => {
        disabled = levelUpCostRounded > $dinars || level >= maxLevel;
    });

    const playAudio = () => {
        if (audio) {
            audio.play();
        }
    };

    const levelUp = () => {
        playAudio();
        $dinars -= levelUpCostRounded;
        level++;
        levelUpCost *= 1.15;
        $growthRate *= 1.015;
    };

    const tick = () => {
        setTimeout(() => {
            if (level > 0) {
                $dinars += 10 * level * $growthRate;
            }
            tick();
        }, 10000 / level);
    };

    onMount(() => {
        tick();
    });
</script>

<div class="flex flex-col items-center">
    <audio src="/salmoneus-mmm.mp3" preload="auto" bind:this={audio}></audio>

    <button
        class="transition-ping flex max-w-20 items-center justify-center rounded-full {disabled
            ? 'text-slate-500 grayscale'
            : 'hover:scale-110 hover:cursor-pointer active:scale-95'}"
        onclick={levelUp}
        {disabled}
    >
        <span class="absolute pt-4 text-xl">{level}</span>
        <img src="/chakram.png" alt="Chakram" class="h-full w-full" />
    </button>

    <div
        class="mt-2 {disabled ? 'text-slate-500 grayscale' : ''} {level >= maxLevel
            ? 'invisible'
            : 'visible'}"
    >
        𐆖 {levelUpCostRounded}
    </div>
</div>

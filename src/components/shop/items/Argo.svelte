<script lang="ts">
    import type { DinarContextStore } from '../../../contexts/DinarContext.svelte';
    import { getContext } from 'svelte';
    const dinars: DinarContextStore = getContext('DinarStore');

    const maxLevel = 5;

    let level = $state(0);
    let levelUpCost = $state(500);
    let levelUpCostRounded = $derived(Math.round(levelUpCost / 100) * 100);
    let disabled = $derived(levelUpCostRounded > $dinars || level >= maxLevel);

    let audio: HTMLAudioElement;

    const playAudio = () => {
        if (audio) {
            audio.play();
        }
    };

    const onClick = () => {
        if (disabled) return;

        playAudio();
        level++;
        levelUpCost = levelUpCost * 1.5;
        levelUpCostRounded = Math.round(levelUpCost / 100) * 100;
    };
</script>

<div class="flex flex-col items-center">
    <audio src="/nobody-touches-argo.mp3" preload="auto" bind:this={audio}></audio>

    <button
        class="transition-ping flex h-20 max-w-20 items-center justify-center rounded-md {disabled
            ? 'text-slate-500 grayscale'
            : 'hover:scale-110 hover:cursor-pointer active:scale-95'}"
        onclick={onClick}
        {disabled}
    >
        <span class="absolute pt-4 text-xl {level >= maxLevel ? 'hidden' : ''}">{level}</span>
        <img
            src="/argo.png"
            alt="A cut-out of Xena's horse Argo rearing up in profile view"
            class="h-full w-full"
        />
    </button>

    <div class="mt-2 {disabled ? 'text-slate-500 grayscale' : ''}">
        {level < maxLevel ? `𐆖 ${levelUpCostRounded}` : 'Max'}
    </div>
</div>

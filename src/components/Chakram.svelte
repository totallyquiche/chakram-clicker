<script lang="ts">
    import { getContext } from 'svelte';
    import type { DinarContextStore } from '../contexts/DinarContext.svelte';
    import type { GrowthRateContextStore } from '../contexts/GrowthRateContext.svelte';
    import Dinar from './Dinar.svelte';

    const dinars: DinarContextStore = getContext('DinarStore');
    const growthRate: GrowthRateContextStore = getContext('GrowthRateStore');

    let coinCount = 0;

    interface CoinData {
        id: number;
        variant: number;
        angle: number;
        distance: number;
        xJitter: number;
        yJitter: number;
    }

    const coins: CoinData[] = $state([]);

    const createCoin = (): CoinData => {
        return {
            id: coinCount++,
            variant: Math.floor(Math.random() * 5) + 1,
            angle: Math.random() * 360,
            distance: 300 + Math.random() * 100,
            xJitter:
                Math.random() * Math.min(coins.length * 3, 30) * (Math.random() > 0.5 ? 1 : -1),
            yJitter: Math.random() * Math.min(coins.length * 3, 30) * (Math.random() > 0.5 ? 1 : -1)
        };
    };

    const addCoin = () => {
        const newCoin = createCoin();

        coins.push(newCoin);

        setTimeout(() => {
            coins.splice(
                coins.findIndex((c) => c.id === newCoin.id),
                1
            );
        }, 2000);
    };

    let audio: HTMLAudioElement;

    const playAudio = () => {
        if (audio) {
            audio.currentTime = 0;
            audio.play();
        }
    };

    const handleClick = () => {
        playAudio();

        const points = Math.ceil(1 * $growthRate);
        $dinars += points;

        for (let i = 0; i < Math.min(points, 50); i++) {
            addCoin();
        }
    };
</script>

<div class="relative h-72 w-72">
    <audio src="/chakram-hit.mp3" preload="auto" bind:this={audio}></audio>

    {#each coins as coin (coin.id)}
        <div
            class="animate-coin-fly absolute top-1/2 left-1/2 max-h-1/5 max-w-1/5"
            style="--fly-angle: {coin.angle}deg; --fly-distance: {coin.distance}px; --fly-x-jitter: {coin.xJitter}px; --fly-y-jitter: {coin.yJitter}px;"
        >
            <Dinar variant={coin.variant} />
        </div>
    {/each}
    <button
        class="spin h-72 w-72 rounded-full transition-all hover:scale-110 hover:cursor-grab active:scale-95"
        onclick={handleClick}
    >
        <img
            src="/chakram.png"
            width="560"
            height="553"
            alt="Xena's fabled weapon, the Chakram, a circular metal throwing blade painted with a simple pattern."
        />
    </button>
</div>

<style>
    @keyframes coin-fly {
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
            transform: translate(
                    calc(
                        -50% + calc(cos(var(--fly-angle)) * var(--fly-distance)) +
                            var(--fly-x-jitter)
                    ),
                    calc(
                        -50% + calc(sin(var(--fly-angle)) * var(--fly-distance)) +
                            var(--fly-y-jitter)
                    )
                )
                rotate(360deg);
        }
    }

    .animate-coin-fly {
        transform: translate(calc(-50% + var(--fly-x-jitter)), calc(-50% + var(--fly-y-jitter)));
        animation: coin-fly 5s cubic-bezier(0.2, 0.5, 0, 4) forwards;
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    }

    .spin {
        animation: spin 10s linear infinite;
    }
</style>

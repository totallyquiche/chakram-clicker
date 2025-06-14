<script lang="ts">
    import { getContext, onMount } from 'svelte';
    import type { PendingClickCountContextStore } from '../../../contexts/PendingClickCountContext.svelte';

    let level = $state(0);

    const pendingClickCount: PendingClickCountContextStore = getContext('PendingClickCountStore');

    const tick = () => {
        setTimeout(() => {
            if (level > 0) {
                $pendingClickCount++;
            }
            tick();
        }, 10000 / level);
    };

    onMount(() => {
        tick();
    });
</script>

<button
    class="flex items-center justify-center rounded-full transition-all hover:scale-110 hover:cursor-pointer active:scale-95"
    onclick={() => level++}
>
    <span class="absolute pt-4 text-xl">{level}</span>
    <img src="/chakram.png" alt="Chakram" class="h-full w-full" />
</button>

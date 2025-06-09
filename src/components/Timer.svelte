<script lang="ts">
    import { getContext } from 'svelte';
    import type { TimeContextStore } from '../contexts/TimeContext.svelte';

    const time: TimeContextStore = getContext('TimeStore');

    setInterval(() => {
        $time++;
    }, 1000);
</script>

<span>{$time} seconds</span>

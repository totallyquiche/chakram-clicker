<script module lang="ts">
    import { writable } from 'svelte/store';
    import type { TimeContextStore } from '../contexts/TimeContext.svelte';

    const TimeStore: TimeContextStore = writable(0);

    export { TimeStore };
</script>

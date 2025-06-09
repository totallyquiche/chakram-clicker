<script module lang="ts">
    import type { Writable } from 'svelte/store';

    export type TimeContextStore = Writable<number>;
</script>

<script lang="ts">
    import { setContext } from 'svelte';
    import { TimeStore } from '../stores/TimeStore.svelte';

    const TimeContext: TimeContextStore = setContext('TimeStore', TimeStore);

    export { TimeContext };

    const { children } = $props();
</script>

{@render children()}

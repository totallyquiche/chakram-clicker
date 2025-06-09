<script module lang="ts">
    import type { Writable } from 'svelte/store';

    export type TimeContextStore = Writable<number>;
</script>

<script lang="ts">
    import { setContext } from 'svelte';
    import TimeStore from '../stores/TimeStore';

    const TimeContext: TimeContextStore = setContext('TimeStore', TimeStore);

    setInterval(() => {
        $TimeContext++;
    }, 1000);

    export { TimeContext };

    const { children } = $props();
</script>

{@render children()}

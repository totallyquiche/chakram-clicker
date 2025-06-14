<script module lang="ts">
    import type { Writable } from 'svelte/store';

    export type PendingClickCountContextStore = Writable<number>;
</script>

<script lang="ts">
    import { setContext } from 'svelte';
    import PendingClickCountStore from '../stores/PendingClickCountStore';

    const PendingClickCountContext: PendingClickCountContextStore = setContext(
        'PendingClickCountStore',
        PendingClickCountStore
    );
    const { children } = $props();

    export { PendingClickCountContext };
</script>

{@render children()}

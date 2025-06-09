<script module lang="ts">
    import type { Writable } from 'svelte/store';

    export type DebugContextStore = Writable<{
        dinar?: number;
        growthRate?: number;
        time?: number;
    }>;
</script>

<script lang="ts">
    import { setContext } from 'svelte';
    import DebugStore from '../stores/DebugStore';

    const DebugContext: DebugContextStore = setContext('DebugStore', DebugStore);

    const { children } = $props();

    export { DebugContext };
</script>

{@render children()}

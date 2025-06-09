<script module lang="ts">
    import type { Writable } from 'svelte/store';

    export type GrowthRateContextStore = Writable<number>;
</script>

<script lang="ts">
    import { setContext } from 'svelte';
    import GrowthRateStore from '../stores/GrowthRateStore';

    const GrowthRateContext: GrowthRateContextStore = setContext(
        'GrowthRateStore',
        GrowthRateStore
    );
    const { children } = $props();

    export { GrowthRateContext };
</script>

{@render children()}

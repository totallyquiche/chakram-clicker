<script module lang="ts">
    import type { Writable } from 'svelte/store';

    export type LevelContextStore = Writable<number>;
</script>

<script lang="ts">
    import { setContext } from 'svelte';
    import LevelStore from '../stores/LevelStore';

    const LevelContext: LevelContextStore = setContext('LevelStore', LevelStore);
    const { children } = $props();

    export { LevelContext };
</script>

{@render children()}

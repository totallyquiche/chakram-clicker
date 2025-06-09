<script module lang="ts">
    import type { Writable } from 'svelte/store';

    export type DinarContextStore = Writable<number>;
</script>

<script lang="ts">
    import { setContext } from 'svelte';
    import DinarStore from '../stores/DinarStore';

    const DinarContext: DinarContextStore = setContext('DinarStore', DinarStore);

    export { DinarContext };

    const { children } = $props();
</script>

{@render children()}

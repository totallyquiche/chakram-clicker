<script module lang="ts">
    export interface ChakramContext {
        onClick: () => void;
    }
</script>

<script lang="ts">
    import { setContext } from 'svelte';

    let onClick = $state<ChakramContext['onClick']>(() => {});

    const { children } = $props();

    const ChakramContext: ChakramContext = setContext('ChakramContext', {
        onClick: () => onClick
    });

    export { ChakramContext };
</script>

{@render children()}

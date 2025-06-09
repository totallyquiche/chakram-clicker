<script lang="ts">
    import '../app.css';

    import DebugContext from '../contexts/DebugContext.svelte';
    import TimeContext from '../contexts/TimeContext.svelte';
    import DinarContext from '../contexts/DinarContext.svelte';
    import GrowthRateContext from '../contexts/GrowthRateContext.svelte';

    let { children } = $props();
</script>

<DebugContext>
    <TimeContext>
        <GrowthRateContext>
            <DinarContext>
                {@render children()}
            </DinarContext>
        </GrowthRateContext>
    </TimeContext>
</DebugContext>

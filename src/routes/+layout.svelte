<script lang="ts">
    import '../app.css';

    import TimeContext from '../contexts/TimeContext.svelte';
    import DinarContext from '../contexts/DinarContext.svelte';
    import GrowthRateContext from '../contexts/GrowthRateContext.svelte';

    let { children } = $props();
</script>

<TimeContext>
    <GrowthRateContext>
        <DinarContext>
            {@render children()}
        </DinarContext>
    </GrowthRateContext>
</TimeContext>

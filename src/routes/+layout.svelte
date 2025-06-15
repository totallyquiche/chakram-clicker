<script lang="ts">
    import '../app.css';

    import TimeContext from '../contexts/TimeContext.svelte';
    import DinarContext from '../contexts/DinarContext.svelte';
    import GrowthRateContext from '../contexts/GrowthRateContext.svelte';
    import LevelContext from '../contexts/LevelContext.svelte';

    let { children } = $props();
</script>

<TimeContext>
    <GrowthRateContext>
        <LevelContext>
            <DinarContext>
                {@render children()}
            </DinarContext>
        </LevelContext>
    </GrowthRateContext>
</TimeContext>

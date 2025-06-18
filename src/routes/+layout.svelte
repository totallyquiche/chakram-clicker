<script lang="ts">
    import '../app.css';

    import TimeContext from '../contexts/TimeContext.svelte';
    import DinarContext from '../contexts/DinarContext.svelte';
    import GrowthRateContext from '../contexts/GrowthRateContext.svelte';
    import LevelContext from '../contexts/LevelContext.svelte';
    import ChakramContext from '../contexts/ChakramContext.svelte';

    let { children } = $props();
</script>

<TimeContext>
    <GrowthRateContext>
        <LevelContext>
            <DinarContext>
                <ChakramContext>
                    {@render children()}
                </ChakramContext>
            </DinarContext>
        </LevelContext>
    </GrowthRateContext>
</TimeContext>

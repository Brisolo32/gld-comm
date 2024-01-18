<script lang="ts">
    import "../css/User.scss"
    import { getUser, pb, authStore, followUser, unfollowUser } from "../scripts/Pocketbase";
    import { getGames } from "../scripts/SGDB";
    import { writable } from "svelte/store";
    import { onMount } from "svelte";
    import { convertIsoDate, convertDurationToHours } from "../scripts/DateConv"
    export let user: string | undefined = undefined;

    if (user === undefined) {
        location.href = "/404"
    }

    onMount(() => {
        pb.collection("users").authRefresh()
    })

    let games: any = writable([]);
    let avatar = writable("");
    let playedTime = writable(0);

    // @ts-ignore
    let data: any = getUser(user).then((u) => {
        let grid = getGames(u.games.map((game: { name: any; }) => game.name)).then((g) => {
            games.set(g);
        });

        const url = pb.files.getUrl(Object.assign({}, u), u.avatar, {
            thumb: "100x100",
        });

        avatar.set(url);

        // go through every game.playedTime and sum it up, playedTime is stored as Nd Nh Nm Ns, use Reduce
        let resTime: number[] = [];

        u.games.forEach((game: { playedTime: any; }) => {
            let time = convertDurationToHours(game.playedTime);
            
            if (time === undefined) return;
            resTime.push(time)
        });


        playedTime.set(resTime.reduce((a: number, b: number) => a + b, 0));

        return u;
    });
</script>

<div id="flex">
    {#if $games.length > 0}
        {#await data then user}
            <div id="user-page">
                <div id="header">
                    <div id="avatar">
                        <img src="{$avatar || "https://via.placeholder.com/200x200"}" alt="">

                        <span id=info>
                        <p>{user.displayName}</p>
                        
                        <p id="desc">
                            {user.description}
                        </p>
                        </span>
                   
                        {#if $authStore.isValid && 
                             $authStore.model?.id !== user.id &&
                             !$authStore.model?.following.includes(user.id)}
                            <button on:click={() => followUser(user.id)} id="follow">
                                Follow user
                            </button>

                        {:else if $authStore.isValid }
                            <button on:click={() => unfollowUser(user.id)} id="follow">
                                Unfollow user
                            </button>
                        {/if}
                    </div>
                </div>
            
                <div class="recent">
                    <span id="info">
                        <p>Recently played games</p>
                        <!-- loop through all games and get the total time played -->
                        <p id="time">{$playedTime} hours played in total</p>
                    </span>
                    <div id="games">
                        {#each user.games as game, i}
                            <div id="game">
                                <img src="{$games[i] || "https://via.placeholder.com/920x430"}" alt="game">
                            
                                <span id="info">
                                    <p>{game.name}</p>
                                    <p id="time">Time played: {convertDurationToHours(game.playedTime) + " hour(s)"} played</p>
                                    <p id="time">Last played: {convertIsoDate(game.LastPlayed) || "Never"}</p> 
                                </span>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        {/await}
    {:else}
        <h1>Loading...</h1>
    {/if}
</div>
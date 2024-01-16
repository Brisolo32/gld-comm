<script lang="ts">
    import "../css/User.scss"
    import { getUser, pb, authStore } from "../scripts/Pocketbase";
    import { getGames } from "../scripts/SGDB";
    import { writable } from "svelte/store";
    export let user: string | undefined = undefined;

    if (user === undefined) {
        location.href = "/404"
    }

    let games: any = writable([]);
    let avatar = writable("");

    // @ts-ignore
    let data: any = getUser(user).then((u) => {
        let grid = getGames(u.games.map((game: { name: any; }) => game.name)).then((g) => {
            games.set(g);
        });

        const url = pb.files.getUrl(Object.assign({}, u), u.avatar, {
            thumb: "100x100",
        });

        avatar.set(url);
        
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
                    
                    </div>
                </div>
            
                <div class="recent">
                    <span id="info">
                        <p>Recently played games</p>
                        <p id="time">420 hour(s) played in total</p>
                    </span>
                    <div id="games">
                        {#each user.games as game, i}
                            <div id="game">
                                <img src="{$games[i] || "https://via.placeholder.com/920x430"}" alt="game">
                            
                                <span id="info">
                                    <p>{game.name}</p>
                                    <p id="time">5 hour(s) played</p> 
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
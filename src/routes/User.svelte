<script lang="ts">
    import "../css/User.scss"

    export let user: string | undefined = undefined;
</script>

<div id="flex">
    <div id="user-page">
        <div id="header">
            <div id="avatar">
                <img src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20fill%3D%22none%22%20shape-rendering%3D%22auto%22%3E%3Cdesc%3E%22Shapes%22%20by%20%22Florian%20K%C3%B6rner%22%2C%20licensed%20under%20%22CC0%201.0%22.%20%2F%20Remix%20of%20the%20original.%20-%20Created%20with%20dicebear.com%3C%2Fdesc%3E%3Cmetadata%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%3E%3Cdc%3Atitle%3EShapes%3C%2Fdc%3Atitle%3E%3Cdc%3Acreator%3E%3Ccc%3AAgent%20rdf%3Aabout%3D%22https%3A%2F%2Fdicebear.com%22%3E%3Cdc%3Atitle%3EFlorian%20K%C3%B6rner%3C%2Fdc%3Atitle%3E%3C%2Fcc%3AAgent%3E%3C%2Fdc%3Acreator%3E%3Cdc%3Asource%3Ehttps%3A%2F%2Fdicebear.com%3C%2Fdc%3Asource%3E%3Ccc%3Alicense%20rdf%3Aresource%3D%22https%3A%2F%2Fcreativecommons.org%2Fpublicdomain%2Fzero%2F1.0%2F%22%20%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cmask%20id%3D%22viewboxMask%22%3E%3Crect%20width%3D%22100%22%20height%3D%22100%22%20rx%3D%220%22%20ry%3D%220%22%20x%3D%220%22%20y%3D%220%22%20fill%3D%22%23fff%22%20%2F%3E%3C%2Fmask%3E%3Cg%20mask%3D%22url(%23viewboxMask)%22%3E%3Crect%20fill%3D%22%230a5b83%22%20width%3D%22100%22%20height%3D%22100%22%20x%3D%220%22%20y%3D%220%22%20%2F%3E%3Cg%20transform%3D%22matrix(1.2%200%200%201.2%20-10%20-10)%22%3E%3Cg%20transform%3D%22translate(-44%2C%2044)%20rotate(160%2050%2050)%22%3E%3Cpath%20d%3D%22M0%200h100v100H0V0Z%22%20fill%3D%22%2369d2e7%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(.8%200%200%20.8%2010%2010)%22%3E%3Cg%20transform%3D%22translate(-5%2C%207)%20rotate(-173%2050%2050)%22%3E%3Cpath%20fill%3D%22%23f88c49%22%20d%3D%22M45-150h10v400H45z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(.4%200%200%20.4%2030%2030)%22%3E%3Cg%20transform%3D%22translate(-21%2C%205)%20rotate(19%2050%2050)%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M50%2090a40%2040%200%201%200%200-80%2040%2040%200%200%200%200%2080Zm0%2010A50%2050%200%201%200%2050%200a50%2050%200%200%200%200%20100Z%22%20fill%3D%22%231c799f%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="">
                
                <span id=info>
                <p>Brisolo32</p>
            
                <p id="desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                <div id="game">
                    <img src="https://cdn2.steamgriddb.com/thumb/65b3461f943a23e05ca825513771d699.jpg" alt="game">

                    <span id="info">
                        <p>Risk of Rain Returns</p>
                        <p id="time">5 hour(s) played</p> 
                    </span>
                </div>

                <div id="game">
                    <img src="https://cdn2.steamgriddb.com/thumb/e10a4f0eff07f3da92a0833ba0a6beb5.jpg" alt="game">
                        
                    <span id="info">
                        <p>Geometry Dash</p>
                        <p id="time">100 hour(s) played</p>
                    </span>
                </div>

                <div id="game">
                    <img src="https://cdn2.steamgriddb.com/thumb/c591470ed4e99b7ce764c33bfcde433f.jpg" alt="game">
                    
                    <span id="info">
                        <p>Power Bomberman</p>
                        <p id="time">10 hour(s) played</p>
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>
import "./site.css"

function Site(){
    return(<article id="home" a name="home">
    <div class="wrapper content">
        <h1>We&rsquo;ll be back soon!</h1>
        <p>
            If you need to you can always <a href="mailto:crealuxurymetaldecor@gmail.com">contact us</a>,
        </p>
        <p>
            Otherwise please leave us your email id and we will notify you!
        </p>
        <p class="team-crea">&mdash; Team CREA</p>

        <form action="/action_page.php">
            <input type="email" id="fname" name="emailId" placeholder="email"/>

            <input type="submit" value="Notify"/>
        </form>
    </div>
</article>);
}

export default Site;
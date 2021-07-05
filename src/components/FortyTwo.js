import React from "react";
import logo from "../assets/img/42logo.webp"

function FortyTwo() {
    return (
        <>
        <div class="fortytwo">
            <img alt="42" src={logo} width="150px" /><hr />
            <h3>Much ado about 42</h3><hr/>
            <h5>Week 1: 58hrs over 7 days</h5>
            <p>It's been a crazy week. First day in, I was deep in the first exercise: Shell_00 trying to work out how to decipher their ridiculously vague and cryptic requirements. I had done a bit of Unix/bash in the past, and I was fairly confident that I would pass this easily. Long story short, I failed spectacularly for numerous reasons that I will elaborate on later, and got marked 5/100.</p>
            <p>After spending time lamenting my foolishness, and considering how and when I would resubmit Shell_00, time was marching on. The word had gone out to discard Shell_00 for now, and to move on to C_00 - because Friday's four hour exam would be on C.</p>
            <h5>You can't spell CRY without C</h5>
            <p>Previous to this Piscine, I had done 6 months of JavaScript at the Uni Adelaide Coding Bootcamp; just to give you some loose idea of where my programming skill level is.<br/>
            I was happy to leave the flaming wreckage that was my Shell_00 for now, and get cracking with the first C exercises. Before I had a peek, I thought that I should famliarise myself with some of the basic functions C has to offer. I found <code>printf</code> and <code>sizeof</code> which I thought would serve me quite well.<br/>
            It turns out you can't use any of those things at 42. At least, not yet. We are currently allowed to use one function called <code>write()</code>. Though, I should add that you can use them to test your code if you wish, you just better make damn sure that they aren't in your code when you submit it.
            </p>
            <h5>Fatigue</h5>
            <p>I have more to write, but I really am tired; 60ish hours in a week is a lot of code. Sometimes it feels like my brain just won't work any more and I have to walk out for a decent half-hour break.<br/>
            The next post will have a bit more depth and detail.</p>
            <p>Shoutout to <code>man ascii</code>.</p>
        </div>
        </>
    )
}

export default FortyTwo;

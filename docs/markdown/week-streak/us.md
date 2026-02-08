# Weekly Commit Streak Leaderboard @ United States <img src="https://flagsapi.com/US/flat/24.png">

Users that have been contributing at least once a week for the longest time.

<table align="right">
	<tr>
		<td>
			Give a 🌟 to make this project gain visibility
		</td>
	</tr>
</table>

<table align="center">
	<tr>
		<td>
			<b>Other <img src="https://flagsapi.com/US/flat/16.png"> leaderboards</b>
		</td>
		<td>
			<a href="../contribution-count/us.md">
				Top Contributor
			</a>
		</td>
		<td>
			<a href="../day-streak/us.md">
				Daily Commit Streak
			</a>
		</td>
	</tr>
</table>

<details>
<summary>How is this leaderboard computed?</summary>

To be in this leaderboard, you need:

-   At least `250` followers
-   Have one of `usa,us,america,united states,new york,los angeles,chicago,houston,miami,san francisco,boston,seattle,dallas,washington` in your profile location. [Ask to add a city name if you think it's missing.](https://github.com/7PH/github-top-users/issues/new).
-   Be part of the first `1000` users based the ranking criteria

Here is the pseudocode generating this leaderboard:

```js
github
    .users
    .filter(user => user.followerCount > 250)
    .sortBy(user => getCurrentWeeklyCommitStreak(user), 'desc')
    .take(1000)
```

</details>

---


<table style="width: 100%">
    <thead>
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Company</th>
            <th>Location</th>
            <th>Followers</th>
            <th>Weekly Commit Streak</th>
        </tr>
    </thead>
    <tbody>
        <tr><td>🥇</td><td><a href="https://github.com/kentcdodds">
        <img src="https://avatars.githubusercontent.com/u/1500684?s=72&u=f35a28c4eead6ba9636a8ff5858f6977d8593c43&v=4" height="12" />
        <b>kentcdodds</b>
    </a></td><td>@epicweb-dev </td><td>Salt Lake City, Utah, USA</td><td>34.6K</td><td>529</td></tr><tr><td>🥈</td><td><a href="https://github.com/anvaka">
        <img src="https://avatars.githubusercontent.com/u/225407?s=72&u=ae5ab58bd50a325fdd0b8fa419f42f983a3f04ba&v=4" height="12" />
        <b>anvaka</b>
    </a></td><td>-</td><td>Seattle </td><td>5.48K</td><td>529</td></tr><tr><td>🥉</td><td><a href="https://github.com/mahmoud">
        <img src="https://avatars.githubusercontent.com/u/130193?s=72&u=87d388d2ceb804aabda330a5f81cf078a2342b03&v=4" height="12" />
        <b>mahmoud</b>
    </a></td><td>@hatnote</td><td>San Francisco, CA</td><td>2.44K</td><td>529</td></tr><tr><td>4</td><td><a href="https://github.com/eddelbuettel">
        <img src="https://avatars.githubusercontent.com/u/673121?s=72&u=0487fed564e4d06bc4d4800d38ae649a9a632951&v=4" height="12" />
        <b>eddelbuettel</b>
    </a></td><td>-</td><td>Chicago, IL, USA</td><td>1.93K</td><td>529</td></tr><tr><td>5</td><td><a href="https://github.com/tananaev">
        <img src="https://avatars.githubusercontent.com/u/1161863?s=72&v=4" height="12" />
        <b>tananaev</b>
    </a></td><td>@openai & @traccar </td><td>San Francisco Bay Area</td><td>1.75K</td><td>529</td></tr><tr><td>6</td><td><a href="https://github.com/kbroman">
        <img src="https://avatars.githubusercontent.com/u/53972?s=72&u=3f87e8b72f35bde7342672a1c0a1231e38c1c662&v=4" height="12" />
        <b>kbroman</b>
    </a></td><td>University of Wisconsin-Madison</td><td>Madison, Wisconsin, USA</td><td>1.47K</td><td>529</td></tr><tr><td>7</td><td><a href="https://github.com/wu-sheng">
        <img src="https://avatars.githubusercontent.com/u/5441976?s=72&u=81295cafac69af5a655b94b73e839f10e6e1657b&v=4" height="12" />
        <b>wu-sheng</b>
    </a></td><td>@apache  @tetrateio </td><td>Beijing & HK (China), SF(US)</td><td>3.34K</td><td>486</td></tr><tr><td>8</td><td><a href="https://github.com/ahmadawais">
        <img src="https://avatars.githubusercontent.com/u/960133?s=72&u=1a1a9863b2dd635be4ddfae7692060b0963c5c4b&v=4" height="12" />
        <b>ahmadawais</b>
    </a></td><td>Founder & CEO @CommandCodeAI, VP DevTools @Google gDAB GDE </td><td>San Francisco Bay Area</td><td>6.46K</td><td>478</td></tr><tr><td>9</td><td><a href="https://github.com/dfinke">
        <img src="https://avatars.githubusercontent.com/u/67258?s=72&u=8c683937be35b7b77b746155d329258e9a8ea3b9&v=4" height="12" />
        <b>dfinke</b>
    </a></td><td>-</td><td>New York City</td><td>1.44K</td><td>463</td></tr><tr><td>10</td><td><a href="https://github.com/schollz">
        <img src="https://avatars.githubusercontent.com/u/6550035?s=72&u=991583b3f086b7f4cef5d2b4629e1440fd73f00b&v=4" height="12" />
        <b>schollz</b>
    </a></td><td>-</td><td>Seattle, WA</td><td>3.53K</td><td>460</td></tr><tr><td>11</td><td><a href="https://github.com/nedbat">
        <img src="https://avatars.githubusercontent.com/u/23789?s=72&u=76b163dcfe4c4f1cdcea32b9f97be0ce037c5e4c&v=4" height="12" />
        <b>nedbat</b>
    </a></td><td>-</td><td>Boston</td><td>2.42K</td><td>454</td></tr><tr><td>12</td><td><a href="https://github.com/alex">
        <img src="https://avatars.githubusercontent.com/u/772?s=72&u=59560f511e4e0fb5521237148ea6e8f43b168960&v=4" height="12" />
        <b>alex</b>
    </a></td><td>Anthropic</td><td>Washington D.C.</td><td>10.49K</td><td>452</td></tr><tr><td>13</td><td><a href="https://github.com/jlopp">
        <img src="https://avatars.githubusercontent.com/u/288011?s=72&u=c101c840881910966d00ec3139340fc973bda7ed&v=4" height="12" />
        <b>jlopp</b>
    </a></td><td>Casa</td><td>United States</td><td>1.3K</td><td>444</td></tr><tr><td>14</td><td><a href="https://github.com/umputun">
        <img src="https://avatars.githubusercontent.com/u/535880?s=72&v=4" height="12" />
        <b>umputun</b>
    </a></td><td>-</td><td>USA</td><td>2.52K</td><td>426</td></tr><tr><td>15</td><td><a href="https://github.com/jeremyevans">
        <img src="https://avatars.githubusercontent.com/u/3846?s=72&u=42e153d8b1f8e31db8d838217fd6f849ad0f6b1c&v=4" height="12" />
        <b>jeremyevans</b>
    </a></td><td>Ubicloud, Inc.</td><td>Sacramento, California, USA</td><td>1.71K</td><td>424</td></tr><tr><td>16</td><td><a href="https://github.com/terrytangyuan">
        <img src="https://avatars.githubusercontent.com/u/4269898?s=72&u=f9e0df9a02b44366ac6b33f9ab32c080d37c5d9e&v=4" height="12" />
        <b>terrytangyuan</b>
    </a></td><td>Red Hat</td><td>USA</td><td>3.77K</td><td>394</td></tr><tr><td>17</td><td><a href="https://github.com/itzg">
        <img src="https://avatars.githubusercontent.com/u/988985?s=72&u=444fc4688b09d508685c277a9cbcae5c97f4e1c5&v=4" height="12" />
        <b>itzg</b>
    </a></td><td>-</td><td>Texas, United States</td><td>1.48K</td><td>362</td></tr><tr><td>18</td><td><a href="https://github.com/parkr">
        <img src="https://avatars.githubusercontent.com/u/237985?s=72&u=98312ceb2e519ab0fd17fa7a3bd9bd4d585fd4d7&v=4" height="12" />
        <b>parkr</b>
    </a></td><td>Google</td><td>USA</td><td>1.55K</td><td>356</td></tr><tr><td>19</td><td><a href="https://github.com/bradfitz">
        <img src="https://avatars.githubusercontent.com/u/2621?s=72&u=6deb06d9916328265486504f364c80ec2d969f2c&v=4" height="12" />
        <b>bradfitz</b>
    </a></td><td>Tailscale</td><td>Seattle</td><td>13.13K</td><td>346</td></tr><tr><td>20</td><td><a href="https://github.com/alii">
        <img src="https://avatars.githubusercontent.com/u/25351731?s=72&v=4" height="12" />
        <b>alii</b>
    </a></td><td>@anthropics</td><td>San Francisco</td><td>1.15K</td><td>345</td></tr><tr><td>21</td><td><a href="https://github.com/RamiKrispin">
        <img src="https://avatars.githubusercontent.com/u/12760966?s=72&u=654c914d9df714991b890ea38ac4fce0e55c0d8f&v=4" height="12" />
        <b>RamiKrispin</b>
    </a></td><td>-</td><td>Cupertino, California, US</td><td>2.57K</td><td>336</td></tr><tr><td>22</td><td><a href="https://github.com/bdraco">
        <img src="https://avatars.githubusercontent.com/u/663432?s=72&v=4" height="12" />
        <b>bdraco</b>
    </a></td><td>-</td><td>Houston, TX</td><td>1.88K</td><td>317</td></tr><tr><td>23</td><td><a href="https://github.com/zhaoolee">
        <img src="https://avatars.githubusercontent.com/u/15868458?s=72&u=aa3a39fdb2c4a16abeb527f343ab7909d10e1b4e&v=4" height="12" />
        <b>zhaoolee</b>
    </a></td><td>kingsware</td><td>New York</td><td>1.86K</td><td>313</td></tr><tr><td>24</td><td><a href="https://github.com/neodigm">
        <img src="https://avatars.githubusercontent.com/u/3151842?s=72&u=ffb96ad83c18e5e0ff0a1f221cbb6200d623202a&v=4" height="12" />
        <b>neodigm</b>
    </a></td><td>Independent</td><td>Chicago ✈️ the Future</td><td>1.47K</td><td>309</td></tr><tr><td>25</td><td><a href="https://github.com/seanpm2001">
        <img src="https://avatars.githubusercontent.com/u/65933340?s=72&u=629d16e8108b55c194e5afddb8995d9156ef1eeb&v=4" height="12" />
        <b>seanpm2001</b>
    </a></td><td>Self-employed; looking for tips</td><td>Walla Walla Washington, USA, Earth, Milky way, <Universe></td><td>2.02K</td><td>299</td></tr><tr><td>26</td><td><a href="https://github.com/ekzhang">
        <img src="https://avatars.githubusercontent.com/u/7550632?s=72&u=14bb98217af15123593097a2406e379258c89484&v=4" height="12" />
        <b>ekzhang</b>
    </a></td><td>@thinking-machines-lab</td><td>New York, NY</td><td>3.02K</td><td>296</td></tr><tr><td>27</td><td><a href="https://github.com/glenn-jocher">
        <img src="https://avatars.githubusercontent.com/u/26833433?s=72&u=950e3c64c42597a4927c49c61f5a54f0df430770&v=4" height="12" />
        <b>glenn-jocher</b>
    </a></td><td>@ultralytics</td><td>United States</td><td>3.95K</td><td>280</td></tr><tr><td>28</td><td><a href="https://github.com/erikbern">
        <img src="https://avatars.githubusercontent.com/u/1027979?s=72&u=488cfc6300303d548cbee59842dadedb39ef1d39&v=4" height="12" />
        <b>erikbern</b>
    </a></td><td>Modal Labs</td><td>New York City</td><td>3.53K</td><td>278</td></tr><tr><td>29</td><td><a href="https://github.com/brianchandotcom">
        <img src="https://avatars.githubusercontent.com/u/282080?s=72&v=4" height="12" />
        <b>brianchandotcom</b>
    </a></td><td>Liferay, Inc.</td><td>Los Angeles, CA</td><td>2.06K</td><td>267</td></tr><tr><td>30</td><td><a href="https://github.com/mitchellh">
        <img src="https://avatars.githubusercontent.com/u/1299?s=72&u=cc88a733b0c95bdfd323ec661c0da4c6768c4e4b&v=4" height="12" />
        <b>mitchellh</b>
    </a></td><td>-</td><td>Los Angeles, CA</td><td>20.1K</td><td>243</td></tr><tr><td>31</td><td><a href="https://github.com/vladmandic">
        <img src="https://avatars.githubusercontent.com/u/57876960?s=72&u=5d0c2c03561ff068d88bf3633a827540e23cadc1&v=4" height="12" />
        <b>vladmandic</b>
    </a></td><td>-</td><td>Miami, Florida</td><td>1.1K</td><td>239</td></tr><tr><td>32</td><td><a href="https://github.com/ankane">
        <img src="https://avatars.githubusercontent.com/u/220358?s=72&u=ba13f3240d7992dc4124a33a4fc65bf4924e5375&v=4" height="12" />
        <b>ankane</b>
    </a></td><td>-</td><td>San Francisco, CA</td><td>6.81K</td><td>215</td></tr><tr><td>33</td><td><a href="https://github.com/josephmisiti">
        <img src="https://avatars.githubusercontent.com/u/246302?s=72&u=9242c80bcb25acbc66683faf0d5d9fb92674689b&v=4" height="12" />
        <b>josephmisiti</b>
    </a></td><td>Math & Pencil </td><td>Miami, FL</td><td>4.41K</td><td>215</td></tr><tr><td>34</td><td><a href="https://github.com/tmcw">
        <img src="https://avatars.githubusercontent.com/u/32314?s=72&u=dd0a1264029f9deae8f50858829b19d3976afd47&v=4" height="12" />
        <b>tmcw</b>
    </a></td><td>@val-town</td><td>brooklyn new york</td><td>3.67K</td><td>215</td></tr><tr><td>35</td><td><a href="https://github.com/ZacSweers">
        <img src="https://avatars.githubusercontent.com/u/1361086?s=72&u=f718c2d2774c7e8b85b5cf1c12df4b6aac6c13f4&v=4" height="12" />
        <b>ZacSweers</b>
    </a></td><td>-</td><td>New York</td><td>2.54K</td><td>215</td></tr><tr><td>36</td><td><a href="https://github.com/miyagawa">
        <img src="https://avatars.githubusercontent.com/u/3499?s=72&v=4" height="12" />
        <b>miyagawa</b>
    </a></td><td>-</td><td>San Francisco, CA</td><td>2.53K</td><td>215</td></tr><tr><td>37</td><td><a href="https://github.com/rohitpaulk">
        <img src="https://avatars.githubusercontent.com/u/3893573?s=72&u=8a846efac2deb96845dab4271280c308c15de40f&v=4" height="12" />
        <b>rohitpaulk</b>
    </a></td><td>@codecrafters-io</td><td>San Francisco</td><td>1.89K</td><td>215</td></tr><tr><td>38</td><td><a href="https://github.com/vkarpov15">
        <img src="https://avatars.githubusercontent.com/u/1620265?s=72&u=99e980f553265b6c0463884ca842f19d1c0856d6&v=4" height="12" />
        <b>vkarpov15</b>
    </a></td><td>-</td><td>Miami Beach, FL</td><td>1.72K</td><td>215</td></tr><tr><td>39</td><td><a href="https://github.com/tommoor">
        <img src="https://avatars.githubusercontent.com/u/380914?s=72&u=2e13c3aef0960f3a857e82136d8110af27b2d896&v=4" height="12" />
        <b>tommoor</b>
    </a></td><td>@outline, @linear</td><td>Brooklyn, New York</td><td>1.35K</td><td>215</td></tr><tr><td>40</td><td><a href="https://github.com/christian-bromann">
        <img src="https://avatars.githubusercontent.com/u/731337?s=72&u=029e1004d7b48bc669c3eef60c8b3566841c7477&v=4" height="12" />
        <b>christian-bromann</b>
    </a></td><td>@langchain-ai</td><td>San Francisco</td><td>1.3K</td><td>215</td></tr><tr><td>41</td><td><a href="https://github.com/dblock">
        <img src="https://avatars.githubusercontent.com/u/542335?s=72&u=0be97a8b8201d4f206bda1a9dfd891fe829d0f67&v=4" height="12" />
        <b>dblock</b>
    </a></td><td>unemployed at poor artist</td><td>New York, NY</td><td>1.29K</td><td>215</td></tr><tr><td>42</td><td><a href="https://github.com/yurishkuro">
        <img src="https://avatars.githubusercontent.com/u/3523016?s=72&u=543cac5c83237325d63bab776c01fe7ecb400d8c&v=4" height="12" />
        <b>yurishkuro</b>
    </a></td><td>-</td><td>New York</td><td>1.22K</td><td>215</td></tr><tr><td>43</td><td><a href="https://github.com/apoelstra">
        <img src="https://avatars.githubusercontent.com/u/1351933?s=72&u=fb54e413f387c1a6d1bff29ca1209a1922e7b17d&v=4" height="12" />
        <b>apoelstra</b>
    </a></td><td>@Blockstream </td><td>Austin, TX, USA</td><td>1.19K</td><td>215</td></tr><tr><td>44</td><td><a href="https://github.com/raineorshine">
        <img src="https://avatars.githubusercontent.com/u/750276?s=72&u=48b4f52f205fa8aa1e0decd765dd34d59064c6d3&v=4" height="12" />
        <b>raineorshine</b>
    </a></td><td>-</td><td>Los Angeles, CA</td><td>1.15K</td><td>215</td></tr><tr><td>45</td><td><a href="https://github.com/nolimits4web">
        <img src="https://avatars.githubusercontent.com/u/999588?s=72&u=00cb264515ffc319920eb10637bcfe7986eabb52&v=4" height="12" />
        <b>nolimits4web</b>
    </a></td><td>-</td><td>USA</td><td>4.38K</td><td>214</td></tr><tr><td>46</td><td><a href="https://github.com/alextran1502">
        <img src="https://avatars.githubusercontent.com/u/27055614?s=72&u=b314a106547251c35b63f4015f07996801cf20d4&v=4" height="12" />
        <b>alextran1502</b>
    </a></td><td>-</td><td>United States</td><td>1.05K</td><td>211</td></tr><tr><td>47</td><td><a href="https://github.com/ethanflower1903">
        <img src="https://avatars.githubusercontent.com/u/84658436?s=72&u=fa4791c10bdb6d04372f788f4f6250ab0d27a090&v=4" height="12" />
        <b>ethanflower1903</b>
    </a></td><td>-</td><td>san francisco</td><td>8.06K</td><td>207</td></tr><tr><td>48</td><td><a href="https://github.com/tshemsedinov">
        <img src="https://avatars.githubusercontent.com/u/4405297?s=72&u=cda6702c4ff8d6f57d0e7c94966f4ee46753edd7&v=4" height="12" />
        <b>tshemsedinov</b>
    </a></td><td>Architect at Metarhia; Lecturer at KPI</td><td>Earth, Europe, Ukraine, Kiev, Kyiv, USA, Spain, Germany, Italy, China</td><td>5.22K</td><td>206</td></tr><tr><td>49</td><td><a href="https://github.com/WillKoehrsen">
        <img src="https://avatars.githubusercontent.com/u/17484616?s=72&u=05a7c27224789b6fa84d24864e5d852b24f7f125&v=4" height="12" />
        <b>WillKoehrsen</b>
    </a></td><td>@gridstatus </td><td>Chicago, IL</td><td>4.65K</td><td>205</td></tr><tr><td>50</td><td><a href="https://github.com/jgamblin">
        <img src="https://avatars.githubusercontent.com/u/8428124?s=72&u=a3f223010423324b7f1f734f84f0000ef798b201&v=4" height="12" />
        <b>jgamblin</b>
    </a></td><td>-</td><td>United States</td><td>1.97K</td><td>203</td></tr><tr><td>51</td><td><a href="https://github.com/snakajima">
        <img src="https://avatars.githubusercontent.com/u/139827?s=72&u=b72b05584a295eb44e0d0c5bf83b90d68321a81c&v=4" height="12" />
        <b>snakajima</b>
    </a></td><td>graphAI, mulmocast</td><td>Seattle WA, USA</td><td>1.08K</td><td>200</td></tr><tr><td>52</td><td><a href="https://github.com/mikecao">
        <img src="https://avatars.githubusercontent.com/u/477975?s=72&v=4" height="12" />
        <b>mikecao</b>
    </a></td><td>@umami-software </td><td>San Francisco, CA</td><td>1.09K</td><td>196</td></tr><tr><td>53</td><td><a href="https://github.com/vEnhance">
        <img src="https://avatars.githubusercontent.com/u/3750940?s=72&v=4" height="12" />
        <b>vEnhance</b>
    </a></td><td>-</td><td>Boston, MA</td><td>1.09K</td><td>190</td></tr><tr><td>54</td><td><a href="https://github.com/JoshuaKGoldberg">
        <img src="https://avatars.githubusercontent.com/u/3335181?s=72&u=cf3e1a65097168437b053eb9bb5ce023ba49989e&v=4" height="12" />
        <b>JoshuaKGoldberg</b>
    </a></td><td>-</td><td>Wakefield, MA, USA</td><td>2.9K</td><td>188</td></tr><tr><td>55</td><td><a href="https://github.com/koush">
        <img src="https://avatars.githubusercontent.com/u/73924?s=72&u=66dae9ea097c1f29a2723bd2f6f7c434d49433cf&v=4" height="12" />
        <b>koush</b>
    </a></td><td>ClockworkMod</td><td>Seattle, WA</td><td>8.39K</td><td>186</td></tr><tr><td>56</td><td><a href="https://github.com/mmp">
        <img src="https://avatars.githubusercontent.com/u/102567?s=72&u=156107457c2b0ae97e582f59e97aa5bea438072f&v=4" height="12" />
        <b>mmp</b>
    </a></td><td>-</td><td>San Francisco, CA</td><td>1.9K</td><td>184</td></tr><tr><td>57</td><td><a href="https://github.com/timkpaine">
        <img src="https://avatars.githubusercontent.com/u/3105306?s=72&u=19fd91c674b181e9e1b8998b08f4131af57b604f&v=4" height="12" />
        <b>timkpaine</b>
    </a></td><td>@Point72</td><td>New York, NY, USA</td><td>1.11K</td><td>184</td></tr><tr><td>58</td><td><a href="https://github.com/indirect">
        <img src="https://avatars.githubusercontent.com/u/78?s=72&u=173b3b2341359a50b8bad0123029d8cb76d13eca&v=4" height="12" />
        <b>indirect</b>
    </a></td><td>-</td><td>San Francisco</td><td>1.19K</td><td>178</td></tr><tr><td>59</td><td><a href="https://github.com/EvanBacon">
        <img src="https://avatars.githubusercontent.com/u/9664363?s=72&u=46ba6d5fbd29729df2950b845c9ca2cd085a1c2b&v=4" height="12" />
        <b>EvanBacon</b>
    </a></td><td>@expo </td><td>San Francisco</td><td>5.87K</td><td>163</td></tr><tr><td>60</td><td><a href="https://github.com/stephentoub">
        <img src="https://avatars.githubusercontent.com/u/2642209?s=72&u=1f14e8d00a8c59e57c9d193baab69bf0f52a95ec&v=4" height="12" />
        <b>stephentoub</b>
    </a></td><td>Microsoft</td><td>Boston, MA</td><td>4.43K</td><td>163</td></tr><tr><td>61</td><td><a href="https://github.com/ottomated">
        <img src="https://avatars.githubusercontent.com/u/31470743?s=72&u=26ed8041f671da5b051f4cad76b016cea348d662&v=4" height="12" />
        <b>ottomated</b>
    </a></td><td>-</td><td>Los Angeles</td><td>3.76K</td><td>162</td></tr><tr><td>62</td><td><a href="https://github.com/jamesward">
        <img src="https://avatars.githubusercontent.com/u/65043?s=72&v=4" height="12" />
        <b>jamesward</b>
    </a></td><td>@aws</td><td>Crested Butte, CO, USA</td><td>1.86K</td><td>155</td></tr><tr><td>63</td><td><a href="https://github.com/virattt">
        <img src="https://avatars.githubusercontent.com/u/901795?s=72&u=c8cd7391f649623258b5f5ea848550df9407107b&v=4" height="12" />
        <b>virattt</b>
    </a></td><td>-</td><td>New York, NY</td><td>2.99K</td><td>145</td></tr><tr><td>64</td><td><a href="https://github.com/nzakas">
        <img src="https://avatars.githubusercontent.com/u/38546?s=72&u=0a57d7dc4b117474862c3ef8462e3a4b0187032f&v=4" height="12" />
        <b>nzakas</b>
    </a></td><td>Human Who Codes LLC</td><td>Boston, MA</td><td>10.73K</td><td>143</td></tr><tr><td>65</td><td><a href="https://github.com/amir20">
        <img src="https://avatars.githubusercontent.com/u/260667?s=72&u=e184f47fa8a05899a86e8a4de86fc7a5e90207f1&v=4" height="12" />
        <b>amir20</b>
    </a></td><td>Netflix</td><td>San Francisco, CA</td><td>1.19K</td><td>143</td></tr><tr><td>66</td><td><a href="https://github.com/jackyzha0">
        <img src="https://avatars.githubusercontent.com/u/23178940?s=72&u=1092d0a1bca8868a97d52b9020c2f87707e57219&v=4" height="12" />
        <b>jackyzha0</b>
    </a></td><td>@replit</td><td>San Francisco</td><td>2.18K</td><td>142</td></tr><tr><td>67</td><td><a href="https://github.com/csev">
        <img src="https://avatars.githubusercontent.com/u/1197222?s=72&u=d6dc85c064736ab851c6d9e3318dcdd1be00fb2c&v=4" height="12" />
        <b>csev</b>
    </a></td><td>University of Michigan </td><td>Ann Arbor, MI USA</td><td>3.58K</td><td>138</td></tr><tr><td>68</td><td><a href="https://github.com/migueldeicaza">
        <img src="https://avatars.githubusercontent.com/u/36863?s=72&u=dc9e3a0b2967a62ce34b7b503ee33b0adcc2bd3b&v=4" height="12" />
        <b>migueldeicaza</b>
    </a></td><td>Xibbon</td><td>Boston, MA.</td><td>5.09K</td><td>137</td></tr><tr><td>69</td><td><a href="https://github.com/josh">
        <img src="https://avatars.githubusercontent.com/u/137?s=72&u=b8ae2314a4931c4a82a27d4fbbfffdc049779e89&v=4" height="12" />
        <b>josh</b>
    </a></td><td>-</td><td>San Francisco, CA</td><td>2.56K</td><td>136</td></tr><tr><td>70</td><td><a href="https://github.com/buckyroberts">
        <img src="https://avatars.githubusercontent.com/u/8547538?s=72&u=8a4be84ff4870a332fe94c11fca02b432fb9f83e&v=4" height="12" />
        <b>buckyroberts</b>
    </a></td><td>thenewboston</td><td>New York, NY</td><td>27.06K</td><td>129</td></tr><tr><td>71</td><td><a href="https://github.com/micheleriva">
        <img src="https://avatars.githubusercontent.com/u/14977595?s=72&u=7385fce7956216479b3a3b01770fbc2a6392e495&v=4" height="12" />
        <b>micheleriva</b>
    </a></td><td>@OramaSearch</td><td>San Francisco, California, USA</td><td>1.08K</td><td>128</td></tr><tr><td>72</td><td><a href="https://github.com/syrusakbary">
        <img src="https://avatars.githubusercontent.com/u/188257?s=72&u=5972424c4a683223929b7b3d783d34948b640399&v=4" height="12" />
        <b>syrusakbary</b>
    </a></td><td>@wasmerio  </td><td>San Francisco, CA</td><td>1.2K</td><td>127</td></tr><tr><td>73</td><td><a href="https://github.com/vczh">
        <img src="https://avatars.githubusercontent.com/u/773569?s=72&u=6e9b51d46dc1c12778b42b944d1ccaa3cda5446f&v=4" height="12" />
        <b>vczh</b>
    </a></td><td>-</td><td>Seattle, WA, USA</td><td>17.52K</td><td>126</td></tr><tr><td>74</td><td><a href="https://github.com/Swizec">
        <img src="https://avatars.githubusercontent.com/u/56883?s=72&v=4" height="12" />
        <b>Swizec</b>
    </a></td><td>-</td><td>San Francisco</td><td>1.96K</td><td>125</td></tr><tr><td>75</td><td><a href="https://github.com/Dhravya">
        <img src="https://avatars.githubusercontent.com/u/63950637?s=72&u=a1d804b135132cac15090fd93440a02ab5ce29b9&v=4" height="12" />
        <b>Dhravya</b>
    </a></td><td>@supermemoryai </td><td>San Francisco</td><td>3.37K</td><td>123</td></tr><tr><td>76</td><td><a href="https://github.com/AllenDowney">
        <img src="https://avatars.githubusercontent.com/u/1882093?s=72&u=1f319a917eca967af3b5db32b6976969ab084d88&v=4" height="12" />
        <b>AllenDowney</b>
    </a></td><td>PyMC Labs</td><td>Needham, MA, USA</td><td>10.76K</td><td>121</td></tr><tr><td>77</td><td><a href="https://github.com/danielhanchen">
        <img src="https://avatars.githubusercontent.com/u/23090290?s=72&u=3200d12723a822d44abe1b28c35cdf7e5d030b75&v=4" height="12" />
        <b>danielhanchen</b>
    </a></td><td>@unslothai</td><td>San Francisco</td><td>1.54K</td><td>121</td></tr><tr><td>78</td><td><a href="https://github.com/basnijholt">
        <img src="https://avatars.githubusercontent.com/u/6897215?s=72&u=a7d69832481ceabbd1a99ab22413a7141d2b1183&v=4" height="12" />
        <b>basnijholt</b>
    </a></td><td>@IonQ</td><td>Seattle, USA</td><td>1.31K</td><td>118</td></tr><tr><td>79</td><td><a href="https://github.com/awni">
        <img src="https://avatars.githubusercontent.com/u/1542805?s=72&u=b4b259ba4dbf81a7707a7b39022ed864dbc177b1&v=4" height="12" />
        <b>awni</b>
    </a></td><td>Apple</td><td>United States</td><td>2.28K</td><td>116</td></tr><tr><td>80</td><td><a href="https://github.com/danielmiessler">
        <img src="https://avatars.githubusercontent.com/u/50654?s=72&u=2d065ec8d4a19ed53ccbaed7fddbb28adbce12cd&v=4" height="12" />
        <b>danielmiessler</b>
    </a></td><td>Unsupervised Learning</td><td>San Francisco Bay Area</td><td>13.99K</td><td>114</td></tr><tr><td>81</td><td><a href="https://github.com/ijjk">
        <img src="https://avatars.githubusercontent.com/u/22380829?s=72&u=0d3d36a4bef923933ffa54c609191dbae9988642&v=4" height="12" />
        <b>ijjk</b>
    </a></td><td>@Vercel</td><td>San Francisco, CA</td><td>3.72K</td><td>111</td></tr><tr><td>82</td><td><a href="https://github.com/zardus">
        <img src="https://avatars.githubusercontent.com/u/3453847?s=72&u=4113aabc2fe96038acf6f578c11545f8cc3e9fb0&v=4" height="12" />
        <b>zardus</b>
    </a></td><td>-</td><td>Tempe, AZ, USA</td><td>2.22K</td><td>111</td></tr><tr><td>83</td><td><a href="https://github.com/antiagainst">
        <img src="https://avatars.githubusercontent.com/u/487928?s=72&v=4" height="12" />
        <b>antiagainst</b>
    </a></td><td>AMD AI Group</td><td>Seattle</td><td>1.37K</td><td>111</td></tr><tr><td>84</td><td><a href="https://github.com/meowgorithm">
        <img src="https://avatars.githubusercontent.com/u/25087?s=72&u=1dc2f182860e2771dbb0c33226a0ef89aecd5f17&v=4" height="12" />
        <b>meowgorithm</b>
    </a></td><td>@charmbracelet </td><td>New York</td><td>1.05K</td><td>111</td></tr><tr><td>85</td><td><a href="https://github.com/joshlong">
        <img src="https://avatars.githubusercontent.com/u/54473?s=72&v=4" height="12" />
        <b>joshlong</b>
    </a></td><td>the Spring team (https://spring.io) </td><td>San Francisco, CA</td><td>9.91K</td><td>110</td></tr><tr><td>86</td><td><a href="https://github.com/santosomar">
        <img src="https://avatars.githubusercontent.com/u/1690898?s=72&u=3580435cb2e123b261ff7cd3d19192bb194804b7&v=4" height="12" />
        <b>santosomar</b>
    </a></td><td>-</td><td>United States</td><td>2.13K</td><td>108</td></tr><tr><td>87</td><td><a href="https://github.com/nikomatsakis">
        <img src="https://avatars.githubusercontent.com/u/155238?s=72&u=c09aaff33aa53ea99359e53bef06aa5058ac8d15&v=4" height="12" />
        <b>nikomatsakis</b>
    </a></td><td>-</td><td>Boston, MA</td><td>4.4K</td><td>107</td></tr><tr><td>88</td><td><a href="https://github.com/Trott">
        <img src="https://avatars.githubusercontent.com/u/718899?s=72&u=d8a77b28610eec920d8744ed76d3f625e3f06a48&v=4" height="12" />
        <b>Trott</b>
    </a></td><td>-</td><td>San Francisco, CA</td><td>1.56K</td><td>107</td></tr><tr><td>89</td><td><a href="https://github.com/lucidrains">
        <img src="https://avatars.githubusercontent.com/u/108653?s=72&u=6d8a8e8d28f8512933d729d7503ae3e622d59c64&v=4" height="12" />
        <b>lucidrains</b>
    </a></td><td>-</td><td>San Francisco</td><td>58.85K</td><td>101</td></tr><tr><td>90</td><td><a href="https://github.com/ChrisTitusTech">
        <img src="https://avatars.githubusercontent.com/u/7896101?s=72&u=af642f9bbd072e6b21622e77c163298ebed45db1&v=4" height="12" />
        <b>ChrisTitusTech</b>
    </a></td><td>CT Tech Group LLC</td><td>Dallas, TX</td><td>14.31K</td><td>101</td></tr><tr><td>91</td><td><a href="https://github.com/holman">
        <img src="https://avatars.githubusercontent.com/u/2723?s=72&u=af4e36d0aca5cf5a6a1f73948f7873a53735ab81&v=4" height="12" />
        <b>holman</b>
    </a></td><td>@americanoutlaws </td><td>San Francisco</td><td>6.5K</td><td>101</td></tr><tr><td>92</td><td><a href="https://github.com/hadley">
        <img src="https://avatars.githubusercontent.com/u/4196?s=72&u=381fe2cce7ecc86993a19168bcf6638e9805326a&v=4" height="12" />
        <b>hadley</b>
    </a></td><td>@posit-pbc</td><td>Houston, TX</td><td>26.51K</td><td>98</td></tr><tr><td>93</td><td><a href="https://github.com/ethanniser">
        <img src="https://avatars.githubusercontent.com/u/100045248?s=72&u=9131657aec3607d254cda59825686d4278d200dd&v=4" height="12" />
        <b>ethanniser</b>
    </a></td><td>Vercel</td><td>San Francisco</td><td>1.06K</td><td>98</td></tr><tr><td>94</td><td><a href="https://github.com/aarondfrancis">
        <img src="https://avatars.githubusercontent.com/u/881931?s=72&u=9016ef90a1002f72f681fc9ee282148dc9b6a47d&v=4" height="12" />
        <b>aarondfrancis</b>
    </a></td><td>Try Hard Studios</td><td>Dallas, TX</td><td>1.43K</td><td>97</td></tr><tr><td>95</td><td><a href="https://github.com/MariaSolOs">
        <img src="https://avatars.githubusercontent.com/u/62502207?s=72&u=a49e21ba43e2707600db24fed6a17639d437dd53&v=4" height="12" />
        <b>MariaSolOs</b>
    </a></td><td>SWE @ Palantir</td><td>Seattle, WA</td><td>1.29K</td><td>97</td></tr><tr><td>96</td><td><a href="https://github.com/jlevy">
        <img src="https://avatars.githubusercontent.com/u/2058167?s=72&u=49d8a5df94e131b1b699162ab7a97119102742ed&v=4" height="12" />
        <b>jlevy</b>
    </a></td><td>-</td><td>San Francisco</td><td>4.49K</td><td>96</td></tr><tr><td>97</td><td><a href="https://github.com/harperreed">
        <img src="https://avatars.githubusercontent.com/u/18504?s=72&v=4" height="12" />
        <b>harperreed</b>
    </a></td><td>Harper Rules, LLC</td><td>Chicago, Il</td><td>1.07K</td><td>95</td></tr><tr><td>98</td><td><a href="https://github.com/jwiegley">
        <img src="https://avatars.githubusercontent.com/u/8460?s=72&u=83d9c6bfa0b8453d616e7c7701cba6ef2d53df52&v=4" height="12" />
        <b>jwiegley</b>
    </a></td><td>@kadena-io </td><td>California, USA</td><td>2.7K</td><td>94</td></tr><tr><td>99</td><td><a href="https://github.com/rafalab">
        <img src="https://avatars.githubusercontent.com/u/5330134?s=72&u=18caf428f80d7b11c5e052d485303583ac16a530&v=4" height="12" />
        <b>rafalab</b>
    </a></td><td>Harvard and Dana-Farber Cancer Institute</td><td>Boston, MA</td><td>1.63K</td><td>89</td></tr><tr><td>100</td><td><a href="https://github.com/woodruffw">
        <img src="https://avatars.githubusercontent.com/u/3059210?s=72&u=0130215a165dbf5cbb0fc1f794a2d1ace0a91e23&v=4" height="12" />
        <b>woodruffw</b>
    </a></td><td>@astral-sh</td><td>New York, NY</td><td>1.11K</td><td>89</td></tr><tr><td>101</td><td><a href="https://github.com/JaviSoto">
        <img src="https://avatars.githubusercontent.com/u/666807?s=72&u=deeb52bb786b2345916fdb12c63e161281cdd476&v=4" height="12" />
        <b>JaviSoto</b>
    </a></td><td>-</td><td>San Francisco</td><td>1.11K</td><td>86</td></tr><tr><td>102</td><td><a href="https://github.com/modocache">
        <img src="https://avatars.githubusercontent.com/u/552921?s=72&u=469a0337ef1e244285e6b65af1567cb792fff359&v=4" height="12" />
        <b>modocache</b>
    </a></td><td>-</td><td>New York, USA</td><td>2.01K</td><td>84</td></tr><tr><td>103</td><td><a href="https://github.com/antonputra">
        <img src="https://avatars.githubusercontent.com/u/9362325?s=72&u=22bb3ba589b13bf0b4179bae4924f3018716c210&v=4" height="12" />
        <b>antonputra</b>
    </a></td><td>-</td><td>San Francisco Bay Area</td><td>3.21K</td><td>82</td></tr><tr><td>104</td><td><a href="https://github.com/jverkoey">
        <img src="https://avatars.githubusercontent.com/u/45670?s=72&u=927810ea447867116b0968537626045dd3175b94&v=4" height="12" />
        <b>jverkoey</b>
    </a></td><td>Clutch Engineering</td><td>New York</td><td>1.64K</td><td>81</td></tr><tr><td>105</td><td><a href="https://github.com/ruiyangzhou01">
        <img src="https://avatars.githubusercontent.com/u/62752455?s=72&u=2636a7c346f299834e0a57c7e3764d1598429550&v=4" height="12" />
        <b>ruiyangzhou01</b>
    </a></td><td>University of Electronic Science and Technology of China</td><td>Los Angeles, USA</td><td>1.38K</td><td>81</td></tr><tr><td>106</td><td><a href="https://github.com/bcherny">
        <img src="https://avatars.githubusercontent.com/u/1761758?s=72&u=a7b1ed42ce41cc6761d0f6a67c8ef9a029a2fa8f&v=4" height="12" />
        <b>bcherny</b>
    </a></td><td>@Anthropic</td><td>San Francisco</td><td>4.15K</td><td>79</td></tr><tr><td>107</td><td><a href="https://github.com/armankhondker">
        <img src="https://avatars.githubusercontent.com/u/22623742?s=72&u=5437e20435b0ef994334e81a3e4a76790fe7ccfb&v=4" height="12" />
        <b>armankhondker</b>
    </a></td><td>@Microsoft</td><td>Seattle, WA</td><td>1.95K</td><td>75</td></tr><tr><td>108</td><td><a href="https://github.com/ed-donner">
        <img src="https://avatars.githubusercontent.com/u/96339824?s=72&u=6385dcdef8a13afbcd8dad164f5a9008de0da7e0&v=4" height="12" />
        <b>ed-donner</b>
    </a></td><td>Nebula.io</td><td>New York</td><td>2.67K</td><td>74</td></tr><tr><td>109</td><td><a href="https://github.com/ericniebler">
        <img src="https://avatars.githubusercontent.com/u/225757?s=72&v=4" height="12" />
        <b>ericniebler</b>
    </a></td><td>@NVIDIA</td><td>Seattle, WA</td><td>1.78K</td><td>72</td></tr><tr><td>110</td><td><a href="https://github.com/jnunemaker">
        <img src="https://avatars.githubusercontent.com/u/235?s=72&u=7b204d858092947a7a1bc8b2955d210c999d164e&v=4" height="12" />
        <b>jnunemaker</b>
    </a></td><td>@verygoodsoftwarellc, @fewerandfaster and @boxoutsports </td><td>US</td><td>2.03K</td><td>71</td></tr><tr><td>111</td><td><a href="https://github.com/idimetrix">
        <img src="https://avatars.githubusercontent.com/u/6536323?s=72&u=8bdc3b5ad5ad63a6956ba6890107e8efc6c2d67c&v=4" height="12" />
        <b>idimetrix</b>
    </a></td><td>@elevanceit</td><td>New York</td><td>15.06K</td><td>69</td></tr><tr><td>112</td><td><a href="https://github.com/lukehoban">
        <img src="https://avatars.githubusercontent.com/u/223467?s=72&u=813d8208b74d626778368048a05de08bdf449e80&v=4" height="12" />
        <b>lukehoban</b>
    </a></td><td>@microsoft</td><td>Seattle</td><td>1.75K</td><td>68</td></tr><tr><td>113</td><td><a href="https://github.com/punkpeye">
        <img src="https://avatars.githubusercontent.com/u/108313943?s=72&u=574997965883515846bd8830abb82bcbdadc649c&v=4" height="12" />
        <b>punkpeye</b>
    </a></td><td>Glama</td><td>Miami, FL</td><td>1.65K</td><td>66</td></tr><tr><td>114</td><td><a href="https://github.com/DavidWells">
        <img src="https://avatars.githubusercontent.com/u/532272?s=72&u=e7b96b32a71ed740a741cb666fbe8c3f7fd65c5c&v=4" height="12" />
        <b>DavidWells</b>
    </a></td><td>-</td><td>San Francisco</td><td>1.75K</td><td>65</td></tr><tr><td>115</td><td><a href="https://github.com/argyleink">
        <img src="https://avatars.githubusercontent.com/u/1134620?s=72&u=0d420b597986af4eb82e5c84d3a16a31da8fd326&v=4" height="12" />
        <b>argyleink</b>
    </a></td><td>Shopify</td><td>Seattle</td><td>3.98K</td><td>63</td></tr><tr><td>116</td><td><a href="https://github.com/jennifer-shehane">
        <img src="https://avatars.githubusercontent.com/u/1271364?s=72&v=4" height="12" />
        <b>jennifer-shehane</b>
    </a></td><td>@cypress-io </td><td>Atlanta, GA, USA</td><td>1.07K</td><td>63</td></tr><tr><td>117</td><td><a href="https://github.com/benawad">
        <img src="https://avatars.githubusercontent.com/u/7872329?s=72&u=fe75ed131c7e03df13fedd43c03aed86fdf85dcc&v=4" height="12" />
        <b>benawad</b>
    </a></td><td>Voidpet</td><td>San Francisco, CA</td><td>29.06K</td><td>62</td></tr><tr><td>118</td><td><a href="https://github.com/arogozhnikov">
        <img src="https://avatars.githubusercontent.com/u/6318811?s=72&u=5e99e15d9400a4bd8a449939093d38df94fd3e90&v=4" height="12" />
        <b>arogozhnikov</b>
    </a></td><td>-</td><td>San Francisco</td><td>1.91K</td><td>62</td></tr><tr><td>119</td><td><a href="https://github.com/mimoo">
        <img src="https://avatars.githubusercontent.com/u/1316043?s=72&u=c921fcf31b84b66f869df0071e17c737eddb3bf3&v=4" height="12" />
        <b>mimoo</b>
    </a></td><td>@zksecurity</td><td>New York</td><td>1.22K</td><td>62</td></tr><tr><td>120</td><td><a href="https://github.com/deshraj">
        <img src="https://avatars.githubusercontent.com/u/2945708?s=72&u=a8730b1c1234c70dbcaab019de44ac4afcd7d501&v=4" height="12" />
        <b>deshraj</b>
    </a></td><td>@mem0ai</td><td>San Francisco</td><td>1.19K</td><td>60</td></tr><tr><td>121</td><td><a href="https://github.com/felangel">
        <img src="https://avatars.githubusercontent.com/u/8855632?s=72&u=4a3d7c7d18ec5ead905d12f9ba8401f1de495d8b&v=4" height="12" />
        <b>felangel</b>
    </a></td><td>-</td><td>Chicago</td><td>9.17K</td><td>59</td></tr><tr><td>122</td><td><a href="https://github.com/jlowin">
        <img src="https://avatars.githubusercontent.com/u/153965?s=72&u=1eeda2a3053b2cfb4d2cc4bb206438612c4eef04&v=4" height="12" />
        <b>jlowin</b>
    </a></td><td>@PrefectHQ </td><td>Washington, DC</td><td>2.15K</td><td>59</td></tr><tr><td>123</td><td><a href="https://github.com/rebornix">
        <img src="https://avatars.githubusercontent.com/u/876920?s=72&v=4" height="12" />
        <b>rebornix</b>
    </a></td><td>Microsoft</td><td>Seattle</td><td>1.31K</td><td>59</td></tr><tr><td>124</td><td><a href="https://github.com/affaan-m">
        <img src="https://avatars.githubusercontent.com/u/124439313?s=72&u=aaeccd3ed8b81c97d4c29038d9e27a8ec506e865&v=4" height="12" />
        <b>affaan-m</b>
    </a></td><td>PMX</td><td>San Francisco, CA / Bellevue, WA</td><td>1.24K</td><td>59</td></tr><tr><td>125</td><td><a href="https://github.com/michaelficarra">
        <img src="https://avatars.githubusercontent.com/u/218840?s=72&u=d473d2de0596d110caab980fb5b4496b9cccf9d8&v=4" height="12" />
        <b>michaelficarra</b>
    </a></td><td>@shapesecurity, part of @f5networks</td><td>Colorado, USA</td><td>1.12K</td><td>59</td></tr><tr><td>126</td><td><a href="https://github.com/benbalter">
        <img src="https://avatars.githubusercontent.com/u/282759?s=72&u=54937909bd4dbb9a552fbeb49b197434e604b76b&v=4" height="12" />
        <b>benbalter</b>
    </a></td><td>@GitHub</td><td>Washington, DC</td><td>10.31K</td><td>58</td></tr><tr><td>127</td><td><a href="https://github.com/hmason">
        <img src="https://avatars.githubusercontent.com/u/17936?s=72&v=4" height="12" />
        <b>hmason</b>
    </a></td><td>Hidden Door</td><td>New York, NY</td><td>4.42K</td><td>58</td></tr><tr><td>128</td><td><a href="https://github.com/swannodette">
        <img src="https://avatars.githubusercontent.com/u/13516?s=72&u=d4b32c4b3c703a42094564713d162a8ddd05fc22&v=4" height="12" />
        <b>swannodette</b>
    </a></td><td>-</td><td>New York</td><td>4.36K</td><td>58</td></tr><tr><td>129</td><td><a href="https://github.com/rogerwang">
        <img src="https://avatars.githubusercontent.com/u/165401?s=72&v=4" height="12" />
        <b>rogerwang</b>
    </a></td><td>-</td><td>United States</td><td>3.25K</td><td>58</td></tr><tr><td>130</td><td><a href="https://github.com/dcramer">
        <img src="https://avatars.githubusercontent.com/u/23610?s=72&v=4" height="12" />
        <b>dcramer</b>
    </a></td><td>@getsentry</td><td>San Francisco, CA</td><td>3.15K</td><td>58</td></tr><tr><td>131</td><td><a href="https://github.com/ShangtongZhang">
        <img src="https://avatars.githubusercontent.com/u/6715118?s=72&u=b46d05479926b0a8b348026f4e71f328274c3c8f&v=4" height="12" />
        <b>ShangtongZhang</b>
    </a></td><td>University of Virginia</td><td>Charlottesville, VA, United States</td><td>2.52K</td><td>58</td></tr><tr><td>132</td><td><a href="https://github.com/Roasbeef">
        <img src="https://avatars.githubusercontent.com/u/998190?s=72&v=4" height="12" />
        <b>Roasbeef</b>
    </a></td><td>-</td><td>San Francisco</td><td>1.69K</td><td>58</td></tr><tr><td>133</td><td><a href="https://github.com/mokevnin">
        <img src="https://avatars.githubusercontent.com/u/308430?s=72&u=edefebf8e0cda646f81915575a0a2bf406a3f273&v=4" height="12" />
        <b>mokevnin</b>
    </a></td><td>Hexlet</td><td>Sunny Isles Beach, Fl, USA</td><td>1.16K</td><td>58</td></tr><tr><td>134</td><td><a href="https://github.com/TylerLeonhardt">
        <img src="https://avatars.githubusercontent.com/u/2644648?s=72&u=ebccd1380f75cc485b0654c883aa34edbbfc3b27&v=4" height="12" />
        <b>TylerLeonhardt</b>
    </a></td><td>@Microsoft @Visual-Studio-Code</td><td>United States</td><td>1.14K</td><td>58</td></tr><tr><td>135</td><td><a href="https://github.com/cameronmcefee">
        <img src="https://avatars.githubusercontent.com/u/72919?s=72&u=15d648157029cf8999bd246a95d77fd1561b3c89&v=4" height="12" />
        <b>cameronmcefee</b>
    </a></td><td>GitHub</td><td>San Francisco</td><td>1.07K</td><td>58</td></tr><tr><td>136</td><td><a href="https://github.com/chinmaygarde">
        <img src="https://avatars.githubusercontent.com/u/44085?s=72&u=0d4d2ac59f3ad098ad89fdef8802e3c4aff70960&v=4" height="12" />
        <b>chinmaygarde</b>
    </a></td><td>-</td><td>San Francisco, CA</td><td>1.06K</td><td>58</td></tr><tr><td>137</td><td><a href="https://github.com/pavelfeldman">
        <img src="https://avatars.githubusercontent.com/u/883973?s=72&v=4" height="12" />
        <b>pavelfeldman</b>
    </a></td><td>Microsoft</td><td>San Francisco Bay Area</td><td>1.05K</td><td>58</td></tr><tr><td>138</td><td><a href="https://github.com/romanmichaelpaolucci">
        <img src="https://avatars.githubusercontent.com/u/17343675?s=72&u=929740471fb0d73b49b381060bec12aeadc04da3&v=4" height="12" />
        <b>romanmichaelpaolucci</b>
    </a></td><td>@Quant-Guild</td><td>New York, NY</td><td>1.24K</td><td>53</td></tr><tr><td>139</td><td><a href="https://github.com/chrislusf">
        <img src="https://avatars.githubusercontent.com/u/1543151?s=72&u=b4788cca0e39aab9a6033218962aff65e0dff053&v=4" height="12" />
        <b>chrislusf</b>
    </a></td><td>-</td><td>San Francisco</td><td>2.84K</td><td>52</td></tr><tr><td>140</td><td><a href="https://github.com/ezyang">
        <img src="https://avatars.githubusercontent.com/u/13564?s=72&v=4" height="12" />
        <b>ezyang</b>
    </a></td><td>-</td><td>New York, NY</td><td>3.56K</td><td>51</td></tr><tr><td>141</td><td><a href="https://github.com/riverscuomo">
        <img src="https://avatars.githubusercontent.com/u/24362267?s=72&u=f8a8087612411f181210ca45f7131829eb0b263b&v=4" height="12" />
        <b>riverscuomo</b>
    </a></td><td>weezer</td><td>Los Angeles</td><td>3.16K</td><td>48</td></tr><tr><td>142</td><td><a href="https://github.com/borismus">
        <img src="https://avatars.githubusercontent.com/u/277632?s=72&u=bb2c5b541f3ee3c3ef0d5630250b9f1bf6d293a5&v=4" height="12" />
        <b>borismus</b>
    </a></td><td>-</td><td>Seattle</td><td>1.21K</td><td>47</td></tr><tr><td>143</td><td><a href="https://github.com/swyxio">
        <img src="https://avatars.githubusercontent.com/u/6764957?s=72&u=97ad815028595b73b06ee4b0510e66bbe391228d&v=4" height="12" />
        <b>swyxio</b>
    </a></td><td>smol.ai</td><td>San Francisco</td><td>7.25K</td><td>46</td></tr><tr><td>144</td><td><a href="https://github.com/mattmakai">
        <img src="https://avatars.githubusercontent.com/u/305282?s=72&u=6631d3e3752e0b91ece8c5c9403d26eb604a2029&v=4" height="12" />
        <b>mattmakai</b>
    </a></td><td>@launchdarkly</td><td>Washington, DC</td><td>1.51K</td><td>46</td></tr><tr><td>145</td><td><a href="https://github.com/stevekinney">
        <img src="https://avatars.githubusercontent.com/u/251000?s=72&u=744cf65c3cf52e36c61a990fcc8ca1e9db625a80&v=4" height="12" />
        <b>stevekinney</b>
    </a></td><td>-</td><td>Denver, Colorado, USA</td><td>3.4K</td><td>44</td></tr><tr><td>146</td><td><a href="https://github.com/gauntface">
        <img src="https://avatars.githubusercontent.com/u/139760?s=72&v=4" height="12" />
        <b>gauntface</b>
    </a></td><td>-</td><td>USA</td><td>1.08K</td><td>43</td></tr><tr><td>147</td><td><a href="https://github.com/pedronauck">
        <img src="https://avatars.githubusercontent.com/u/2029172?s=72&u=45c35fc80952dc9f35b93dfd0d22af6e5a760d01&v=4" height="12" />
        <b>pedronauck</b>
    </a></td><td>Compozy</td><td>San Francisco</td><td>2.19K</td><td>42</td></tr><tr><td>148</td><td><a href="https://github.com/wshobson">
        <img src="https://avatars.githubusercontent.com/u/553618?s=72&u=260f177b1d8737e10e1e7a07a188852479771ede&v=4" height="12" />
        <b>wshobson</b>
    </a></td><td>UDT | Major 7 Apps</td><td>NC, USA</td><td>1.43K</td><td>41</td></tr><tr><td>149</td><td><a href="https://github.com/hyperb1iss">
        <img src="https://avatars.githubusercontent.com/u/102151?s=72&u=c58674a24e82575091da1893726390b34e35fac2&v=4" height="12" />
        <b>hyperb1iss</b>
    </a></td><td>@gradial </td><td>Seattle, WA</td><td>2.67K</td><td>40</td></tr><tr><td>150</td><td><a href="https://github.com/searls">
        <img src="https://avatars.githubusercontent.com/u/79303?s=72&u=99e3bc7887879138e88a4538ca623b0a3d7538cb&v=4" height="12" />
        <b>searls</b>
    </a></td><td>@searlsco</td><td>Orlando, FL, USA</td><td>1.07K</td><td>39</td></tr><tr><td>151</td><td><a href="https://github.com/jethrokuan">
        <img src="https://avatars.githubusercontent.com/u/1667473?s=72&u=40997f60932070c577f9efcc9c3dc8a4028a8be1&v=4" height="12" />
        <b>jethrokuan</b>
    </a></td><td>@abnormal-security </td><td>San Francisco</td><td>1.26K</td><td>38</td></tr><tr><td>152</td><td><a href="https://github.com/leafo">
        <img src="https://avatars.githubusercontent.com/u/15198?s=72&u=10e02dc595fc7a9728ebc841eb12a11922b20637&v=4" height="12" />
        <b>leafo</b>
    </a></td><td>itch.zone</td><td>San Francisco</td><td>1.97K</td><td>37</td></tr><tr><td>153</td><td><a href="https://github.com/raxod502">
        <img src="https://avatars.githubusercontent.com/u/6559064?s=72&u=558e0407a91007c571648f4355c35f5d5f45df06&v=4" height="12" />
        <b>raxod502</b>
    </a></td><td>-</td><td>San Francisco, CA</td><td>1.54K</td><td>36</td></tr><tr><td>154</td><td><a href="https://github.com/TooTallNate">
        <img src="https://avatars.githubusercontent.com/u/71256?s=72&u=d6a9598cd7963ae290923ab12afeff947f542f80&v=4" height="12" />
        <b>TooTallNate</b>
    </a></td><td>@vercel </td><td>San Francisco, CA</td><td>6.44K</td><td>35</td></tr><tr><td>155</td><td><a href="https://github.com/liyin2015">
        <img src="https://avatars.githubusercontent.com/u/14322677?s=72&u=988ef4836ed1a63e06c8159daa1adc21f136983c&v=4" height="12" />
        <b>liyin2015</b>
    </a></td><td>SylphAI</td><td>San Francisco, California</td><td>1.14K</td><td>35</td></tr><tr><td>156</td><td><a href="https://github.com/creationix">
        <img src="https://avatars.githubusercontent.com/u/89353?s=72&u=04618167d8f04b9f4127d7718174cb13179051a8&v=4" height="12" />
        <b>creationix</b>
    </a></td><td>@vercel  </td><td>Mountainburg, AR, USA</td><td>5.26K</td><td>33</td></tr><tr><td>157</td><td><a href="https://github.com/kangax">
        <img src="https://avatars.githubusercontent.com/u/383?s=72&u=b13e9504cc41bc1c4441f4c49e1b67c10fa86ffb&v=4" height="12" />
        <b>kangax</b>
    </a></td><td>Facebook → WeWork → LinkedIn</td><td>New York</td><td>3.39K</td><td>33</td></tr><tr><td>158</td><td><a href="https://github.com/gr2m">
        <img src="https://avatars.githubusercontent.com/u/39992?s=72&u=1ee38610bb2d8a082b3e84db7ecacf78149d061b&v=4" height="12" />
        <b>gr2m</b>
    </a></td><td>@vercel @octokit @octoherd @probot @nock @semantic-release @AllContributors @hearts</td><td>Los Angeles</td><td>1.72K</td><td>32</td></tr><tr><td>159</td><td><a href="https://github.com/mxcl">
        <img src="https://avatars.githubusercontent.com/u/58962?s=72&u=33477efff17d27ee1c7fed995525c4294f305ebc&v=4" height="12" />
        <b>mxcl</b>
    </a></td><td>-</td><td>Apex, NC, USA</td><td>7.7K</td><td>31</td></tr><tr><td>160</td><td><a href="https://github.com/colebemis">
        <img src="https://avatars.githubusercontent.com/u/4608155?s=72&u=9840a5cec00c7cc06fcbab038a6a0976ced3bfad&v=4" height="12" />
        <b>colebemis</b>
    </a></td><td>Notion</td><td>San Francisco, CA</td><td>1.5K</td><td>31</td></tr><tr><td>161</td><td><a href="https://github.com/haydenbleasel">
        <img src="https://avatars.githubusercontent.com/u/4142719?s=72&u=729f703f50162a3da504fd7636a37efca7d9beeb&v=4" height="12" />
        <b>haydenbleasel</b>
    </a></td><td>@vercel</td><td>San Francisco, CA</td><td>1.24K</td><td>31</td></tr><tr><td>162</td><td><a href="https://github.com/jbranchaud">
        <img src="https://avatars.githubusercontent.com/u/694063?s=72&u=89fa47040e07830c648c881b1efada15d3993c6d&v=4" height="12" />
        <b>jbranchaud</b>
    </a></td><td>Independent, work with me --> visualmode.dev</td><td>Chicago, IL</td><td>1.16K</td><td>31</td></tr><tr><td>163</td><td><a href="https://github.com/mattgodbolt">
        <img src="https://avatars.githubusercontent.com/u/633973?s=72&u=a1add397724cf2e823847cb32da4c0261d62ce2e&v=4" height="12" />
        <b>mattgodbolt</b>
    </a></td><td>@compiler-explorer </td><td>Chicago, IL</td><td>4.06K</td><td>30</td></tr><tr><td>164</td><td><a href="https://github.com/shilman">
        <img src="https://avatars.githubusercontent.com/u/488689?s=72&u=f8d1033c37b25d2314552b72fcac9531ae44e4ea&v=4" height="12" />
        <b>shilman</b>
    </a></td><td>Lab80</td><td>San Francisco / Taipei</td><td>1.4K</td><td>30</td></tr><tr><td>165</td><td><a href="https://github.com/jackbereson">
        <img src="https://avatars.githubusercontent.com/u/18569187?s=72&u=f12541c3c8cbdbb4ec2064851cdb6cd692a9fbb3&v=4" height="12" />
        <b>jackbereson</b>
    </a></td><td>Blockify</td><td>United States</td><td>1.2K</td><td>30</td></tr><tr><td>166</td><td><a href="https://github.com/artem-zinnatullin">
        <img src="https://avatars.githubusercontent.com/u/967132?s=72&v=4" height="12" />
        <b>artem-zinnatullin</b>
    </a></td><td>Launch Fall 2025</td><td>Colorado, United States</td><td>1.09K</td><td>30</td></tr><tr><td>167</td><td><a href="https://github.com/charlax">
        <img src="https://avatars.githubusercontent.com/u/120501?s=72&v=4" height="12" />
        <b>charlax</b>
    </a></td><td>-</td><td>New York</td><td>2.47K</td><td>29</td></tr><tr><td>168</td><td><a href="https://github.com/peterbe">
        <img src="https://avatars.githubusercontent.com/u/26739?s=72&u=511ab747cb7c4bb783cf3f6ff1185c29b16bb376&v=4" height="12" />
        <b>peterbe</b>
    </a></td><td>GitHub</td><td>South Carolina, USA</td><td>1.4K</td><td>29</td></tr><tr><td>169</td><td><a href="https://github.com/jtauber">
        <img src="https://avatars.githubusercontent.com/u/24426?s=72&v=4" height="12" />
        <b>jtauber</b>
    </a></td><td>-</td><td>Greater Boston Area, US</td><td>1.3K</td><td>29</td></tr><tr><td>170</td><td><a href="https://github.com/Nutlope">
        <img src="https://avatars.githubusercontent.com/u/63742054?s=72&u=befe4ae74b906698be965bad482d0e02fc7707ab&v=4" height="12" />
        <b>Nutlope</b>
    </a></td><td>-</td><td>New York City, NY</td><td>7.76K</td><td>28</td></tr><tr><td>171</td><td><a href="https://github.com/maryrosecook">
        <img src="https://avatars.githubusercontent.com/u/2716?s=72&u=f7f4465635c06cb589291e6f694a4d44178f88f7&v=4" height="12" />
        <b>maryrosecook</b>
    </a></td><td>Notion</td><td>San Francisco</td><td>2.18K</td><td>28</td></tr><tr><td>172</td><td><a href="https://github.com/aslushnikov">
        <img src="https://avatars.githubusercontent.com/u/746130?s=72&u=bc83ba749f90def9710c03f1502595f1c3af49a9&v=4" height="12" />
        <b>aslushnikov</b>
    </a></td><td>@degulabs </td><td>San Francisco, CA</td><td>2.07K</td><td>27</td></tr><tr><td>173</td><td><a href="https://github.com/fulldecent">
        <img src="https://avatars.githubusercontent.com/u/382183?s=72&u=499298f335f6f4f2b2498c3510275590dd8e67fc&v=4" height="12" />
        <b>fulldecent</b>
    </a></td><td>paypal.me/fulldecent</td><td>Philadelphia USA</td><td>1.08K</td><td>27</td></tr><tr><td>174</td><td><a href="https://github.com/ianb">
        <img src="https://avatars.githubusercontent.com/u/44390?s=72&v=4" height="12" />
        <b>ianb</b>
    </a></td><td>-</td><td>Minneapolis, Minnesota, USA</td><td>1.07K</td><td>27</td></tr><tr><td>175</td><td><a href="https://github.com/vinniefalco">
        <img src="https://avatars.githubusercontent.com/u/1503976?s=72&u=4adad34ba11380e4b13abf141e8fe91ddd6aa427&v=4" height="12" />
        <b>vinniefalco</b>
    </a></td><td>https://cpp.al</td><td>Los Angeles, CA.</td><td>1.11K</td><td>26</td></tr><tr><td>176</td><td><a href="https://github.com/kennethreitz">
        <img src="https://avatars.githubusercontent.com/u/119893?s=72&u=bc80c390a9b84c559f5bf2d911d512de2bc13802&v=4" height="12" />
        <b>kennethreitz</b>
    </a></td><td>-</td><td>Virginia, USA, Earth, Milky Way.</td><td>29.76K</td><td>25</td></tr><tr><td>177</td><td><a href="https://github.com/lattner">
        <img src="https://avatars.githubusercontent.com/u/15152540?s=72&u=bb801174d6fe5cea542dfb3ff8c59a2b55c0b5e0&v=4" height="12" />
        <b>lattner</b>
    </a></td><td>-</td><td>Bay Area, California, USA</td><td>11.42K</td><td>25</td></tr><tr><td>178</td><td><a href="https://github.com/kevmoo">
        <img src="https://avatars.githubusercontent.com/u/17034?s=72&v=4" height="12" />
        <b>kevmoo</b>
    </a></td><td>@dart-lang @flutter @google</td><td>Seattle, WA, USA</td><td>2.37K</td><td>25</td></tr><tr><td>179</td><td><a href="https://github.com/KillianLucas">
        <img src="https://avatars.githubusercontent.com/u/63927363?s=72&u=9a5a30771011c3cfdde19cd51d18d85e7ed6d53f&v=4" height="12" />
        <b>KillianLucas</b>
    </a></td><td>-</td><td>Seattle, WA</td><td>2.27K</td><td>25</td></tr><tr><td>180</td><td><a href="https://github.com/frankmcsherry">
        <img src="https://avatars.githubusercontent.com/u/5741500?s=72&u=33e69eeeaae260b94c6fae4a2e15d36784b6dffe&v=4" height="12" />
        <b>frankmcsherry</b>
    </a></td><td>@MaterializeInc</td><td>New York, NY</td><td>1.85K</td><td>25</td></tr><tr><td>181</td><td><a href="https://github.com/mytechnotalent">
        <img src="https://avatars.githubusercontent.com/u/7095767?s=72&u=1365991cb5fb57aac63660b8b0ac89ef14b3ba12&v=4" height="12" />
        <b>mytechnotalent</b>
    </a></td><td>-</td><td>Washington, D.C.</td><td>1.53K</td><td>25</td></tr><tr><td>182</td><td><a href="https://github.com/brentp">
        <img src="https://avatars.githubusercontent.com/u/1739?s=72&u=f05ed5c6046f039a05492d43621aa08f53f37bbe&v=4" height="12" />
        <b>brentp</b>
    </a></td><td>-</td><td>Oregon, USA</td><td>1.42K</td><td>25</td></tr><tr><td>183</td><td><a href="https://github.com/ChristopherBiscardi">
        <img src="https://avatars.githubusercontent.com/u/551247?s=72&u=de2d43aeb37cd93ffbc46ed30a19e859bd07b07c&v=4" height="12" />
        <b>ChristopherBiscardi</b>
    </a></td><td>@rust-adventure </td><td>San Francisco</td><td>1.28K</td><td>25</td></tr><tr><td>184</td><td><a href="https://github.com/rodydavis">
        <img src="https://avatars.githubusercontent.com/u/31253215?s=72&u=e8a2701b44f7966e5cb95525413ab50600e99e4c&v=4" height="12" />
        <b>rodydavis</b>
    </a></td><td>@Google</td><td>San Francisco, CA</td><td>1.88K</td><td>24</td></tr><tr><td>185</td><td><a href="https://github.com/ttscoff">
        <img src="https://avatars.githubusercontent.com/u/47833?s=72&v=4" height="12" />
        <b>ttscoff</b>
    </a></td><td>-</td><td>Winona, MN USA</td><td>1.86K</td><td>24</td></tr><tr><td>186</td><td><a href="https://github.com/auchenberg">
        <img src="https://avatars.githubusercontent.com/u/173559?s=72&u=c286bc203ceaa0dcd3b9a9ba9863f74d27f1cbd1&v=4" height="12" />
        <b>auchenberg</b>
    </a></td><td>-</td><td>New York, US</td><td>1.18K</td><td>24</td></tr><tr><td>187</td><td><a href="https://github.com/devongovett">
        <img src="https://avatars.githubusercontent.com/u/19409?s=72&u=16bbca03b15ec1cd3ec4f7cdddc4164ab6c8e425&v=4" height="12" />
        <b>devongovett</b>
    </a></td><td>Adobe</td><td>San Francisco</td><td>3.78K</td><td>23</td></tr><tr><td>188</td><td><a href="https://github.com/eligrey">
        <img src="https://avatars.githubusercontent.com/u/46995?s=72&u=21a18bc04d50e86a2c2d8783877d2b070ea5a0f6&v=4" height="12" />
        <b>eligrey</b>
    </a></td><td>@transcend-io</td><td>San Francisco, CA</td><td>1.43K</td><td>23</td></tr><tr><td>189</td><td><a href="https://github.com/kdn251">
        <img src="https://avatars.githubusercontent.com/u/16903644?s=72&u=7ae585948bc92fb0986bc73b7d38660718aefff1&v=4" height="12" />
        <b>kdn251</b>
    </a></td><td>Google</td><td>New York, New York</td><td>4.65K</td><td>22</td></tr><tr><td>190</td><td><a href="https://github.com/topfunky">
        <img src="https://avatars.githubusercontent.com/u/26?s=72&u=fd35cfe4e635388710c9e186ac206986db798656&v=4" height="12" />
        <b>topfunky</b>
    </a></td><td>@datadog</td><td>Seattle, USA</td><td>1.42K</td><td>22</td></tr><tr><td>191</td><td><a href="https://github.com/adamdotdevin">
        <img src="https://avatars.githubusercontent.com/u/2363879?s=72&u=4d65cd9ffa79fc8a53ba10a3a716f985fc8c20a0&v=4" height="12" />
        <b>adamdotdevin</b>
    </a></td><td>-</td><td>United States</td><td>1.41K</td><td>22</td></tr><tr><td>192</td><td><a href="https://github.com/iheanyi">
        <img src="https://avatars.githubusercontent.com/u/956631?s=72&u=9eca3e0d514479f4050ebc911e0725541603f13e&v=4" height="12" />
        <b>iheanyi</b>
    </a></td><td>-</td><td>Houston, TX</td><td>1.44K</td><td>21</td></tr><tr><td>193</td><td><a href="https://github.com/lostintangent">
        <img src="https://avatars.githubusercontent.com/u/116461?s=72&u=61900b2811f407391b9a5fddfe78a97198c1c2d6&v=4" height="12" />
        <b>lostintangent</b>
    </a></td><td>GitHub</td><td>Seattle, WA</td><td>1.31K</td><td>21</td></tr><tr><td>194</td><td><a href="https://github.com/veler">
        <img src="https://avatars.githubusercontent.com/u/3747805?s=72&u=044bffcd8836f3a15f9f26378a9d7c85c5cffcfe&v=4" height="12" />
        <b>veler</b>
    </a></td><td>@microsoft</td><td>Seattle, WA</td><td>1.3K</td><td>21</td></tr><tr><td>195</td><td><a href="https://github.com/dataprofessor">
        <img src="https://avatars.githubusercontent.com/u/51851491?s=72&u=dd40802af100a9f627a92ed707e997c2528c7b07&v=4" height="12" />
        <b>dataprofessor</b>
    </a></td><td>Streamlit Inc.</td><td>USA</td><td>9.29K</td><td>20</td></tr><tr><td>196</td><td><a href="https://github.com/colesbury">
        <img src="https://avatars.githubusercontent.com/u/655866?s=72&u=b622ef6e3c8ace6e7ffe49e1cf8ca164d94c0867&v=4" height="12" />
        <b>colesbury</b>
    </a></td><td>Meta</td><td>New York</td><td>1.86K</td><td>20</td></tr><tr><td>197</td><td><a href="https://github.com/lalalune">
        <img src="https://avatars.githubusercontent.com/u/18633264?s=72&u=e2e906c3712c2506ebfa98df01c2cfdc50050b30&v=4" height="12" />
        <b>lalalune</b>
    </a></td><td>Eliza Labs</td><td>San Francisco</td><td>1.84K</td><td>20</td></tr><tr><td>198</td><td><a href="https://github.com/TheCodeTraveler">
        <img src="https://avatars.githubusercontent.com/u/13558917?s=72&u=6e0d77ca0420f418c8ad5110cb155dea5d427a35&v=4" height="12" />
        <b>TheCodeTraveler</b>
    </a></td><td>Formery @Microsoft, @XamarinHQ, @AWS</td><td>San Francisco Bay Area, CA</td><td>1.19K</td><td>20</td></tr><tr><td>199</td><td><a href="https://github.com/colinhacks">
        <img src="https://avatars.githubusercontent.com/u/3084745?s=72&u=00ba705b6a5ceaa3b4c5f3582ddb944f891f8847&v=4" height="12" />
        <b>colinhacks</b>
    </a></td><td>-</td><td>Seattle, WA</td><td>3.59K</td><td>19</td></tr><tr><td>200</td><td><a href="https://github.com/andymatuschak">
        <img src="https://avatars.githubusercontent.com/u/2771?s=72&v=4" height="12" />
        <b>andymatuschak</b>
    </a></td><td>-</td><td>San Francisco, CA</td><td>3.31K</td><td>19</td></tr><tr><td>201</td><td><a href="https://github.com/holdenk">
        <img src="https://avatars.githubusercontent.com/u/59893?s=72&v=4" height="12" />
        <b>holdenk</b>
    </a></td><td>Open Source Big Data Dev</td><td>San Francisco, CA, USA</td><td>2.54K</td><td>19</td></tr><tr><td>202</td><td><a href="https://github.com/zhaochenyang20">
        <img src="https://avatars.githubusercontent.com/u/74843776?s=72&u=5d11cbd6799102bca437e5aa67ecece9316a7a7f&v=4" height="12" />
        <b>zhaochenyang20</b>
    </a></td><td>University of California, Los Angeles</td><td>Los Angeles</td><td>1.93K</td><td>19</td></tr><tr><td>203</td><td><a href="https://github.com/bkaradzic">
        <img src="https://avatars.githubusercontent.com/u/814772?s=72&u=ea3f41b56f21a99b12b8a35df0a27456a3bf9019&v=4" height="12" />
        <b>bkaradzic</b>
    </a></td><td>-</td><td>Los Angeles, CA</td><td>1.8K</td><td>18</td></tr><tr><td>204</td><td><a href="https://github.com/ngsnethawarya">
        <img src="https://avatars.githubusercontent.com/u/192052237?s=72&u=ac950295c7ebc212da6d598599fa4d1ef79a0d67&v=4" height="12" />
        <b>ngsnethawarya</b>
    </a></td><td>-</td><td>United States</td><td>1.35K</td><td>18</td></tr><tr><td>205</td><td><a href="https://github.com/cassidoo">
        <img src="https://avatars.githubusercontent.com/u/1454517?s=72&u=92a133438fecfefc65c4c73143a0f717bd5e7515&v=4" height="12" />
        <b>cassidoo</b>
    </a></td><td>GitHub</td><td>Chicago, IL</td><td>14.57K</td><td>17</td></tr><tr><td>206</td><td><a href="https://github.com/adeshpande3">
        <img src="https://avatars.githubusercontent.com/u/13543909?s=72&u=fe0666f653498f908832d8685b50e268f98041a0&v=4" height="12" />
        <b>adeshpande3</b>
    </a></td><td>Verse Medical</td><td>San Francisco, CA</td><td>3.75K</td><td>17</td></tr><tr><td>207</td><td><a href="https://github.com/zeux">
        <img src="https://avatars.githubusercontent.com/u/1106629?s=72&u=620ee97d58fc4c0e915bc36c992c86e94bd76efe&v=4" height="12" />
        <b>zeux</b>
    </a></td><td>-</td><td>San Francisco</td><td>3.03K</td><td>17</td></tr><tr><td>208</td><td><a href="https://github.com/jendewalt">
        <img src="https://avatars.githubusercontent.com/u/3196668?s=72&u=8d656e79861039f03ca38447808b1bc1c9d2963d&v=4" height="12" />
        <b>jendewalt</b>
    </a></td><td>Zube</td><td>SF, United States</td><td>2.96K</td><td>17</td></tr><tr><td>209</td><td><a href="https://github.com/DruidMech">
        <img src="https://avatars.githubusercontent.com/u/45446093?s=72&u=792fc7e6d2c34e37430de862ccd1a94205d6f92d&v=4" height="12" />
        <b>DruidMech</b>
    </a></td><td>-</td><td>US</td><td>1.74K</td><td>17</td></tr><tr><td>210</td><td><a href="https://github.com/braydoncoyer">
        <img src="https://avatars.githubusercontent.com/u/38799309?s=72&u=6643dac14427a610d47b99035aad058eb5e56c8b&v=4" height="12" />
        <b>braydoncoyer</b>
    </a></td><td>-</td><td>Dallas</td><td>1.1K</td><td>17</td></tr><tr><td>211</td><td><a href="https://github.com/tenderlove">
        <img src="https://avatars.githubusercontent.com/u/3124?s=72&u=6ece6a5a8b8ea32c5fa94c325d151bc01d1e44e8&v=4" height="12" />
        <b>tenderlove</b>
    </a></td><td>@Shopify</td><td>Seattle</td><td>9.59K</td><td>16</td></tr><tr><td>212</td><td><a href="https://github.com/cvander">
        <img src="https://avatars.githubusercontent.com/u/112621?s=72&u=5cd2eb14d29778322438a7e72687fca28f8fcfc8&v=4" height="12" />
        <b>cvander</b>
    </a></td><td>-</td><td>San Francisco, CA</td><td>1.98K</td><td>16</td></tr><tr><td>213</td><td><a href="https://github.com/c4pt0r">
        <img src="https://avatars.githubusercontent.com/u/773853?s=72&v=4" height="12" />
        <b>c4pt0r</b>
    </a></td><td>PingCAP</td><td>San Francisco Bay Area</td><td>1.66K</td><td>16</td></tr><tr><td>214</td><td><a href="https://github.com/skyzh">
        <img src="https://avatars.githubusercontent.com/u/4198311?s=72&u=2ac9e680a85102d008181a2526d5ae10f188ed19&v=4" height="12" />
        <b>skyzh</b>
    </a></td><td>Databricks 🧱</td><td>Bellevue, WA, USA ⇌ Shanghai, China</td><td>8.23K</td><td>15</td></tr><tr><td>215</td><td><a href="https://github.com/benjamn">
        <img src="https://avatars.githubusercontent.com/u/5750?s=72&u=95c71e43d35f4b2f7ea95474f5058bb51986f556&v=4" height="12" />
        <b>benjamn</b>
    </a></td><td>Apollo Graph, Inc (formerly: Meteor, Facebook/Instagram, Quora, Mozilla)</td><td>New York City</td><td>2.88K</td><td>15</td></tr><tr><td>216</td><td><a href="https://github.com/Alex313031">
        <img src="https://avatars.githubusercontent.com/u/45863095?s=72&u=b5ee4b1846c3d746115adbbe41201bb6817b375c&v=4" height="12" />
        <b>Alex313031</b>
    </a></td><td>thorium-dev</td><td>USA</td><td>1.82K</td><td>15</td></tr><tr><td>217</td><td><a href="https://github.com/fafhrd91">
        <img src="https://avatars.githubusercontent.com/u/598990?s=72&v=4" height="12" />
        <b>fafhrd91</b>
    </a></td><td>Microsoft</td><td>San Francisco, US</td><td>1.49K</td><td>15</td></tr><tr><td>218</td><td><a href="https://github.com/ry">
        <img src="https://avatars.githubusercontent.com/u/80?s=72&v=4" height="12" />
        <b>ry</b>
    </a></td><td>@denoland </td><td>New York City</td><td>33.01K</td><td>14</td></tr><tr><td>219</td><td><a href="https://github.com/norvig">
        <img src="https://avatars.githubusercontent.com/u/4370220?s=72&v=4" height="12" />
        <b>norvig</b>
    </a></td><td>Google</td><td>Palo Alto, CA, USA</td><td>9.71K</td><td>14</td></tr><tr><td>220</td><td><a href="https://github.com/KeithGalli">
        <img src="https://avatars.githubusercontent.com/u/6260748?s=72&u=2fd6160cb60d6b25c5a5dcfa66cad2bb431e7a3e&v=4" height="12" />
        <b>KeithGalli</b>
    </a></td><td>-</td><td>Boston, MA</td><td>6.42K</td><td>14</td></tr><tr><td>221</td><td><a href="https://github.com/t3dotgg">
        <img src="https://avatars.githubusercontent.com/u/6751787?s=72&u=69a6486b20fc980615e51457f6a5b56103cea295&v=4" height="12" />
        <b>t3dotgg</b>
    </a></td><td>CEO @ Ping.gg</td><td>San Francisco, CA</td><td>16.56K</td><td>13</td></tr><tr><td>222</td><td><a href="https://github.com/danijar">
        <img src="https://avatars.githubusercontent.com/u/2111293?s=72&u=ab16f8dc9000d2aa5a6e193fb22fe246ebd01a74&v=4" height="12" />
        <b>danijar</b>
    </a></td><td>DeepMind</td><td>San Francisco</td><td>2.18K</td><td>13</td></tr><tr><td>223</td><td><a href="https://github.com/nickjj">
        <img src="https://avatars.githubusercontent.com/u/813219?s=72&u=4071d58beb4b2fd0f75b47a1653ee5ea9b4a6261&v=4" height="12" />
        <b>nickjj</b>
    </a></td><td>-</td><td>New York</td><td>1.72K</td><td>13</td></tr><tr><td>224</td><td><a href="https://github.com/kylebarron">
        <img src="https://avatars.githubusercontent.com/u/15164633?s=72&u=560350ef0d706c8538b3a4dbe202ea07a709505a&v=4" height="12" />
        <b>kylebarron</b>
    </a></td><td>@developmentseed</td><td>New York, New York</td><td>1.23K</td><td>13</td></tr><tr><td>225</td><td><a href="https://github.com/wongmjane">
        <img src="https://avatars.githubusercontent.com/u/1332975?s=72&u=82cd479f68507d128c243ca259bd68e7393ddceb&v=4" height="12" />
        <b>wongmjane</b>
    </a></td><td>-</td><td>San Francisco</td><td>1.34K</td><td>12</td></tr><tr><td>226</td><td><a href="https://github.com/LadyKerr">
        <img src="https://avatars.githubusercontent.com/u/47188731?s=72&u=5e350a156c71137d5eb1456745619cd6ab9cbae7&v=4" height="12" />
        <b>LadyKerr</b>
    </a></td><td>Developer Advocate</td><td>Chicago, IL</td><td>1.15K</td><td>12</td></tr><tr><td>227</td><td><a href="https://github.com/acdlite">
        <img src="https://avatars.githubusercontent.com/u/3624098?s=72&u=94d8ba563cef4d8fd24c4b666272a71af46a2fa1&v=4" height="12" />
        <b>acdlite</b>
    </a></td><td>@vercel </td><td>New York</td><td>14.89K</td><td>11</td></tr><tr><td>228</td><td><a href="https://github.com/felixrieseberg">
        <img src="https://avatars.githubusercontent.com/u/1426799?s=72&u=4f954e789d82f34fdc808de92622fb0e22996032&v=4" height="12" />
        <b>felixrieseberg</b>
    </a></td><td>Anthropic</td><td>San Francisco</td><td>5.33K</td><td>11</td></tr><tr><td>229</td><td><a href="https://github.com/tholman">
        <img src="https://avatars.githubusercontent.com/u/794999?s=72&u=bd9d5e26bab0305623f5b1adf6eeffb3b445ef21&v=4" height="12" />
        <b>tholman</b>
    </a></td><td>-</td><td>New York</td><td>4.25K</td><td>11</td></tr><tr><td>230</td><td><a href="https://github.com/leereilly">
        <img src="https://avatars.githubusercontent.com/u/121322?s=72&u=dace6bc679e551a0876fb357304e337aa5539dc0&v=4" height="12" />
        <b>leereilly</b>
    </a></td><td>GitHub</td><td>San Francisco, CA</td><td>2.34K</td><td>11</td></tr><tr><td>231</td><td><a href="https://github.com/Iron-Ham">
        <img src="https://avatars.githubusercontent.com/u/3388381?s=72&u=767aeeb299a41613663a3408c68cb10cafca079d&v=4" height="12" />
        <b>Iron-Ham</b>
    </a></td><td>@makenotion</td><td>New York</td><td>2.11K</td><td>11</td></tr><tr><td>232</td><td><a href="https://github.com/mike-north">
        <img src="https://avatars.githubusercontent.com/u/558005?s=72&u=a27f905c8f24e1ad227d32905fa5512fd615153d&v=4" height="12" />
        <b>mike-north</b>
    </a></td><td>@Stripe</td><td>USA</td><td>2K</td><td>11</td></tr><tr><td>233</td><td><a href="https://github.com/bqi343">
        <img src="https://avatars.githubusercontent.com/u/21228024?s=72&v=4" height="12" />
        <b>bqi343</b>
    </a></td><td>-</td><td>USA</td><td>1.9K</td><td>11</td></tr><tr><td>234</td><td><a href="https://github.com/derailed">
        <img src="https://avatars.githubusercontent.com/u/4060?s=72&u=da7d94a90451eff23ec09dc1764d9104800448c9&v=4" height="12" />
        <b>derailed</b>
    </a></td><td>Imhotep Software</td><td>Colorado, US</td><td>1.78K</td><td>11</td></tr><tr><td>235</td><td><a href="https://github.com/evanphx">
        <img src="https://avatars.githubusercontent.com/u/7?s=72&v=4" height="12" />
        <b>evanphx</b>
    </a></td><td>@mirendev </td><td>Los Angeles, CA</td><td>1.74K</td><td>11</td></tr><tr><td>236</td><td><a href="https://github.com/ternaus">
        <img src="https://avatars.githubusercontent.com/u/5481618?s=72&u=513a26b02a39e7a28d587cd37c6cc877ea368e6e&v=4" height="12" />
        <b>ternaus</b>
    </a></td><td>Albumentations.AI</td><td>San Francisco</td><td>1.66K</td><td>11</td></tr><tr><td>237</td><td><a href="https://github.com/ngokevin">
        <img src="https://avatars.githubusercontent.com/u/674727?s=72&u=4e38d7f90ff58e6d82b8f82eafee135ed06facaa&v=4" height="12" />
        <b>ngokevin</b>
    </a></td><td>-</td><td>Los Angeles, CA</td><td>1.37K</td><td>11</td></tr><tr><td>238</td><td><a href="https://github.com/masonliiu">
        <img src="https://avatars.githubusercontent.com/u/138553405?s=72&u=01a32c9ea9023bea68320dd39178fc54a36d99bd&v=4" height="12" />
        <b>masonliiu</b>
    </a></td><td>-</td><td>dallas, texas</td><td>1.17K</td><td>11</td></tr><tr><td>239</td><td><a href="https://github.com/jamtur01">
        <img src="https://avatars.githubusercontent.com/u/4365?s=72&u=a3c633a6c5302d5bdd448213321350f4bf566eeb&v=4" height="12" />
        <b>jamtur01</b>
    </a></td><td>-</td><td>Brooklyn, New York</td><td>1.15K</td><td>11</td></tr><tr><td>240</td><td><a href="https://github.com/chiphuyen">
        <img src="https://avatars.githubusercontent.com/u/11997567?s=72&u=53a5591a265a57dc2edc648ebdce277317101c14&v=4" height="12" />
        <b>chiphuyen</b>
    </a></td><td>-</td><td>San Francisco</td><td>21.73K</td><td>10</td></tr><tr><td>241</td><td><a href="https://github.com/abhshkdz">
        <img src="https://avatars.githubusercontent.com/u/1156489?s=72&u=515c5c6dd12a34a76aeac615e078363794d61f2a&v=4" height="12" />
        <b>abhshkdz</b>
    </a></td><td>Yutori</td><td>San Francisco</td><td>1.85K</td><td>10</td></tr><tr><td>242</td><td><a href="https://github.com/r00k">
        <img src="https://avatars.githubusercontent.com/u/46677?s=72&u=96a0ff48077d3a9544e5fe03c2ed887dafe52554&v=4" height="12" />
        <b>r00k</b>
    </a></td><td>@tupleapp </td><td>Boston, MA</td><td>1.59K</td><td>10</td></tr><tr><td>243</td><td><a href="https://github.com/mattetti">
        <img src="https://avatars.githubusercontent.com/u/113?s=72&u=adfa5c9ff29ad74a3c8e786b6070c60ccf0ac8d6&v=4" height="12" />
        <b>mattetti</b>
    </a></td><td>@Splice</td><td>Los Angeles, CA</td><td>1.12K</td><td>10</td></tr><tr><td>244</td><td><a href="https://github.com/papamuziko">
        <img src="https://avatars.githubusercontent.com/u/2531536?s=72&u=d245b46f38f695ec21429958ed6ed7d0b9dc9586&v=4" height="12" />
        <b>papamuziko</b>
    </a></td><td>ALX</td><td>San Francisco</td><td>1.11K</td><td>10</td></tr><tr><td>245</td><td><a href="https://github.com/hak5darren">
        <img src="https://avatars.githubusercontent.com/u/1307248?s=72&v=4" height="12" />
        <b>hak5darren</b>
    </a></td><td>Hak5 LLC</td><td>San Francisco, CA</td><td>5.75K</td><td>9</td></tr><tr><td>246</td><td><a href="https://github.com/sferik">
        <img src="https://avatars.githubusercontent.com/u/10308?s=72&u=5a2785be9d9bf021907c5c53dc1345edd137604c&v=4" height="12" />
        <b>sferik</b>
    </a></td><td>-</td><td>San Francisco</td><td>2.63K</td><td>9</td></tr><tr><td>247</td><td><a href="https://github.com/BradLarson">
        <img src="https://avatars.githubusercontent.com/u/954279?s=72&u=60fcccef437c761cf190b0da5b29802fc637e55d&v=4" height="12" />
        <b>BradLarson</b>
    </a></td><td>Modular</td><td>Madison, WI USA</td><td>2.24K</td><td>9</td></tr><tr><td>248</td><td><a href="https://github.com/jxnl">
        <img src="https://avatars.githubusercontent.com/u/4852235?s=72&u=f3927adbaafbeaccd6fd4d0bc805414ef08b8b54&v=4" height="12" />
        <b>jxnl</b>
    </a></td><td>567 Studio</td><td>New York, NY</td><td>1.81K</td><td>9</td></tr><tr><td>249</td><td><a href="https://github.com/jdegoes">
        <img src="https://avatars.githubusercontent.com/u/156745?s=72&u=dd408db30ee4d9b5ccbca12ddd3a93a0d9ca0e97&v=4" height="12" />
        <b>jdegoes</b>
    </a></td><td>Ziverge Inc.</td><td>Maryland, USA</td><td>1.72K</td><td>9</td></tr><tr><td>250</td><td><a href="https://github.com/gvanrossum">
        <img src="https://avatars.githubusercontent.com/u/2894642?s=72&u=3fd95e46e081102446b1ebdf31e1cf3d77406c0b&v=4" height="12" />
        <b>gvanrossum</b>
    </a></td><td>Microsoft</td><td>San Francisco Bay Area</td><td>25.62K</td><td>8</td></tr><tr><td>251</td><td><a href="https://github.com/Trinkle23897">
        <img src="https://avatars.githubusercontent.com/u/8189182?s=72&v=4" height="12" />
        <b>Trinkle23897</b>
    </a></td><td>@openai </td><td>San Francisco</td><td>6.25K</td><td>8</td></tr><tr><td>252</td><td><a href="https://github.com/zodiacon">
        <img src="https://avatars.githubusercontent.com/u/4227784?s=72&u=61eb6f40dc2f7fdf010001f1a1bd7781150b3b0f&v=4" height="12" />
        <b>zodiacon</b>
    </a></td><td>Trainsec.net</td><td>United States</td><td>3.72K</td><td>8</td></tr><tr><td>253</td><td><a href="https://github.com/andrewgodwin">
        <img src="https://avatars.githubusercontent.com/u/36182?s=72&v=4" height="12" />
        <b>andrewgodwin</b>
    </a></td><td>-</td><td>Denver, CO, USA</td><td>2.57K</td><td>8</td></tr><tr><td>254</td><td><a href="https://github.com/JimLiu">
        <img src="https://avatars.githubusercontent.com/u/648674?s=72&v=4" height="12" />
        <b>JimLiu</b>
    </a></td><td>-</td><td>Chicago, IL</td><td>2.13K</td><td>8</td></tr><tr><td>255</td><td><a href="https://github.com/dherman">
        <img src="https://avatars.githubusercontent.com/u/307871?s=72&u=b660aacb665f9522f41b5cb255638ae3180c9830&v=4" height="12" />
        <b>dherman</b>
    </a></td><td>LinkedIn</td><td>San Francisco, CA</td><td>1.77K</td><td>8</td></tr><tr><td>256</td><td><a href="https://github.com/KindXiaoming">
        <img src="https://avatars.githubusercontent.com/u/23551623?s=72&u=b46729dedf335a026ac9d66ca089224737ec0829&v=4" height="12" />
        <b>KindXiaoming</b>
    </a></td><td>Massachusetts Institute of Technology</td><td>MA, USA</td><td>1.67K</td><td>8</td></tr><tr><td>257</td><td><a href="https://github.com/Fryingpannn">
        <img src="https://avatars.githubusercontent.com/u/59063950?s=72&u=96c57758d895c52bf382ec53a69bfe4c6e75c76b&v=4" height="12" />
        <b>Fryingpannn</b>
    </a></td><td>-</td><td>New York</td><td>1.48K</td><td>8</td></tr><tr><td>258</td><td><a href="https://github.com/tpn">
        <img src="https://avatars.githubusercontent.com/u/629986?s=72&u=a4bf017f389eb07e5f9fc588711e7d14e032ad9e&v=4" height="12" />
        <b>tpn</b>
    </a></td><td>NVIDIA</td><td>Seattle, WA</td><td>1.12K</td><td>8</td></tr><tr><td>259</td><td><a href="https://github.com/sqshq">
        <img src="https://avatars.githubusercontent.com/u/6069066?s=72&u=bbe61112bbc78f4a2d7ff642040a2998229dcea2&v=4" height="12" />
        <b>sqshq</b>
    </a></td><td>-</td><td>San Francisco Bay Area</td><td>1.08K</td><td>8</td></tr><tr><td>260</td><td><a href="https://github.com/rakyll">
        <img src="https://avatars.githubusercontent.com/u/108380?s=72&u=75f5a9892cdd26873b38d15bcfac91e4836404ae&v=4" height="12" />
        <b>rakyll</b>
    </a></td><td>Google</td><td>San Francisco, CA</td><td>12.96K</td><td>7</td></tr><tr><td>261</td><td><a href="https://github.com/mnielsen">
        <img src="https://avatars.githubusercontent.com/u/52171?s=72&v=4" height="12" />
        <b>mnielsen</b>
    </a></td><td>-</td><td>San Francisco, California</td><td>11.65K</td><td>7</td></tr><tr><td>262</td><td><a href="https://github.com/jxnblk">
        <img src="https://avatars.githubusercontent.com/u/3451712?s=72&u=f6f9aee58f995c8b14827a9c3c1277adaf5d84fc&v=4" height="12" />
        <b>jxnblk</b>
    </a></td><td>-</td><td>New York City</td><td>6.09K</td><td>7</td></tr><tr><td>263</td><td><a href="https://github.com/robbyrussell">
        <img src="https://avatars.githubusercontent.com/u/257?s=72&u=5c604a719e45d97c1f13ddb3803ffc08cf7a23c1&v=4" height="12" />
        <b>robbyrussell</b>
    </a></td><td>@planetargon </td><td>Portland, Oregon USA</td><td>4.97K</td><td>7</td></tr><tr><td>264</td><td><a href="https://github.com/brendandburns">
        <img src="https://avatars.githubusercontent.com/u/5751682?s=72&u=fdc4911e45896b06d1ff1ee529f7fd0957db5566&v=4" height="12" />
        <b>brendandburns</b>
    </a></td><td>Microsoft</td><td>Seattle, WA</td><td>3.33K</td><td>7</td></tr><tr><td>265</td><td><a href="https://github.com/keon">
        <img src="https://avatars.githubusercontent.com/u/10793962?s=72&u=07e9af49961d7e303eb5e8ad9cee11a1f20500ce&v=4" height="12" />
        <b>keon</b>
    </a></td><td>Om Labs</td><td>New York City</td><td>2.98K</td><td>7</td></tr><tr><td>266</td><td><a href="https://github.com/SylvanFranklin">
        <img src="https://avatars.githubusercontent.com/u/103258778?s=72&u=d91539e5dd98960544625298eba8decdaf862bfe&v=4" height="12" />
        <b>SylvanFranklin</b>
    </a></td><td>-</td><td>Burlington Vermont, USA</td><td>2.56K</td><td>7</td></tr><tr><td>267</td><td><a href="https://github.com/edemaine">
        <img src="https://avatars.githubusercontent.com/u/2218736?s=72&v=4" height="12" />
        <b>edemaine</b>
    </a></td><td>Massachusetts Institute of Technology</td><td>Cambridge, Massachusetts, USA</td><td>2.52K</td><td>7</td></tr><tr><td>268</td><td><a href="https://github.com/0vercl0k">
        <img src="https://avatars.githubusercontent.com/u/1476421?s=72&u=dbf0bb2a669dcb2bcbd04ee640f67740ac6d346d&v=4" height="12" />
        <b>0vercl0k</b>
    </a></td><td>-</td><td>US/FR</td><td>2.49K</td><td>7</td></tr><tr><td>269</td><td><a href="https://github.com/indexzero">
        <img src="https://avatars.githubusercontent.com/u/4624?s=72&v=4" height="12" />
        <b>indexzero</b>
    </a></td><td>-</td><td>New York, NY</td><td>2.44K</td><td>7</td></tr><tr><td>270</td><td><a href="https://github.com/dgadiraju">
        <img src="https://avatars.githubusercontent.com/u/6260409?s=72&u=354c341315e1858df017eb15868a5d7fd875ed7d&v=4" height="12" />
        <b>dgadiraju</b>
    </a></td><td>IT Versity</td><td>Dallas TX</td><td>2.34K</td><td>7</td></tr><tr><td>271</td><td><a href="https://github.com/kriskowal">
        <img src="https://avatars.githubusercontent.com/u/60294?s=72&u=e377b1f2e2871e30b170a4535bacb403ba8189f7&v=4" height="12" />
        <b>kriskowal</b>
    </a></td><td>-</td><td>San Francisco Bay Area, CA, USA</td><td>2.23K</td><td>7</td></tr><tr><td>272</td><td><a href="https://github.com/benhalpern">
        <img src="https://avatars.githubusercontent.com/u/3102842?s=72&u=9dfdf168b1efd5a1ea509a6f733a4a65f2f69908&v=4" height="12" />
        <b>benhalpern</b>
    </a></td><td>Forem</td><td>New York</td><td>2.08K</td><td>7</td></tr><tr><td>273</td><td><a href="https://github.com/mattjj">
        <img src="https://avatars.githubusercontent.com/u/1458824?s=72&u=5eef860ff580ed2b87adbd823cf58b3d461b4c7a&v=4" height="12" />
        <b>mattjj</b>
    </a></td><td>Google</td><td>San Francisco</td><td>2.03K</td><td>7</td></tr><tr><td>274</td><td><a href="https://github.com/estelle">
        <img src="https://avatars.githubusercontent.com/u/69888?s=72&v=4" height="12" />
        <b>estelle</b>
    </a></td><td>Standardista</td><td>California, USA</td><td>1.79K</td><td>7</td></tr><tr><td>275</td><td><a href="https://github.com/richlander">
        <img src="https://avatars.githubusercontent.com/u/2608468?s=72&u=8344507340302c70f124f9c9b5a48a42afedb04e&v=4" height="12" />
        <b>richlander</b>
    </a></td><td>@dotnet </td><td>Seattle / Toronto</td><td>1.58K</td><td>7</td></tr><tr><td>276</td><td><a href="https://github.com/aeyakovenko">
        <img src="https://avatars.githubusercontent.com/u/1029046?s=72&u=6dac1d13afdabb7943bfa9731137c60e0508d16c&v=4" height="12" />
        <b>aeyakovenko</b>
    </a></td><td>@solana-labs  </td><td>san francisco</td><td>1.5K</td><td>7</td></tr><tr><td>277</td><td><a href="https://github.com/Daniel15">
        <img src="https://avatars.githubusercontent.com/u/91933?s=72&u=13584ac6a9f66c40a2ae30fce469e2ce11c5709d&v=4" height="12" />
        <b>Daniel15</b>
    </a></td><td>@Facebook</td><td>San Francisco Bay Area</td><td>1.47K</td><td>7</td></tr><tr><td>278</td><td><a href="https://github.com/losfair">
        <img src="https://avatars.githubusercontent.com/u/6104981?s=72&u=6463c569f9f38a409ce1923b2c2c7240fc304661&v=4" height="12" />
        <b>losfair</b>
    </a></td><td>@AFK-surf</td><td>San Francisco</td><td>1.41K</td><td>7</td></tr><tr><td>279</td><td><a href="https://github.com/jlfwong">
        <img src="https://avatars.githubusercontent.com/u/150329?s=72&u=6d27cdd9ffef433f3d5a9de93ef5fec3fe3889f1&v=4" height="12" />
        <b>jlfwong</b>
    </a></td><td>South Park Commons</td><td>San Francisco</td><td>1.3K</td><td>7</td></tr><tr><td>280</td><td><a href="https://github.com/davila7">
        <img src="https://avatars.githubusercontent.com/u/6216945?s=72&u=9cea1838e2bdb1dbfbdb657cf54d1166bd52fc0b&v=4" height="12" />
        <b>davila7</b>
    </a></td><td>-</td><td>Grand Rapids, Michigan and New York</td><td>1.26K</td><td>7</td></tr><tr><td>281</td><td><a href="https://github.com/Sanger2000">
        <img src="https://avatars.githubusercontent.com/u/17725268?s=72&u=28543364cbb881e9d232549529122b4be9294ab3&v=4" height="12" />
        <b>Sanger2000</b>
    </a></td><td>Cursor</td><td>New York City</td><td>1.14K</td><td>7</td></tr><tr><td>282</td><td><a href="https://github.com/gpeal">
        <img src="https://avatars.githubusercontent.com/u/1307745?s=72&u=28c696bad7ad38b2b800efc0c3fea347b22147cf&v=4" height="12" />
        <b>gpeal</b>
    </a></td><td>OpenAI</td><td>San Francisco, CA</td><td>1.13K</td><td>7</td></tr><tr><td>283</td><td><a href="https://github.com/JakeWharton">
        <img src="https://avatars.githubusercontent.com/u/66577?s=72&v=4" height="12" />
        <b>JakeWharton</b>
    </a></td><td>-</td><td>Pittsburgh, PA, USA</td><td>68.17K</td><td>6</td></tr><tr><td>284</td><td><a href="https://github.com/mdo">
        <img src="https://avatars.githubusercontent.com/u/98681?s=72&u=06189d8e78eb46bb608df3f705c229c5d43d797c&v=4" height="12" />
        <b>mdo</b>
    </a></td><td>@pierredotco </td><td>San Francisco, CA</td><td>23.63K</td><td>6</td></tr><tr><td>285</td><td><a href="https://github.com/mbostock">
        <img src="https://avatars.githubusercontent.com/u/230541?s=72&u=1daa79b65f78d09663f7e6b97bf0b74a0bce8a97&v=4" height="12" />
        <b>mbostock</b>
    </a></td><td>@observablehq </td><td>San Francisco, CA</td><td>23.34K</td><td>6</td></tr><tr><td>286</td><td><a href="https://github.com/ahejlsberg">
        <img src="https://avatars.githubusercontent.com/u/4226954?s=72&u=6dd0c7bfce622156519ec2bd85582b1175cab851&v=4" height="12" />
        <b>ahejlsberg</b>
    </a></td><td>Microsoft</td><td>Redmond, WA, USA</td><td>16.36K</td><td>6</td></tr><tr><td>287</td><td><a href="https://github.com/CoreyMSchafer">
        <img src="https://avatars.githubusercontent.com/u/4048251?s=72&u=5c9643e2cfef8ca228f9446d04c99b67c1ee9f7d&v=4" height="12" />
        <b>CoreyMSchafer</b>
    </a></td><td>-</td><td>United States</td><td>13.35K</td><td>6</td></tr><tr><td>288</td><td><a href="https://github.com/zenorocha">
        <img src="https://avatars.githubusercontent.com/u/398893?s=72&u=06bdf08d3ce2e81c8f5778aa7c3a47068e97c475&v=4" height="12" />
        <b>zenorocha</b>
    </a></td><td>@resend</td><td>San Francisco, California</td><td>11.4K</td><td>6</td></tr><tr><td>289</td><td><a href="https://github.com/PatrickAlphaC">
        <img src="https://avatars.githubusercontent.com/u/54278053?s=72&u=8a05bb2a47fc8706824477383a18a66e182dd3b6&v=4" height="12" />
        <b>PatrickAlphaC</b>
    </a></td><td>Cyfrin</td><td>Boston</td><td>11.03K</td><td>6</td></tr><tr><td>290</td><td><a href="https://github.com/jaredpalmer">
        <img src="https://avatars.githubusercontent.com/u/4060187?s=72&u=8093f80db577610c38c680a82550e6b1952b8f7e&v=4" height="12" />
        <b>jaredpalmer</b>
    </a></td><td>@Microsoft @GitHub</td><td>New York, NY</td><td>10.16K</td><td>6</td></tr><tr><td>291</td><td><a href="https://github.com/drkostas">
        <img src="https://avatars.githubusercontent.com/u/22260005?s=72&u=61add69a51604dfb468e81b99016200981f18a2a&v=4" height="12" />
        <b>drkostas</b>
    </a></td><td>Amazon</td><td>Seattle</td><td>8.27K</td><td>6</td></tr><tr><td>292</td><td><a href="https://github.com/DeborahK">
        <img src="https://avatars.githubusercontent.com/u/7987365?s=72&u=9591b04ff6ddd19728a1faa14991daa2a1df3ebf&v=4" height="12" />
        <b>DeborahK</b>
    </a></td><td>-</td><td>San Francisco/Silicon Valley, CA</td><td>7.99K</td><td>6</td></tr><tr><td>293</td><td><a href="https://github.com/Jarred-Sumner">
        <img src="https://avatars.githubusercontent.com/u/709451?s=72&u=c72c2dd8b0368dc63bf2278e0f4f2ff290449cfb&v=4" height="12" />
        <b>Jarred-Sumner</b>
    </a></td><td>-</td><td>San Francisco, CA</td><td>7.93K</td><td>6</td></tr><tr><td>294</td><td><a href="https://github.com/markerikson">
        <img src="https://avatars.githubusercontent.com/u/1128784?s=72&u=dce7b188b2fd38805f7528c60e332a6bfbd92f19&v=4" height="12" />
        <b>markerikson</b>
    </a></td><td>-</td><td>OH, USA</td><td>5.93K</td><td>6</td></tr><tr><td>295</td><td><a href="https://github.com/KevinHock">
        <img src="https://avatars.githubusercontent.com/u/3076393?s=72&u=d467ef143f7b8eb69a4c2c378793919a9c7549ee&v=4" height="12" />
        <b>KevinHock</b>
    </a></td><td>SecEng @sierra-inc Formerly @grammarly, @pinterest, @Yelp</td><td>I love San Francisco</td><td>5.55K</td><td>6</td></tr><tr><td>296</td><td><a href="https://github.com/nfultz">
        <img src="https://avatars.githubusercontent.com/u/418638?s=72&u=76fa821dabfbc97cd67519377dcd863210c1f596&v=4" height="12" />
        <b>nfultz</b>
    </a></td><td>@njnmco @ucla</td><td>Los Angeles, CA</td><td>5.54K</td><td>6</td></tr><tr><td>297</td><td><a href="https://github.com/anishathalye">
        <img src="https://avatars.githubusercontent.com/u/3526486?s=72&u=b5c6c765e87e17c6718563bae3e693179a039d44&v=4" height="12" />
        <b>anishathalye</b>
    </a></td><td>@joinhandshake</td><td>San Francisco, CA</td><td>4.48K</td><td>6</td></tr><tr><td>298</td><td><a href="https://github.com/objective-see">
        <img src="https://avatars.githubusercontent.com/u/11327812?s=72&u=1fff302f868e518a87b777382b99d4a528de1b55&v=4" height="12" />
        <b>objective-see</b>
    </a></td><td>Objective-See Foundation</td><td>Hawaii, USA</td><td>4.14K</td><td>6</td></tr><tr><td>299</td><td><a href="https://github.com/dgrtwo">
        <img src="https://avatars.githubusercontent.com/u/994718?s=72&u=8abbf6079a2ac3b10d435c4fadbf291d8624a439&v=4" height="12" />
        <b>dgrtwo</b>
    </a></td><td>Heap</td><td>New York</td><td>4.13K</td><td>6</td></tr><tr><td>300</td><td><a href="https://github.com/yzhao062">
        <img src="https://avatars.githubusercontent.com/u/15079146?s=72&u=91133df299b4f29279d8bc9d55e5a85242cc657f&v=4" height="12" />
        <b>yzhao062</b>
    </a></td><td>University of Southern California</td><td>Los Angeles, CA, USA</td><td>4.06K</td><td>6</td></tr><tr><td>301</td><td><a href="https://github.com/M0nica">
        <img src="https://avatars.githubusercontent.com/u/6998954?s=72&u=78ef436473b15f90ae2a50e64883ebf39c0c1b1d&v=4" height="12" />
        <b>M0nica</b>
    </a></td><td>-</td><td>New York, New York</td><td>4.03K</td><td>6</td></tr><tr><td>302</td><td><a href="https://github.com/valyala">
        <img src="https://avatars.githubusercontent.com/u/283442?s=72&u=8146e09c6497196364b9505b3d1fcaf316f994d0&v=4" height="12" />
        <b>valyala</b>
    </a></td><td>@VictoriaMetrics </td><td>United states</td><td>3.81K</td><td>6</td></tr><tr><td>303</td><td><a href="https://github.com/SteveMacenski">
        <img src="https://avatars.githubusercontent.com/u/14944147?s=72&u=0925d37e9d3569c71d930114b66e6394c2efb3c6&v=4" height="12" />
        <b>SteveMacenski</b>
    </a></td><td>@open-navigation </td><td>San Francisco, CA, USA</td><td>3.67K</td><td>6</td></tr><tr><td>304</td><td><a href="https://github.com/EcZachly">
        <img src="https://avatars.githubusercontent.com/u/4583288?s=72&u=aac0c288c87bddef24671f230d2749b1e597d3df&v=4" height="12" />
        <b>EcZachly</b>
    </a></td><td>DataExpert.io</td><td>San Francisco, CA</td><td>3.44K</td><td>6</td></tr><tr><td>305</td><td><a href="https://github.com/jdx">
        <img src="https://avatars.githubusercontent.com/u/216188?s=72&u=e6ed73b780fca5bd9dea18dfea51ce138e8f6a13&v=4" height="12" />
        <b>jdx</b>
    </a></td><td>@figma</td><td>Dallas, TX</td><td>3.43K</td><td>6</td></tr><tr><td>306</td><td><a href="https://github.com/orderedlist">
        <img src="https://avatars.githubusercontent.com/u/1680?s=72&u=9a75517752351bda53e22c25a963c8eaad2c8fc7&v=4" height="12" />
        <b>orderedlist</b>
    </a></td><td>Box Out Sports, 123 Studio</td><td>South Bend, IN, USA</td><td>3.36K</td><td>6</td></tr><tr><td>307</td><td><a href="https://github.com/mwaskom">
        <img src="https://avatars.githubusercontent.com/u/315810?s=72&u=940fea4957256c5443fed77f081db2fbdc91ac32&v=4" height="12" />
        <b>mwaskom</b>
    </a></td><td>@modal-labs</td><td>New York, NY</td><td>3.35K</td><td>6</td></tr><tr><td>308</td><td><a href="https://github.com/shykes">
        <img src="https://avatars.githubusercontent.com/u/29565?s=72&u=13ae12e8e93659cab6d6b36c6892d038a0550051&v=4" height="12" />
        <b>shykes</b>
    </a></td><td>-</td><td>San Francisco, CA</td><td>3.35K</td><td>6</td></tr><tr><td>309</td><td><a href="https://github.com/kdrag0n">
        <img src="https://avatars.githubusercontent.com/u/7930239?s=72&u=ff09f9ad902b038246cd5cdd689c3068870595d5&v=4" height="12" />
        <b>kdrag0n</b>
    </a></td><td>@OrbStack</td><td>United States</td><td>3.27K</td><td>6</td></tr><tr><td>310</td><td><a href="https://github.com/brianlovin">
        <img src="https://avatars.githubusercontent.com/u/1923260?s=72&u=36aacd5307a88dfb8e42d014b4107d9c7e3411e1&v=4" height="12" />
        <b>brianlovin</b>
    </a></td><td>@makenotion</td><td>San Francisco</td><td>3.25K</td><td>6</td></tr><tr><td>311</td><td><a href="https://github.com/ThioJoe">
        <img src="https://avatars.githubusercontent.com/u/12518330?s=72&u=d8a5d7a0522b20c5750d0b54613eb648f9185c8c&v=4" height="12" />
        <b>ThioJoe</b>
    </a></td><td>-</td><td>United States & America</td><td>3.14K</td><td>6</td></tr><tr><td>312</td><td><a href="https://github.com/gboeing">
        <img src="https://avatars.githubusercontent.com/u/4977197?s=72&u=53b802c4f37bf6e11a731113429ea9c756570217&v=4" height="12" />
        <b>gboeing</b>
    </a></td><td>University of Southern California</td><td>Los Angeles, California</td><td>2.77K</td><td>6</td></tr><tr><td>313</td><td><a href="https://github.com/pyricau">
        <img src="https://avatars.githubusercontent.com/u/557033?s=72&u=e4b85cd6117b8912cd783f7152c32298794725f5&v=4" height="12" />
        <b>pyricau</b>
    </a></td><td>Square, Inc.</td><td>San Francisco</td><td>2.62K</td><td>6</td></tr><tr><td>314</td><td><a href="https://github.com/ladyada">
        <img src="https://avatars.githubusercontent.com/u/1214161?s=72&v=4" height="12" />
        <b>ladyada</b>
    </a></td><td>Adafruit Industries</td><td>New York, NY</td><td>2.57K</td><td>6</td></tr><tr><td>315</td><td><a href="https://github.com/ktbyers">
        <img src="https://avatars.githubusercontent.com/u/899716?s=72&u=6c60348bfb9243a76ae0122430aceea6e908d688&v=4" height="12" />
        <b>ktbyers</b>
    </a></td><td>Twin Bridges Technology</td><td>San Francisco</td><td>2.53K</td><td>6</td></tr><tr><td>316</td><td><a href="https://github.com/RyanCavanaugh">
        <img src="https://avatars.githubusercontent.com/u/6685088?s=72&u=dd7d4af6a697fcc985ba4b2a1d6a55354590d8ef&v=4" height="12" />
        <b>RyanCavanaugh</b>
    </a></td><td>Microsoft</td><td>Seattle, WA</td><td>2.52K</td><td>6</td></tr><tr><td>317</td><td><a href="https://github.com/DanielRosenwasser">
        <img src="https://avatars.githubusercontent.com/u/972891?s=72&u=5a4dfe64fb09433dfa589b588361f04231144416&v=4" height="12" />
        <b>DanielRosenwasser</b>
    </a></td><td>@Microsoft</td><td>Seattle, WA</td><td>2.48K</td><td>6</td></tr><tr><td>318</td><td><a href="https://github.com/jcheng5">
        <img src="https://avatars.githubusercontent.com/u/129551?s=72&u=2fe43e5af94b85097afb28f5046e7c1138e6b5bb&v=4" height="12" />
        <b>jcheng5</b>
    </a></td><td>@rstudio</td><td>Redmond, WA (United States)</td><td>2.34K</td><td>6</td></tr><tr><td>319</td><td><a href="https://github.com/BinaryMuse">
        <img src="https://avatars.githubusercontent.com/u/189606?s=72&u=8639fa9115ecc6030419dffcd5ed61e057800ba9&v=4" height="12" />
        <b>BinaryMuse</b>
    </a></td><td>Atuin</td><td>San Francisco, CA</td><td>2.1K</td><td>6</td></tr><tr><td>320</td><td><a href="https://github.com/praeclarum">
        <img src="https://avatars.githubusercontent.com/u/323548?s=72&v=4" height="12" />
        <b>praeclarum</b>
    </a></td><td>Krueger Systems, Inc.</td><td>Seattle, WA</td><td>2.05K</td><td>6</td></tr><tr><td>321</td><td><a href="https://github.com/slightlyoff">
        <img src="https://avatars.githubusercontent.com/u/97331?s=72&v=4" height="12" />
        <b>slightlyoff</b>
    </a></td><td>Microsoft</td><td>San Francisco</td><td>2.05K</td><td>6</td></tr><tr><td>322</td><td><a href="https://github.com/alesanchezr">
        <img src="https://avatars.githubusercontent.com/u/426452?s=72&v=4" height="12" />
        <b>alesanchezr</b>
    </a></td><td>@learnpack and 4Geeks.com</td><td>Miami, Florida.</td><td>2.05K</td><td>6</td></tr><tr><td>323</td><td><a href="https://github.com/thockin">
        <img src="https://avatars.githubusercontent.com/u/5595220?s=72&u=563592a410cd1f0f1d71203b46b85d321118c51c&v=4" height="12" />
        <b>thockin</b>
    </a></td><td>Google</td><td>United States</td><td>2.02K</td><td>6</td></tr><tr><td>324</td><td><a href="https://github.com/sakura-ryoko">
        <img src="https://avatars.githubusercontent.com/u/116967773?s=72&u=d9e9d8e0113041c256459a95962916a4b2e73a7a&v=4" height="12" />
        <b>sakura-ryoko</b>
    </a></td><td>-</td><td>PA, USA</td><td>1.98K</td><td>6</td></tr><tr><td>325</td><td><a href="https://github.com/natemoo-re">
        <img src="https://avatars.githubusercontent.com/u/7118177?s=72&u=bb2518ed3d5b34846e6e778845e42b9564c15f5a&v=4" height="12" />
        <b>natemoo-re</b>
    </a></td><td>@getsentry</td><td>Chicago, IL</td><td>1.91K</td><td>6</td></tr><tr><td>326</td><td><a href="https://github.com/abi">
        <img src="https://avatars.githubusercontent.com/u/23818?s=72&u=20a6bb441ca25e49b4d8bdb602c171c5e1a065bf&v=4" height="12" />
        <b>abi</b>
    </a></td><td>-</td><td>San Francisco</td><td>1.91K</td><td>6</td></tr><tr><td>327</td><td><a href="https://github.com/lexi-lambda">
        <img src="https://avatars.githubusercontent.com/u/759911?s=72&u=38d483e07778f91e1969014c77b05b43205e7d22&v=4" height="12" />
        <b>lexi-lambda</b>
    </a></td><td>-</td><td>Chicago, IL</td><td>1.86K</td><td>6</td></tr><tr><td>328</td><td><a href="https://github.com/fffaraz">
        <img src="https://avatars.githubusercontent.com/u/895678?s=72&u=c4d7f1d0c7893275b2f777f47a2ebad2dc20d1a0&v=4" height="12" />
        <b>fffaraz</b>
    </a></td><td>Software Engineer</td><td>San Francisco Bay Area</td><td>1.84K</td><td>6</td></tr><tr><td>329</td><td><a href="https://github.com/1Marc">
        <img src="https://avatars.githubusercontent.com/u/19269?s=72&u=041a62e7f289d127f1cff9a2427d2535fe5fd4b7&v=4" height="12" />
        <b>1Marc</b>
    </a></td><td>@FrontendMasters </td><td>Minneapolis, Minnesota, US</td><td>1.78K</td><td>6</td></tr><tr><td>330</td><td><a href="https://github.com/palkan">
        <img src="https://avatars.githubusercontent.com/u/1516722?s=72&u=58b7d69a8f28602ae667ee377a3cbed251cebd3a&v=4" height="12" />
        <b>palkan</b>
    </a></td><td>@evilmartians </td><td>Seattle</td><td>1.76K</td><td>6</td></tr><tr><td>331</td><td><a href="https://github.com/REMitchell">
        <img src="https://avatars.githubusercontent.com/u/468917?s=72&u=48805aa890d26663570cb935d05b3d21b5e2275e&v=4" height="12" />
        <b>REMitchell</b>
    </a></td><td>Gerson Lehrman Group</td><td>Boston, MA</td><td>1.74K</td><td>6</td></tr><tr><td>332</td><td><a href="https://github.com/Bitwise-01">
        <img src="https://avatars.githubusercontent.com/u/20009943?s=72&u=47047f56dc1beb5c0a0924c1a089745e6fae5c9c&v=4" height="12" />
        <b>Bitwise-01</b>
    </a></td><td>BitwiseBuilt</td><td>United States</td><td>1.69K</td><td>6</td></tr><tr><td>333</td><td><a href="https://github.com/apsdehal">
        <img src="https://avatars.githubusercontent.com/u/3616806?s=72&u=b5dda1c519449cb9856edf5846bf8f1de4b533a7&v=4" height="12" />
        <b>apsdehal</b>
    </a></td><td>Something new. Past @ContextualAI @huggingface @facebookresearch </td><td>San Francisco</td><td>1.67K</td><td>6</td></tr><tr><td>334</td><td><a href="https://github.com/davisking">
        <img src="https://avatars.githubusercontent.com/u/6259399?s=72&v=4" height="12" />
        <b>davisking</b>
    </a></td><td>-</td><td>Boston, MA</td><td>1.66K</td><td>6</td></tr><tr><td>335</td><td><a href="https://github.com/samselikoff">
        <img src="https://avatars.githubusercontent.com/u/2922250?s=72&v=4" height="12" />
        <b>samselikoff</b>
    </a></td><td>Vercel</td><td>New York, NY</td><td>1.62K</td><td>6</td></tr><tr><td>336</td><td><a href="https://github.com/legomushroom">
        <img src="https://avatars.githubusercontent.com/u/1478800?s=72&u=c83ff15adaed8caa5c664bb50860a56b903b578a&v=4" height="12" />
        <b>legomushroom</b>
    </a></td><td>-</td><td>Seattle, US</td><td>1.62K</td><td>6</td></tr><tr><td>337</td><td><a href="https://github.com/keith">
        <img src="https://avatars.githubusercontent.com/u/283886?s=72&v=4" height="12" />
        <b>keith</b>
    </a></td><td>@ModularML</td><td>Seattle, WA</td><td>1.61K</td><td>6</td></tr><tr><td>338</td><td><a href="https://github.com/samuelclay">
        <img src="https://avatars.githubusercontent.com/u/44229?s=72&u=f9c72e1a1cc9fae7f49996ae58d885d77bfe71f2&v=4" height="12" />
        <b>samuelclay</b>
    </a></td><td>NewsBlur</td><td>San Francisco + Massachusetts</td><td>1.52K</td><td>6</td></tr><tr><td>339</td><td><a href="https://github.com/nealwu">
        <img src="https://avatars.githubusercontent.com/u/726075?s=72&u=c447f295da376cc2f05802d33490900011a6e5bd&v=4" height="12" />
        <b>nealwu</b>
    </a></td><td>-</td><td>United States</td><td>1.5K</td><td>6</td></tr><tr><td>340</td><td><a href="https://github.com/lukemelas">
        <img src="https://avatars.githubusercontent.com/u/13307440?s=72&u=d71fb4e098ad0cd4218658d39ba1c6b3ab3d8a86&v=4" height="12" />
        <b>lukemelas</b>
    </a></td><td>Anysphere (Cursor)</td><td>San Francisco, CA</td><td>1.5K</td><td>6</td></tr><tr><td>341</td><td><a href="https://github.com/inancgumus">
        <img src="https://avatars.githubusercontent.com/u/621232?s=72&u=4825c5449290026dd31c681af1e04f2b3ed9944d&v=4" height="12" />
        <b>inancgumus</b>
    </a></td><td>@grafana</td><td>USA</td><td>1.47K</td><td>6</td></tr><tr><td>342</td><td><a href="https://github.com/jonathantneal">
        <img src="https://avatars.githubusercontent.com/u/188426?s=72&u=5029ae346892ad6d2e3893c29edeeb8efff623b0&v=4" height="12" />
        <b>jonathantneal</b>
    </a></td><td>-</td><td>Georgia, USA</td><td>1.43K</td><td>6</td></tr><tr><td>343</td><td><a href="https://github.com/ajdavis">
        <img src="https://avatars.githubusercontent.com/u/84101?s=72&v=4" height="12" />
        <b>ajdavis</b>
    </a></td><td>@mongodb </td><td>New York City</td><td>1.43K</td><td>6</td></tr><tr><td>344</td><td><a href="https://github.com/jdhitsolutions">
        <img src="https://avatars.githubusercontent.com/u/12089920?s=72&u=8bbd7ac79c7918b479f0ede20455ba1c89b8be78&v=4" height="12" />
        <b>jdhitsolutions</b>
    </a></td><td>JDH Information Technology Solutions, Inc.</td><td>New York</td><td>1.42K</td><td>6</td></tr><tr><td>345</td><td><a href="https://github.com/timholy">
        <img src="https://avatars.githubusercontent.com/u/1525481?s=72&u=8140f1dbbae459ea55c0c27272e429dac5ce0a6a&v=4" height="12" />
        <b>timholy</b>
    </a></td><td>Washington University in St. Louis</td><td>St. Louis, Missouri, USA</td><td>1.4K</td><td>6</td></tr><tr><td>346</td><td><a href="https://github.com/cobbr">
        <img src="https://avatars.githubusercontent.com/u/8904306?s=72&u=e4bb3c47d4151f7374bc2c4cfa95ff8d75334298&v=4" height="12" />
        <b>cobbr</b>
    </a></td><td>SpecterOps</td><td>Dallas, TX</td><td>1.38K</td><td>6</td></tr><tr><td>347</td><td><a href="https://github.com/deltakosh">
        <img src="https://avatars.githubusercontent.com/u/1306056?s=72&v=4" height="12" />
        <b>deltakosh</b>
    </a></td><td>Microsoft</td><td>Seattle</td><td>1.38K</td><td>6</td></tr><tr><td>348</td><td><a href="https://github.com/TimDettmers">
        <img src="https://avatars.githubusercontent.com/u/5260050?s=72&v=4" height="12" />
        <b>TimDettmers</b>
    </a></td><td>University of Washington</td><td>Seattle, USA</td><td>1.37K</td><td>6</td></tr><tr><td>349</td><td><a href="https://github.com/josephmachado">
        <img src="https://avatars.githubusercontent.com/u/61124148?s=72&u=d27c709f23cc791a9735cb2bf538f114ad99f73e&v=4" height="12" />
        <b>josephmachado</b>
    </a></td><td>-</td><td>New York</td><td>1.37K</td><td>6</td></tr><tr><td>350</td><td><a href="https://github.com/teamdandelion">
        <img src="https://avatars.githubusercontent.com/u/1400023?s=72&u=97336c3a26433a7e419632a60dbe8cac1f6b024f&v=4" height="12" />
        <b>teamdandelion</b>
    </a></td><td>-</td><td>Seattle</td><td>1.36K</td><td>6</td></tr><tr><td>351</td><td><a href="https://github.com/liggitt">
        <img src="https://avatars.githubusercontent.com/u/980082?s=72&u=e6d3a90de563c894207290d21eb6987a1d45391a&v=4" height="12" />
        <b>liggitt</b>
    </a></td><td>Google</td><td>United States</td><td>1.36K</td><td>6</td></tr><tr><td>352</td><td><a href="https://github.com/gunthercox">
        <img src="https://avatars.githubusercontent.com/u/2030578?s=72&v=4" height="12" />
        <b>gunthercox</b>
    </a></td><td>@Jellyfish-AI</td><td>United States</td><td>1.34K</td><td>6</td></tr><tr><td>353</td><td><a href="https://github.com/jacoblee93">
        <img src="https://avatars.githubusercontent.com/u/6952323?s=72&u=d785f9406c5a78ebd75922567b2693fb643c3bb0&v=4" height="12" />
        <b>jacoblee93</b>
    </a></td><td>@langchain-ai</td><td>San Francisco</td><td>1.34K</td><td>6</td></tr><tr><td>354</td><td><a href="https://github.com/juanpflores">
        <img src="https://avatars.githubusercontent.com/u/6200135?s=72&u=4199fdb7c522514443f4a2cfb210287af7f52609&v=4" height="12" />
        <b>juanpflores</b>
    </a></td><td>-</td><td>Seattle</td><td>1.32K</td><td>6</td></tr><tr><td>355</td><td><a href="https://github.com/ryanoasis">
        <img src="https://avatars.githubusercontent.com/u/8083459?s=72&u=1645f43000c842a948268609231bdecb1433c470&v=4" height="12" />
        <b>ryanoasis</b>
    </a></td><td>-</td><td>Seattle, WA, USA</td><td>1.32K</td><td>6</td></tr><tr><td>356</td><td><a href="https://github.com/natemcmaster">
        <img src="https://avatars.githubusercontent.com/u/2696087?s=72&v=4" height="12" />
        <b>natemcmaster</b>
    </a></td><td>@anthropics</td><td>Seattle, WA</td><td>1.3K</td><td>6</td></tr><tr><td>357</td><td><a href="https://github.com/pwnall">
        <img src="https://avatars.githubusercontent.com/u/11460?s=72&u=6b2561f5dc40b851f0218da848ed1fa29f4fcfa6&v=4" height="12" />
        <b>pwnall</b>
    </a></td><td>@Google</td><td>San Francisco, CA</td><td>1.29K</td><td>6</td></tr><tr><td>358</td><td><a href="https://github.com/stubailo">
        <img src="https://avatars.githubusercontent.com/u/448783?s=72&u=c2bdd3fb282033b3c83195f02fed7f436f66585a&v=4" height="12" />
        <b>stubailo</b>
    </a></td><td>Flipturn, Inc.</td><td>Los Angeles</td><td>1.28K</td><td>6</td></tr><tr><td>359</td><td><a href="https://github.com/travist">
        <img src="https://avatars.githubusercontent.com/u/130052?s=72&u=24521c264b1642e0c4763b91ddea61344aaad609&v=4" height="12" />
        <b>travist</b>
    </a></td><td>Form.IO</td><td>Dallas, TX</td><td>1.28K</td><td>6</td></tr><tr><td>360</td><td><a href="https://github.com/refcell">
        <img src="https://avatars.githubusercontent.com/u/21288394?s=72&u=aa732a4cd2aa9dfe3cc16aeb019032792b933831&v=4" height="12" />
        <b>refcell</b>
    </a></td><td>@base</td><td>United States</td><td>1.23K</td><td>6</td></tr><tr><td>361</td><td><a href="https://github.com/tabatkins">
        <img src="https://avatars.githubusercontent.com/u/682840?s=72&u=7adbd1186716b906065a0f8f2747b46c21e7b277&v=4" height="12" />
        <b>tabatkins</b>
    </a></td><td>Google</td><td>United States</td><td>1.22K</td><td>6</td></tr><tr><td>362</td><td><a href="https://github.com/alxhub">
        <img src="https://avatars.githubusercontent.com/u/4175141?s=72&u=4b259897877a6bfba6e3b2a6330f13668d060a65&v=4" height="12" />
        <b>alxhub</b>
    </a></td><td>Google, Inc.</td><td>San Francisco, CA</td><td>1.22K</td><td>6</td></tr><tr><td>363</td><td><a href="https://github.com/lokesh">
        <img src="https://avatars.githubusercontent.com/u/51469?s=72&u=50714c37abe75bb24064456b6378feea9dec7500&v=4" height="12" />
        <b>lokesh</b>
    </a></td><td>Square</td><td>San Francisco, CA</td><td>1.21K</td><td>6</td></tr><tr><td>364</td><td><a href="https://github.com/aturon">
        <img src="https://avatars.githubusercontent.com/u/709807?s=72&u=78515923f95344564d0f5de924b168ff8e85ba34&v=4" height="12" />
        <b>aturon</b>
    </a></td><td>Fastly</td><td>Portland, OR, USA</td><td>1.18K</td><td>6</td></tr><tr><td>365</td><td><a href="https://github.com/jonrohan">
        <img src="https://avatars.githubusercontent.com/u/54012?s=72&u=5314beb53bec3929050766bc25d9a4d7821a2946&v=4" height="12" />
        <b>jonrohan</b>
    </a></td><td>GitHub</td><td>Seattle, WA</td><td>1.17K</td><td>6</td></tr><tr><td>366</td><td><a href="https://github.com/derekcollison">
        <img src="https://avatars.githubusercontent.com/u/90097?s=72&u=3c975aae450c9e9ae2c8a0bb51e4519bbb3f51d4&v=4" height="12" />
        <b>derekcollison</b>
    </a></td><td>@nats-io </td><td>Miami, FL</td><td>1.16K</td><td>6</td></tr><tr><td>367</td><td><a href="https://github.com/spencercarli">
        <img src="https://avatars.githubusercontent.com/u/1105429?s=72&u=489fb76d4c8742c29fa45211a3cda440eabd2661&v=4" height="12" />
        <b>spencercarli</b>
    </a></td><td>@ReactNativeSchool</td><td>Michigan, USA</td><td>1.15K</td><td>6</td></tr><tr><td>368</td><td><a href="https://github.com/ardan-bkennedy">
        <img src="https://avatars.githubusercontent.com/u/2280005?s=72&u=931a4e4bd1959fa84b370a840b804196235da451&v=4" height="12" />
        <b>ardan-bkennedy</b>
    </a></td><td>Ardan Labs</td><td>Miami, FL</td><td>1.15K</td><td>6</td></tr><tr><td>369</td><td><a href="https://github.com/LucioFranco">
        <img src="https://avatars.githubusercontent.com/u/5758045?s=72&u=bc6bd760dc3aacd372b09a31a659bf87912b95f0&v=4" height="12" />
        <b>LucioFranco</b>
    </a></td><td>@514-labs</td><td>East Coast USA</td><td>1.12K</td><td>6</td></tr><tr><td>370</td><td><a href="https://github.com/paf31">
        <img src="https://avatars.githubusercontent.com/u/630306?s=72&u=66bc54abe23de666c480dca02da9c5e5d123855e&v=4" height="12" />
        <b>paf31</b>
    </a></td><td>-</td><td>Los Angeles, CA</td><td>1.08K</td><td>6</td></tr><tr><td>371</td><td><a href="https://github.com/Atry">
        <img src="https://avatars.githubusercontent.com/u/601530?s=72&u=ab242d6500886c4f8799101543d5b1f7841f1104&v=4" height="12" />
        <b>Atry</b>
    </a></td><td>-</td><td>California, United States</td><td>1.08K</td><td>6</td></tr><tr><td>372</td><td><a href="https://github.com/devonzuegel">
        <img src="https://avatars.githubusercontent.com/u/6979755?s=72&u=f39dd32b49278b768e13611ca0c4c46aa113cbd3&v=4" height="12" />
        <b>devonzuegel</b>
    </a></td><td>-</td><td>Miami Beach, Florida</td><td>1.08K</td><td>6</td></tr><tr><td>373</td><td><a href="https://github.com/jamis">
        <img src="https://avatars.githubusercontent.com/u/1627?s=72&u=c9dac091985b12b35fb230ddb875aa9ae2a56ff9&v=4" height="12" />
        <b>jamis</b>
    </a></td><td>-</td><td>Smithfield, Utah, USA</td><td>1.07K</td><td>6</td></tr><tr><td>374</td><td><a href="https://github.com/bshaffer">
        <img src="https://avatars.githubusercontent.com/u/103941?s=72&u=877d68410f5f05ca40c3cc6fd99f46dff6b1db08&v=4" height="12" />
        <b>bshaffer</b>
    </a></td><td>Google, Inc.</td><td>San Francisco</td><td>1.06K</td><td>6</td></tr><tr><td>375</td><td><a href="https://github.com/saoudrizwan">
        <img src="https://avatars.githubusercontent.com/u/7799382?s=72&u=c78c6806a4c73fac6b2071bbafcccd8ae54ed055&v=4" height="12" />
        <b>saoudrizwan</b>
    </a></td><td>-</td><td>United States</td><td>1.04K</td><td>6</td></tr><tr><td>376</td><td><a href="https://github.com/topjohnwu">
        <img src="https://avatars.githubusercontent.com/u/7337301?s=72&v=4" height="12" />
        <b>topjohnwu</b>
    </a></td><td>-</td><td>US / Taiwan</td><td>11.48K</td><td>5</td></tr><tr><td>377</td><td><a href="https://github.com/munificent">
        <img src="https://avatars.githubusercontent.com/u/46275?s=72&v=4" height="12" />
        <b>munificent</b>
    </a></td><td>@google, on @dart-lang </td><td>Seattle, WA</td><td>10.85K</td><td>5</td></tr><tr><td>378</td><td><a href="https://github.com/TheLarkInn">
        <img src="https://avatars.githubusercontent.com/u/3408176?s=72&v=4" height="12" />
        <b>TheLarkInn</b>
    </a></td><td>@Microsoft @MicrosoftEdge @webpack @webpack-contrib @angular</td><td>Seattle, WA</td><td>6.49K</td><td>5</td></tr><tr><td>379</td><td><a href="https://github.com/jonkrohn">
        <img src="https://avatars.githubusercontent.com/u/10055735?s=72&u=e29559204bb1f335ba26c08e32b8335442beba2f&v=4" height="12" />
        <b>jonkrohn</b>
    </a></td><td>Y Carrot</td><td>New York</td><td>3.06K</td><td>5</td></tr><tr><td>380</td><td><a href="https://github.com/johnthebrit">
        <img src="https://avatars.githubusercontent.com/u/25493674?s=72&u=fafb14bfa6d56bb1137cf490a910bb30103be367&v=4" height="12" />
        <b>johnthebrit</b>
    </a></td><td>SavillTech</td><td>US</td><td>2.72K</td><td>5</td></tr><tr><td>381</td><td><a href="https://github.com/leonnoel">
        <img src="https://avatars.githubusercontent.com/u/366790?s=72&u=cea1f28faa49e7d4f9fc1425dc78881f64ba00d8&v=4" height="12" />
        <b>leonnoel</b>
    </a></td><td>Resilient Coders</td><td>Boston</td><td>2.51K</td><td>5</td></tr><tr><td>382</td><td><a href="https://github.com/bfirsh">
        <img src="https://avatars.githubusercontent.com/u/40906?s=72&u=8a158382fcc5a23b4f5313ee873be89667e7a0ce&v=4" height="12" />
        <b>bfirsh</b>
    </a></td><td>@replicate</td><td>San Francisco, CA, USA</td><td>2.35K</td><td>5</td></tr><tr><td>383</td><td><a href="https://github.com/awjuliani">
        <img src="https://avatars.githubusercontent.com/u/9065325?s=72&u=d6e1ac91f8e6f09e145669081683228c8488017e&v=4" height="12" />
        <b>awjuliani</b>
    </a></td><td>-</td><td>San Francisco Bay Area</td><td>1.69K</td><td>5</td></tr><tr><td>384</td><td><a href="https://github.com/BrianRuizy">
        <img src="https://avatars.githubusercontent.com/u/23439187?s=72&u=1854ecb740eb162073c1a399c6385eedef5e968f&v=4" height="12" />
        <b>BrianRuizy</b>
    </a></td><td>-</td><td>New York, New York</td><td>1.37K</td><td>5</td></tr><tr><td>385</td><td><a href="https://github.com/Slava">
        <img src="https://avatars.githubusercontent.com/u/2608446?s=72&u=012be52918624b4a1684288e5cfd2b8816571870&v=4" height="12" />
        <b>Slava</b>
    </a></td><td>-</td><td>USA</td><td>1.06K</td><td>5</td></tr><tr><td>386</td><td><a href="https://github.com/lydiahallie">
        <img src="https://avatars.githubusercontent.com/u/29451794?s=72&u=f45877206b6d211383c6fe83ac8d0fdf50724b64&v=4" height="12" />
        <b>lydiahallie</b>
    </a></td><td>@anthropics</td><td>San Francisco</td><td>14.91K</td><td>4</td></tr><tr><td>387</td><td><a href="https://github.com/CharlesCreativeContent">
        <img src="https://avatars.githubusercontent.com/u/62077627?s=72&u=83aaea2c65efc1d73658309774388a1a6151969b&v=4" height="12" />
        <b>CharlesCreativeContent</b>
    </a></td><td>ex-Amazon</td><td>San Francisco, CA</td><td>6.13K</td><td>4</td></tr><tr><td>388</td><td><a href="https://github.com/BretFisher">
        <img src="https://avatars.githubusercontent.com/u/792287?s=72&u=cc2f019e1399e6e75805216d5e3d2dbf626a856b&v=4" height="12" />
        <b>BretFisher</b>
    </a></td><td>Indie cloud native DevOps instructor and consultant</td><td>Virginia Beach, Virginia, USA</td><td>5.41K</td><td>4</td></tr><tr><td>389</td><td><a href="https://github.com/zpao">
        <img src="https://avatars.githubusercontent.com/u/8445?s=72&v=4" height="12" />
        <b>zpao</b>
    </a></td><td>@facebook </td><td>Seattle, WA</td><td>5.28K</td><td>4</td></tr><tr><td>390</td><td><a href="https://github.com/Gizachew29">
        <img src="https://avatars.githubusercontent.com/u/72370435?s=72&u=fd81c2b06662c9e6c1e1c7cf0172349ee5be23ab&v=4" height="12" />
        <b>Gizachew29</b>
    </a></td><td>https://www.iconictechinc.com/</td><td>Summerlin, NV,  USA</td><td>4.75K</td><td>4</td></tr><tr><td>391</td><td><a href="https://github.com/khuyentran1401">
        <img src="https://avatars.githubusercontent.com/u/49108771?s=72&u=0c9388accdb6344a9e0ef2cf28c8ee53ef270ae7&v=4" height="12" />
        <b>khuyentran1401</b>
    </a></td><td>@nixtla</td><td>United States</td><td>3.74K</td><td>4</td></tr><tr><td>392</td><td><a href="https://github.com/wsvincent">
        <img src="https://avatars.githubusercontent.com/u/766418?s=72&u=fbe16f16777e895dce81ce502f4b0411f71d1e27&v=4" height="12" />
        <b>wsvincent</b>
    </a></td><td>@JetBrains, @Django</td><td>Boston, USA</td><td>3.63K</td><td>4</td></tr><tr><td>393</td><td><a href="https://github.com/nolanlawson">
        <img src="https://avatars.githubusercontent.com/u/283842?s=72&u=c63d169c54860bde229ad6b428fb150345114ab0&v=4" height="12" />
        <b>nolanlawson</b>
    </a></td><td>@SocketDev</td><td>Seattle</td><td>3.36K</td><td>4</td></tr><tr><td>394</td><td><a href="https://github.com/BruceEckel">
        <img src="https://avatars.githubusercontent.com/u/1001900?s=72&v=4" height="12" />
        <b>BruceEckel</b>
    </a></td><td>https://www.mindviewllc.com/</td><td>Crested Butte, CO, USA</td><td>2.83K</td><td>4</td></tr><tr><td>395</td><td><a href="https://github.com/Cyan4973">
        <img src="https://avatars.githubusercontent.com/u/750081?s=72&v=4" height="12" />
        <b>Cyan4973</b>
    </a></td><td>@facebook </td><td>Menlo Park, USA</td><td>2.46K</td><td>4</td></tr><tr><td>396</td><td><a href="https://github.com/ianlancetaylor">
        <img src="https://avatars.githubusercontent.com/u/3194333?s=72&v=4" height="12" />
        <b>ianlancetaylor</b>
    </a></td><td>-</td><td>Berkeley, California, USA</td><td>2.33K</td><td>4</td></tr><tr><td>397</td><td><a href="https://github.com/bencodezen">
        <img src="https://avatars.githubusercontent.com/u/4836334?s=72&u=aacee61efe3325ef286398c8673d9f4bd473eb56&v=4" height="12" />
        <b>bencodezen</b>
    </a></td><td>Pandan Studio</td><td>USA</td><td>2.22K</td><td>4</td></tr><tr><td>398</td><td><a href="https://github.com/carols10cents">
        <img src="https://avatars.githubusercontent.com/u/193874?s=72&v=4" height="12" />
        <b>carols10cents</b>
    </a></td><td>@integer32llc </td><td>Pittsburgh, PA, USA</td><td>2K</td><td>4</td></tr><tr><td>399</td><td><a href="https://github.com/douglascraigschmidt">
        <img src="https://avatars.githubusercontent.com/u/6556567?s=72&u=508d4fc6563a46bace8351e526edfd2677271d77&v=4" height="12" />
        <b>douglascraigschmidt</b>
    </a></td><td>William & Mary</td><td>Williamsburg, VA, USA</td><td>1.66K</td><td>4</td></tr><tr><td>400</td><td><a href="https://github.com/dustinvtran">
        <img src="https://avatars.githubusercontent.com/u/2569867?s=72&u=08104eb5168fcc79590d075155ad3908b056c1ae&v=4" height="12" />
        <b>dustinvtran</b>
    </a></td><td>Google DeepMind</td><td>San Francisco, CA</td><td>1.64K</td><td>4</td></tr><tr><td>401</td><td><a href="https://github.com/carlosfab">
        <img src="https://avatars.githubusercontent.com/u/20707349?s=72&u=2925acefb25d9e729247c42941fca75c5ae93e72&v=4" height="12" />
        <b>carlosfab</b>
    </a></td><td>Sigmoidal</td><td>Cary, NC (USA)</td><td>1.51K</td><td>4</td></tr><tr><td>402</td><td><a href="https://github.com/DevvObiero">
        <img src="https://avatars.githubusercontent.com/u/157304888?s=72&u=80c644d9b33a9ce3e886ff1d906a9297a452119c&v=4" height="12" />
        <b>DevvObiero</b>
    </a></td><td>CALARI SOLUTIONS</td><td>USA(remote)</td><td>1.47K</td><td>4</td></tr><tr><td>403</td><td><a href="https://github.com/amilajack">
        <img src="https://avatars.githubusercontent.com/u/6374832?s=72&v=4" height="12" />
        <b>amilajack</b>
    </a></td><td>@palettedev</td><td>San Francisco, CA</td><td>1.45K</td><td>4</td></tr><tr><td>404</td><td><a href="https://github.com/morganm94">
        <img src="https://avatars.githubusercontent.com/u/68848623?s=72&u=b0b099737c70e5547907f653896b436da9386dfd&v=4" height="12" />
        <b>morganm94</b>
    </a></td><td>Drivingo</td><td>St. Petersburg, FL, USA</td><td>1.38K</td><td>4</td></tr><tr><td>405</td><td><a href="https://github.com/joewalnes">
        <img src="https://avatars.githubusercontent.com/u/48950?s=72&v=4" height="12" />
        <b>joewalnes</b>
    </a></td><td>-</td><td>San Francisco Bay Area</td><td>1.37K</td><td>4</td></tr><tr><td>406</td><td><a href="https://github.com/steve8708">
        <img src="https://avatars.githubusercontent.com/u/844291?s=72&u=88bf37d457b44126ea03f5ca2243267a467c1557&v=4" height="12" />
        <b>steve8708</b>
    </a></td><td>Builder.io</td><td>San Francisco, CA</td><td>1.25K</td><td>4</td></tr><tr><td>407</td><td><a href="https://github.com/sararob">
        <img src="https://avatars.githubusercontent.com/u/3814898?s=72&u=66f1b92ab1a04ab30f35f6b1e61e78238792f21b&v=4" height="12" />
        <b>sararob</b>
    </a></td><td>Firebase</td><td>San Francisco, CA</td><td>1.16K</td><td>4</td></tr><tr><td>408</td><td><a href="https://github.com/jeffmo">
        <img src="https://avatars.githubusercontent.com/u/498293?s=72&v=4" height="12" />
        <b>jeffmo</b>
    </a></td><td>-</td><td>Seattle, WA</td><td>1.15K</td><td>4</td></tr><tr><td>409</td><td><a href="https://github.com/conradev">
        <img src="https://avatars.githubusercontent.com/u/170649?s=72&u=8ff2beeeb72ce29f49a67e1e965012976d675e56&v=4" height="12" />
        <b>conradev</b>
    </a></td><td>@openai </td><td>Los Angeles, CA</td><td>1.13K</td><td>4</td></tr><tr><td>410</td><td><a href="https://github.com/nmwsharp">
        <img src="https://avatars.githubusercontent.com/u/12726725?s=72&u=363310b93d9eb8325ca2e4494880b0b7c01faef9&v=4" height="12" />
        <b>nmwsharp</b>
    </a></td><td>-</td><td>Seattle, WA</td><td>1.06K</td><td>4</td></tr><tr><td>411</td><td><a href="https://github.com/mojombo">
        <img src="https://avatars.githubusercontent.com/u/1?s=72&v=4" height="12" />
        <b>mojombo</b>
    </a></td><td>@chatterbugapp, @redwoodjs, @preston-werner-ventures </td><td>San Francisco</td><td>24.47K</td><td>3</td></tr><tr><td>412</td><td><a href="https://github.com/ahmetb">
        <img src="https://avatars.githubusercontent.com/u/159209?s=72&u=7484858b12e4c4a7fe1351d1f0b406076805deb2&v=4" height="12" />
        <b>ahmetb</b>
    </a></td><td>@linkedin </td><td>Seattle, WA</td><td>8.76K</td><td>3</td></tr><tr><td>413</td><td><a href="https://github.com/moxie0">
        <img src="https://avatars.githubusercontent.com/u/512439?s=72&v=4" height="12" />
        <b>moxie0</b>
    </a></td><td>-</td><td>San Francisco</td><td>5.87K</td><td>3</td></tr><tr><td>414</td><td><a href="https://github.com/gordicaleksa">
        <img src="https://avatars.githubusercontent.com/u/29271842?s=72&u=6b9f534546b35391ab89ea077ab927a75fa834b9&v=4" height="12" />
        <b>gordicaleksa</b>
    </a></td><td>ex-DeepMind, ex-Microsoft</td><td>San Francisco</td><td>4.37K</td><td>3</td></tr><tr><td>415</td><td><a href="https://github.com/lh3">
        <img src="https://avatars.githubusercontent.com/u/480346?s=72&v=4" height="12" />
        <b>lh3</b>
    </a></td><td>DFCI & Harvard University</td><td>Boston, MA, USA</td><td>4.24K</td><td>3</td></tr><tr><td>416</td><td><a href="https://github.com/indutny">
        <img src="https://avatars.githubusercontent.com/u/238531?s=72&u=e65bd9591c92183effb7df9bf06b5d88418dce1c&v=4" height="12" />
        <b>indutny</b>
    </a></td><td>@signalapp</td><td>USA</td><td>3.59K</td><td>3</td></tr><tr><td>417</td><td><a href="https://github.com/kognise">
        <img src="https://avatars.githubusercontent.com/u/42556441?s=72&u=ec599a2b2e2af0a524e8fd7d024bb71f91f63e6b&v=4" height="12" />
        <b>kognise</b>
    </a></td><td>-</td><td>San Francisco, CA</td><td>3.3K</td><td>3</td></tr><tr><td>418</td><td><a href="https://github.com/KittenYang">
        <img src="https://avatars.githubusercontent.com/u/5517281?s=72&u=c08ca54377f58fd18c9584fef34fe6edea1bb344&v=4" height="12" />
        <b>KittenYang</b>
    </a></td><td>-</td><td>NY,USA</td><td>3.06K</td><td>3</td></tr><tr><td>419</td><td><a href="https://github.com/chrisalbon">
        <img src="https://avatars.githubusercontent.com/u/3612307?s=72&u=3396e48cd171028c56ae91938043438a4ed8d865&v=4" height="12" />
        <b>chrisalbon</b>
    </a></td><td>Wikimedia Foundation</td><td>San Francisco</td><td>2.58K</td><td>3</td></tr><tr><td>420</td><td><a href="https://github.com/wzhe06">
        <img src="https://avatars.githubusercontent.com/u/5001803?s=72&u=75728cd0aa022832736d8ffe22844e89f8ac8bf5&v=4" height="12" />
        <b>wzhe06</b>
    </a></td><td>-</td><td>San Francisco Bay Area</td><td>2.5K</td><td>3</td></tr><tr><td>421</td><td><a href="https://github.com/1st1">
        <img src="https://avatars.githubusercontent.com/u/239003?s=72&v=4" height="12" />
        <b>1st1</b>
    </a></td><td>@vercel </td><td>San Francisco</td><td>2.48K</td><td>3</td></tr><tr><td>422</td><td><a href="https://github.com/gongminmin">
        <img src="https://avatars.githubusercontent.com/u/1177147?s=72&u=548871f3431ef5e04fe6c4bde88819fcf32c9fa8&v=4" height="12" />
        <b>gongminmin</b>
    </a></td><td>-</td><td>Kirkland, WA, US</td><td>2.39K</td><td>3</td></tr><tr><td>423</td><td><a href="https://github.com/joschu">
        <img src="https://avatars.githubusercontent.com/u/144178?s=72&u=d812f2d170c05c4d3aaa4b2bf2ebc3538839c756&v=4" height="12" />
        <b>joschu</b>
    </a></td><td>-</td><td>San Francisco, CA</td><td>2.1K</td><td>3</td></tr><tr><td>424</td><td><a href="https://github.com/cwilso">
        <img src="https://avatars.githubusercontent.com/u/507001?s=72&v=4" height="12" />
        <b>cwilso</b>
    </a></td><td>Google</td><td>Seattle, WA, USA</td><td>1.74K</td><td>3</td></tr><tr><td>425</td><td><a href="https://github.com/pdeitel">
        <img src="https://avatars.githubusercontent.com/u/4549557?s=72&u=959355955e21cc7aa4f1c3853a0d22bb35c63528&v=4" height="12" />
        <b>pdeitel</b>
    </a></td><td>Deitel & Associates, Inc.</td><td>Massachusetts, USA</td><td>1.72K</td><td>3</td></tr><tr><td>426</td><td><a href="https://github.com/abarth">
        <img src="https://avatars.githubusercontent.com/u/112007?s=72&u=9f7e9d9b0ee7d1a012d3cf98d8b0e6adeb565a61&v=4" height="12" />
        <b>abarth</b>
    </a></td><td>-</td><td>San Francisco, CA</td><td>1.54K</td><td>3</td></tr><tr><td>427</td><td><a href="https://github.com/Udinic">
        <img src="https://avatars.githubusercontent.com/u/950533?s=72&v=4" height="12" />
        <b>Udinic</b>
    </a></td><td>Snap</td><td>New York</td><td>1.38K</td><td>3</td></tr><tr><td>428</td><td><a href="https://github.com/phatboyg">
        <img src="https://avatars.githubusercontent.com/u/20041?s=72&u=2b18e5b55c6cfb25aad97fb60cb1934d941ec889&v=4" height="12" />
        <b>phatboyg</b>
    </a></td><td>Loosely Coupled, LLC</td><td>USA</td><td>1.27K</td><td>3</td></tr><tr><td>429</td><td><a href="https://github.com/indragiek">
        <img src="https://avatars.githubusercontent.com/u/353158?s=72&u=07d68ab4e978973477b264f56dd67a9c67f594d1&v=4" height="12" />
        <b>indragiek</b>
    </a></td><td>@getsentry</td><td>San Francisco Bay Area</td><td>1.26K</td><td>3</td></tr><tr><td>430</td><td><a href="https://github.com/rentzsch">
        <img src="https://avatars.githubusercontent.com/u/2971?s=72&v=4" height="12" />
        <b>rentzsch</b>
    </a></td><td>-</td><td>Chicago</td><td>1.24K</td><td>3</td></tr><tr><td>431</td><td><a href="https://github.com/sandersn">
        <img src="https://avatars.githubusercontent.com/u/293473?s=72&u=2e3c9ccdfc791f67f7cd298b78f889ddf10f32a1&v=4" height="12" />
        <b>sandersn</b>
    </a></td><td>Microsoft</td><td>Seattle</td><td>1.22K</td><td>3</td></tr><tr><td>432</td><td><a href="https://github.com/slavingia">
        <img src="https://avatars.githubusercontent.com/u/74396?s=72&u=d2058787f4f8221926d0088f941bf7a28eedcf5f&v=4" height="12" />
        <b>slavingia</b>
    </a></td><td>Antiwork</td><td>New York, NY</td><td>1.19K</td><td>3</td></tr><tr><td>433</td><td><a href="https://github.com/TimothyGu">
        <img src="https://avatars.githubusercontent.com/u/1538624?s=72&v=4" height="12" />
        <b>TimothyGu</b>
    </a></td><td>@Stripe</td><td>Seattle, US</td><td>1.06K</td><td>3</td></tr><tr><td>434</td><td><a href="https://github.com/Smerity">
        <img src="https://avatars.githubusercontent.com/u/32325?s=72&u=e3ba9368360b4c2fefdd0f568fa043428276103d&v=4" height="12" />
        <b>Smerity</b>
    </a></td><td>-</td><td>San Francisco, California</td><td>1.05K</td><td>3</td></tr><tr><td>435</td><td><a href="https://github.com/peggyrayzis">
        <img src="https://avatars.githubusercontent.com/u/18017067?s=72&u=6f1ed1df13adf2e258701b2070cc9f7f891a6b9f&v=4" height="12" />
        <b>peggyrayzis</b>
    </a></td><td>scale.dev</td><td>New York, NY</td><td>1.05K</td><td>3</td></tr><tr><td>436</td><td><a href="https://github.com/dmalan">
        <img src="https://avatars.githubusercontent.com/u/788678?s=72&u=9894c93f99d64d6846942503ccc0c76bfce94540&v=4" height="12" />
        <b>dmalan</b>
    </a></td><td>@harvard</td><td>Cambridge, MA, USA</td><td>35.59K</td><td>2</td></tr><tr><td>437</td><td><a href="https://github.com/evanw">
        <img src="https://avatars.githubusercontent.com/u/406394?s=72&u=311ddafa2f676e0b821384e18b05f0f4e08bcacc&v=4" height="12" />
        <b>evanw</b>
    </a></td><td>-</td><td>San Francisco</td><td>13.93K</td><td>2</td></tr><tr><td>438</td><td><a href="https://github.com/agentzh">
        <img src="https://avatars.githubusercontent.com/u/56241?s=72&u=9bfe3cdd99f8aceb640302747b3396ff979d10bd&v=4" height="12" />
        <b>agentzh</b>
    </a></td><td>OpenResty Inc.</td><td>San Francisco Bay Area</td><td>11.83K</td><td>2</td></tr><tr><td>439</td><td><a href="https://github.com/jhaddix">
        <img src="https://avatars.githubusercontent.com/u/3488554?s=72&u=bc41f5fa452dd1f8824f3e5dc840dc88f6c1b8a4&v=4" height="12" />
        <b>jhaddix</b>
    </a></td><td>-</td><td>United States</td><td>11.33K</td><td>2</td></tr><tr><td>440</td><td><a href="https://github.com/sophiebits">
        <img src="https://avatars.githubusercontent.com/u/6820?s=72&u=d3f94842a6c3c49299ccca93be4979d0a849d7c9&v=4" height="12" />
        <b>sophiebits</b>
    </a></td><td>-</td><td>San Francisco, CA</td><td>10.41K</td><td>2</td></tr><tr><td>441</td><td><a href="https://github.com/petehunt">
        <img src="https://avatars.githubusercontent.com/u/239742?s=72&u=d23a37b678429916399d2706be2f1f25bf865efe&v=4" height="12" />
        <b>petehunt</b>
    </a></td><td>Dagster Labs</td><td>San Francisco, CA</td><td>6.05K</td><td>2</td></tr><tr><td>442</td><td><a href="https://github.com/leebyron">
        <img src="https://avatars.githubusercontent.com/u/50130?s=72&u=d3c7c18ff34107c3a4312217171ccb722d6552d7&v=4" height="12" />
        <b>leebyron</b>
    </a></td><td>@watershed-climate</td><td>San Francisco</td><td>5.29K</td><td>2</td></tr><tr><td>443</td><td><a href="https://github.com/bahmutov">
        <img src="https://avatars.githubusercontent.com/u/2212006?s=72&u=23b522c7384c4322687171ba919f2ed17b6fb0b4&v=4" height="12" />
        <b>bahmutov</b>
    </a></td><td>-</td><td>Boston, MA</td><td>4.92K</td><td>2</td></tr><tr><td>444</td><td><a href="https://github.com/garybernhardt">
        <img src="https://avatars.githubusercontent.com/u/45707?s=72&u=ed2698db947efe2ef1378be4bf2c5ed28d527ed0&v=4" height="12" />
        <b>garybernhardt</b>
    </a></td><td>Destroy All Software LLC</td><td>Seattle, WA</td><td>3.75K</td><td>2</td></tr><tr><td>445</td><td><a href="https://github.com/trishume">
        <img src="https://avatars.githubusercontent.com/u/887610?s=72&u=5aa9a0e9d96da4985178c8d7a55ab2f31785b70b&v=4" height="12" />
        <b>trishume</b>
    </a></td><td>-</td><td>San Francisco</td><td>3.57K</td><td>2</td></tr><tr><td>446</td><td><a href="https://github.com/jetsonhacks">
        <img src="https://avatars.githubusercontent.com/u/8440269?s=72&u=143cde1ce89b0a2e6f48de96007dd3bbce3ee9d1&v=4" height="12" />
        <b>jetsonhacks</b>
    </a></td><td>JetsonHacks</td><td>Pasadena, California, USA</td><td>3.27K</td><td>2</td></tr><tr><td>447</td><td><a href="https://github.com/SwiftfulThinking">
        <img src="https://avatars.githubusercontent.com/u/44950578?s=72&u=1cac958eb4fe071f3b7ef7dd8d08a7bc1b854fae&v=4" height="12" />
        <b>SwiftfulThinking</b>
    </a></td><td>-</td><td>New York, NY</td><td>2.86K</td><td>2</td></tr><tr><td>448</td><td><a href="https://github.com/weierophinney">
        <img src="https://avatars.githubusercontent.com/u/25943?s=72&u=b73a8899d61dca0e359ede434e4b35ef4c07a1e2&v=4" height="12" />
        <b>weierophinney</b>
    </a></td><td>@laminas </td><td>Sioux Falls, SD, USA</td><td>2.57K</td><td>2</td></tr><tr><td>449</td><td><a href="https://github.com/ashutosh1919">
        <img src="https://avatars.githubusercontent.com/u/20843596?s=72&u=6367ff9f62224bc720e425a5bb85dca377a75093&v=4" height="12" />
        <b>ashutosh1919</b>
    </a></td><td>Senior ML Scientist @sap</td><td>San Francisco, CA, USA</td><td>2.55K</td><td>2</td></tr><tr><td>450</td><td><a href="https://github.com/ssg">
        <img src="https://avatars.githubusercontent.com/u/241217?s=72&u=7a0def2306a5b8c34d2a36b93d1a487d1d973756&v=4" height="12" />
        <b>ssg</b>
    </a></td><td>-</td><td>San Francisco, California</td><td>2.44K</td><td>2</td></tr><tr><td>451</td><td><a href="https://github.com/riseansmal">
        <img src="https://avatars.githubusercontent.com/u/6877737?s=72&u=bcf629f6a0d85b2e6bedf844574671e4ea08489e&v=4" height="12" />
        <b>riseansmal</b>
    </a></td><td>@reverseable </td><td>Miami, FL, United States and Tbilisi, Georgia</td><td>2.44K</td><td>2</td></tr><tr><td>452</td><td><a href="https://github.com/huan">
        <img src="https://avatars.githubusercontent.com/u/1361891?s=72&u=8c9af1c10536f54022ef0698a1161e769fbd1d3b&v=4" height="12" />
        <b>huan</b>
    </a></td><td>@ShipFail  @PreAngel </td><td>San Francisco</td><td>2.35K</td><td>2</td></tr><tr><td>453</td><td><a href="https://github.com/dilmerv">
        <img src="https://avatars.githubusercontent.com/u/1216121?s=72&u=72b881cc724180b53dcd8ab7bf76e300d64053c1&v=4" height="12" />
        <b>dilmerv</b>
    </a></td><td>Learn XR / Dilmer Games</td><td>Salt Lake City, US</td><td>1.96K</td><td>2</td></tr><tr><td>454</td><td><a href="https://github.com/ashleymcnamara">
        <img src="https://avatars.githubusercontent.com/u/3139143?s=72&u=7c97429c7373a174251721d56f02b00b00859d80&v=4" height="12" />
        <b>ashleymcnamara</b>
    </a></td><td>GitHub</td><td>Seattle</td><td>1.93K</td><td>2</td></tr><tr><td>455</td><td><a href="https://github.com/heathermiller">
        <img src="https://avatars.githubusercontent.com/u/687163?s=72&v=4" height="12" />
        <b>heathermiller</b>
    </a></td><td>Carnegie Mellon University</td><td>Pittsburgh, PA, USA</td><td>1.9K</td><td>2</td></tr><tr><td>456</td><td><a href="https://github.com/huytd">
        <img src="https://avatars.githubusercontent.com/u/613943?s=72&u=1c4907aec0dbf090114152e8ca1c4c3243f9fbed&v=4" height="12" />
        <b>huytd</b>
    </a></td><td>-</td><td>California, US</td><td>1.89K</td><td>2</td></tr><tr><td>457</td><td><a href="https://github.com/kvfrans">
        <img src="https://avatars.githubusercontent.com/u/1484166?s=72&u=6286e9a50ea6ba604eb2dfd067d2fe1278a6b808&v=4" height="12" />
        <b>kvfrans</b>
    </a></td><td>-</td><td>United States</td><td>1.88K</td><td>2</td></tr><tr><td>458</td><td><a href="https://github.com/boku7">
        <img src="https://avatars.githubusercontent.com/u/19784872?s=72&u=b81356ff6a529497fca2426a4230bbb96c23c7ef&v=4" height="12" />
        <b>boku7</b>
    </a></td><td>IBM X-Force Red Adversary Simulation</td><td>United States</td><td>1.86K</td><td>2</td></tr><tr><td>459</td><td><a href="https://github.com/StefanKarpinski">
        <img src="https://avatars.githubusercontent.com/u/153596?s=72&v=4" height="12" />
        <b>StefanKarpinski</b>
    </a></td><td>@JuliaComputing</td><td>New York, NY</td><td>1.84K</td><td>2</td></tr><tr><td>460</td><td><a href="https://github.com/mikedemarais">
        <img src="https://avatars.githubusercontent.com/u/1325144?s=72&u=7b32dcd04811261405f2ed35d933b1484558758d&v=4" height="12" />
        <b>mikedemarais</b>
    </a></td><td>@rainbow-me</td><td>New York, NY</td><td>1.83K</td><td>2</td></tr><tr><td>461</td><td><a href="https://github.com/deedy">
        <img src="https://avatars.githubusercontent.com/u/1846373?s=72&u=6c738c8985d6c2d56d0d1a61e2c00ae771207fc0&v=4" height="12" />
        <b>deedy</b>
    </a></td><td>Menlo Ventures</td><td>San Francisco, CA</td><td>1.82K</td><td>2</td></tr><tr><td>462</td><td><a href="https://github.com/markbates">
        <img src="https://avatars.githubusercontent.com/u/3528?s=72&u=392d6f86894e7a7ead0ecab99344aa161eb1c0d6&v=4" height="12" />
        <b>markbates</b>
    </a></td><td>Meta42 Labs, LLC</td><td>Boston, MA</td><td>1.62K</td><td>2</td></tr><tr><td>463</td><td><a href="https://github.com/ryanseys">
        <img src="https://avatars.githubusercontent.com/u/163873?s=72&v=4" height="12" />
        <b>ryanseys</b>
    </a></td><td>-</td><td>🌁  San Francisco, CA</td><td>1.62K</td><td>2</td></tr><tr><td>464</td><td><a href="https://github.com/hwdsl2">
        <img src="https://avatars.githubusercontent.com/u/5104323?s=72&u=b223733107d01bbd145c55ee00587106cb3a2349&v=4" height="12" />
        <b>hwdsl2</b>
    </a></td><td>-</td><td>United States</td><td>1.61K</td><td>2</td></tr><tr><td>465</td><td><a href="https://github.com/pcwalton">
        <img src="https://avatars.githubusercontent.com/u/157897?s=72&u=fab8268f5338550918b6e4379bb3ac6f6dce67c6&v=4" height="12" />
        <b>pcwalton</b>
    </a></td><td>-</td><td>San Francisco, CA</td><td>1.61K</td><td>2</td></tr><tr><td>466</td><td><a href="https://github.com/chomado">
        <img src="https://avatars.githubusercontent.com/u/3405269?s=72&u=a183b41df2250d0c885c00cab75f079aeb8e169b&v=4" height="12" />
        <b>chomado</b>
    </a></td><td>Microsoft</td><td>Tokyo, Japan / Redmond, WA, US</td><td>1.59K</td><td>2</td></tr><tr><td>467</td><td><a href="https://github.com/shrutikapoor08">
        <img src="https://avatars.githubusercontent.com/u/2525914?s=72&u=578bfd51e2e92bc8d6b9fac5b7e035e69d9baf19&v=4" height="12" />
        <b>shrutikapoor08</b>
    </a></td><td>-</td><td>Seattle</td><td>1.58K</td><td>2</td></tr><tr><td>468</td><td><a href="https://github.com/lkzhao">
        <img src="https://avatars.githubusercontent.com/u/3359850?s=72&u=ec5ae8b9f69fd58f197ed32c6e3198f8f6b8e097&v=4" height="12" />
        <b>lkzhao</b>
    </a></td><td>Pinterest</td><td>San Francisco, CA</td><td>1.55K</td><td>2</td></tr><tr><td>469</td><td><a href="https://github.com/PWhiddy">
        <img src="https://avatars.githubusercontent.com/u/15711120?s=72&u=331c427763bfc8faa189aaa4f760a1553afd83da&v=4" height="12" />
        <b>PWhiddy</b>
    </a></td><td>-</td><td>Seattle WA</td><td>1.54K</td><td>2</td></tr><tr><td>470</td><td><a href="https://github.com/divamgupta">
        <img src="https://avatars.githubusercontent.com/u/1890549?s=72&u=04a403c48a19264c23c4807f853f63ba7d9a19b8&v=4" height="12" />
        <b>divamgupta</b>
    </a></td><td>-</td><td>San Francisco, United States</td><td>1.48K</td><td>2</td></tr><tr><td>471</td><td><a href="https://github.com/TimCorey">
        <img src="https://avatars.githubusercontent.com/u/1839873?s=72&v=4" height="12" />
        <b>TimCorey</b>
    </a></td><td>IAmTimCorey</td><td>United States</td><td>1.46K</td><td>2</td></tr><tr><td>472</td><td><a href="https://github.com/brohrer">
        <img src="https://avatars.githubusercontent.com/u/1381097?s=72&u=d23358dd0f51502f6c3bb93879dbb7bd37023dcb&v=4" height="12" />
        <b>brohrer</b>
    </a></td><td>-</td><td>Boston</td><td>1.46K</td><td>2</td></tr><tr><td>473</td><td><a href="https://github.com/jongwook">
        <img src="https://avatars.githubusercontent.com/u/266841?s=72&v=4" height="12" />
        <b>jongwook</b>
    </a></td><td>OpenAI</td><td>San Francisco, CA</td><td>1.39K</td><td>2</td></tr><tr><td>474</td><td><a href="https://github.com/HFTrader">
        <img src="https://avatars.githubusercontent.com/u/11621271?s=72&u=04df6db5da5e0bad188a29469cd0c1f2f99de742&v=4" height="12" />
        <b>HFTrader</b>
    </a></td><td>Vitorian LLC</td><td>Chicago, IL</td><td>1.33K</td><td>2</td></tr><tr><td>475</td><td><a href="https://github.com/adamschwartz">
        <img src="https://avatars.githubusercontent.com/u/154613?s=72&u=2e9b2e3b836d93b137efc2b10b52580473897de1&v=4" height="12" />
        <b>adamschwartz</b>
    </a></td><td>-</td><td>Los Angeles, CA</td><td>1.31K</td><td>2</td></tr><tr><td>476</td><td><a href="https://github.com/jasonmayes">
        <img src="https://avatars.githubusercontent.com/u/4972997?s=72&u=07df24404f263f53ae89b98b531b9aacbb84bb2e&v=4" height="12" />
        <b>jasonmayes</b>
    </a></td><td>Google</td><td>San Francisco</td><td>1.3K</td><td>2</td></tr><tr><td>477</td><td><a href="https://github.com/howl-anderson">
        <img src="https://avatars.githubusercontent.com/u/1263428?s=72&u=038d503e0d99536ec881e1db7718faf76452bc0d&v=4" height="12" />
        <b>howl-anderson</b>
    </a></td><td>-</td><td>United States</td><td>1.29K</td><td>2</td></tr><tr><td>478</td><td><a href="https://github.com/SyntaxTechnologies">
        <img src="https://avatars.githubusercontent.com/u/39230161?s=72&u=d21d6dd1266a16889dd8924404b73fccd2176598&v=4" height="12" />
        <b>SyntaxTechnologies</b>
    </a></td><td>-</td><td>Chantilly, Virginia, USA</td><td>1.29K</td><td>2</td></tr><tr><td>479</td><td><a href="https://github.com/soumilshah1995">
        <img src="https://avatars.githubusercontent.com/u/39345855?s=72&u=ea684769e71414b257316563b70d90f33c27ba17&v=4" height="12" />
        <b>soumilshah1995</b>
    </a></td><td>Lead Software  Engineer | AWS & Apache Hudi & Iceberg Expert | Spark & AWS Glue Enthusiast | YouTuber</td><td>New York</td><td>1.29K</td><td>2</td></tr><tr><td>480</td><td><a href="https://github.com/tytydraco">
        <img src="https://avatars.githubusercontent.com/u/19982371?s=72&u=169ac348a1a4421bba7414f4f54ca1ba8bce7547&v=4" height="12" />
        <b>tytydraco</b>
    </a></td><td>-</td><td>California, United States</td><td>1.08K</td><td>2</td></tr><tr><td>481</td><td><a href="https://github.com/sgonzalez">
        <img src="https://avatars.githubusercontent.com/u/654125?s=72&u=159eb6dc7038314dbce4c96cb3bcd6cebe8b3bde&v=4" height="12" />
        <b>sgonzalez</b>
    </a></td><td>-</td><td>San Francisco, CA</td><td>1.07K</td><td>2</td></tr><tr><td>482</td><td><a href="https://github.com/kyunghyuncho">
        <img src="https://avatars.githubusercontent.com/u/4028979?s=72&v=4" height="12" />
        <b>kyunghyuncho</b>
    </a></td><td>New York University</td><td>United States</td><td>1.05K</td><td>2</td></tr><tr><td>483</td><td><a href="https://github.com/codinghemp">
        <img src="https://avatars.githubusercontent.com/u/114475644?s=72&u=00f57b5d4923adac9cfa2a8a3a54daa38975ae6b&v=4" height="12" />
        <b>codinghemp</b>
    </a></td><td>-</td><td>America/Austin</td><td>1.56K</td><td>1</td></tr>
    </tbody>
</table>

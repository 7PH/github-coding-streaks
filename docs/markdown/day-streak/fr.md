# Daily Commit Streak Leaderboard @ France <img src="https://flagsapi.com/FR/flat/24.png">

Users that have been contributing every day for the longest time.

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
			<b>Other <img src="https://flagsapi.com/FR/flat/16.png"> leaderboards</b>
		</td>
		<td>
			<a href="../contribution-count/fr.md">
				Top Contributor
			</a>
		</td>
		<td>
			<a href="../week-streak/fr.md">
				Weekly Commit Streak
			</a>
		</td>
	</tr>
</table>

<details>
<summary>How is this leaderboard computed?</summary>

To be in this leaderboard, you need:

-   At least `150` followers
-   Have one of `france,frankreich,paris,lyon,nantes,toulouse,rennes,bordeaux,lille,grenoble,montpellier,nancy` in your profile location. [Ask to add a city name if you think it's missing.](https://github.com/7PH/github-top-users/issues/new).
-   Be part of the first `200` users based the ranking criteria

Here is the pseudocode generating this leaderboard:

```js
github
    .users
    .filter(user => user.followerCount > 150)
    .sortBy(user => getCurrentDailyCommitStreak(user), 'desc')
    .take(200)
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
            <th>Daily Commit Streak</th>
        </tr>
    </thead>
    <tbody>
        <tr><td>🥇</td><td><a href="https://github.com/bloodyowl">
        <img src="https://avatars.githubusercontent.com/u/1688645?s=72&u=7f12174aeae34c99861918836ef527b7fd927101&v=4" height="12" />
        <b>bloodyowl</b>
    </a></td><td>@swan-io</td><td>Paris, France</td><td>406</td><td>1.44K</td></tr><tr><td>🥈</td><td><a href="https://github.com/gsmet">
        <img src="https://avatars.githubusercontent.com/u/1279749?s=72&u=e462a6165ea17647aed446ca31fae604338ae18c&v=4" height="12" />
        <b>gsmet</b>
    </a></td><td>Red Hat</td><td>Lyon, France</td><td>331</td><td>1.1K</td></tr><tr><td>🥉</td><td><a href="https://github.com/Caceresenzo">
        <img src="https://avatars.githubusercontent.com/u/7386242?s=72&u=17d4617bb086732fd4da9287942494386d06ebb3&v=4" height="12" />
        <b>Caceresenzo</b>
    </a></td><td>-</td><td>France</td><td>191</td><td>1.08K</td></tr><tr><td>4</td><td><a href="https://github.com/MoOx">
        <img src="https://avatars.githubusercontent.com/u/157534?s=72&u=399d4103e3bcf74bb9ef02eb5fe5da40dc90d2db&v=4" height="12" />
        <b>MoOx</b>
    </a></td><td>Freelance at MoOx.io</td><td>Toulouse, France</td><td>1.24K</td><td>873</td></tr><tr><td>5</td><td><a href="https://github.com/Haroenv">
        <img src="https://avatars.githubusercontent.com/u/6270048?s=72&u=767b8fde5c473100da40c50fd2f7c2df139c8d48&v=4" height="12" />
        <b>Haroenv</b>
    </a></td><td>@algolia</td><td>Paris, France</td><td>571</td><td>849</td></tr><tr><td>6</td><td><a href="https://github.com/stephrobert">
        <img src="https://avatars.githubusercontent.com/u/681788?s=72&u=cda76428fe4d06957a063238e1dcc1d4c4ae2cf6&v=4" height="12" />
        <b>stephrobert</b>
    </a></td><td>Outscale France</td><td>Lille</td><td>318</td><td>778</td></tr><tr><td>7</td><td><a href="https://github.com/nhoizey">
        <img src="https://avatars.githubusercontent.com/u/78213?s=72&u=7a2b7a2aca0dcc113d7a61a6dcf9e7a338e22053&v=4" height="12" />
        <b>nhoizey</b>
    </a></td><td>@cleverage</td><td>Paris, France</td><td>262</td><td>609</td></tr><tr><td>8</td><td><a href="https://github.com/BrunoLevy">
        <img src="https://avatars.githubusercontent.com/u/19478253?s=72&u=5d291f158e7d7f0ebb99475e5f8974a7a8ec374d&v=4" height="12" />
        <b>BrunoLevy</b>
    </a></td><td>@inria</td><td>Saclay, France</td><td>653</td><td>418</td></tr><tr><td>9</td><td><a href="https://github.com/crazy-max">
        <img src="https://avatars.githubusercontent.com/u/1951866?s=72&v=4" height="12" />
        <b>crazy-max</b>
    </a></td><td>@docker</td><td>France</td><td>2.44K</td><td>403</td></tr><tr><td>10</td><td><a href="https://github.com/soyuka">
        <img src="https://avatars.githubusercontent.com/u/1321971?s=72&u=c89bcb8e5eeff581d304dcfc5f26628ddc1760a5&v=4" height="12" />
        <b>soyuka</b>
    </a></td><td>@coopTilleuls</td><td>Nantes, France</td><td>409</td><td>165</td></tr><tr><td>11</td><td><a href="https://github.com/maelle">
        <img src="https://avatars.githubusercontent.com/u/8360597?s=72&u=824f03caa87c92420352e3dd9a05470320a67412&v=4" height="12" />
        <b>maelle</b>
    </a></td><td>@ropensci</td><td>Nancy, France</td><td>1.02K</td><td>104</td></tr><tr><td>12</td><td><a href="https://github.com/l-lin">
        <img src="https://avatars.githubusercontent.com/u/5452304?s=72&u=2e2f03b021b647037453379a788385f317c8208f&v=4" height="12" />
        <b>l-lin</b>
    </a></td><td>@doctolib</td><td>Paris</td><td>252</td><td>92</td></tr><tr><td>13</td><td><a href="https://github.com/LaurentMazare">
        <img src="https://avatars.githubusercontent.com/u/1041292?s=72&u=4d4c5fe94c63a8eb244d812c6d97511c3640d122&v=4" height="12" />
        <b>LaurentMazare</b>
    </a></td><td>-</td><td>Paris</td><td>2.2K</td><td>88</td></tr><tr><td>14</td><td><a href="https://github.com/azerpas">
        <img src="https://avatars.githubusercontent.com/u/19282069?s=72&u=23fefaa28d073e8c7fc44a5a8737145773e38c74&v=4" height="12" />
        <b>azerpas</b>
    </a></td><td>@DataDome</td><td>Paris</td><td>214</td><td>88</td></tr><tr><td>15</td><td><a href="https://github.com/fxcoudert">
        <img src="https://avatars.githubusercontent.com/u/1980544?s=72&u=9a73e04b4876d134ff69035fd7ea77eebecda2a3&v=4" height="12" />
        <b>fxcoudert</b>
    </a></td><td>-</td><td>Paris, France</td><td>322</td><td>77</td></tr><tr><td>16</td><td><a href="https://github.com/simongravelle">
        <img src="https://avatars.githubusercontent.com/u/43388542?s=72&u=16bc101821423023268d74e239583cbcc21b3881&v=4" height="12" />
        <b>simongravelle</b>
    </a></td><td>LIPhy</td><td>Grenoble</td><td>502</td><td>72</td></tr><tr><td>17</td><td><a href="https://github.com/BoboTiG">
        <img src="https://avatars.githubusercontent.com/u/2033598?s=72&u=7885aa35660361472a378a2e5e300e13ec76ae87&v=4" height="12" />
        <b>BoboTiG</b>
    </a></td><td>-</td><td>France</td><td>192</td><td>71</td></tr><tr><td>18</td><td><a href="https://github.com/rouault">
        <img src="https://avatars.githubusercontent.com/u/1192433?s=72&u=aebaf912a08a734156caf25b26ab78d1959f0ed5&v=4" height="12" />
        <b>rouault</b>
    </a></td><td>Spatialys</td><td>France</td><td>703</td><td>65</td></tr><tr><td>19</td><td><a href="https://github.com/ornicar">
        <img src="https://avatars.githubusercontent.com/u/140370?s=72&v=4" height="12" />
        <b>ornicar</b>
    </a></td><td>lichess.org</td><td>France</td><td>5.73K</td><td>42</td></tr><tr><td>20</td><td><a href="https://github.com/NelleV">
        <img src="https://avatars.githubusercontent.com/u/184798?s=72&v=4" height="12" />
        <b>NelleV</b>
    </a></td><td>TIMC</td><td>Grenoble</td><td>260</td><td>40</td></tr><tr><td>21</td><td><a href="https://github.com/ccamel">
        <img src="https://avatars.githubusercontent.com/u/9574336?s=72&u=5d1de8c7eaf3289162c88956747465a8ed570d66&v=4" height="12" />
        <b>ccamel</b>
    </a></td><td>@axone-protocol</td><td>Toulouse</td><td>330</td><td>38</td></tr><tr><td>22</td><td><a href="https://github.com/cyrildiagne">
        <img src="https://avatars.githubusercontent.com/u/144372?s=72&u=e829a8ddba74bc0744e55d91d735ee931ffbe07f&v=4" height="12" />
        <b>cyrildiagne</b>
    </a></td><td>-</td><td>Paris - France</td><td>2.55K</td><td>36</td></tr><tr><td>23</td><td><a href="https://github.com/franck-gaspoz">
        <img src="https://avatars.githubusercontent.com/u/36030635?s=72&u=9f99e4d9ed845aad32bb17b93c52e5549ffe2b67&v=4" height="12" />
        <b>franck-gaspoz</b>
    </a></td><td>Audensiel</td><td>France - Grenoble</td><td>279</td><td>34</td></tr><tr><td>24</td><td><a href="https://github.com/posva">
        <img src="https://avatars.githubusercontent.com/u/664177?s=72&u=ded1e1cffd1d5620c9d9fb1a1c966c17204d6bef&v=4" height="12" />
        <b>posva</b>
    </a></td><td>Freelance</td><td>Paris </td><td>5.89K</td><td>32</td></tr><tr><td>25</td><td><a href="https://github.com/rlouf">
        <img src="https://avatars.githubusercontent.com/u/3885044?s=72&u=d25f1b19c341ad092b89b860547177a7b5107261&v=4" height="12" />
        <b>rlouf</b>
    </a></td><td>.txt</td><td>Bourron-Marlotte, France</td><td>448</td><td>29</td></tr><tr><td>26</td><td><a href="https://github.com/dubzzz">
        <img src="https://avatars.githubusercontent.com/u/5300235?s=72&u=283a572a5010b5350eee7168cf6ce1b566747903&v=4" height="12" />
        <b>dubzzz</b>
    </a></td><td>Pigment</td><td>Remote, France</td><td>266</td><td>28</td></tr><tr><td>27</td><td><a href="https://github.com/rozierguillaume">
        <img src="https://avatars.githubusercontent.com/u/22763678?s=72&u=f10c1d50d6f9ce7ed6c7d64a767c02911df19cf4&v=4" height="12" />
        <b>rozierguillaume</b>
    </a></td><td>-</td><td>Paris</td><td>334</td><td>26</td></tr><tr><td>28</td><td><a href="https://github.com/garronej">
        <img src="https://avatars.githubusercontent.com/u/6702424?s=72&u=13f489f6f1b3fde3b4d6be6ddc503d2b95a0f5c7&v=4" height="12" />
        <b>garronej</b>
    </a></td><td>@InseeFrLab</td><td>Paris, France</td><td>382</td><td>24</td></tr><tr><td>29</td><td><a href="https://github.com/MattKetmo">
        <img src="https://avatars.githubusercontent.com/u/334996?s=72&u=2b06b452771518c77550e819cb6991bbe8866078&v=4" height="12" />
        <b>MattKetmo</b>
    </a></td><td>Kiln</td><td>Paris</td><td>207</td><td>22</td></tr><tr><td>30</td><td><a href="https://github.com/jedisct1">
        <img src="https://avatars.githubusercontent.com/u/124872?s=72&v=4" height="12" />
        <b>jedisct1</b>
    </a></td><td>-</td><td>France</td><td>3.8K</td><td>21</td></tr><tr><td>31</td><td><a href="https://github.com/DamienCassou">
        <img src="https://avatars.githubusercontent.com/u/217543?s=72&v=4" height="12" />
        <b>DamienCassou</b>
    </a></td><td>finsit @ Wolters Kluwer</td><td>Brest, France</td><td>264</td><td>21</td></tr><tr><td>32</td><td><a href="https://github.com/angelozerr">
        <img src="https://avatars.githubusercontent.com/u/1932211?s=72&v=4" height="12" />
        <b>angelozerr</b>
    </a></td><td>Red Hat</td><td>France</td><td>187</td><td>21</td></tr><tr><td>33</td><td><a href="https://github.com/Androz2091">
        <img src="https://avatars.githubusercontent.com/u/42497995?s=72&u=6f40d52a49652087722a05d55013645bca6745b6&v=4" height="12" />
        <b>Androz2091</b>
    </a></td><td>EPFL</td><td>France, Toulouse</td><td>1.22K</td><td>17</td></tr><tr><td>34</td><td><a href="https://github.com/dunglas">
        <img src="https://avatars.githubusercontent.com/u/57224?s=72&u=a7ed2cf3f0ae84c9e06925b94091b85a7d6324b0&v=4" height="12" />
        <b>dunglas</b>
    </a></td><td>@coopTilleuls </td><td>Lille, France</td><td>3.99K</td><td>16</td></tr><tr><td>35</td><td><a href="https://github.com/maxep">
        <img src="https://avatars.githubusercontent.com/u/6815992?s=72&u=115812fb51e4c22e57229cb52b30d8e7604048d5&v=4" height="12" />
        <b>maxep</b>
    </a></td><td>@datadog  </td><td>France</td><td>198</td><td>16</td></tr><tr><td>36</td><td><a href="https://github.com/4ian">
        <img src="https://avatars.githubusercontent.com/u/1280130?s=72&u=18f856cccd8f77b611b17865cd8562165c49eeab&v=4" height="12" />
        <b>4ian</b>
    </a></td><td>@GDevelopApp</td><td>Paris, France</td><td>1.85K</td><td>15</td></tr><tr><td>37</td><td><a href="https://github.com/holtzy">
        <img src="https://avatars.githubusercontent.com/u/10254401?s=72&u=d554070e82949f6c7c6c57d4597f4cfddb053956&v=4" height="12" />
        <b>holtzy</b>
    </a></td><td>Software Engineer - Dataviz</td><td>Montpellier, France</td><td>3.98K</td><td>14</td></tr><tr><td>38</td><td><a href="https://github.com/Calinou">
        <img src="https://avatars.githubusercontent.com/u/180032?s=72&v=4" height="12" />
        <b>Calinou</b>
    </a></td><td>@godotengine</td><td>Troyes, France</td><td>1.32K</td><td>14</td></tr><tr><td>39</td><td><a href="https://github.com/Carreau">
        <img src="https://avatars.githubusercontent.com/u/335567?s=72&v=4" height="12" />
        <b>Carreau</b>
    </a></td><td>@Quansight-Labs</td><td>France</td><td>1.3K</td><td>14</td></tr><tr><td>40</td><td><a href="https://github.com/arv">
        <img src="https://avatars.githubusercontent.com/u/45845?s=72&v=4" height="12" />
        <b>arv</b>
    </a></td><td>@rocicorp</td><td>Paris</td><td>802</td><td>14</td></tr><tr><td>41</td><td><a href="https://github.com/kartben">
        <img src="https://avatars.githubusercontent.com/u/128251?s=72&v=4" height="12" />
        <b>kartben</b>
    </a></td><td>-</td><td>Toulouse, France</td><td>373</td><td>14</td></tr><tr><td>42</td><td><a href="https://github.com/mckenziearts">
        <img src="https://avatars.githubusercontent.com/u/14105989?s=72&u=9c230c3e470fd4ddbbec22005757893bfa61d3ef&v=4" height="12" />
        <b>mckenziearts</b>
    </a></td><td>@shopperlabs </td><td>Paris, France</td><td>328</td><td>14</td></tr><tr><td>43</td><td><a href="https://github.com/mcanouil">
        <img src="https://avatars.githubusercontent.com/u/8896044?s=72&u=86a5cbe0323a90349d87b7fa1fd4b22ae9d45ea2&v=4" height="12" />
        <b>mcanouil</b>
    </a></td><td>-</td><td>Lille, France</td><td>262</td><td>14</td></tr><tr><td>44</td><td><a href="https://github.com/ggrossetie">
        <img src="https://avatars.githubusercontent.com/u/333276?s=72&u=9087930b05d462a706f06a9ce6bf0c8289d8069d&v=4" height="12" />
        <b>ggrossetie</b>
    </a></td><td>Yuzu tech</td><td>Lyon</td><td>219</td><td>14</td></tr><tr><td>45</td><td><a href="https://github.com/gnodet">
        <img src="https://avatars.githubusercontent.com/u/84022?s=72&u=411d6cc1a1007325d0051d524e5ec04b5a859e1f&v=4" height="12" />
        <b>gnodet</b>
    </a></td><td>Red Hat</td><td>Caen, France</td><td>201</td><td>14</td></tr><tr><td>46</td><td><a href="https://github.com/fasterthanlime">
        <img src="https://avatars.githubusercontent.com/u/7998310?s=72&u=fd6cb24423c35c26ee1ce7e00f0a3925bc964d1d&v=4" height="12" />
        <b>fasterthanlime</b>
    </a></td><td>@bearcove</td><td>Lyon, France</td><td>4.14K</td><td>13</td></tr><tr><td>47</td><td><a href="https://github.com/mpgn">
        <img src="https://avatars.githubusercontent.com/u/5891788?s=72&u=b9940284a900247ecbd99c9517c1142c33586621&v=4" height="12" />
        <b>mpgn</b>
    </a></td><td>-</td><td>France</td><td>1.23K</td><td>13</td></tr><tr><td>48</td><td><a href="https://github.com/rubenfiszel">
        <img src="https://avatars.githubusercontent.com/u/275584?s=72&u=eb0fe584ca9e8636a35ab822b93cc4a1ad10bf42&v=4" height="12" />
        <b>rubenfiszel</b>
    </a></td><td>Windmill</td><td>Paris, France</td><td>257</td><td>13</td></tr><tr><td>49</td><td><a href="https://github.com/AlexNesvit">
        <img src="https://avatars.githubusercontent.com/u/150135366?s=72&u=2f973e23d445516368819dd7aa38ef2fc88c970a&v=4" height="12" />
        <b>AlexNesvit</b>
    </a></td><td>Web Planet Studio</td><td>La Ciotat, France</td><td>1.52K</td><td>12</td></tr><tr><td>50</td><td><a href="https://github.com/ldez">
        <img src="https://avatars.githubusercontent.com/u/5674651?s=72&u=45f0e097891f1e7e0c45c5224dcce11c867038af&v=4" height="12" />
        <b>ldez</b>
    </a></td><td>-</td><td>France</td><td>545</td><td>12</td></tr><tr><td>51</td><td><a href="https://github.com/xavierlacot">
        <img src="https://avatars.githubusercontent.com/u/177293?s=72&v=4" height="12" />
        <b>xavierlacot</b>
    </a></td><td>JoliCode</td><td>Paris, France</td><td>197</td><td>11</td></tr><tr><td>52</td><td><a href="https://github.com/BoD">
        <img src="https://avatars.githubusercontent.com/u/372852?s=72&u=7569719a93bcc9da6dbec73e93464aded3bacfb7&v=4" height="12" />
        <b>BoD</b>
    </a></td><td>-</td><td>Paris, France</td><td>197</td><td>10</td></tr><tr><td>53</td><td><a href="https://github.com/oliviertassinari">
        <img src="https://avatars.githubusercontent.com/u/3165635?s=72&u=15a7ca3a64c1839a55c83a987d6f906c817d9e85&v=4" height="12" />
        <b>oliviertassinari</b>
    </a></td><td>MUI</td><td>Paris, France</td><td>3.1K</td><td>9</td></tr><tr><td>54</td><td><a href="https://github.com/MaJerle">
        <img src="https://avatars.githubusercontent.com/u/405717?s=72&u=38e08e0842ed71ef9d972f001cfa73e8aa896362&v=4" height="12" />
        <b>MaJerle</b>
    </a></td><td>-</td><td>France</td><td>2.51K</td><td>9</td></tr><tr><td>55</td><td><a href="https://github.com/potatoqualitee">
        <img src="https://avatars.githubusercontent.com/u/8278033?s=72&u=5a511a15023e5852701b547a867cb56c1dcb21a7&v=4" height="12" />
        <b>potatoqualitee</b>
    </a></td><td>@dataplat</td><td>North of France</td><td>913</td><td>9</td></tr><tr><td>56</td><td><a href="https://github.com/TerrorJack">
        <img src="https://avatars.githubusercontent.com/u/3889585?s=72&u=9f17aa6e8c5e916757801a1852b271f4a307c722&v=4" height="12" />
        <b>TerrorJack</b>
    </a></td><td>@tweag</td><td>Paris</td><td>448</td><td>9</td></tr><tr><td>57</td><td><a href="https://github.com/tchiotludo">
        <img src="https://avatars.githubusercontent.com/u/2064609?s=72&u=e0b81e6999b4fb51c0d7383ee10090d2d6332939&v=4" height="12" />
        <b>tchiotludo</b>
    </a></td><td>@kestra-io</td><td>Lille, France</td><td>210</td><td>9</td></tr><tr><td>58</td><td><a href="https://github.com/soywod">
        <img src="https://avatars.githubusercontent.com/u/10437171?s=72&u=4020552802c51ac1fb793051cd7685d10d0c4a04&v=4" height="12" />
        <b>soywod</b>
    </a></td><td>-</td><td>France</td><td>184</td><td>9</td></tr><tr><td>59</td><td><a href="https://github.com/gregberge">
        <img src="https://avatars.githubusercontent.com/u/266302?s=72&u=7b1d8d84bfbaf6cf8b340896f3cea02da2669c46&v=4" height="12" />
        <b>gregberge</b>
    </a></td><td>Argos</td><td>Paris, France</td><td>1.99K</td><td>8</td></tr><tr><td>60</td><td><a href="https://github.com/pgrimaud">
        <img src="https://avatars.githubusercontent.com/u/1866496?s=72&u=4b2f258754b4728d019d03d7a014be1812ae69fa&v=4" height="12" />
        <b>pgrimaud</b>
    </a></td><td>@sezane</td><td>Paris, France</td><td>615</td><td>8</td></tr><tr><td>61</td><td><a href="https://github.com/johnvuko">
        <img src="https://avatars.githubusercontent.com/u/188946?s=72&u=7298b69cfb0aa8c1055ac262e7367d18a41b9cb8&v=4" height="12" />
        <b>johnvuko</b>
    </a></td><td>@yokitup</td><td>Paris, France</td><td>345</td><td>8</td></tr><tr><td>62</td><td><a href="https://github.com/stevenpersia">
        <img src="https://avatars.githubusercontent.com/u/24541365?s=72&u=1acb8c49db648ad532229b979483d3b097bcc1db&v=4" height="12" />
        <b>stevenpersia</b>
    </a></td><td>@WTTJ</td><td>Avignon, France</td><td>249</td><td>8</td></tr><tr><td>63</td><td><a href="https://github.com/joeybronner">
        <img src="https://avatars.githubusercontent.com/u/5888510?s=72&u=15e39a4e9954e51c531d3d636749bd80c6275b8c&v=4" height="12" />
        <b>joeybronner</b>
    </a></td><td>-</td><td>Paris</td><td>248</td><td>8</td></tr><tr><td>64</td><td><a href="https://github.com/marvinroger">
        <img src="https://avatars.githubusercontent.com/u/990773?s=72&u=1eadb64e486234988a873bc4bc1f7860618573db&v=4" height="12" />
        <b>marvinroger</b>
    </a></td><td>@orus-tech </td><td>Paris, France</td><td>235</td><td>8</td></tr><tr><td>65</td><td><a href="https://github.com/xldenis">
        <img src="https://avatars.githubusercontent.com/u/451373?s=72&u=93fc9c79104404fbb0f657cdf17e89f301ae3d77&v=4" height="12" />
        <b>xldenis</b>
    </a></td><td>ETHZ</td><td>Zurich/Paris</td><td>228</td><td>8</td></tr><tr><td>66</td><td><a href="https://github.com/Progi1984">
        <img src="https://avatars.githubusercontent.com/u/1533248?s=72&u=096bead2eab90e4795096b7d518583223dd34be6&v=4" height="12" />
        <b>Progi1984</b>
    </a></td><td>@PrestaShopCorp </td><td>Rennes, France</td><td>220</td><td>8</td></tr><tr><td>67</td><td><a href="https://github.com/asbiin">
        <img src="https://avatars.githubusercontent.com/u/25419741?s=72&u=736357ef23ba1f333a7c72f53971fd94267fd131&v=4" height="12" />
        <b>asbiin</b>
    </a></td><td>@monicahq </td><td>Montreuil, France</td><td>203</td><td>8</td></tr><tr><td>68</td><td><a href="https://github.com/Romakita">
        <img src="https://avatars.githubusercontent.com/u/1763311?s=72&u=29dc6efc281f9b8c8de20eab797b894fed5e57d9&v=4" height="12" />
        <b>Romakita</b>
    </a></td><td>Zenika</td><td>Ile-de-france, France</td><td>199</td><td>8</td></tr><tr><td>69</td><td><a href="https://github.com/valryon">
        <img src="https://avatars.githubusercontent.com/u/155884?s=72&u=115b607498d0b336a0f1648bef3f83ce4b14f5ec&v=4" height="12" />
        <b>valryon</b>
    </a></td><td>Pixelnest Studio</td><td>France</td><td>196</td><td>8</td></tr><tr><td>70</td><td><a href="https://github.com/florian-lefebvre">
        <img src="https://avatars.githubusercontent.com/u/69633530?s=72&u=e2ef3f44db480e30e0e7fe90aa559d3c39fac7e6&v=4" height="12" />
        <b>florian-lefebvre</b>
    </a></td><td>-</td><td>France</td><td>190</td><td>8</td></tr><tr><td>71</td><td><a href="https://github.com/atinux">
        <img src="https://avatars.githubusercontent.com/u/904724?s=72&u=c6c29f476e8aced6f47a2edcf057f83ceaeddade&v=4" height="12" />
        <b>atinux</b>
    </a></td><td>@nuxtlabs</td><td>France</td><td>4.81K</td><td>7</td></tr><tr><td>72</td><td><a href="https://github.com/ogrisel">
        <img src="https://avatars.githubusercontent.com/u/89061?s=72&v=4" height="12" />
        <b>ogrisel</b>
    </a></td><td>probabl.ai</td><td>Paris, France</td><td>4.75K</td><td>7</td></tr><tr><td>73</td><td><a href="https://github.com/ssaunier">
        <img src="https://avatars.githubusercontent.com/u/414418?s=72&u=173c3eae211bc1b31534408ac062d917d0b6d162&v=4" height="12" />
        <b>ssaunier</b>
    </a></td><td>@lewagon</td><td>France</td><td>2.31K</td><td>7</td></tr><tr><td>74</td><td><a href="https://github.com/nicolas-grekas">
        <img src="https://avatars.githubusercontent.com/u/243674?s=72&u=85243de9963ea46d545961980e34e6538ad59fd1&v=4" height="12" />
        <b>nicolas-grekas</b>
    </a></td><td>@SymfonyCorp</td><td>Paris, France</td><td>1.96K</td><td>7</td></tr><tr><td>75</td><td><a href="https://github.com/GitSquared">
        <img src="https://avatars.githubusercontent.com/u/24496417?s=72&u=161b0a8aa57c55e6bfff0c1ee6ac59aaeeb774f5&v=4" height="12" />
        <b>GitSquared</b>
    </a></td><td>@carbonfact</td><td>Paris, France</td><td>1.76K</td><td>7</td></tr><tr><td>76</td><td><a href="https://github.com/bclozel">
        <img src="https://avatars.githubusercontent.com/u/103264?s=72&u=7003334e562971b7b0fabb6bed21b940dce0cf89&v=4" height="12" />
        <b>bclozel</b>
    </a></td><td>Spring team</td><td>Lyon, France</td><td>1.53K</td><td>7</td></tr><tr><td>77</td><td><a href="https://github.com/vvo">
        <img src="https://avatars.githubusercontent.com/u/123822?s=72&u=5c91160ac439795400183bac330905155bee1a90&v=4" height="12" />
        <b>vvo</b>
    </a></td><td>Vercel</td><td>Nantes, France</td><td>982</td><td>7</td></tr><tr><td>78</td><td><a href="https://github.com/SylvainCorlay">
        <img src="https://avatars.githubusercontent.com/u/2397974?s=72&u=8c2e50e43baf59740e5b12b48b0f1699caa058f8&v=4" height="12" />
        <b>SylvainCorlay</b>
    </a></td><td>QuantStack</td><td>Paris</td><td>890</td><td>7</td></tr><tr><td>79</td><td><a href="https://github.com/xavierleroy">
        <img src="https://avatars.githubusercontent.com/u/3845810?s=72&u=eefecc2a41ff72940fdfd9eaa02501494b1e2a8d&v=4" height="12" />
        <b>xavierleroy</b>
    </a></td><td>Collège de France and Inria</td><td>Paris, France</td><td>761</td><td>7</td></tr><tr><td>80</td><td><a href="https://github.com/zoontek">
        <img src="https://avatars.githubusercontent.com/u/1902323?s=72&u=b208315a0d0fd583a7cbda7b1badac19b473dc30&v=4" height="12" />
        <b>zoontek</b>
    </a></td><td>Swan</td><td>Paris</td><td>691</td><td>7</td></tr><tr><td>81</td><td><a href="https://github.com/melix">
        <img src="https://avatars.githubusercontent.com/u/316357?s=72&u=2d99b7a2de1d0530b77e897df3667db916dc1cdd&v=4" height="12" />
        <b>melix</b>
    </a></td><td>Oracle Labs </td><td>Nantes, France</td><td>608</td><td>7</td></tr><tr><td>82</td><td><a href="https://github.com/baptisteArno">
        <img src="https://avatars.githubusercontent.com/u/16015833?s=72&u=176af81234c692c3b2ecc37aaae5dbb815fa0a36&v=4" height="12" />
        <b>baptisteArno</b>
    </a></td><td>-</td><td>Paris, France</td><td>534</td><td>7</td></tr><tr><td>83</td><td><a href="https://github.com/martinRenou">
        <img src="https://avatars.githubusercontent.com/u/21197331?s=72&u=c8e008de470bb93523fe837b1dd00c893b827ecf&v=4" height="12" />
        <b>martinRenou</b>
    </a></td><td>@QuantStack</td><td>Angers (France)</td><td>528</td><td>7</td></tr><tr><td>84</td><td><a href="https://github.com/spolu">
        <img src="https://avatars.githubusercontent.com/u/15067?s=72&u=6297f8db333ba5fbf2be0ee9d796a09b1419115f&v=4" height="12" />
        <b>spolu</b>
    </a></td><td>Dust</td><td>Paris</td><td>489</td><td>7</td></tr><tr><td>85</td><td><a href="https://github.com/cveneziani">
        <img src="https://avatars.githubusercontent.com/u/50518?s=72&u=c7b2a45bb87459c343007be7019dcac9eff24d2e&v=4" height="12" />
        <b>cveneziani</b>
    </a></td><td>Cecilitse</td><td>Nantes, France</td><td>395</td><td>7</td></tr><tr><td>86</td><td><a href="https://github.com/tbruyelle">
        <img src="https://avatars.githubusercontent.com/u/92280?s=72&u=3035228f64ba51ad6fc2f9452e22e928604152f8&v=4" height="12" />
        <b>tbruyelle</b>
    </a></td><td>@allinbits</td><td>Montpellier, France</td><td>322</td><td>7</td></tr><tr><td>87</td><td><a href="https://github.com/frankie567">
        <img src="https://avatars.githubusercontent.com/u/1144727?s=72&u=c159fe047727aedecbbeeaa96a1b03ceb9d39add&v=4" height="12" />
        <b>frankie567</b>
    </a></td><td>@polarsource</td><td>Lyon, France</td><td>311</td><td>7</td></tr><tr><td>88</td><td><a href="https://github.com/davidbrochart">
        <img src="https://avatars.githubusercontent.com/u/4711805?s=72&u=d39696d995a9e02ec3613ffb2f62b20b14f92f26&v=4" height="12" />
        <b>davidbrochart</b>
    </a></td><td>@QuantStack</td><td>France</td><td>311</td><td>7</td></tr><tr><td>89</td><td><a href="https://github.com/franky47">
        <img src="https://avatars.githubusercontent.com/u/1174092?s=72&u=031f74d0f1d64c317fb1d79b883b42f4434b17d1&v=4" height="12" />
        <b>franky47</b>
    </a></td><td>@47ng | @chiffre-io</td><td>Grenoble, France</td><td>297</td><td>7</td></tr><tr><td>90</td><td><a href="https://github.com/julien-deramond">
        <img src="https://avatars.githubusercontent.com/u/17381666?s=72&u=a9b71c0b77efa17719595a35f1d1c637c4ad63ac&v=4" height="12" />
        <b>julien-deramond</b>
    </a></td><td>Orange</td><td>Paris, France</td><td>291</td><td>7</td></tr><tr><td>91</td><td><a href="https://github.com/sinedied">
        <img src="https://avatars.githubusercontent.com/u/593151?s=72&u=08557bbdd96221813b8aec932dd7de895ac040ea&v=4" height="12" />
        <b>sinedied</b>
    </a></td><td>@Microsoft</td><td>France</td><td>288</td><td>7</td></tr><tr><td>92</td><td><a href="https://github.com/jpountz">
        <img src="https://avatars.githubusercontent.com/u/299848?s=72&v=4" height="12" />
        <b>jpountz</b>
    </a></td><td>Elasticsearch</td><td>Caen, France</td><td>272</td><td>7</td></tr><tr><td>93</td><td><a href="https://github.com/JanGorman">
        <img src="https://avatars.githubusercontent.com/u/138166?s=72&u=a864dc86f87a117ff19e45fd089780e41f549868&v=4" height="12" />
        <b>JanGorman</b>
    </a></td><td>@PhotoRoom</td><td>Paris, France</td><td>224</td><td>7</td></tr><tr><td>94</td><td><a href="https://github.com/pradel">
        <img src="https://avatars.githubusercontent.com/u/5749437?s=72&u=ce79dc96b5155bbb542a97840dca53ac266fedf8&v=4" height="12" />
        <b>pradel</b>
    </a></td><td>@sigle </td><td>Toulouse, France</td><td>218</td><td>7</td></tr><tr><td>95</td><td><a href="https://github.com/dotdc">
        <img src="https://avatars.githubusercontent.com/u/12827900?s=72&u=df40a5743483684bb6c6ba3259116c7e87cc3ab6&v=4" height="12" />
        <b>dotdc</b>
    </a></td><td>-</td><td>France</td><td>211</td><td>7</td></tr><tr><td>96</td><td><a href="https://github.com/mishig25">
        <img src="https://avatars.githubusercontent.com/u/11827707?s=72&u=558df256723bddeac92e580b6a1eeefa1cad54cc&v=4" height="12" />
        <b>mishig25</b>
    </a></td><td>@huggingface </td><td>Paris, France</td><td>206</td><td>7</td></tr><tr><td>97</td><td><a href="https://github.com/Julow">
        <img src="https://avatars.githubusercontent.com/u/2310568?s=72&v=4" height="12" />
        <b>Julow</b>
    </a></td><td>@tarides</td><td>France</td><td>200</td><td>7</td></tr><tr><td>98</td><td><a href="https://github.com/topheman">
        <img src="https://avatars.githubusercontent.com/u/985982?s=72&u=9319a164fa8c3c905b48e00bb554c4243d9c734b&v=4" height="12" />
        <b>topheman</b>
    </a></td><td>-</td><td>Paris</td><td>195</td><td>7</td></tr><tr><td>99</td><td><a href="https://github.com/moufmouf">
        <img src="https://avatars.githubusercontent.com/u/1290952?s=72&v=4" height="12" />
        <b>moufmouf</b>
    </a></td><td>@thecodingmachine</td><td>Paris</td><td>190</td><td>7</td></tr><tr><td>100</td><td><a href="https://github.com/GuillaumeGomez">
        <img src="https://avatars.githubusercontent.com/u/3050060?s=72&u=6ca85464b07c5464a052250a4fc3e3f9c03c97ed&v=4" height="12" />
        <b>GuillaumeGomez</b>
    </a></td><td>@huawei</td><td>Paris</td><td>1.39K</td><td>6</td></tr><tr><td>101</td><td><a href="https://github.com/aloisdeniel">
        <img src="https://avatars.githubusercontent.com/u/7687231?s=72&u=33f733fea40d7af3b4528613c8c40a015492349c&v=4" height="12" />
        <b>aloisdeniel</b>
    </a></td><td>Freelance</td><td>Rennes, France</td><td>1.24K</td><td>6</td></tr><tr><td>102</td><td><a href="https://github.com/NathanLovato">
        <img src="https://avatars.githubusercontent.com/u/12694995?s=72&u=e4abd5fa8b74c82c57955f490da199a1ac7b9d8c&v=4" height="12" />
        <b>NathanLovato</b>
    </a></td><td>GDQuest</td><td>France</td><td>826</td><td>6</td></tr><tr><td>103</td><td><a href="https://github.com/lovasoa">
        <img src="https://avatars.githubusercontent.com/u/552629?s=72&u=3b5257f8d20ea6c313ed91ba80c024c3f00cf5dc&v=4" height="12" />
        <b>lovasoa</b>
    </a></td><td>@auto-grid @enexflow </td><td>Paris, France</td><td>544</td><td>6</td></tr><tr><td>104</td><td><a href="https://github.com/pawamoy">
        <img src="https://avatars.githubusercontent.com/u/3999221?s=72&u=b030e4c89df2f3a36bc4710b925bdeb6745c9856&v=4" height="12" />
        <b>pawamoy</b>
    </a></td><td>@pawamoy-insiders </td><td>France</td><td>471</td><td>6</td></tr><tr><td>105</td><td><a href="https://github.com/pascalgrimaud">
        <img src="https://avatars.githubusercontent.com/u/9156882?s=72&u=048a3f914bddbb33320df8ec2c7cc22c26f22646&v=4" height="12" />
        <b>pascalgrimaud</b>
    </a></td><td>Freelance</td><td>Lyon, France</td><td>272</td><td>6</td></tr><tr><td>106</td><td><a href="https://github.com/Nenkai">
        <img src="https://avatars.githubusercontent.com/u/13786175?s=72&u=c8c5184ee104323fcd17229ff4f44fc0568847e4&v=4" height="12" />
        <b>Nenkai</b>
    </a></td><td>-</td><td>Lyon, France</td><td>214</td><td>6</td></tr><tr><td>107</td><td><a href="https://github.com/Kocal">
        <img src="https://avatars.githubusercontent.com/u/2103975?s=72&u=91ea5e40f779971db439dde65db81cf5aca43b28&v=4" height="12" />
        <b>Kocal</b>
    </a></td><td>-</td><td>Lyon, France</td><td>212</td><td>6</td></tr><tr><td>108</td><td><a href="https://github.com/kevinmarrec">
        <img src="https://avatars.githubusercontent.com/u/25272043?s=72&u=406b360245c00ec63bcfdfbb1171d714030ad3a4&v=4" height="12" />
        <b>kevinmarrec</b>
    </a></td><td>@steeple-org</td><td>Rennes, France</td><td>194</td><td>6</td></tr><tr><td>109</td><td><a href="https://github.com/nicolargo">
        <img src="https://avatars.githubusercontent.com/u/776747?s=72&u=aa191d095cac0b9bb8ff2aca1d87370b47c0edee&v=4" height="12" />
        <b>nicolargo</b>
    </a></td><td>Le blog de Nicolargo</td><td>Valbonne, France</td><td>797</td><td>5</td></tr><tr><td>110</td><td><a href="https://github.com/xcarpentier">
        <img src="https://avatars.githubusercontent.com/u/923036?s=72&u=e4bd869b6d703f3958d14390a445896742a48c02&v=4" height="12" />
        <b>xcarpentier</b>
    </a></td><td>Freelance React-Native & NextJS Developer</td><td>France</td><td>776</td><td>5</td></tr><tr><td>111</td><td><a href="https://github.com/tgrall">
        <img src="https://avatars.githubusercontent.com/u/541250?s=72&u=ed72bb083428632c5788c3e65202d33c19953712&v=4" height="12" />
        <b>tgrall</b>
    </a></td><td>@github</td><td>Nantes, France</td><td>344</td><td>5</td></tr><tr><td>112</td><td><a href="https://github.com/guillaumepotier">
        <img src="https://avatars.githubusercontent.com/u/496234?s=72&v=4" height="12" />
        <b>guillaumepotier</b>
    </a></td><td>CTO @Wisembly</td><td>Paris</td><td>320</td><td>5</td></tr><tr><td>113</td><td><a href="https://github.com/jfalcou">
        <img src="https://avatars.githubusercontent.com/u/285977?s=72&u=aa9be7c63023593e6e3fb7765390e789f31b7509&v=4" height="12" />
        <b>jfalcou</b>
    </a></td><td>University Paris Sud XI, CNRS</td><td>Orsay, France</td><td>285</td><td>5</td></tr><tr><td>114</td><td><a href="https://github.com/astahmer">
        <img src="https://avatars.githubusercontent.com/u/47224540?s=72&u=3bc3ac9c3c1f64b68704b973c30aae89ad99cc66&v=4" height="12" />
        <b>astahmer</b>
    </a></td><td>-</td><td>Montpellier</td><td>278</td><td>5</td></tr><tr><td>115</td><td><a href="https://github.com/corsonr">
        <img src="https://avatars.githubusercontent.com/u/1649788?s=72&u=36a376b200fd98e6100788c1ec39b3b7e912797a&v=4" height="12" />
        <b>corsonr</b>
    </a></td><td>-</td><td>France</td><td>246</td><td>5</td></tr><tr><td>116</td><td><a href="https://github.com/pventuzelo">
        <img src="https://avatars.githubusercontent.com/u/9038181?s=72&u=137bb80aa7e3f1cffe583caf43d77e53b43952f3&v=4" height="12" />
        <b>pventuzelo</b>
    </a></td><td>FuzzingLabs</td><td>Paris, France</td><td>245</td><td>5</td></tr><tr><td>117</td><td><a href="https://github.com/ParisNeo">
        <img src="https://avatars.githubusercontent.com/u/827993?s=72&u=17ad3b01b402b36d9424d6b4437561304616eb18&v=4" height="12" />
        <b>ParisNeo</b>
    </a></td><td>CEA</td><td>France</td><td>224</td><td>5</td></tr><tr><td>118</td><td><a href="https://github.com/vincentbernat">
        <img src="https://avatars.githubusercontent.com/u/631446?s=72&v=4" height="12" />
        <b>vincentbernat</b>
    </a></td><td>Free</td><td>Paris, France</td><td>1.11K</td><td>4</td></tr><tr><td>119</td><td><a href="https://github.com/lyrixx">
        <img src="https://avatars.githubusercontent.com/u/408368?s=72&u=d4c07886d44eb26a4a7eb2a41d33cf019f0c0160&v=4" height="12" />
        <b>lyrixx</b>
    </a></td><td>@jolicode</td><td>Paris, France</td><td>754</td><td>4</td></tr><tr><td>120</td><td><a href="https://github.com/vdemeester">
        <img src="https://avatars.githubusercontent.com/u/6508?s=72&u=db29d26c4a153343a89ee40c902fae0bfc9a4a2e&v=4" height="12" />
        <b>vdemeester</b>
    </a></td><td>Red Hat</td><td>Paris, France</td><td>669</td><td>4</td></tr><tr><td>121</td><td><a href="https://github.com/CorentinTh">
        <img src="https://avatars.githubusercontent.com/u/25065347?s=72&u=ddfc8b7812ebc8cbd9245f499e4703bf3165ec31&v=4" height="12" />
        <b>CorentinTh</b>
    </a></td><td>@GeorgesTech </td><td>France - Lyon</td><td>650</td><td>4</td></tr><tr><td>122</td><td><a href="https://github.com/Canop">
        <img src="https://avatars.githubusercontent.com/u/617006?s=72&u=d37ffb41ad4ef32e831e315ef5316b51e57c2597&v=4" height="12" />
        <b>Canop</b>
    </a></td><td>-</td><td>Lyon, France</td><td>548</td><td>4</td></tr><tr><td>123</td><td><a href="https://github.com/Wenzel">
        <img src="https://avatars.githubusercontent.com/u/964610?s=72&u=f244bab6b14967638a88cef92752379e64b15996&v=4" height="12" />
        <b>Wenzel</b>
    </a></td><td>-</td><td>Paris, France</td><td>521</td><td>4</td></tr><tr><td>124</td><td><a href="https://github.com/sebsto">
        <img src="https://avatars.githubusercontent.com/u/401798?s=72&u=dc5e8355d22fe5bc956c382be7fa9dddbebea5db&v=4" height="12" />
        <b>sebsto</b>
    </a></td><td>Amazon Web Services</td><td>Paris</td><td>476</td><td>4</td></tr><tr><td>125</td><td><a href="https://github.com/Guilouz">
        <img src="https://avatars.githubusercontent.com/u/12702322?s=72&u=f6da23f5fd8d72ed72413e5bc8b9b2c170670783&v=4" height="12" />
        <b>Guilouz</b>
    </a></td><td>-</td><td>France</td><td>409</td><td>4</td></tr><tr><td>126</td><td><a href="https://github.com/benjamincrozat">
        <img src="https://avatars.githubusercontent.com/u/3613731?s=72&v=4" height="12" />
        <b>benjamincrozat</b>
    </a></td><td>-</td><td>France</td><td>295</td><td>4</td></tr><tr><td>127</td><td><a href="https://github.com/sdpython">
        <img src="https://avatars.githubusercontent.com/u/4695832?s=72&u=9a0581b7da03088ea4ad3a37c5b680a64d864f33&v=4" height="12" />
        <b>sdpython</b>
    </a></td><td>@ENSAE</td><td>paris</td><td>287</td><td>4</td></tr><tr><td>128</td><td><a href="https://github.com/Stilic">
        <img src="https://avatars.githubusercontent.com/u/63605602?s=72&u=6662329db31f63d8bbf4c7755a1c5de99cf54f3b&v=4" height="12" />
        <b>Stilic</b>
    </a></td><td>-</td><td>France</td><td>281</td><td>4</td></tr><tr><td>129</td><td><a href="https://github.com/MeymounB">
        <img src="https://avatars.githubusercontent.com/u/77726988?s=72&u=4b6e91e56b93adbc8a28a4697ea65cb49b1f66e2&v=4" height="12" />
        <b>MeymounB</b>
    </a></td><td>@Next-Generation-Dev</td><td>France</td><td>281</td><td>4</td></tr><tr><td>130</td><td><a href="https://github.com/elierotenberg">
        <img src="https://avatars.githubusercontent.com/u/4177867?s=72&u=9672e1bcb5e585e0154096fd9127bb4de9afda6e&v=4" height="12" />
        <b>elierotenberg</b>
    </a></td><td>ifea.education</td><td>France</td><td>268</td><td>4</td></tr><tr><td>131</td><td><a href="https://github.com/qgallouedec">
        <img src="https://avatars.githubusercontent.com/u/45557362?s=72&u=37cea872e44a4d597f3b9c899add7509044d9ef0&v=4" height="12" />
        <b>qgallouedec</b>
    </a></td><td>@huggingface</td><td>Lyon, France</td><td>214</td><td>4</td></tr><tr><td>132</td><td><a href="https://github.com/scolladon">
        <img src="https://avatars.githubusercontent.com/u/522422?s=72&u=b4e5e596c88abd2919644ba3c050f035811d298c&v=4" height="12" />
        <b>scolladon</b>
    </a></td><td>-</td><td>Paris France</td><td>212</td><td>4</td></tr><tr><td>133</td><td><a href="https://github.com/frgfm">
        <img src="https://avatars.githubusercontent.com/u/26927750?s=72&u=dfbafc3534a42845875b527483a134ec48bfe6f9&v=4" height="12" />
        <b>frgfm</b>
    </a></td><td>@quack-ai @pyronear</td><td>Paris, FR</td><td>210</td><td>4</td></tr><tr><td>134</td><td><a href="https://github.com/gligli">
        <img src="https://avatars.githubusercontent.com/u/524324?s=72&u=aea8e953ccfc6186f4e7e8e0ac55f30ebf86f450&v=4" height="12" />
        <b>gligli</b>
    </a></td><td>-</td><td>near Lyon, France</td><td>195</td><td>4</td></tr><tr><td>135</td><td><a href="https://github.com/aaugustin">
        <img src="https://avatars.githubusercontent.com/u/788910?s=72&u=3a29db80be82d08a9068cfb35898e8a8179920ee&v=4" height="12" />
        <b>aaugustin</b>
    </a></td><td>@qonto</td><td>Paris, France</td><td>1.29K</td><td>3</td></tr><tr><td>136</td><td><a href="https://github.com/Cadene">
        <img src="https://avatars.githubusercontent.com/u/4681518?s=72&u=7b60f24dd0deb4dcbb097c9aeca2dd252f9907d9&v=4" height="12" />
        <b>Cadene</b>
    </a></td><td>@huggingface </td><td>Paris</td><td>1.06K</td><td>3</td></tr><tr><td>137</td><td><a href="https://github.com/teivah">
        <img src="https://avatars.githubusercontent.com/u/934784?s=72&u=227613cb18fdee717ff7fc61360dddc542a55cab&v=4" height="12" />
        <b>teivah</b>
    </a></td><td>@google</td><td>France</td><td>1.05K</td><td>3</td></tr><tr><td>138</td><td><a href="https://github.com/antonioribeiro">
        <img src="https://avatars.githubusercontent.com/u/3182864?s=72&u=801b6ab616da34a5e443aa6268ceb43a17a65cd6&v=4" height="12" />
        <b>antonioribeiro</b>
    </a></td><td>@area17 </td><td>Paris, France</td><td>915</td><td>3</td></tr><tr><td>139</td><td><a href="https://github.com/sebcrozet">
        <img src="https://avatars.githubusercontent.com/u/1734958?s=72&v=4" height="12" />
        <b>sebcrozet</b>
    </a></td><td>Dimforge</td><td>France</td><td>677</td><td>3</td></tr><tr><td>140</td><td><a href="https://github.com/mklabs">
        <img src="https://avatars.githubusercontent.com/u/113832?s=72&u=99d9dde9317c0658dff2e0409c41495f5ef95077&v=4" height="12" />
        <b>mklabs</b>
    </a></td><td>-</td><td>Lyon, France</td><td>571</td><td>3</td></tr><tr><td>141</td><td><a href="https://github.com/lindenb">
        <img src="https://avatars.githubusercontent.com/u/33838?s=72&u=69f92e5fef0d06f78b08e36877633efa0c7f5441&v=4" height="12" />
        <b>lindenb</b>
    </a></td><td>INSERM</td><td>Nantes, France</td><td>531</td><td>3</td></tr><tr><td>142</td><td><a href="https://github.com/JCluzet">
        <img src="https://avatars.githubusercontent.com/u/55356071?s=72&u=1e399003c32fba533c32f1b912b9ca56756e3887&v=4" height="12" />
        <b>JCluzet</b>
    </a></td><td>42Paris</td><td>Paris</td><td>355</td><td>3</td></tr><tr><td>143</td><td><a href="https://github.com/k33g">
        <img src="https://avatars.githubusercontent.com/u/491848?s=72&u=332138d1fe94fc2ab4953428187a92663e14eeac&v=4" height="12" />
        <b>k33g</b>
    </a></td><td>-</td><td>Lyon (France)</td><td>350</td><td>3</td></tr><tr><td>144</td><td><a href="https://github.com/cor3ntin">
        <img src="https://avatars.githubusercontent.com/u/1409019?s=72&v=4" height="12" />
        <b>cor3ntin</b>
    </a></td><td>-</td><td>Bordeaux, France</td><td>335</td><td>3</td></tr><tr><td>145</td><td><a href="https://github.com/clementroche">
        <img src="https://avatars.githubusercontent.com/u/28361254?s=72&u=617b111ad79a35e545994bdc651eb7967ae72f10&v=4" height="12" />
        <b>clementroche</b>
    </a></td><td>@darkroomengineering</td><td>France</td><td>324</td><td>3</td></tr><tr><td>146</td><td><a href="https://github.com/pvictor">
        <img src="https://avatars.githubusercontent.com/u/4415580?s=72&u=20521e4b00f77d0e22b042bff019ed86abd03913&v=4" height="12" />
        <b>pvictor</b>
    </a></td><td>@dreamRs </td><td>Paris, France</td><td>296</td><td>3</td></tr><tr><td>147</td><td><a href="https://github.com/SirLynix">
        <img src="https://avatars.githubusercontent.com/u/3002461?s=72&u=4135665e8c9d7743b47a266b9cf93ca5d06eef61&v=4" height="12" />
        <b>SirLynix</b>
    </a></td><td>Gameloft Paris</td><td>France</td><td>295</td><td>3</td></tr><tr><td>148</td><td><a href="https://github.com/JeanMeche">
        <img src="https://avatars.githubusercontent.com/u/1300985?s=72&u=ba0f3dbc4cae44232ebf50bdd845bc98750fa42e&v=4" height="12" />
        <b>JeanMeche</b>
    </a></td><td>👀</td><td>Grenoble - France</td><td>268</td><td>3</td></tr><tr><td>149</td><td><a href="https://github.com/BUZZARDGTA">
        <img src="https://avatars.githubusercontent.com/u/62464560?s=72&u=7cfb6146a33a4a29064e5d77c481cdd7916428ab&v=4" height="12" />
        <b>BUZZARDGTA</b>
    </a></td><td>IB_U_Z_Z_A_R_Dl</td><td>France</td><td>248</td><td>3</td></tr><tr><td>150</td><td><a href="https://github.com/serlesen">
        <img src="https://avatars.githubusercontent.com/u/6515947?s=72&v=4" height="12" />
        <b>serlesen</b>
    </a></td><td>-</td><td>France</td><td>225</td><td>3</td></tr><tr><td>151</td><td><a href="https://github.com/williamdes">
        <img src="https://avatars.githubusercontent.com/u/7784660?s=72&u=41b673444a231d4b51158f19405660bead34e360&v=4" height="12" />
        <b>williamdes</b>
    </a></td><td>@wdes, @phpmyadmin, @sudo-bot, @code-lts </td><td>Brittany, France</td><td>210</td><td>3</td></tr><tr><td>152</td><td><a href="https://github.com/ISSOtm">
        <img src="https://avatars.githubusercontent.com/u/15271137?s=72&u=e1646d5c0c78ac164e86bd5f171ca38bb10deb7c&v=4" height="12" />
        <b>ISSOtm</b>
    </a></td><td>Currently on a sabbatical</td><td>France, often close to a PC and a Game Boy</td><td>208</td><td>3</td></tr><tr><td>153</td><td><a href="https://github.com/hoechenberger">
        <img src="https://avatars.githubusercontent.com/u/2046265?s=72&u=739a20430346a14bc157ff1f28dcee6fc882461a&v=4" height="12" />
        <b>hoechenberger</b>
    </a></td><td>-</td><td>Geneva, Paris, Berlin</td><td>193</td><td>3</td></tr><tr><td>154</td><td><a href="https://github.com/matyo91">
        <img src="https://avatars.githubusercontent.com/u/1254025?s=72&u=9b7ebe3f2a1154386cef252f1819e13128300355&v=4" height="12" />
        <b>matyo91</b>
    </a></td><td>@darkwood-com</td><td>Paris</td><td>190</td><td>3</td></tr><tr><td>155</td><td><a href="https://github.com/brucelane">
        <img src="https://avatars.githubusercontent.com/u/138158?s=72&u=2acdc08ff422b253646ccec5206a03ee5c90af59&v=4" height="12" />
        <b>brucelane</b>
    </a></td><td>sophiadigitalart</td><td>Alpes maritimes, France</td><td>189</td><td>3</td></tr><tr><td>156</td><td><a href="https://github.com/Charles-Chrismann">
        <img src="https://avatars.githubusercontent.com/u/78157563?s=72&u=fc17705222fa92912b9b8ad556101a0608308911&v=4" height="12" />
        <b>Charles-Chrismann</b>
    </a></td><td>Institut de l'Internet et du Multimédia (IIM)</td><td>Paris, La Défense</td><td>11.92K</td><td>2</td></tr><tr><td>157</td><td><a href="https://github.com/merveenoyan">
        <img src="https://avatars.githubusercontent.com/u/53175384?s=72&u=ab2077caabaaafab06be2b51c5e77f7e7da72050&v=4" height="12" />
        <b>merveenoyan</b>
    </a></td><td>@huggingface </td><td>Paris</td><td>3.18K</td><td>2</td></tr><tr><td>158</td><td><a href="https://github.com/rom1504">
        <img src="https://avatars.githubusercontent.com/u/2346494?s=72&v=4" height="12" />
        <b>rom1504</b>
    </a></td><td>@google</td><td>Paris</td><td>2.07K</td><td>2</td></tr><tr><td>159</td><td><a href="https://github.com/sarahdayan">
        <img src="https://avatars.githubusercontent.com/u/5370675?s=72&u=eb2bd0eaf36d3c355f17fb18c7711b16b95091bf&v=4" height="12" />
        <b>sarahdayan</b>
    </a></td><td>@algolia</td><td>France</td><td>1.67K</td><td>2</td></tr><tr><td>160</td><td><a href="https://github.com/nadimkobeissi">
        <img src="https://avatars.githubusercontent.com/u/9953?s=72&u=9b93ddb25989d68c43ef490496ffff08ac89fbc1&v=4" height="12" />
        <b>nadimkobeissi</b>
    </a></td><td>@symbolicsoft, @cure53berlin</td><td>Paris, France</td><td>1.24K</td><td>2</td></tr><tr><td>161</td><td><a href="https://github.com/groue">
        <img src="https://avatars.githubusercontent.com/u/54219?s=72&u=73ae5871c4a96c72fae2650b267d578440e38983&v=4" height="12" />
        <b>groue</b>
    </a></td><td>Pierlis</td><td>Paris, France</td><td>1.09K</td><td>2</td></tr><tr><td>162</td><td><a href="https://github.com/Bleuje">
        <img src="https://avatars.githubusercontent.com/u/17087687?s=72&u=43aeff24919f3b82dec581293d2f9df51bcfb187&v=4" height="12" />
        <b>Bleuje</b>
    </a></td><td>-</td><td>Paris</td><td>1.07K</td><td>2</td></tr><tr><td>163</td><td><a href="https://github.com/glample">
        <img src="https://avatars.githubusercontent.com/u/8885556?s=72&v=4" height="12" />
        <b>glample</b>
    </a></td><td>Facebook AI Research</td><td>Paris</td><td>1.03K</td><td>2</td></tr><tr><td>164</td><td><a href="https://github.com/baskerville">
        <img src="https://avatars.githubusercontent.com/u/159419?s=72&v=4" height="12" />
        <b>baskerville</b>
    </a></td><td>-</td><td>France</td><td>920</td><td>2</td></tr><tr><td>165</td><td><a href="https://github.com/scraly">
        <img src="https://avatars.githubusercontent.com/u/2543381?s=72&u=d500ca96ff8a2a3f9b7bb300c71ed7e57449b072&v=4" height="12" />
        <b>scraly</b>
    </a></td><td>ovh</td><td>Toulouse</td><td>730</td><td>2</td></tr><tr><td>166</td><td><a href="https://github.com/vicb">
        <img src="https://avatars.githubusercontent.com/u/248818?s=72&u=4447f9d1f51e304fceccbedff7c6a78224afc890&v=4" height="12" />
        <b>vicb</b>
    </a></td><td>-</td><td>Grenoble, France</td><td>683</td><td>2</td></tr><tr><td>167</td><td><a href="https://github.com/nabla-c0d3">
        <img src="https://avatars.githubusercontent.com/u/1915165?s=72&u=e583ff7b079ed660d12b304503d0b0cfaf82856b&v=4" height="12" />
        <b>nabla-c0d3</b>
    </a></td><td>-</td><td>Paris & San Francisco</td><td>662</td><td>2</td></tr><tr><td>168</td><td><a href="https://github.com/mcombeau">
        <img src="https://avatars.githubusercontent.com/u/52008667?s=72&u=889adc6df09a8b3f8ee8944b7179bf857860ac7c&v=4" height="12" />
        <b>mcombeau</b>
    </a></td><td>@42School</td><td>Paris, France</td><td>594</td><td>2</td></tr><tr><td>169</td><td><a href="https://github.com/alelievr">
        <img src="https://avatars.githubusercontent.com/u/6877923?s=72&v=4" height="12" />
        <b>alelievr</b>
    </a></td><td>-</td><td>Paris</td><td>587</td><td>2</td></tr><tr><td>170</td><td><a href="https://github.com/andfanilo">
        <img src="https://avatars.githubusercontent.com/u/5351877?s=72&u=adbddbe5c788a158b403ff1e1981195523b9e7d7&v=4" height="12" />
        <b>andfanilo</b>
    </a></td><td>Worldline</td><td>France</td><td>578</td><td>2</td></tr><tr><td>171</td><td><a href="https://github.com/guillaumebriday">
        <img src="https://avatars.githubusercontent.com/u/8252238?s=72&u=c34e53afee0a1d7e6b1a8112f8bb875c51fcd657&v=4" height="12" />
        <b>guillaumebriday</b>
    </a></td><td>@spendhq</td><td>Lyon, France</td><td>542</td><td>2</td></tr><tr><td>172</td><td><a href="https://github.com/davidgohel">
        <img src="https://avatars.githubusercontent.com/u/4331618?s=72&v=4" height="12" />
        <b>davidgohel</b>
    </a></td><td>ArData</td><td>Paris</td><td>541</td><td>2</td></tr><tr><td>173</td><td><a href="https://github.com/gus33000">
        <img src="https://avatars.githubusercontent.com/u/3755345?s=72&u=8be4944a8331aaff14de13cf7f0354c4a8c192b8&v=4" height="12" />
        <b>gus33000</b>
    </a></td><td>labri</td><td>France</td><td>510</td><td>2</td></tr><tr><td>174</td><td><a href="https://github.com/SimonMarquis">
        <img src="https://avatars.githubusercontent.com/u/1921278?s=72&u=ace12a9fb3a0532f35285bce04898f7a7c97b2f9&v=4" height="12" />
        <b>SimonMarquis</b>
    </a></td><td>@leboncoin</td><td>Paris, France</td><td>472</td><td>2</td></tr><tr><td>175</td><td><a href="https://github.com/CedricGuillemet">
        <img src="https://avatars.githubusercontent.com/u/1312968?s=72&u=09586c4d429addaa7fc099437bebda780a9e39ed&v=4" height="12" />
        <b>CedricGuillemet</b>
    </a></td><td>Microsoft</td><td>Redon, Brittany, France</td><td>462</td><td>2</td></tr><tr><td>176</td><td><a href="https://github.com/hallard">
        <img src="https://avatars.githubusercontent.com/u/2471931?s=72&u=3ae568da0ba3a6e7f4ba03f35fd14f8149f0cff2&v=4" height="12" />
        <b>hallard</b>
    </a></td><td>@ch2i @evolyenergy</td><td>Poitiers, France</td><td>454</td><td>2</td></tr><tr><td>177</td><td><a href="https://github.com/VonC">
        <img src="https://avatars.githubusercontent.com/u/79478?s=72&v=4" height="12" />
        <b>VonC</b>
    </a></td><td>-</td><td>France</td><td>432</td><td>2</td></tr><tr><td>178</td><td><a href="https://github.com/SofianeHamlaoui">
        <img src="https://avatars.githubusercontent.com/u/16967174?s=72&u=1357194625eff600acb803134b1413824208ccb5&v=4" height="12" />
        <b>SofianeHamlaoui</b>
    </a></td><td>-</td><td>Lyon, France</td><td>398</td><td>2</td></tr><tr><td>179</td><td><a href="https://github.com/synopse">
        <img src="https://avatars.githubusercontent.com/u/4548119?s=72&u=52bafba1523a49e000f40edfd88ccb4a36821684&v=4" height="12" />
        <b>synopse</b>
    </a></td><td>Synopse</td><td>Cauterets, France</td><td>390</td><td>2</td></tr><tr><td>180</td><td><a href="https://github.com/LambdAurora">
        <img src="https://avatars.githubusercontent.com/u/12587332?s=72&u=5bc537e2ad331c812f09328154b69cee58adbe85&v=4" height="12" />
        <b>LambdAurora</b>
    </a></td><td>-</td><td>France</td><td>385</td><td>2</td></tr><tr><td>181</td><td><a href="https://github.com/acrosett">
        <img src="https://avatars.githubusercontent.com/u/104265464?s=72&u=cfeba496ed8d876c830ec26dba5e0a62d526f203&v=4" height="12" />
        <b>acrosett</b>
    </a></td><td>-</td><td>France</td><td>375</td><td>2</td></tr><tr><td>182</td><td><a href="https://github.com/Julien-R44">
        <img src="https://avatars.githubusercontent.com/u/8337858?s=72&u=51dca49c82393b452f05ee4aa4129a659ef47e34&v=4" height="12" />
        <b>Julien-R44</b>
    </a></td><td>Freelancing </td><td>France</td><td>373</td><td>2</td></tr><tr><td>183</td><td><a href="https://github.com/unixfox">
        <img src="https://avatars.githubusercontent.com/u/4016501?s=72&u=d113bfcd7a1bb996a29af9ace2c158a3c6289b40&v=4" height="12" />
        <b>unixfox</b>
    </a></td><td>-</td><td>Auvergne-Rhône-Alpes, France - Wallonia, Belgium</td><td>345</td><td>2</td></tr><tr><td>184</td><td><a href="https://github.com/mpromonet">
        <img src="https://avatars.githubusercontent.com/u/1367630?s=72&u=656527786957614d8cf8dec22644fe40dadbbe6f&v=4" height="12" />
        <b>mpromonet</b>
    </a></td><td>-</td><td>France</td><td>334</td><td>2</td></tr><tr><td>185</td><td><a href="https://github.com/v3ga">
        <img src="https://avatars.githubusercontent.com/u/193972?s=72&u=56e939c3eb82bfb7d4f429f0107680c14d844c03&v=4" height="12" />
        <b>v3ga</b>
    </a></td><td>-</td><td>Bordeaux</td><td>328</td><td>2</td></tr><tr><td>186</td><td><a href="https://github.com/tpetazzoni">
        <img src="https://avatars.githubusercontent.com/u/1089203?s=72&v=4" height="12" />
        <b>tpetazzoni</b>
    </a></td><td>Bootlin @bootlin </td><td>Toulouse, France</td><td>327</td><td>2</td></tr><tr><td>187</td><td><a href="https://github.com/kelu124">
        <img src="https://avatars.githubusercontent.com/u/2452634?s=72&u=55b50a96ed1143c6cf84704446464eb7c069daf5&v=4" height="12" />
        <b>kelu124</b>
    </a></td><td>-</td><td>Paris</td><td>322</td><td>2</td></tr><tr><td>188</td><td><a href="https://github.com/DeveloppeurPascal">
        <img src="https://avatars.githubusercontent.com/u/29439699?s=72&u=3b413495092a9927526da35a406812d44b64048b&v=4" height="12" />
        <b>DeveloppeurPascal</b>
    </a></td><td>-</td><td>Orléans, France</td><td>297</td><td>2</td></tr><tr><td>189</td><td><a href="https://github.com/Phyronnaz">
        <img src="https://avatars.githubusercontent.com/u/16806877?s=72&u=9f22d47f8682df3061081987287e90d40f553cc8&v=4" height="12" />
        <b>Phyronnaz</b>
    </a></td><td>-</td><td>France</td><td>292</td><td>2</td></tr><tr><td>190</td><td><a href="https://github.com/alexis-jacq">
        <img src="https://avatars.githubusercontent.com/u/9195965?s=72&u=c0baa79377ae76f4c564cff78ec9b295953cc648&v=4" height="12" />
        <b>alexis-jacq</b>
    </a></td><td>Google</td><td>Paris</td><td>274</td><td>2</td></tr><tr><td>191</td><td><a href="https://github.com/louisabraham">
        <img src="https://avatars.githubusercontent.com/u/13174805?s=72&v=4" height="12" />
        <b>louisabraham</b>
    </a></td><td>-</td><td>Paris</td><td>259</td><td>2</td></tr><tr><td>192</td><td><a href="https://github.com/cquest">
        <img src="https://avatars.githubusercontent.com/u/1202668?s=72&u=56fc4a65f907c7b7a80c799447036ba5cb1c5876&v=4" height="12" />
        <b>cquest</b>
    </a></td><td>-</td><td>Paris, France</td><td>253</td><td>2</td></tr><tr><td>193</td><td><a href="https://github.com/aiekick">
        <img src="https://avatars.githubusercontent.com/u/1434736?s=72&u=41204d71f1aa785ef74f57c0987bc3ae7c32f1f7&v=4" height="12" />
        <b>aiekick</b>
    </a></td><td>-</td><td>France</td><td>252</td><td>2</td></tr><tr><td>194</td><td><a href="https://github.com/cedricp">
        <img src="https://avatars.githubusercontent.com/u/5940937?s=72&v=4" height="12" />
        <b>cedricp</b>
    </a></td><td>-</td><td>France</td><td>247</td><td>2</td></tr><tr><td>195</td><td><a href="https://github.com/clarus">
        <img src="https://avatars.githubusercontent.com/u/316665?s=72&u=18aacb0561d43abcf7ecca90bebbf753b655ee75&v=4" height="12" />
        <b>clarus</b>
    </a></td><td>Formal Land</td><td>Paris</td><td>237</td><td>2</td></tr><tr><td>196</td><td><a href="https://github.com/RodZill4">
        <img src="https://avatars.githubusercontent.com/u/6957908?s=72&u=c19aecbe4d441eb008a4485fdcddb661ce659951&v=4" height="12" />
        <b>RodZill4</b>
    </a></td><td>-</td><td>France</td><td>231</td><td>2</td></tr><tr><td>197</td><td><a href="https://github.com/greg0ire">
        <img src="https://avatars.githubusercontent.com/u/657779?s=72&u=96a0c076123934fb61c88da5b4d5b72b03dd69cb&v=4" height="12" />
        <b>greg0ire</b>
    </a></td><td>@ManoManoTech </td><td>Paris</td><td>230</td><td>2</td></tr><tr><td>198</td><td><a href="https://github.com/QuentinPerez">
        <img src="https://avatars.githubusercontent.com/u/3081204?s=72&u=de850a79431d34b24985f9ec69db24053baa0c09&v=4" height="12" />
        <b>QuentinPerez</b>
    </a></td><td>@elder-eng </td><td>Paris</td><td>218</td><td>2</td></tr><tr><td>199</td><td><a href="https://github.com/Abonia1">
        <img src="https://avatars.githubusercontent.com/u/22887323?s=72&u=7e8fd5e1ad0b3659bc9a2cdc94a4a18573229497&v=4" height="12" />
        <b>Abonia1</b>
    </a></td><td>IBM</td><td>Paris,France</td><td>216</td><td>2</td></tr><tr><td>200</td><td><a href="https://github.com/Delapouite">
        <img src="https://avatars.githubusercontent.com/u/39315?s=72&v=4" height="12" />
        <b>Delapouite</b>
    </a></td><td>Powipu</td><td>Nantes / Lyon - France</td><td>215</td><td>2</td></tr>
    </tbody>
</table>

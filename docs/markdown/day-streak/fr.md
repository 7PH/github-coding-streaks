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
    </a></td><td>@swan-io</td><td>Paris, France</td><td>406</td><td>1.43K</td></tr><tr><td>🥈</td><td><a href="https://github.com/gsmet">
        <img src="https://avatars.githubusercontent.com/u/1279749?s=72&u=e462a6165ea17647aed446ca31fae604338ae18c&v=4" height="12" />
        <b>gsmet</b>
    </a></td><td>Red Hat</td><td>Lyon, France</td><td>330</td><td>1.09K</td></tr><tr><td>🥉</td><td><a href="https://github.com/Caceresenzo">
        <img src="https://avatars.githubusercontent.com/u/7386242?s=72&u=17d4617bb086732fd4da9287942494386d06ebb3&v=4" height="12" />
        <b>Caceresenzo</b>
    </a></td><td>-</td><td>France</td><td>188</td><td>1.07K</td></tr><tr><td>4</td><td><a href="https://github.com/MoOx">
        <img src="https://avatars.githubusercontent.com/u/157534?s=72&u=399d4103e3bcf74bb9ef02eb5fe5da40dc90d2db&v=4" height="12" />
        <b>MoOx</b>
    </a></td><td>Freelance at MoOx.io</td><td>Toulouse, France</td><td>1.24K</td><td>859</td></tr><tr><td>5</td><td><a href="https://github.com/Haroenv">
        <img src="https://avatars.githubusercontent.com/u/6270048?s=72&u=767b8fde5c473100da40c50fd2f7c2df139c8d48&v=4" height="12" />
        <b>Haroenv</b>
    </a></td><td>@algolia</td><td>Paris, France</td><td>565</td><td>835</td></tr><tr><td>6</td><td><a href="https://github.com/stephrobert">
        <img src="https://avatars.githubusercontent.com/u/681788?s=72&u=cda76428fe4d06957a063238e1dcc1d4c4ae2cf6&v=4" height="12" />
        <b>stephrobert</b>
    </a></td><td>Outscale France</td><td>Lille</td><td>307</td><td>764</td></tr><tr><td>7</td><td><a href="https://github.com/Progi1984">
        <img src="https://avatars.githubusercontent.com/u/1533248?s=72&u=096bead2eab90e4795096b7d518583223dd34be6&v=4" height="12" />
        <b>Progi1984</b>
    </a></td><td>@PrestaShopCorp </td><td>Rennes, France</td><td>219</td><td>651</td></tr><tr><td>8</td><td><a href="https://github.com/nhoizey">
        <img src="https://avatars.githubusercontent.com/u/78213?s=72&u=0f684ad766c0c510083043784aa45b03fbdc03ec&v=4" height="12" />
        <b>nhoizey</b>
    </a></td><td>@cleverage</td><td>Paris, France</td><td>258</td><td>595</td></tr><tr><td>9</td><td><a href="https://github.com/BrunoLevy">
        <img src="https://avatars.githubusercontent.com/u/19478253?s=72&u=5d291f158e7d7f0ebb99475e5f8974a7a8ec374d&v=4" height="12" />
        <b>BrunoLevy</b>
    </a></td><td>@inria</td><td>Saclay, France</td><td>649</td><td>404</td></tr><tr><td>10</td><td><a href="https://github.com/crazy-max">
        <img src="https://avatars.githubusercontent.com/u/1951866?s=72&v=4" height="12" />
        <b>crazy-max</b>
    </a></td><td>@docker</td><td>France</td><td>2.44K</td><td>389</td></tr><tr><td>11</td><td><a href="https://github.com/soyuka">
        <img src="https://avatars.githubusercontent.com/u/1321971?s=72&u=c89bcb8e5eeff581d304dcfc5f26628ddc1760a5&v=4" height="12" />
        <b>soyuka</b>
    </a></td><td>@coopTilleuls</td><td>Nantes, France</td><td>401</td><td>151</td></tr><tr><td>12</td><td><a href="https://github.com/maelle">
        <img src="https://avatars.githubusercontent.com/u/8360597?s=72&u=824f03caa87c92420352e3dd9a05470320a67412&v=4" height="12" />
        <b>maelle</b>
    </a></td><td>@ropensci</td><td>Nancy, France</td><td>1.02K</td><td>90</td></tr><tr><td>13</td><td><a href="https://github.com/l-lin">
        <img src="https://avatars.githubusercontent.com/u/5452304?s=72&u=2e2f03b021b647037453379a788385f317c8208f&v=4" height="12" />
        <b>l-lin</b>
    </a></td><td>@doctolib</td><td>Paris</td><td>250</td><td>78</td></tr><tr><td>14</td><td><a href="https://github.com/LaurentMazare">
        <img src="https://avatars.githubusercontent.com/u/1041292?s=72&u=4d4c5fe94c63a8eb244d812c6d97511c3640d122&v=4" height="12" />
        <b>LaurentMazare</b>
    </a></td><td>-</td><td>Paris</td><td>2.18K</td><td>74</td></tr><tr><td>15</td><td><a href="https://github.com/azerpas">
        <img src="https://avatars.githubusercontent.com/u/19282069?s=72&u=23fefaa28d073e8c7fc44a5a8737145773e38c74&v=4" height="12" />
        <b>azerpas</b>
    </a></td><td>@DataDome</td><td>Paris</td><td>213</td><td>74</td></tr><tr><td>16</td><td><a href="https://github.com/fxcoudert">
        <img src="https://avatars.githubusercontent.com/u/1980544?s=72&u=9a73e04b4876d134ff69035fd7ea77eebecda2a3&v=4" height="12" />
        <b>fxcoudert</b>
    </a></td><td>-</td><td>Paris, France</td><td>321</td><td>63</td></tr><tr><td>17</td><td><a href="https://github.com/simongravelle">
        <img src="https://avatars.githubusercontent.com/u/43388542?s=72&u=16bc101821423023268d74e239583cbcc21b3881&v=4" height="12" />
        <b>simongravelle</b>
    </a></td><td>LIPhy</td><td>Grenoble</td><td>495</td><td>58</td></tr><tr><td>18</td><td><a href="https://github.com/BoboTiG">
        <img src="https://avatars.githubusercontent.com/u/2033598?s=72&u=7885aa35660361472a378a2e5e300e13ec76ae87&v=4" height="12" />
        <b>BoboTiG</b>
    </a></td><td>-</td><td>France</td><td>190</td><td>57</td></tr><tr><td>19</td><td><a href="https://github.com/rouault">
        <img src="https://avatars.githubusercontent.com/u/1192433?s=72&u=aebaf912a08a734156caf25b26ab78d1959f0ed5&v=4" height="12" />
        <b>rouault</b>
    </a></td><td>Spatialys</td><td>France</td><td>696</td><td>51</td></tr><tr><td>20</td><td><a href="https://github.com/pcarrier">
        <img src="https://avatars.githubusercontent.com/u/8641?s=72&u=8af20e7520afb49a09ce94ae561931c70e4abb21&v=4" height="12" />
        <b>pcarrier</b>
    </a></td><td>-</td><td>Grenoble, France</td><td>185</td><td>29</td></tr><tr><td>21</td><td><a href="https://github.com/ornicar">
        <img src="https://avatars.githubusercontent.com/u/140370?s=72&v=4" height="12" />
        <b>ornicar</b>
    </a></td><td>lichess.org</td><td>France</td><td>5.63K</td><td>28</td></tr><tr><td>22</td><td><a href="https://github.com/NelleV">
        <img src="https://avatars.githubusercontent.com/u/184798?s=72&v=4" height="12" />
        <b>NelleV</b>
    </a></td><td>TIMC</td><td>Grenoble</td><td>260</td><td>26</td></tr><tr><td>23</td><td><a href="https://github.com/ccamel">
        <img src="https://avatars.githubusercontent.com/u/9574336?s=72&u=5d1de8c7eaf3289162c88956747465a8ed570d66&v=4" height="12" />
        <b>ccamel</b>
    </a></td><td>@axone-protocol</td><td>Toulouse</td><td>321</td><td>24</td></tr><tr><td>24</td><td><a href="https://github.com/cyrildiagne">
        <img src="https://avatars.githubusercontent.com/u/144372?s=72&u=e829a8ddba74bc0744e55d91d735ee931ffbe07f&v=4" height="12" />
        <b>cyrildiagne</b>
    </a></td><td>-</td><td>Paris - France</td><td>2.55K</td><td>22</td></tr><tr><td>25</td><td><a href="https://github.com/mincong-h">
        <img src="https://avatars.githubusercontent.com/u/10179217?s=72&u=57c934664cab99219bcfa24529c540d9becc44ac&v=4" height="12" />
        <b>mincong-h</b>
    </a></td><td>-</td><td>Paris, France</td><td>209</td><td>22</td></tr><tr><td>26</td><td><a href="https://github.com/fabpot">
        <img src="https://avatars.githubusercontent.com/u/47313?s=72&u=7ba05204271a726f8642ac15864e2f361b5c0198&v=4" height="12" />
        <b>fabpot</b>
    </a></td><td>Symfony/Platform.sh/Blackfire</td><td>Paris, France</td><td>13.24K</td><td>21</td></tr><tr><td>27</td><td><a href="https://github.com/emersion">
        <img src="https://avatars.githubusercontent.com/u/506932?s=72&u=04995169ac1851b91ca12b47f4862ded1b108765&v=4" height="12" />
        <b>emersion</b>
    </a></td><td>-</td><td>France</td><td>1.79K</td><td>20</td></tr><tr><td>28</td><td><a href="https://github.com/franck-gaspoz">
        <img src="https://avatars.githubusercontent.com/u/36030635?s=72&u=9f99e4d9ed845aad32bb17b93c52e5549ffe2b67&v=4" height="12" />
        <b>franck-gaspoz</b>
    </a></td><td>Audensiel</td><td>France - Grenoble</td><td>259</td><td>20</td></tr><tr><td>29</td><td><a href="https://github.com/posva">
        <img src="https://avatars.githubusercontent.com/u/664177?s=72&u=ded1e1cffd1d5620c9d9fb1a1c966c17204d6bef&v=4" height="12" />
        <b>posva</b>
    </a></td><td>Freelance</td><td>Paris </td><td>5.87K</td><td>18</td></tr><tr><td>30</td><td><a href="https://github.com/oliviertassinari">
        <img src="https://avatars.githubusercontent.com/u/3165635?s=72&u=15a7ca3a64c1839a55c83a987d6f906c817d9e85&v=4" height="12" />
        <b>oliviertassinari</b>
    </a></td><td>MUI</td><td>Paris, France</td><td>3.09K</td><td>16</td></tr><tr><td>31</td><td><a href="https://github.com/glemaitre">
        <img src="https://avatars.githubusercontent.com/u/7454015?s=72&u=d9704641f89c00ce86f8207e59aedb554109d7fa&v=4" height="12" />
        <b>glemaitre</b>
    </a></td><td>Open-source engineer @probabl-ai </td><td>Paris-Saclay / France</td><td>766</td><td>16</td></tr><tr><td>32</td><td><a href="https://github.com/atinux">
        <img src="https://avatars.githubusercontent.com/u/904724?s=72&u=c6c29f476e8aced6f47a2edcf057f83ceaeddade&v=4" height="12" />
        <b>atinux</b>
    </a></td><td>@nuxtlabs</td><td>France</td><td>4.78K</td><td>15</td></tr><tr><td>33</td><td><a href="https://github.com/deepnight">
        <img src="https://avatars.githubusercontent.com/u/1671695?s=72&u=36316a70a49497f680e2efef9e8b48623178cdfb&v=4" height="12" />
        <b>deepnight</b>
    </a></td><td>Deepnight Games</td><td>Bordeaux, France</td><td>1.41K</td><td>15</td></tr><tr><td>34</td><td><a href="https://github.com/rlouf">
        <img src="https://avatars.githubusercontent.com/u/3885044?s=72&u=d25f1b19c341ad092b89b860547177a7b5107261&v=4" height="12" />
        <b>rlouf</b>
    </a></td><td>.txt</td><td>Bourron-Marlotte, France</td><td>439</td><td>15</td></tr><tr><td>35</td><td><a href="https://github.com/kartben">
        <img src="https://avatars.githubusercontent.com/u/128251?s=72&v=4" height="12" />
        <b>kartben</b>
    </a></td><td>-</td><td>Toulouse, France</td><td>368</td><td>15</td></tr><tr><td>36</td><td><a href="https://github.com/ParisNeo">
        <img src="https://avatars.githubusercontent.com/u/827993?s=72&u=17ad3b01b402b36d9424d6b4437561304616eb18&v=4" height="12" />
        <b>ParisNeo</b>
    </a></td><td>CEA</td><td>France</td><td>218</td><td>15</td></tr><tr><td>37</td><td><a href="https://github.com/ibelick">
        <img src="https://avatars.githubusercontent.com/u/14288396?s=72&u=73ee6fdd46dbab7bed83493f5f448654ff2d7f06&v=4" height="12" />
        <b>ibelick</b>
    </a></td><td>-</td><td>Paris</td><td>699</td><td>14</td></tr><tr><td>38</td><td><a href="https://github.com/JeanMeche">
        <img src="https://avatars.githubusercontent.com/u/1300985?s=72&u=ba0f3dbc4cae44232ebf50bdd845bc98750fa42e&v=4" height="12" />
        <b>JeanMeche</b>
    </a></td><td>👀</td><td>Grenoble - France</td><td>265</td><td>14</td></tr><tr><td>39</td><td><a href="https://github.com/dubzzz">
        <img src="https://avatars.githubusercontent.com/u/5300235?s=72&u=283a572a5010b5350eee7168cf6ce1b566747903&v=4" height="12" />
        <b>dubzzz</b>
    </a></td><td>Pigment</td><td>Remote, France</td><td>263</td><td>14</td></tr><tr><td>40</td><td><a href="https://github.com/alexkirsz">
        <img src="https://avatars.githubusercontent.com/u/1621758?s=72&u=1920fad1c4b2656b527fea8cdfdfbb7d5f51753f&v=4" height="12" />
        <b>alexkirsz</b>
    </a></td><td>-</td><td>Paris</td><td>258</td><td>14</td></tr><tr><td>41</td><td><a href="https://github.com/rozierguillaume">
        <img src="https://avatars.githubusercontent.com/u/22763678?s=72&u=f10c1d50d6f9ce7ed6c7d64a767c02911df19cf4&v=4" height="12" />
        <b>rozierguillaume</b>
    </a></td><td>-</td><td>Paris</td><td>334</td><td>12</td></tr><tr><td>42</td><td><a href="https://github.com/Phyronnaz">
        <img src="https://avatars.githubusercontent.com/u/16806877?s=72&u=9f22d47f8682df3061081987287e90d40f553cc8&v=4" height="12" />
        <b>Phyronnaz</b>
    </a></td><td>-</td><td>France</td><td>291</td><td>12</td></tr><tr><td>43</td><td><a href="https://github.com/ptitSeb">
        <img src="https://avatars.githubusercontent.com/u/3250792?s=72&u=f206420ae21c0bbf92fea09871f11adea98adb39&v=4" height="12" />
        <b>ptitSeb</b>
    </a></td><td>-</td><td>France</td><td>768</td><td>11</td></tr><tr><td>44</td><td><a href="https://github.com/pawamoy">
        <img src="https://avatars.githubusercontent.com/u/3999221?s=72&u=b030e4c89df2f3a36bc4710b925bdeb6745c9856&v=4" height="12" />
        <b>pawamoy</b>
    </a></td><td>@pawamoy-insiders </td><td>France</td><td>467</td><td>11</td></tr><tr><td>45</td><td><a href="https://github.com/cor3ntin">
        <img src="https://avatars.githubusercontent.com/u/1409019?s=72&v=4" height="12" />
        <b>cor3ntin</b>
    </a></td><td>-</td><td>Bordeaux, France</td><td>333</td><td>11</td></tr><tr><td>46</td><td><a href="https://github.com/Tripouille">
        <img src="https://avatars.githubusercontent.com/u/49202412?s=72&u=76785d33c55894d68245685e62b1aa7ae5ed831a&v=4" height="12" />
        <b>Tripouille</b>
    </a></td><td>Fabriq</td><td>France</td><td>311</td><td>11</td></tr><tr><td>47</td><td><a href="https://github.com/fasterthanlime">
        <img src="https://avatars.githubusercontent.com/u/7998310?s=72&u=fd6cb24423c35c26ee1ce7e00f0a3925bc964d1d&v=4" height="12" />
        <b>fasterthanlime</b>
    </a></td><td>@bearcove</td><td>Lyon, France</td><td>4.12K</td><td>10</td></tr><tr><td>48</td><td><a href="https://github.com/yoanbernabeu">
        <img src="https://avatars.githubusercontent.com/u/59195351?s=72&u=c8f1073abf2184d2eebea8efab19074068507d17&v=4" height="12" />
        <b>yoanbernabeu</b>
    </a></td><td>YoanDev.co</td><td>France</td><td>393</td><td>10</td></tr><tr><td>49</td><td><a href="https://github.com/garronej">
        <img src="https://avatars.githubusercontent.com/u/6702424?s=72&u=13f489f6f1b3fde3b4d6be6ddc503d2b95a0f5c7&v=4" height="12" />
        <b>garronej</b>
    </a></td><td>@InseeFrLab</td><td>Paris, France</td><td>378</td><td>10</td></tr><tr><td>50</td><td><a href="https://github.com/paraboul">
        <img src="https://avatars.githubusercontent.com/u/80341?s=72&u=eea124424525852e2c9add8afa3b25fb889671f3&v=4" height="12" />
        <b>paraboul</b>
    </a></td><td>-</td><td>France</td><td>334</td><td>10</td></tr><tr><td>51</td><td><a href="https://github.com/mockersf">
        <img src="https://avatars.githubusercontent.com/u/8672791?s=72&u=6350847888b0006d335bc98ca32a5359389d26b5&v=4" height="12" />
        <b>mockersf</b>
    </a></td><td>-</td><td>France</td><td>239</td><td>10</td></tr><tr><td>52</td><td><a href="https://github.com/travier">
        <img src="https://avatars.githubusercontent.com/u/64795720?s=72&u=7f7c094b847bc8dc140f2e5aaa44dcd6b70a9486&v=4" height="12" />
        <b>travier</b>
    </a></td><td>Red Hat</td><td>Paris, France</td><td>231</td><td>10</td></tr><tr><td>53</td><td><a href="https://github.com/greg0ire">
        <img src="https://avatars.githubusercontent.com/u/657779?s=72&u=96a0c076123934fb61c88da5b4d5b72b03dd69cb&v=4" height="12" />
        <b>greg0ire</b>
    </a></td><td>@ManoManoTech </td><td>Paris</td><td>229</td><td>10</td></tr><tr><td>54</td><td><a href="https://github.com/GitSquared">
        <img src="https://avatars.githubusercontent.com/u/24496417?s=72&u=161b0a8aa57c55e6bfff0c1ee6ac59aaeeb774f5&v=4" height="12" />
        <b>GitSquared</b>
    </a></td><td>@carbonfact</td><td>Paris, France</td><td>1.75K</td><td>8</td></tr><tr><td>55</td><td><a href="https://github.com/MaxHalford">
        <img src="https://avatars.githubusercontent.com/u/8095957?s=72&u=5cced639da86554f497786d41134a5883db6ff62&v=4" height="12" />
        <b>MaxHalford</b>
    </a></td><td>@carbonfact</td><td>France</td><td>998</td><td>8</td></tr><tr><td>56</td><td><a href="https://github.com/FGRibreau">
        <img src="https://avatars.githubusercontent.com/u/138050?s=72&u=09ca579f8ce5f86026aa0d8858432fe77719eee7&v=4" height="12" />
        <b>FGRibreau</b>
    </a></td><td>@nobullshitbooks @netwo-io @hook0 @image-charts  @killbugtoday @mailpopin  / Sold @Redsmin @bringr</td><td>France</td><td>751</td><td>8</td></tr><tr><td>57</td><td><a href="https://github.com/benjamincanac">
        <img src="https://avatars.githubusercontent.com/u/739984?s=72&u=a263ce7469841c60ad76354f0779055b7e8365d5&v=4" height="12" />
        <b>benjamincanac</b>
    </a></td><td>@nuxtlabs</td><td>Bordeaux</td><td>523</td><td>8</td></tr><tr><td>58</td><td><a href="https://github.com/mrkkrp">
        <img src="https://avatars.githubusercontent.com/u/8165792?s=72&u=d1f6d1a5e2a1f73d8f3255172d3fd2a1b5091e02&v=4" height="12" />
        <b>mrkkrp</b>
    </a></td><td>@tweag</td><td>Château-Thierry, France</td><td>453</td><td>8</td></tr><tr><td>59</td><td><a href="https://github.com/vadimkantorov">
        <img src="https://avatars.githubusercontent.com/u/1041752?s=72&u=51c5c08f0f9be5206c4d5d6b3d09492bb6f9aa69&v=4" height="12" />
        <b>vadimkantorov</b>
    </a></td><td>INRIA</td><td>Paris, France</td><td>318</td><td>8</td></tr><tr><td>60</td><td><a href="https://github.com/JohanMabille">
        <img src="https://avatars.githubusercontent.com/u/6754742?s=72&u=775b86dd500eb42711a48b35928b898bfa183c92&v=4" height="12" />
        <b>JohanMabille</b>
    </a></td><td>QuantStack</td><td>Paris</td><td>246</td><td>8</td></tr><tr><td>61</td><td><a href="https://github.com/tomalaforge">
        <img src="https://avatars.githubusercontent.com/u/30832608?s=72&u=a577fa5a2afc8e523c21cb0237b0c24adefeaedd&v=4" height="12" />
        <b>tomalaforge</b>
    </a></td><td>@rosahealth </td><td>Grenoble</td><td>230</td><td>8</td></tr><tr><td>62</td><td><a href="https://github.com/poolpOrg">
        <img src="https://avatars.githubusercontent.com/u/895503?s=72&u=e63aa059ea0657a703518f1374c8a30fdf2d02ac&v=4" height="12" />
        <b>poolpOrg</b>
    </a></td><td>poolp.org</td><td>Nantes, France</td><td>225</td><td>8</td></tr><tr><td>63</td><td><a href="https://github.com/frgfm">
        <img src="https://avatars.githubusercontent.com/u/26927750?s=72&u=dfbafc3534a42845875b527483a134ec48bfe6f9&v=4" height="12" />
        <b>frgfm</b>
    </a></td><td>@quack-ai @pyronear</td><td>Paris, FR</td><td>209</td><td>8</td></tr><tr><td>64</td><td><a href="https://github.com/MattKetmo">
        <img src="https://avatars.githubusercontent.com/u/334996?s=72&u=2b06b452771518c77550e819cb6991bbe8866078&v=4" height="12" />
        <b>MattKetmo</b>
    </a></td><td>Kiln</td><td>Paris</td><td>207</td><td>8</td></tr><tr><td>65</td><td><a href="https://github.com/BoD">
        <img src="https://avatars.githubusercontent.com/u/372852?s=72&u=7569719a93bcc9da6dbec73e93464aded3bacfb7&v=4" height="12" />
        <b>BoD</b>
    </a></td><td>-</td><td>Paris, France</td><td>196</td><td>8</td></tr><tr><td>66</td><td><a href="https://github.com/florian-lefebvre">
        <img src="https://avatars.githubusercontent.com/u/69633530?s=72&u=e2ef3f44db480e30e0e7fe90aa559d3c39fac7e6&v=4" height="12" />
        <b>florian-lefebvre</b>
    </a></td><td>-</td><td>France</td><td>186</td><td>8</td></tr><tr><td>67</td><td><a href="https://github.com/jedisct1">
        <img src="https://avatars.githubusercontent.com/u/124872?s=72&v=4" height="12" />
        <b>jedisct1</b>
    </a></td><td>-</td><td>France</td><td>3.79K</td><td>7</td></tr><tr><td>68</td><td><a href="https://github.com/sdispater">
        <img src="https://avatars.githubusercontent.com/u/555648?s=72&v=4" height="12" />
        <b>sdispater</b>
    </a></td><td>-</td><td>France</td><td>2.19K</td><td>7</td></tr><tr><td>69</td><td><a href="https://github.com/gregberge">
        <img src="https://avatars.githubusercontent.com/u/266302?s=72&u=7b1d8d84bfbaf6cf8b340896f3cea02da2669c46&v=4" height="12" />
        <b>gregberge</b>
    </a></td><td>Argos</td><td>Paris, France</td><td>1.99K</td><td>7</td></tr><tr><td>70</td><td><a href="https://github.com/Calinou">
        <img src="https://avatars.githubusercontent.com/u/180032?s=72&v=4" height="12" />
        <b>Calinou</b>
    </a></td><td>@godotengine</td><td>Troyes, France</td><td>1.32K</td><td>7</td></tr><tr><td>71</td><td><a href="https://github.com/vstinner">
        <img src="https://avatars.githubusercontent.com/u/194129?s=72&u=cf52678f5f02f96d9c5bc1b5079d4e6c2e441af4&v=4" height="12" />
        <b>vstinner</b>
    </a></td><td>@RedHatOfficial</td><td>France</td><td>1.31K</td><td>7</td></tr><tr><td>72</td><td><a href="https://github.com/enjoy-digital">
        <img src="https://avatars.githubusercontent.com/u/1450143?s=72&u=1a9912f1a280ca3120df158d0d6eca1af88f04fe&v=4" height="12" />
        <b>enjoy-digital</b>
    </a></td><td>EnjoyDigital</td><td>France</td><td>1.24K</td><td>7</td></tr><tr><td>73</td><td><a href="https://github.com/aloisdeniel">
        <img src="https://avatars.githubusercontent.com/u/7687231?s=72&u=1e2ea5ef9ef2b7ec209404d5f7abee3b43259823&v=4" height="12" />
        <b>aloisdeniel</b>
    </a></td><td>Freelance</td><td>Rennes, France</td><td>1.24K</td><td>7</td></tr><tr><td>74</td><td><a href="https://github.com/mpgn">
        <img src="https://avatars.githubusercontent.com/u/5891788?s=72&u=b9940284a900247ecbd99c9517c1142c33586621&v=4" height="12" />
        <b>mpgn</b>
    </a></td><td>-</td><td>France</td><td>1.22K</td><td>7</td></tr><tr><td>75</td><td><a href="https://github.com/revolunet">
        <img src="https://avatars.githubusercontent.com/u/124937?s=72&u=76a0f640740597328fdfb6468cc32d823af42bff&v=4" height="12" />
        <b>revolunet</b>
    </a></td><td>@BetaGouv </td><td>Paris, France</td><td>1.07K</td><td>7</td></tr><tr><td>76</td><td><a href="https://github.com/Cadene">
        <img src="https://avatars.githubusercontent.com/u/4681518?s=72&u=7b60f24dd0deb4dcbb097c9aeca2dd252f9907d9&v=4" height="12" />
        <b>Cadene</b>
    </a></td><td>@huggingface </td><td>Paris</td><td>1.05K</td><td>7</td></tr><tr><td>77</td><td><a href="https://github.com/glample">
        <img src="https://avatars.githubusercontent.com/u/8885556?s=72&v=4" height="12" />
        <b>glample</b>
    </a></td><td>Facebook AI Research</td><td>Paris</td><td>1.03K</td><td>7</td></tr><tr><td>78</td><td><a href="https://github.com/Robpayot">
        <img src="https://avatars.githubusercontent.com/u/5593293?s=72&u=41388469102be7005344b95f9d66b2061740bd3d&v=4" height="12" />
        <b>Robpayot</b>
    </a></td><td>-</td><td>Paris</td><td>883</td><td>7</td></tr><tr><td>79</td><td><a href="https://github.com/vicb">
        <img src="https://avatars.githubusercontent.com/u/248818?s=72&u=4447f9d1f51e304fceccbedff7c6a78224afc890&v=4" height="12" />
        <b>vicb</b>
    </a></td><td>-</td><td>Grenoble, France</td><td>681</td><td>7</td></tr><tr><td>80</td><td><a href="https://github.com/teh-cmc">
        <img src="https://avatars.githubusercontent.com/u/2910679?s=72&u=21549b9a01e9e644a422f9c2dc62cd3b37a83eaf&v=4" height="12" />
        <b>teh-cmc</b>
    </a></td><td>@rerun-io</td><td>Paris, France</td><td>590</td><td>7</td></tr><tr><td>81</td><td><a href="https://github.com/bblanchon">
        <img src="https://avatars.githubusercontent.com/u/5462433?s=72&u=bec379310fcd0063e7555115cc65357c396e0f9b&v=4" height="12" />
        <b>bblanchon</b>
    </a></td><td>-</td><td>France</td><td>555</td><td>7</td></tr><tr><td>82</td><td><a href="https://github.com/Amagash">
        <img src="https://avatars.githubusercontent.com/u/20380447?s=72&u=1c5deea446e3f81f4e86708d96bad45cbd633fe3&v=4" height="12" />
        <b>Amagash</b>
    </a></td><td>AWS</td><td>France</td><td>552</td><td>7</td></tr><tr><td>83</td><td><a href="https://github.com/spolu">
        <img src="https://avatars.githubusercontent.com/u/15067?s=72&u=6297f8db333ba5fbf2be0ee9d796a09b1419115f&v=4" height="12" />
        <b>spolu</b>
    </a></td><td>Dust</td><td>Paris</td><td>487</td><td>7</td></tr><tr><td>84</td><td><a href="https://github.com/VonC">
        <img src="https://avatars.githubusercontent.com/u/79478?s=72&v=4" height="12" />
        <b>VonC</b>
    </a></td><td>-</td><td>France</td><td>431</td><td>7</td></tr><tr><td>85</td><td><a href="https://github.com/tgalopin">
        <img src="https://avatars.githubusercontent.com/u/1651494?s=72&u=ff057fae3d32e16223fbd1238811d5203111edb5&v=4" height="12" />
        <b>tgalopin</b>
    </a></td><td>@symfony  </td><td>France</td><td>375</td><td>7</td></tr><tr><td>86</td><td><a href="https://github.com/innocenzi">
        <img src="https://avatars.githubusercontent.com/u/16060559?s=72&u=cf061757407ef529958cf24bac8d2f699ad6e6ed&v=4" height="12" />
        <b>innocenzi</b>
    </a></td><td>Developer @JetflyAviation</td><td>France</td><td>363</td><td>7</td></tr><tr><td>87</td><td><a href="https://github.com/alikaragoz">
        <img src="https://avatars.githubusercontent.com/u/1283783?s=72&u=209d0bab8154866b06293080865a6345872a6efd&v=4" height="12" />
        <b>alikaragoz</b>
    </a></td><td>@Photoroom</td><td>Angers, France</td><td>362</td><td>7</td></tr><tr><td>88</td><td><a href="https://github.com/mckenziearts">
        <img src="https://avatars.githubusercontent.com/u/14105989?s=72&u=9c230c3e470fd4ddbbec22005757893bfa61d3ef&v=4" height="12" />
        <b>mckenziearts</b>
    </a></td><td>@shopperlabs </td><td>Paris, France</td><td>328</td><td>7</td></tr><tr><td>89</td><td><a href="https://github.com/clementroche">
        <img src="https://avatars.githubusercontent.com/u/28361254?s=72&u=617b111ad79a35e545994bdc651eb7967ae72f10&v=4" height="12" />
        <b>clementroche</b>
    </a></td><td>@darkroomengineering</td><td>France</td><td>321</td><td>7</td></tr><tr><td>90</td><td><a href="https://github.com/veloce">
        <img src="https://avatars.githubusercontent.com/u/423393?s=72&v=4" height="12" />
        <b>veloce</b>
    </a></td><td>lichess.org</td><td>France</td><td>320</td><td>7</td></tr><tr><td>91</td><td><a href="https://github.com/nvuillam">
        <img src="https://avatars.githubusercontent.com/u/17500430?s=72&u=24ff06a935acf56fe06678874e2b297debb66fac&v=4" height="12" />
        <b>nvuillam</b>
    </a></td><td>Cloudity & OX Security</td><td>Paris, France</td><td>288</td><td>7</td></tr><tr><td>92</td><td><a href="https://github.com/charlesBochet">
        <img src="https://avatars.githubusercontent.com/u/12035771?s=72&u=d630d76a6340dbc94ecacfe80be2095b4548c376&v=4" height="12" />
        <b>charlesBochet</b>
    </a></td><td>Twenty</td><td>Paris</td><td>287</td><td>7</td></tr><tr><td>93</td><td><a href="https://github.com/jpountz">
        <img src="https://avatars.githubusercontent.com/u/299848?s=72&v=4" height="12" />
        <b>jpountz</b>
    </a></td><td>Elasticsearch</td><td>Caen, France</td><td>270</td><td>7</td></tr><tr><td>94</td><td><a href="https://github.com/Neamar">
        <img src="https://avatars.githubusercontent.com/u/536844?s=72&v=4" height="12" />
        <b>Neamar</b>
    </a></td><td>-</td><td>France</td><td>268</td><td>7</td></tr><tr><td>95</td><td><a href="https://github.com/DamienCassou">
        <img src="https://avatars.githubusercontent.com/u/217543?s=72&v=4" height="12" />
        <b>DamienCassou</b>
    </a></td><td>finsit @ Wolters Kluwer</td><td>Brest, France</td><td>263</td><td>7</td></tr><tr><td>96</td><td><a href="https://github.com/mcanouil">
        <img src="https://avatars.githubusercontent.com/u/8896044?s=72&u=86a5cbe0323a90349d87b7fa1fd4b22ae9d45ea2&v=4" height="12" />
        <b>mcanouil</b>
    </a></td><td>-</td><td>Lille, France</td><td>259</td><td>7</td></tr><tr><td>97</td><td><a href="https://github.com/adrienpoly">
        <img src="https://avatars.githubusercontent.com/u/7847244?s=72&u=f4330ca5e036d365b3c41199ac76e3b979ab10bb&v=4" height="12" />
        <b>adrienpoly</b>
    </a></td><td>-</td><td>Bordeaux</td><td>258</td><td>7</td></tr><tr><td>98</td><td><a href="https://github.com/louisabraham">
        <img src="https://avatars.githubusercontent.com/u/13174805?s=72&v=4" height="12" />
        <b>louisabraham</b>
    </a></td><td>-</td><td>Paris</td><td>257</td><td>7</td></tr><tr><td>99</td><td><a href="https://github.com/BUZZARDGTA">
        <img src="https://avatars.githubusercontent.com/u/62464560?s=72&u=7cfb6146a33a4a29064e5d77c481cdd7916428ab&v=4" height="12" />
        <b>BUZZARDGTA</b>
    </a></td><td>IB_U_Z_Z_A_R_Dl</td><td>France</td><td>248</td><td>7</td></tr><tr><td>100</td><td><a href="https://github.com/dotdc">
        <img src="https://avatars.githubusercontent.com/u/12827900?s=72&u=df40a5743483684bb6c6ba3259116c7e87cc3ab6&v=4" height="12" />
        <b>dotdc</b>
    </a></td><td>-</td><td>France</td><td>208</td><td>7</td></tr><tr><td>101</td><td><a href="https://github.com/xavierlacot">
        <img src="https://avatars.githubusercontent.com/u/177293?s=72&v=4" height="12" />
        <b>xavierlacot</b>
    </a></td><td>JoliCode</td><td>Paris, France</td><td>197</td><td>7</td></tr><tr><td>102</td><td><a href="https://github.com/qgallouedec">
        <img src="https://avatars.githubusercontent.com/u/45557362?s=72&u=37cea872e44a4d597f3b9c899add7509044d9ef0&v=4" height="12" />
        <b>qgallouedec</b>
    </a></td><td>@huggingface</td><td>Lyon, France</td><td>196</td><td>7</td></tr><tr><td>103</td><td><a href="https://github.com/valryon">
        <img src="https://avatars.githubusercontent.com/u/155884?s=72&u=115b607498d0b336a0f1648bef3f83ce4b14f5ec&v=4" height="12" />
        <b>valryon</b>
    </a></td><td>Pixelnest Studio</td><td>France</td><td>195</td><td>7</td></tr><tr><td>104</td><td><a href="https://github.com/karesti">
        <img src="https://avatars.githubusercontent.com/u/233499?s=72&u=cc2b31f6441f1ef89f21e279e1ec3008301301e6&v=4" height="12" />
        <b>karesti</b>
    </a></td><td>Red Hat</td><td>Paris</td><td>191</td><td>7</td></tr><tr><td>105</td><td><a href="https://github.com/kivutar">
        <img src="https://avatars.githubusercontent.com/u/442722?s=72&v=4" height="12" />
        <b>kivutar</b>
    </a></td><td>Implicit Conversions</td><td>Ajaccio, France</td><td>186</td><td>7</td></tr><tr><td>106</td><td><a href="https://github.com/angelozerr">
        <img src="https://avatars.githubusercontent.com/u/1932211?s=72&v=4" height="12" />
        <b>angelozerr</b>
    </a></td><td>Red Hat</td><td>France</td><td>186</td><td>7</td></tr><tr><td>107</td><td><a href="https://github.com/sebsto">
        <img src="https://avatars.githubusercontent.com/u/401798?s=72&u=dc5e8355d22fe5bc956c382be7fa9dddbebea5db&v=4" height="12" />
        <b>sebsto</b>
    </a></td><td>Amazon Web Services</td><td>Paris</td><td>475</td><td>6</td></tr><tr><td>108</td><td><a href="https://github.com/elierotenberg">
        <img src="https://avatars.githubusercontent.com/u/4177867?s=72&u=9672e1bcb5e585e0154096fd9127bb4de9afda6e&v=4" height="12" />
        <b>elierotenberg</b>
    </a></td><td>ifea.education</td><td>France</td><td>264</td><td>6</td></tr><tr><td>109</td><td><a href="https://github.com/rubenfiszel">
        <img src="https://avatars.githubusercontent.com/u/275584?s=72&u=eb0fe584ca9e8636a35ab822b93cc4a1ad10bf42&v=4" height="12" />
        <b>rubenfiszel</b>
    </a></td><td>Windmill</td><td>Paris, France</td><td>254</td><td>6</td></tr><tr><td>110</td><td><a href="https://github.com/ggrossetie">
        <img src="https://avatars.githubusercontent.com/u/333276?s=72&u=9087930b05d462a706f06a9ce6bf0c8289d8069d&v=4" height="12" />
        <b>ggrossetie</b>
    </a></td><td>Yuzu tech</td><td>Lyon</td><td>220</td><td>6</td></tr><tr><td>111</td><td><a href="https://github.com/laurentkempe">
        <img src="https://avatars.githubusercontent.com/u/272612?s=72&u=d5a602c4b87d93c5497e13c2badc0f5d6f895ac4&v=4" height="12" />
        <b>laurentkempe</b>
    </a></td><td>@TechHeadBrothers @Innoveo </td><td>Illzach, France</td><td>191</td><td>6</td></tr><tr><td>112</td><td><a href="https://github.com/vincentbernat">
        <img src="https://avatars.githubusercontent.com/u/631446?s=72&v=4" height="12" />
        <b>vincentbernat</b>
    </a></td><td>Free</td><td>Paris, France</td><td>1.1K</td><td>5</td></tr><tr><td>113</td><td><a href="https://github.com/Bleuje">
        <img src="https://avatars.githubusercontent.com/u/17087687?s=72&u=43aeff24919f3b82dec581293d2f9df51bcfb187&v=4" height="12" />
        <b>Bleuje</b>
    </a></td><td>-</td><td>Paris</td><td>1.06K</td><td>5</td></tr><tr><td>114</td><td><a href="https://github.com/zoontek">
        <img src="https://avatars.githubusercontent.com/u/1902323?s=72&u=b208315a0d0fd583a7cbda7b1badac19b473dc30&v=4" height="12" />
        <b>zoontek</b>
    </a></td><td>Swan</td><td>Paris</td><td>673</td><td>5</td></tr><tr><td>115</td><td><a href="https://github.com/gus33000">
        <img src="https://avatars.githubusercontent.com/u/3755345?s=72&u=8be4944a8331aaff14de13cf7f0354c4a8c192b8&v=4" height="12" />
        <b>gus33000</b>
    </a></td><td>labri</td><td>France</td><td>506</td><td>5</td></tr><tr><td>116</td><td><a href="https://github.com/LambdAurora">
        <img src="https://avatars.githubusercontent.com/u/12587332?s=72&u=5bc537e2ad331c812f09328154b69cee58adbe85&v=4" height="12" />
        <b>LambdAurora</b>
    </a></td><td>-</td><td>France</td><td>382</td><td>5</td></tr><tr><td>117</td><td><a href="https://github.com/vincelwt">
        <img src="https://avatars.githubusercontent.com/u/5092466?s=72&u=713f9947e4315b6f0ef62ec5cccd978133006783&v=4" height="12" />
        <b>vincelwt</b>
    </a></td><td>lunary.ai</td><td>France</td><td>366</td><td>5</td></tr><tr><td>118</td><td><a href="https://github.com/sdpython">
        <img src="https://avatars.githubusercontent.com/u/4695832?s=72&u=9a0581b7da03088ea4ad3a37c5b680a64d864f33&v=4" height="12" />
        <b>sdpython</b>
    </a></td><td>@ENSAE</td><td>paris</td><td>287</td><td>5</td></tr><tr><td>119</td><td><a href="https://github.com/jfalcou">
        <img src="https://avatars.githubusercontent.com/u/285977?s=72&u=aa9be7c63023593e6e3fb7765390e789f31b7509&v=4" height="12" />
        <b>jfalcou</b>
    </a></td><td>University Paris Sud XI, CNRS</td><td>Orsay, France</td><td>284</td><td>5</td></tr><tr><td>120</td><td><a href="https://github.com/roblabla">
        <img src="https://avatars.githubusercontent.com/u/1069318?s=72&u=f270fc1cecf2076137002880491b4e25787de0e6&v=4" height="12" />
        <b>roblabla</b>
    </a></td><td>@Seed-Up </td><td>France, FR</td><td>230</td><td>5</td></tr><tr><td>121</td><td><a href="https://github.com/Nenkai">
        <img src="https://avatars.githubusercontent.com/u/13786175?s=72&u=c8c5184ee104323fcd17229ff4f44fc0568847e4&v=4" height="12" />
        <b>Nenkai</b>
    </a></td><td>-</td><td>Lyon, France</td><td>216</td><td>5</td></tr><tr><td>122</td><td><a href="https://github.com/tinevez">
        <img src="https://avatars.githubusercontent.com/u/3583203?s=72&u=e4fc32d4a5adb379931a41a1b68e67def6340fb4&v=4" height="12" />
        <b>tinevez</b>
    </a></td><td>Institut Pasteur</td><td>Paris, France</td><td>193</td><td>5</td></tr><tr><td>123</td><td><a href="https://github.com/twidi">
        <img src="https://avatars.githubusercontent.com/u/193474?s=72&u=1ccd019ae34b717f21b6e0c5026deab25d8ba38e&v=4" height="12" />
        <b>twidi</b>
    </a></td><td>Twidi.com</td><td>Near Paris, France.</td><td>191</td><td>5</td></tr><tr><td>124</td><td><a href="https://github.com/AliSoftware">
        <img src="https://avatars.githubusercontent.com/u/216089?s=72&v=4" height="12" />
        <b>AliSoftware</b>
    </a></td><td>Freelance on iOS Tooling and DX</td><td>Rennes, France</td><td>3.03K</td><td>4</td></tr><tr><td>125</td><td><a href="https://github.com/donho">
        <img src="https://avatars.githubusercontent.com/u/90293?s=72&u=ecf6e2f9319cd333d4ffd0056c84848e91ae9870&v=4" height="12" />
        <b>donho</b>
    </a></td><td>Notepad++ Project</td><td>Paris France</td><td>1.99K</td><td>4</td></tr><tr><td>126</td><td><a href="https://github.com/agramfort">
        <img src="https://avatars.githubusercontent.com/u/161052?s=72&u=28620e0e14597ad721a7505cf486aaf5687aea66&v=4" height="12" />
        <b>agramfort</b>
    </a></td><td>Meta</td><td>Paris, France</td><td>1.3K</td><td>4</td></tr><tr><td>127</td><td><a href="https://github.com/scraly">
        <img src="https://avatars.githubusercontent.com/u/2543381?s=72&u=d500ca96ff8a2a3f9b7bb300c71ed7e57449b072&v=4" height="12" />
        <b>scraly</b>
    </a></td><td>ovh</td><td>Toulouse</td><td>722</td><td>4</td></tr><tr><td>128</td><td><a href="https://github.com/lovasoa">
        <img src="https://avatars.githubusercontent.com/u/552629?s=72&u=3b5257f8d20ea6c313ed91ba80c024c3f00cf5dc&v=4" height="12" />
        <b>lovasoa</b>
    </a></td><td>@auto-grid @enexflow </td><td>Paris, France</td><td>537</td><td>4</td></tr><tr><td>129</td><td><a href="https://github.com/sylvestre">
        <img src="https://avatars.githubusercontent.com/u/733326?s=72&u=77d7752593d6fa035b33e63386cc15479744ab24&v=4" height="12" />
        <b>sylvestre</b>
    </a></td><td>Mozilla</td><td>France</td><td>424</td><td>4</td></tr><tr><td>130</td><td><a href="https://github.com/sayon">
        <img src="https://avatars.githubusercontent.com/u/2575074?s=72&u=47e8778cd61c3570659a9ba3d203f3fc4e7140f8&v=4" height="12" />
        <b>sayon</b>
    </a></td><td>Matter Labs</td><td>Nantes, France</td><td>325</td><td>4</td></tr><tr><td>131</td><td><a href="https://github.com/MrEliptik">
        <img src="https://avatars.githubusercontent.com/u/24484962?s=72&u=3bec91a9402f1653deecaffdc3dd13af17c02c1c&v=4" height="12" />
        <b>MrEliptik</b>
    </a></td><td>-</td><td>France</td><td>255</td><td>4</td></tr><tr><td>132</td><td><a href="https://github.com/corsonr">
        <img src="https://avatars.githubusercontent.com/u/1649788?s=72&u=36a376b200fd98e6100788c1ec39b3b7e912797a&v=4" height="12" />
        <b>corsonr</b>
    </a></td><td>-</td><td>France</td><td>246</td><td>4</td></tr><tr><td>133</td><td><a href="https://github.com/busybox11">
        <img src="https://avatars.githubusercontent.com/u/29630035?s=72&u=e206de0c3ec13b38abb0c21945b2545a3a1e21e1&v=4" height="12" />
        <b>busybox11</b>
    </a></td><td>-</td><td>Bordeaux, France</td><td>189</td><td>4</td></tr><tr><td>134</td><td><a href="https://github.com/noraj">
        <img src="https://avatars.githubusercontent.com/u/16578570?s=72&u=a95cbd7b496e688d77205c934c8ef9ebeb273a73&v=4" height="12" />
        <b>noraj</b>
    </a></td><td>Rawsec</td><td>FRANCE</td><td>1.78K</td><td>3</td></tr><tr><td>135</td><td><a href="https://github.com/Androz2091">
        <img src="https://avatars.githubusercontent.com/u/42497995?s=72&u=6f40d52a49652087722a05d55013645bca6745b6&v=4" height="12" />
        <b>Androz2091</b>
    </a></td><td>EPFL</td><td>France, Toulouse</td><td>1.22K</td><td>3</td></tr><tr><td>136</td><td><a href="https://github.com/groue">
        <img src="https://avatars.githubusercontent.com/u/54219?s=72&u=73ae5871c4a96c72fae2650b267d578440e38983&v=4" height="12" />
        <b>groue</b>
    </a></td><td>Pierlis</td><td>Paris, France</td><td>1.09K</td><td>3</td></tr><tr><td>137</td><td><a href="https://github.com/ColinFay">
        <img src="https://avatars.githubusercontent.com/u/17936236?s=72&u=ed11ce5e76e841e05bd7b3ff5b6b94c6af8ff277&v=4" height="12" />
        <b>ColinFay</b>
    </a></td><td>@ThinkR-open   </td><td>Rennes, France</td><td>876</td><td>3</td></tr><tr><td>138</td><td><a href="https://github.com/byroot">
        <img src="https://avatars.githubusercontent.com/u/44640?s=72&v=4" height="12" />
        <b>byroot</b>
    </a></td><td>@Shopify (as @casperisfine)</td><td>Toulouse, France</td><td>731</td><td>3</td></tr><tr><td>139</td><td><a href="https://github.com/Zylann">
        <img src="https://avatars.githubusercontent.com/u/1311555?s=72&u=98e85e0c6d8599c7de140000f240417c9f512cea&v=4" height="12" />
        <b>Zylann</b>
    </a></td><td>-</td><td>France</td><td>659</td><td>3</td></tr><tr><td>140</td><td><a href="https://github.com/melix">
        <img src="https://avatars.githubusercontent.com/u/316357?s=72&u=2d99b7a2de1d0530b77e897df3667db916dc1cdd&v=4" height="12" />
        <b>melix</b>
    </a></td><td>Oracle Labs </td><td>Nantes, France</td><td>608</td><td>3</td></tr><tr><td>141</td><td><a href="https://github.com/chalasr">
        <img src="https://avatars.githubusercontent.com/u/7502063?s=72&u=56b8ba0944e917bd324d87ec7c2074665a0e699d&v=4" height="12" />
        <b>chalasr</b>
    </a></td><td>@bakslashHQ</td><td>Lyon, France</td><td>551</td><td>3</td></tr><tr><td>142</td><td><a href="https://github.com/gpakosz">
        <img src="https://avatars.githubusercontent.com/u/553208?s=72&u=fa33d3072d6b7c70d6b6e200acab0bcdc7a34df0&v=4" height="12" />
        <b>gpakosz</b>
    </a></td><td>@Apple</td><td>Nantes / Paris, France</td><td>422</td><td>3</td></tr><tr><td>143</td><td><a href="https://github.com/neolectron">
        <img src="https://avatars.githubusercontent.com/u/5268400?s=72&u=aa5b93e29ea36ec7a89c44bb17315c98a8b51458&v=4" height="12" />
        <b>neolectron</b>
    </a></td><td>Codinglab</td><td>Toulouse</td><td>413</td><td>3</td></tr><tr><td>144</td><td><a href="https://github.com/apierr">
        <img src="https://avatars.githubusercontent.com/u/1194257?s=72&u=d97d044969d4ab3ad7bd97fed446777456d5221a&v=4" height="12" />
        <b>apierr</b>
    </a></td><td>Inria - Nord Europe</td><td>Paris</td><td>327</td><td>3</td></tr><tr><td>145</td><td><a href="https://github.com/Stormix">
        <img src="https://avatars.githubusercontent.com/u/18377687?s=72&u=ab8a51159e4618425b66829f88d7f0bb2f563a75&v=4" height="12" />
        <b>Stormix</b>
    </a></td><td>@Stormix-co </td><td>Marseille, France</td><td>322</td><td>3</td></tr><tr><td>146</td><td><a href="https://github.com/tbruyelle">
        <img src="https://avatars.githubusercontent.com/u/92280?s=72&u=3035228f64ba51ad6fc2f9452e22e928604152f8&v=4" height="12" />
        <b>tbruyelle</b>
    </a></td><td>@allinbits</td><td>Montpellier, France</td><td>320</td><td>3</td></tr><tr><td>147</td><td><a href="https://github.com/benkuper">
        <img src="https://avatars.githubusercontent.com/u/1291595?s=72&u=642b551224f7695f923cf41025d9b1b7b605962e&v=4" height="12" />
        <b>benkuper</b>
    </a></td><td>-</td><td>France</td><td>304</td><td>3</td></tr><tr><td>148</td><td><a href="https://github.com/NiLuJe">
        <img src="https://avatars.githubusercontent.com/u/111974?s=72&v=4" height="12" />
        <b>NiLuJe</b>
    </a></td><td>-</td><td>Paris, France</td><td>294</td><td>3</td></tr><tr><td>149</td><td><a href="https://github.com/krokrob">
        <img src="https://avatars.githubusercontent.com/u/9978111?s=72&u=c37facf1cbac09f637751b492b6026e927b67b6c&v=4" height="12" />
        <b>krokrob</b>
    </a></td><td>@lewagon </td><td>Paris</td><td>291</td><td>3</td></tr><tr><td>150</td><td><a href="https://github.com/pascalgrimaud">
        <img src="https://avatars.githubusercontent.com/u/9156882?s=72&u=048a3f914bddbb33320df8ec2c7cc22c26f22646&v=4" height="12" />
        <b>pascalgrimaud</b>
    </a></td><td>Freelance</td><td>Lyon, France</td><td>272</td><td>3</td></tr><tr><td>151</td><td><a href="https://github.com/RodZill4">
        <img src="https://avatars.githubusercontent.com/u/6957908?s=72&u=c19aecbe4d441eb008a4485fdcddb661ce659951&v=4" height="12" />
        <b>RodZill4</b>
    </a></td><td>-</td><td>France</td><td>231</td><td>3</td></tr><tr><td>152</td><td><a href="https://github.com/zhouzi">
        <img src="https://avatars.githubusercontent.com/u/2291025?s=72&u=f9dbd23893a5f81e51834472df344596d2b90668&v=4" height="12" />
        <b>zhouzi</b>
    </a></td><td>-</td><td>France</td><td>220</td><td>3</td></tr><tr><td>153</td><td><a href="https://github.com/Kocal">
        <img src="https://avatars.githubusercontent.com/u/2103975?s=72&u=91ea5e40f779971db439dde65db81cf5aca43b28&v=4" height="12" />
        <b>Kocal</b>
    </a></td><td>-</td><td>Lyon, France</td><td>212</td><td>3</td></tr><tr><td>154</td><td><a href="https://github.com/Delapouite">
        <img src="https://avatars.githubusercontent.com/u/39315?s=72&v=4" height="12" />
        <b>Delapouite</b>
    </a></td><td>Powipu</td><td>Nantes / Lyon - France</td><td>211</td><td>3</td></tr><tr><td>155</td><td><a href="https://github.com/gnodet">
        <img src="https://avatars.githubusercontent.com/u/84022?s=72&u=411d6cc1a1007325d0051d524e5ec04b5a859e1f&v=4" height="12" />
        <b>gnodet</b>
    </a></td><td>Red Hat</td><td>Caen, France</td><td>200</td><td>3</td></tr><tr><td>156</td><td><a href="https://github.com/Romakita">
        <img src="https://avatars.githubusercontent.com/u/1763311?s=72&u=29dc6efc281f9b8c8de20eab797b894fed5e57d9&v=4" height="12" />
        <b>Romakita</b>
    </a></td><td>Zenika</td><td>Ile-de-france, France</td><td>200</td><td>3</td></tr><tr><td>157</td><td><a href="https://github.com/tchak">
        <img src="https://avatars.githubusercontent.com/u/12428?s=72&v=4" height="12" />
        <b>tchak</b>
    </a></td><td>@betagouv</td><td>Paris</td><td>191</td><td>3</td></tr><tr><td>158</td><td><a href="https://github.com/brunosimon">
        <img src="https://avatars.githubusercontent.com/u/5439991?s=72&u=d7f9a046776f0960769c8d90ca8ced4d896c8e6a&v=4" height="12" />
        <b>brunosimon</b>
    </a></td><td>Creative Journey</td><td>Paris</td><td>18.68K</td><td>2</td></tr><tr><td>159</td><td><a href="https://github.com/gentilkiwi">
        <img src="https://avatars.githubusercontent.com/u/2307945?s=72&v=4" height="12" />
        <b>gentilkiwi</b>
    </a></td><td>@BdF-LabSec</td><td>France</td><td>4.11K</td><td>2</td></tr><tr><td>160</td><td><a href="https://github.com/dunglas">
        <img src="https://avatars.githubusercontent.com/u/57224?s=72&u=a7ed2cf3f0ae84c9e06925b94091b85a7d6324b0&v=4" height="12" />
        <b>dunglas</b>
    </a></td><td>@coopTilleuls </td><td>Lille, France</td><td>3.97K</td><td>2</td></tr><tr><td>161</td><td><a href="https://github.com/juliangarnier">
        <img src="https://avatars.githubusercontent.com/u/1268691?s=72&u=95990fed154f63864340744f9d0c4947f1acb334&v=4" height="12" />
        <b>juliangarnier</b>
    </a></td><td>https://animejs.com</td><td>Paris</td><td>3.77K</td><td>2</td></tr><tr><td>162</td><td><a href="https://github.com/MaJerle">
        <img src="https://avatars.githubusercontent.com/u/405717?s=72&u=38e08e0842ed71ef9d972f001cfa73e8aa896362&v=4" height="12" />
        <b>MaJerle</b>
    </a></td><td>-</td><td>France</td><td>2.5K</td><td>2</td></tr><tr><td>163</td><td><a href="https://github.com/rom1504">
        <img src="https://avatars.githubusercontent.com/u/2346494?s=72&v=4" height="12" />
        <b>rom1504</b>
    </a></td><td>@google</td><td>Paris</td><td>2.06K</td><td>2</td></tr><tr><td>164</td><td><a href="https://github.com/mnapoli">
        <img src="https://avatars.githubusercontent.com/u/720328?s=72&u=6681f9f4affebc487fbe00133f743f2551e9523c&v=4" height="12" />
        <b>mnapoli</b>
    </a></td><td>@brefphp </td><td>Lyon, France</td><td>1.41K</td><td>2</td></tr><tr><td>165</td><td><a href="https://github.com/GuillaumeGomez">
        <img src="https://avatars.githubusercontent.com/u/3050060?s=72&u=6ca85464b07c5464a052250a4fc3e3f9c03c97ed&v=4" height="12" />
        <b>GuillaumeGomez</b>
    </a></td><td>@huawei</td><td>Paris</td><td>1.38K</td><td>2</td></tr><tr><td>166</td><td><a href="https://github.com/aaugustin">
        <img src="https://avatars.githubusercontent.com/u/788910?s=72&u=3a29db80be82d08a9068cfb35898e8a8179920ee&v=4" height="12" />
        <b>aaugustin</b>
    </a></td><td>@qonto</td><td>Paris, France</td><td>1.29K</td><td>2</td></tr><tr><td>167</td><td><a href="https://github.com/rom1v">
        <img src="https://avatars.githubusercontent.com/u/543275?s=72&u=b63fe676f9ee4ea5c8ce5de666230a87a82961f8&v=4" height="12" />
        <b>rom1v</b>
    </a></td><td>Videolabs</td><td>Paris, France</td><td>1.28K</td><td>2</td></tr><tr><td>168</td><td><a href="https://github.com/xoofx">
        <img src="https://avatars.githubusercontent.com/u/715038?s=72&u=944abb5708b2c03b6c13e3284dd76bb327791456&v=4" height="12" />
        <b>xoofx</b>
    </a></td><td>Unity-Technologies</td><td>Grenoble - France</td><td>1.27K</td><td>2</td></tr><tr><td>169</td><td><a href="https://github.com/nadimkobeissi">
        <img src="https://avatars.githubusercontent.com/u/9953?s=72&u=9b93ddb25989d68c43ef490496ffff08ac89fbc1&v=4" height="12" />
        <b>nadimkobeissi</b>
    </a></td><td>@symbolicsoft, @cure53berlin</td><td>Paris, France</td><td>1.23K</td><td>2</td></tr><tr><td>170</td><td><a href="https://github.com/alexchopin">
        <img src="https://avatars.githubusercontent.com/u/4084277?s=72&u=63f4594708dbb31b18e3cf4aa2d200952b2c8ecb&v=4" height="12" />
        <b>alexchopin</b>
    </a></td><td>-</td><td>France</td><td>1.07K</td><td>2</td></tr><tr><td>171</td><td><a href="https://github.com/thomasync">
        <img src="https://avatars.githubusercontent.com/u/12927290?s=72&u=46e5c515789397dc2f91f4fe0a5cfa3f9ea40177&v=4" height="12" />
        <b>thomasync</b>
    </a></td><td>-</td><td>Montpellier, France</td><td>1.03K</td><td>2</td></tr><tr><td>172</td><td><a href="https://github.com/potatoqualitee">
        <img src="https://avatars.githubusercontent.com/u/8278033?s=72&u=5a511a15023e5852701b547a867cb56c1dcb21a7&v=4" height="12" />
        <b>potatoqualitee</b>
    </a></td><td>@dataplat</td><td>North of France</td><td>911</td><td>2</td></tr><tr><td>173</td><td><a href="https://github.com/nicolargo">
        <img src="https://avatars.githubusercontent.com/u/776747?s=72&u=aa191d095cac0b9bb8ff2aca1d87370b47c0edee&v=4" height="12" />
        <b>nicolargo</b>
    </a></td><td>Le blog de Nicolargo</td><td>Valbonne, France</td><td>796</td><td>2</td></tr><tr><td>174</td><td><a href="https://github.com/mlabouardy">
        <img src="https://avatars.githubusercontent.com/u/10320205?s=72&u=022b2dc0e4696d43258b8364ca7e869aeb18181b&v=4" height="12" />
        <b>mlabouardy</b>
    </a></td><td>@tailwarden</td><td>Paris, France</td><td>758</td><td>2</td></tr><tr><td>175</td><td><a href="https://github.com/n1k0">
        <img src="https://avatars.githubusercontent.com/u/41547?s=72&u=4befdcee0c615dcf7aa6f56523df75e3387f567b&v=4" height="12" />
        <b>n1k0</b>
    </a></td><td>Akei</td><td>Montpellier, France</td><td>751</td><td>2</td></tr><tr><td>176</td><td><a href="https://github.com/jasonchampagne">
        <img src="https://avatars.githubusercontent.com/u/979506?s=72&u=2bdb20651e0cc5e6b8e751521638a003fb7305a9&v=4" height="12" />
        <b>jasonchampagne</b>
    </a></td><td>EvoluNoob</td><td>France</td><td>740</td><td>2</td></tr><tr><td>177</td><td><a href="https://github.com/mcombeau">
        <img src="https://avatars.githubusercontent.com/u/52008667?s=72&u=889adc6df09a8b3f8ee8944b7179bf857860ac7c&v=4" height="12" />
        <b>mcombeau</b>
    </a></td><td>@42School</td><td>Paris, France</td><td>591</td><td>2</td></tr><tr><td>178</td><td><a href="https://github.com/mklabs">
        <img src="https://avatars.githubusercontent.com/u/113832?s=72&u=99d9dde9317c0658dff2e0409c41495f5ef95077&v=4" height="12" />
        <b>mklabs</b>
    </a></td><td>-</td><td>Lyon, France</td><td>570</td><td>2</td></tr><tr><td>179</td><td><a href="https://github.com/tpaviot">
        <img src="https://avatars.githubusercontent.com/u/660130?s=72&u=8b187f9e0eebbe326c738320cbe5a9df34c753d4&v=4" height="12" />
        <b>tpaviot</b>
    </a></td><td>meeDIA.ai</td><td>France</td><td>570</td><td>2</td></tr><tr><td>180</td><td><a href="https://github.com/marcomiduri">
        <img src="https://avatars.githubusercontent.com/u/51230146?s=72&u=df59a119b037e9f0c8a4d186c6b650c3a601ff23&v=4" height="12" />
        <b>marcomiduri</b>
    </a></td><td>Webpoint Solutions, LLC</td><td>Paris, FR</td><td>498</td><td>2</td></tr><tr><td>181</td><td><a href="https://github.com/amilamen">
        <img src="https://avatars.githubusercontent.com/u/46297789?s=72&u=6f4d2a60ee2f98ba3bb4164cfa7a97577b82feaf&v=4" height="12" />
        <b>amilamen</b>
    </a></td><td>Co-founder at @wetillix</td><td>France</td><td>498</td><td>2</td></tr><tr><td>182</td><td><a href="https://github.com/oliviergimenez">
        <img src="https://avatars.githubusercontent.com/u/12683635?s=72&u=c5a60d598ab4e98660dc7589de4609414a6af089&v=4" height="12" />
        <b>oliviergimenez</b>
    </a></td><td>CNRS</td><td>Montpellier</td><td>474</td><td>2</td></tr><tr><td>183</td><td><a href="https://github.com/CedricGuillemet">
        <img src="https://avatars.githubusercontent.com/u/1312968?s=72&u=09586c4d429addaa7fc099437bebda780a9e39ed&v=4" height="12" />
        <b>CedricGuillemet</b>
    </a></td><td>Microsoft</td><td>Redon, Brittany, France</td><td>459</td><td>2</td></tr><tr><td>184</td><td><a href="https://github.com/hallard">
        <img src="https://avatars.githubusercontent.com/u/2471931?s=72&u=3ae568da0ba3a6e7f4ba03f35fd14f8149f0cff2&v=4" height="12" />
        <b>hallard</b>
    </a></td><td>@ch2i @evolyenergy</td><td>Poitiers, France</td><td>454</td><td>2</td></tr><tr><td>185</td><td><a href="https://github.com/kefranabg">
        <img src="https://avatars.githubusercontent.com/u/9840435?s=72&u=558f29861b9745b9900982eb73598dcd9c498199&v=4" height="12" />
        <b>kefranabg</b>
    </a></td><td>Visage</td><td>Nantes, France</td><td>444</td><td>2</td></tr><tr><td>186</td><td><a href="https://github.com/tobozo">
        <img src="https://avatars.githubusercontent.com/u/1893754?s=72&u=abeb81f7fd64a894c9749afc1e54c823e872c254&v=4" height="12" />
        <b>tobozo</b>
    </a></td><td>-</td><td>Paris, France </td><td>423</td><td>2</td></tr><tr><td>187</td><td><a href="https://github.com/f4exb">
        <img src="https://avatars.githubusercontent.com/u/6192319?s=72&u=3f1ea59769818046445a4377305f55687ee4ad6b&v=4" height="12" />
        <b>f4exb</b>
    </a></td><td>-</td><td>Antibes, France</td><td>418</td><td>2</td></tr><tr><td>188</td><td><a href="https://github.com/nical">
        <img src="https://avatars.githubusercontent.com/u/264854?s=72&u=43290726ca0f48051b8695b452644cc9fc025a85&v=4" height="12" />
        <b>nical</b>
    </a></td><td>Mozilla</td><td>Lyon, France</td><td>411</td><td>2</td></tr><tr><td>189</td><td><a href="https://github.com/Guilouz">
        <img src="https://avatars.githubusercontent.com/u/12702322?s=72&u=f6da23f5fd8d72ed72413e5bc8b9b2c170670783&v=4" height="12" />
        <b>Guilouz</b>
    </a></td><td>-</td><td>France</td><td>408</td><td>2</td></tr><tr><td>190</td><td><a href="https://github.com/LudovicRousseau">
        <img src="https://avatars.githubusercontent.com/u/398496?s=72&v=4" height="12" />
        <b>LudovicRousseau</b>
    </a></td><td>-</td><td>France</td><td>396</td><td>2</td></tr><tr><td>191</td><td><a href="https://github.com/lukas-blecher">
        <img src="https://avatars.githubusercontent.com/u/55287601?s=72&u=b3adaf47228e4dfa5b6a115c4763e59a556e3032&v=4" height="12" />
        <b>lukas-blecher</b>
    </a></td><td>Meta</td><td>Paris</td><td>386</td><td>2</td></tr><tr><td>192</td><td><a href="https://github.com/Julien-R44">
        <img src="https://avatars.githubusercontent.com/u/8337858?s=72&u=51dca49c82393b452f05ee4aa4129a659ef47e34&v=4" height="12" />
        <b>Julien-R44</b>
    </a></td><td>Freelancing </td><td>France</td><td>366</td><td>2</td></tr><tr><td>193</td><td><a href="https://github.com/laluka">
        <img src="https://avatars.githubusercontent.com/u/7013722?s=72&u=99ab7a21f20471afc4643db1f6fa326d9218cc57&v=4" height="12" />
        <b>laluka</b>
    </a></td><td>ThinkLoveShare</td><td>FRANCE</td><td>358</td><td>2</td></tr><tr><td>194</td><td><a href="https://github.com/unixfox">
        <img src="https://avatars.githubusercontent.com/u/4016501?s=72&u=d113bfcd7a1bb996a29af9ace2c158a3c6289b40&v=4" height="12" />
        <b>unixfox</b>
    </a></td><td>-</td><td>Auvergne-Rhône-Alpes, France - Wallonia, Belgium</td><td>344</td><td>2</td></tr><tr><td>195</td><td><a href="https://github.com/mpromonet">
        <img src="https://avatars.githubusercontent.com/u/1367630?s=72&u=656527786957614d8cf8dec22644fe40dadbbe6f&v=4" height="12" />
        <b>mpromonet</b>
    </a></td><td>-</td><td>France</td><td>332</td><td>2</td></tr><tr><td>196</td><td><a href="https://github.com/maziyarpanahi">
        <img src="https://avatars.githubusercontent.com/u/5762953?s=72&u=17070601b919833c70fc8cb61381822fdb987639&v=4" height="12" />
        <b>maziyarpanahi</b>
    </a></td><td>@ISCPIF @JohnSnowLabs</td><td>Paris, France</td><td>328</td><td>2</td></tr><tr><td>197</td><td><a href="https://github.com/Ysurac">
        <img src="https://avatars.githubusercontent.com/u/6342954?s=72&u=f609c4350ded22b839bbc356875be03d2772f98f&v=4" height="12" />
        <b>Ysurac</b>
    </a></td><td>-</td><td>France</td><td>307</td><td>2</td></tr><tr><td>198</td><td><a href="https://github.com/xvw">
        <img src="https://avatars.githubusercontent.com/u/5732466?s=72&u=e2da3651aae7faf29d3c54c4d7cf66d92f35f16e&v=4" height="12" />
        <b>xvw</b>
    </a></td><td>@funkywork, @tarides</td><td>Nantes</td><td>306</td><td>2</td></tr><tr><td>199</td><td><a href="https://github.com/Stilic">
        <img src="https://avatars.githubusercontent.com/u/63605602?s=72&u=6662329db31f63d8bbf4c7755a1c5de99cf54f3b&v=4" height="12" />
        <b>Stilic</b>
    </a></td><td>-</td><td>France</td><td>278</td><td>2</td></tr><tr><td>200</td><td><a href="https://github.com/bokub">
        <img src="https://avatars.githubusercontent.com/u/17952318?s=72&u=a56e98d9579c9926fc82ca7089563e37ba1b22d4&v=4" height="12" />
        <b>bokub</b>
    </a></td><td>Freelance</td><td>Toulouse, France</td><td>277</td><td>2</td></tr>
    </tbody>
</table>

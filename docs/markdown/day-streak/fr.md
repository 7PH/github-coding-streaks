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
        <tr><td>🥇</td><td><a href="https://github.com/Darklg">
        <img src="https://avatars.githubusercontent.com/u/307957?s=72&v=4" height="12" />
        <b>Darklg</b>
    </a></td><td>Freelance WordPress / Magento</td><td>Paris, France</td><td>179</td><td>3.67K</td></tr><tr><td>🥈</td><td><a href="https://github.com/rozierguillaume">
        <img src="https://avatars.githubusercontent.com/u/22763678?s=72&u=f10c1d50d6f9ce7ed6c7d64a767c02911df19cf4&v=4" height="12" />
        <b>rozierguillaume</b>
    </a></td><td>-</td><td>Paris</td><td>333</td><td>951</td></tr><tr><td>🥉</td><td><a href="https://github.com/Caceresenzo">
        <img src="https://avatars.githubusercontent.com/u/7386242?s=72&u=17d4617bb086732fd4da9287942494386d06ebb3&v=4" height="12" />
        <b>Caceresenzo</b>
    </a></td><td>-</td><td>France</td><td>167</td><td>794</td></tr><tr><td>4</td><td><a href="https://github.com/bloodyowl">
        <img src="https://avatars.githubusercontent.com/u/1688645?s=72&u=7f12174aeae34c99861918836ef527b7fd927101&v=4" height="12" />
        <b>bloodyowl</b>
    </a></td><td>@swan-io</td><td>Paris, France</td><td>395</td><td>731</td></tr><tr><td>5</td><td><a href="https://github.com/MoOx">
        <img src="https://avatars.githubusercontent.com/u/157534?s=72&u=399d4103e3bcf74bb9ef02eb5fe5da40dc90d2db&v=4" height="12" />
        <b>MoOx</b>
    </a></td><td>Freelance at MoOx.io</td><td>Toulouse, France</td><td>1.22K</td><td>586</td></tr><tr><td>6</td><td><a href="https://github.com/Haroenv">
        <img src="https://avatars.githubusercontent.com/u/6270048?s=72&u=767b8fde5c473100da40c50fd2f7c2df139c8d48&v=4" height="12" />
        <b>Haroenv</b>
    </a></td><td>@algolia</td><td>Paris, France</td><td>540</td><td>562</td></tr><tr><td>7</td><td><a href="https://github.com/stephrobert">
        <img src="https://avatars.githubusercontent.com/u/681788?s=72&u=cda76428fe4d06957a063238e1dcc1d4c4ae2cf6&v=4" height="12" />
        <b>stephrobert</b>
    </a></td><td>Adlere</td><td>Lille</td><td>233</td><td>491</td></tr><tr><td>8</td><td><a href="https://github.com/innocenzi">
        <img src="https://avatars.githubusercontent.com/u/16060559?s=72&u=cf061757407ef529958cf24bac8d2f699ad6e6ed&v=4" height="12" />
        <b>innocenzi</b>
    </a></td><td>Developer @JetflyAviation</td><td>France</td><td>312</td><td>436</td></tr><tr><td>9</td><td><a href="https://github.com/imath">
        <img src="https://avatars.githubusercontent.com/u/1834524?s=72&v=4" height="12" />
        <b>imath</b>
    </a></td><td>-</td><td>Paris</td><td>171</td><td>430</td></tr><tr><td>10</td><td><a href="https://github.com/Progi1984">
        <img src="https://avatars.githubusercontent.com/u/1533248?s=72&u=096bead2eab90e4795096b7d518583223dd34be6&v=4" height="12" />
        <b>Progi1984</b>
    </a></td><td>@PrestaShopCorp </td><td>Rennes, France</td><td>210</td><td>378</td></tr><tr><td>11</td><td><a href="https://github.com/nhoizey">
        <img src="https://avatars.githubusercontent.com/u/78213?s=72&v=4" height="12" />
        <b>nhoizey</b>
    </a></td><td>@cleverage</td><td>Paris, France</td><td>240</td><td>322</td></tr><tr><td>12</td><td><a href="https://github.com/maelle">
        <img src="https://avatars.githubusercontent.com/u/8360597?s=72&u=824f03caa87c92420352e3dd9a05470320a67412&v=4" height="12" />
        <b>maelle</b>
    </a></td><td>@ropensci</td><td>Nancy, France</td><td>921</td><td>245</td></tr><tr><td>13</td><td><a href="https://github.com/NelleV">
        <img src="https://avatars.githubusercontent.com/u/184798?s=72&v=4" height="12" />
        <b>NelleV</b>
    </a></td><td>TIMC</td><td>Grenoble</td><td>254</td><td>237</td></tr><tr><td>14</td><td><a href="https://github.com/dherault">
        <img src="https://avatars.githubusercontent.com/u/4154003?s=72&u=4b24359c0f156b3bba83ea1ad3f030cb7a55d2e0&v=4" height="12" />
        <b>dherault</b>
    </a></td><td>@toptal</td><td>Aix-en-Provence, France</td><td>186</td><td>193</td></tr><tr><td>15</td><td><a href="https://github.com/BrunoLevy">
        <img src="https://avatars.githubusercontent.com/u/19478253?s=72&u=5d291f158e7d7f0ebb99475e5f8974a7a8ec374d&v=4" height="12" />
        <b>BrunoLevy</b>
    </a></td><td>@inria</td><td>Saclay, France</td><td>539</td><td>131</td></tr><tr><td>16</td><td><a href="https://github.com/ccamel">
        <img src="https://avatars.githubusercontent.com/u/9574336?s=72&u=5d1de8c7eaf3289162c88956747465a8ed570d66&v=4" height="12" />
        <b>ccamel</b>
    </a></td><td>@OKP4</td><td>Toulouse</td><td>177</td><td>120</td></tr><tr><td>17</td><td><a href="https://github.com/crazy-max">
        <img src="https://avatars.githubusercontent.com/u/1951866?s=72&v=4" height="12" />
        <b>crazy-max</b>
    </a></td><td>@docker</td><td>France</td><td>2.25K</td><td>116</td></tr><tr><td>18</td><td><a href="https://github.com/antoinevastel">
        <img src="https://avatars.githubusercontent.com/u/5827148?s=72&v=4" height="12" />
        <b>antoinevastel</b>
    </a></td><td>-</td><td>Lille, France</td><td>293</td><td>111</td></tr><tr><td>19</td><td><a href="https://github.com/fxcoudert">
        <img src="https://avatars.githubusercontent.com/u/1980544?s=72&u=9a73e04b4876d134ff69035fd7ea77eebecda2a3&v=4" height="12" />
        <b>fxcoudert</b>
    </a></td><td>-</td><td>Paris, France</td><td>280</td><td>70</td></tr><tr><td>20</td><td><a href="https://github.com/Phyronnaz">
        <img src="https://avatars.githubusercontent.com/u/16806877?s=72&u=9f22d47f8682df3061081987287e90d40f553cc8&v=4" height="12" />
        <b>Phyronnaz</b>
    </a></td><td>-</td><td>France</td><td>267</td><td>58</td></tr><tr><td>21</td><td><a href="https://github.com/benjamincrozat">
        <img src="https://avatars.githubusercontent.com/u/3613731?s=72&v=4" height="12" />
        <b>benjamincrozat</b>
    </a></td><td>-</td><td>France</td><td>216</td><td>57</td></tr><tr><td>22</td><td><a href="https://github.com/cquest">
        <img src="https://avatars.githubusercontent.com/u/1202668?s=72&u=56fc4a65f907c7b7a80c799447036ba5cb1c5876&v=4" height="12" />
        <b>cquest</b>
    </a></td><td>-</td><td>Paris, France</td><td>237</td><td>29</td></tr><tr><td>23</td><td><a href="https://github.com/hai-vr">
        <img src="https://avatars.githubusercontent.com/u/60819407?s=72&u=b92c103e4def5b15e5883c9a2edd75e74aecbf90&v=4" height="12" />
        <b>hai-vr</b>
    </a></td><td>-</td><td>Paris, France</td><td>196</td><td>27</td></tr><tr><td>24</td><td><a href="https://github.com/mykiwi">
        <img src="https://avatars.githubusercontent.com/u/334432?s=72&u=8e0e09ca184a8891c4731401f39edba0895834c2&v=4" height="12" />
        <b>mykiwi</b>
    </a></td><td>open to work</td><td>Nantes, France</td><td>190</td><td>27</td></tr><tr><td>25</td><td><a href="https://github.com/ParisNeo">
        <img src="https://avatars.githubusercontent.com/u/827993?s=72&u=17ad3b01b402b36d9424d6b4437561304616eb18&v=4" height="12" />
        <b>ParisNeo</b>
    </a></td><td>CEA</td><td>France</td><td>170</td><td>25</td></tr><tr><td>26</td><td><a href="https://github.com/jonathantribouharet">
        <img src="https://avatars.githubusercontent.com/u/188946?s=72&u=7298b69cfb0aa8c1055ac262e7367d18a41b9cb8&v=4" height="12" />
        <b>jonathantribouharet</b>
    </a></td><td>@yokitup</td><td>Paris, France</td><td>343</td><td>22</td></tr><tr><td>27</td><td><a href="https://github.com/Alexays">
        <img src="https://avatars.githubusercontent.com/u/13947260?s=72&u=8da5ea8627d2c2418d6cb08221e9febb3a95f997&v=4" height="12" />
        <b>Alexays</b>
    </a></td><td>@Screebapp</td><td>Nantes, France</td><td>162</td><td>21</td></tr><tr><td>28</td><td><a href="https://github.com/Dimillian">
        <img src="https://avatars.githubusercontent.com/u/535509?s=72&u=764d85a6d85e56cb2029e0e64af1bf37296e02a4&v=4" height="12" />
        <b>Dimillian</b>
    </a></td><td>@Medium @Glose </td><td>France</td><td>2.5K</td><td>20</td></tr><tr><td>29</td><td><a href="https://github.com/mbeaudru">
        <img src="https://avatars.githubusercontent.com/u/8942633?s=72&u=2612af9dfc44e2d045b0a67184b916f8d4efc802&v=4" height="12" />
        <b>mbeaudru</b>
    </a></td><td>Datadog</td><td>Paris</td><td>770</td><td>20</td></tr><tr><td>30</td><td><a href="https://github.com/simongravelle">
        <img src="https://avatars.githubusercontent.com/u/43388542?s=72&u=16bc101821423023268d74e239583cbcc21b3881&v=4" height="12" />
        <b>simongravelle</b>
    </a></td><td>LIPhy</td><td>Grenoble</td><td>367</td><td>20</td></tr><tr><td>31</td><td><a href="https://github.com/SimonMarquis">
        <img src="https://avatars.githubusercontent.com/u/1921278?s=72&u=ace12a9fb3a0532f35285bce04898f7a7c97b2f9&v=4" height="12" />
        <b>SimonMarquis</b>
    </a></td><td>@leboncoin</td><td>Paris, France</td><td>327</td><td>20</td></tr><tr><td>32</td><td><a href="https://github.com/l-lin">
        <img src="https://avatars.githubusercontent.com/u/5452304?s=72&u=2e2f03b021b647037453379a788385f317c8208f&v=4" height="12" />
        <b>l-lin</b>
    </a></td><td>BioSerenity</td><td>Paris</td><td>243</td><td>20</td></tr><tr><td>33</td><td><a href="https://github.com/rom1504">
        <img src="https://avatars.githubusercontent.com/u/2346494?s=72&v=4" height="12" />
        <b>rom1504</b>
    </a></td><td>@google</td><td>Paris</td><td>1.92K</td><td>19</td></tr><tr><td>34</td><td><a href="https://github.com/QuiiBz">
        <img src="https://avatars.githubusercontent.com/u/43268759?s=72&u=1d8c6583c1cce98b7baeecd2b9646a9f41292376&v=4" height="12" />
        <b>QuiiBz</b>
    </a></td><td>@vercel</td><td>Paris</td><td>415</td><td>19</td></tr><tr><td>35</td><td><a href="https://github.com/eskatos">
        <img src="https://avatars.githubusercontent.com/u/132773?s=72&u=868442b2412111d43bf07e01ce0dc87bb410b80c&v=4" height="12" />
        <b>eskatos</b>
    </a></td><td>Gradle</td><td>France</td><td>162</td><td>19</td></tr><tr><td>36</td><td><a href="https://github.com/rouault">
        <img src="https://avatars.githubusercontent.com/u/1192433?s=72&u=947be9d1eb18e70faa08dbdedf84de7a1e2568f4&v=4" height="12" />
        <b>rouault</b>
    </a></td><td>Spatialys</td><td>France</td><td>615</td><td>18</td></tr><tr><td>37</td><td><a href="https://github.com/mockersf">
        <img src="https://avatars.githubusercontent.com/u/8672791?s=72&u=6350847888b0006d335bc98ca32a5359389d26b5&v=4" height="12" />
        <b>mockersf</b>
    </a></td><td>-</td><td>France</td><td>180</td><td>16</td></tr><tr><td>38</td><td><a href="https://github.com/Calinou">
        <img src="https://avatars.githubusercontent.com/u/180032?s=72&v=4" height="12" />
        <b>Calinou</b>
    </a></td><td>@godotengine</td><td>Troyes, France</td><td>1.16K</td><td>14</td></tr><tr><td>39</td><td><a href="https://github.com/mcanouil">
        <img src="https://avatars.githubusercontent.com/u/8896044?s=72&u=86a5cbe0323a90349d87b7fa1fd4b22ae9d45ea2&v=4" height="12" />
        <b>mcanouil</b>
    </a></td><td>-</td><td>Lille, France</td><td>190</td><td>14</td></tr><tr><td>40</td><td><a href="https://github.com/posva">
        <img src="https://avatars.githubusercontent.com/u/664177?s=72&u=ded1e1cffd1d5620c9d9fb1a1c966c17204d6bef&v=4" height="12" />
        <b>posva</b>
    </a></td><td>Freelance</td><td>Paris </td><td>5.3K</td><td>13</td></tr><tr><td>41</td><td><a href="https://github.com/CedricGuillemet">
        <img src="https://avatars.githubusercontent.com/u/1312968?s=72&u=09586c4d429addaa7fc099437bebda780a9e39ed&v=4" height="12" />
        <b>CedricGuillemet</b>
    </a></td><td>Microsoft</td><td>Redon, Brittany, France</td><td>398</td><td>13</td></tr><tr><td>42</td><td><a href="https://github.com/pablo-1610">
        <img src="https://avatars.githubusercontent.com/u/42814853?s=72&u=37871dc6aec95c795b011d38c7e3bd88097588ef&v=4" height="12" />
        <b>pablo-1610</b>
    </a></td><td>-</td><td>Lille, France</td><td>285</td><td>13</td></tr><tr><td>43</td><td><a href="https://github.com/CorentinTh">
        <img src="https://avatars.githubusercontent.com/u/25065347?s=72&u=ddfc8b7812ebc8cbd9245f499e4703bf3165ec31&v=4" height="12" />
        <b>CorentinTh</b>
    </a></td><td>@GeorgesTech </td><td>France - Lyon</td><td>277</td><td>13</td></tr><tr><td>44</td><td><a href="https://github.com/rubenfiszel">
        <img src="https://avatars.githubusercontent.com/u/275584?s=72&u=eb0fe584ca9e8636a35ab822b93cc4a1ad10bf42&v=4" height="12" />
        <b>rubenfiszel</b>
    </a></td><td>Windmill</td><td>Paris, France</td><td>208</td><td>13</td></tr><tr><td>45</td><td><a href="https://github.com/kivutar">
        <img src="https://avatars.githubusercontent.com/u/442722?s=72&v=4" height="12" />
        <b>kivutar</b>
    </a></td><td>Piepacker</td><td>Ajaccio, France</td><td>172</td><td>13</td></tr><tr><td>46</td><td><a href="https://github.com/GuillaumeGomez">
        <img src="https://avatars.githubusercontent.com/u/3050060?s=72&u=6ca85464b07c5464a052250a4fc3e3f9c03c97ed&v=4" height="12" />
        <b>GuillaumeGomez</b>
    </a></td><td>@huawei</td><td>Paris</td><td>1.27K</td><td>12</td></tr><tr><td>47</td><td><a href="https://github.com/FGRibreau">
        <img src="https://avatars.githubusercontent.com/u/138050?s=72&u=a3ba0d324f400f6497eca4a3d273f5020a4c7b31&v=4" height="12" />
        <b>FGRibreau</b>
    </a></td><td>@nobullshitbooks @netwo-io @hook0 @image-charts  @killbugtoday @mailpopin  / Sold @Redsmin @bringr</td><td>France</td><td>721</td><td>12</td></tr><tr><td>48</td><td><a href="https://github.com/tgalopin">
        <img src="https://avatars.githubusercontent.com/u/1651494?s=72&u=ff057fae3d32e16223fbd1238811d5203111edb5&v=4" height="12" />
        <b>tgalopin</b>
    </a></td><td>@symfony  </td><td>France</td><td>367</td><td>12</td></tr><tr><td>49</td><td><a href="https://github.com/martinbonnin">
        <img src="https://avatars.githubusercontent.com/u/3974977?s=72&u=309f78046395d0c58ca6afbdb5ddf82c939ae66c&v=4" height="12" />
        <b>martinbonnin</b>
    </a></td><td>Apollo GraphQL</td><td>Paris, France</td><td>357</td><td>12</td></tr><tr><td>50</td><td><a href="https://github.com/Cpasjuste">
        <img src="https://avatars.githubusercontent.com/u/51077?s=72&v=4" height="12" />
        <b>Cpasjuste</b>
    </a></td><td>-</td><td>France</td><td>263</td><td>12</td></tr><tr><td>51</td><td><a href="https://github.com/abougouffa">
        <img src="https://avatars.githubusercontent.com/u/3716399?s=72&u=ad7a1e120fef1c19d7b7864ac183798de2711c59&v=4" height="12" />
        <b>abougouffa</b>
    </a></td><td>Astek Technology / Sagemcom</td><td>Paris, France</td><td>167</td><td>12</td></tr><tr><td>52</td><td><a href="https://github.com/cor3ntin">
        <img src="https://avatars.githubusercontent.com/u/1409019?s=72&v=4" height="12" />
        <b>cor3ntin</b>
    </a></td><td>-</td><td>Bordeaux, France</td><td>296</td><td>11</td></tr><tr><td>53</td><td><a href="https://github.com/noraj">
        <img src="https://avatars.githubusercontent.com/u/16578570?s=72&u=a95cbd7b496e688d77205c934c8ef9ebeb273a73&v=4" height="12" />
        <b>noraj</b>
    </a></td><td>Rawsec</td><td>FRANCE</td><td>1.53K</td><td>10</td></tr><tr><td>54</td><td><a href="https://github.com/fabriceyopa">
        <img src="https://avatars.githubusercontent.com/u/4902424?s=72&u=54bf5e65a787aaa0ea253953b4c391250563e997&v=4" height="12" />
        <b>fabriceyopa</b>
    </a></td><td>@laravelcm </td><td>France</td><td>232</td><td>10</td></tr><tr><td>55</td><td><a href="https://github.com/sinedied">
        <img src="https://avatars.githubusercontent.com/u/593151?s=72&u=257e9958c122ee193dad2ef21d06837bb94fa3d3&v=4" height="12" />
        <b>sinedied</b>
    </a></td><td>@Microsoft</td><td>France</td><td>231</td><td>10</td></tr><tr><td>56</td><td><a href="https://github.com/tdimnet">
        <img src="https://avatars.githubusercontent.com/u/9935925?s=72&u=90d6020b1e99960d5cc4ad0517bf6e6e96907d6f&v=4" height="12" />
        <b>tdimnet</b>
    </a></td><td>@nx-academy</td><td>Paris, France</td><td>178</td><td>10</td></tr><tr><td>57</td><td><a href="https://github.com/ldez">
        <img src="https://avatars.githubusercontent.com/u/5674651?s=72&u=45f0e097891f1e7e0c45c5224dcce11c867038af&v=4" height="12" />
        <b>ldez</b>
    </a></td><td>-</td><td>France</td><td>464</td><td>9</td></tr><tr><td>58</td><td><a href="https://github.com/Tahul">
        <img src="https://avatars.githubusercontent.com/u/1385263?s=72&u=5fa8ea08de4cd72e468943edabfa9d72f3c02e70&v=4" height="12" />
        <b>Tahul</b>
    </a></td><td>@nuxtlabs</td><td>Nantes, France</td><td>393</td><td>9</td></tr><tr><td>59</td><td><a href="https://github.com/rlouf">
        <img src="https://avatars.githubusercontent.com/u/3885044?s=72&u=d25f1b19c341ad092b89b860547177a7b5107261&v=4" height="12" />
        <b>rlouf</b>
    </a></td><td>.txt</td><td>Fontainebleau, France</td><td>338</td><td>9</td></tr><tr><td>60</td><td><a href="https://github.com/garronej">
        <img src="https://avatars.githubusercontent.com/u/6702424?s=72&u=13f489f6f1b3fde3b4d6be6ddc503d2b95a0f5c7&v=4" height="12" />
        <b>garronej</b>
    </a></td><td>@InseeFrLab</td><td>Paris, France</td><td>323</td><td>9</td></tr><tr><td>61</td><td><a href="https://github.com/k33g">
        <img src="https://avatars.githubusercontent.com/u/491848?s=72&u=332138d1fe94fc2ab4953428187a92663e14eeac&v=4" height="12" />
        <b>k33g</b>
    </a></td><td>Bots Garden</td><td>Lyon (France)</td><td>315</td><td>9</td></tr><tr><td>62</td><td><a href="https://github.com/tiwariayush">
        <img src="https://avatars.githubusercontent.com/u/5693204?s=72&u=353bcf07c4daf98bf6fd4c2228e9e369f2ac6f0a&v=4" height="12" />
        <b>tiwariayush</b>
    </a></td><td>-</td><td>Paris, France</td><td>176</td><td>9</td></tr><tr><td>63</td><td><a href="https://github.com/eliemichel">
        <img src="https://avatars.githubusercontent.com/u/5802849?s=72&v=4" height="12" />
        <b>eliemichel</b>
    </a></td><td>Adobe Research</td><td>Paris</td><td>691</td><td>8</td></tr><tr><td>64</td><td><a href="https://github.com/kartben">
        <img src="https://avatars.githubusercontent.com/u/128251?s=72&v=4" height="12" />
        <b>kartben</b>
    </a></td><td>-</td><td>Toulouse, France</td><td>346</td><td>8</td></tr><tr><td>65</td><td><a href="https://github.com/unixfox">
        <img src="https://avatars.githubusercontent.com/u/4016501?s=72&u=d113bfcd7a1bb996a29af9ace2c158a3c6289b40&v=4" height="12" />
        <b>unixfox</b>
    </a></td><td>-</td><td>Auvergne-Rhône-Alpes, France - Wallonia, Belgium</td><td>296</td><td>8</td></tr><tr><td>66</td><td><a href="https://github.com/sdpython">
        <img src="https://avatars.githubusercontent.com/u/4695832?s=72&u=9a0581b7da03088ea4ad3a37c5b680a64d864f33&v=4" height="12" />
        <b>sdpython</b>
    </a></td><td>@ENSAE</td><td>paris</td><td>275</td><td>8</td></tr><tr><td>67</td><td><a href="https://github.com/jfalcou">
        <img src="https://avatars.githubusercontent.com/u/285977?s=72&u=aa9be7c63023593e6e3fb7765390e789f31b7509&v=4" height="12" />
        <b>jfalcou</b>
    </a></td><td>University Paris Sud XI, CNRS</td><td>Orsay, France</td><td>249</td><td>8</td></tr><tr><td>68</td><td><a href="https://github.com/Pierstoval">
        <img src="https://avatars.githubusercontent.com/u/3369266?s=72&u=cd40e98364c064016bdef62d5442d93c8b2a19a0&v=4" height="12" />
        <b>Pierstoval</b>
    </a></td><td>@Orbitaleio / @Orbitale - @StudioAgate</td><td>France</td><td>239</td><td>8</td></tr><tr><td>69</td><td><a href="https://github.com/merveenoyan">
        <img src="https://avatars.githubusercontent.com/u/53175384?s=72&u=44019936d0cc3f7fd709b2c59f91ee1b9811d421&v=4" height="12" />
        <b>merveenoyan</b>
    </a></td><td>@huggingface </td><td>Paris</td><td>2.54K</td><td>7</td></tr><tr><td>70</td><td><a href="https://github.com/stof">
        <img src="https://avatars.githubusercontent.com/u/439401?s=72&u=bdedf550601e30f65b8759680868744e6c2607ed&v=4" height="12" />
        <b>stof</b>
    </a></td><td>@Incenteev</td><td>Paris</td><td>2.06K</td><td>7</td></tr><tr><td>71</td><td><a href="https://github.com/donho">
        <img src="https://avatars.githubusercontent.com/u/90293?s=72&u=ecf6e2f9319cd333d4ffd0056c84848e91ae9870&v=4" height="12" />
        <b>donho</b>
    </a></td><td>Notepad++ Project</td><td>Paris France</td><td>1.81K</td><td>7</td></tr><tr><td>72</td><td><a href="https://github.com/samber">
        <img src="https://avatars.githubusercontent.com/u/2951285?s=72&u=571c795227b4edbd29f027478346834f83a95076&v=4" height="12" />
        <b>samber</b>
    </a></td><td>@ScreebApp </td><td>Nantes (France)</td><td>1.05K</td><td>7</td></tr><tr><td>73</td><td><a href="https://github.com/revolunet">
        <img src="https://avatars.githubusercontent.com/u/124937?s=72&u=ebf6cfe30f1a1246ccf8e5f5728e1a94e4f60769&v=4" height="12" />
        <b>revolunet</b>
    </a></td><td>@BetaGouv </td><td>Paris, France</td><td>1.02K</td><td>7</td></tr><tr><td>74</td><td><a href="https://github.com/dgageot">
        <img src="https://avatars.githubusercontent.com/u/153495?s=72&u=7a06a6cbf585d2f329484b4f0b900bf48eee9b29&v=4" height="12" />
        <b>dgageot</b>
    </a></td><td>Docker</td><td>Paris, France</td><td>687</td><td>7</td></tr><tr><td>75</td><td><a href="https://github.com/dadoonet">
        <img src="https://avatars.githubusercontent.com/u/274222?s=72&u=0f1b78dd9419669d9e79bb47e7c152f9d7c26de9&v=4" height="12" />
        <b>dadoonet</b>
    </a></td><td>@elastic</td><td>France, Cergy</td><td>610</td><td>7</td></tr><tr><td>76</td><td><a href="https://github.com/bblanchon">
        <img src="https://avatars.githubusercontent.com/u/5462433?s=72&u=bec379310fcd0063e7555115cc65357c396e0f9b&v=4" height="12" />
        <b>bblanchon</b>
    </a></td><td>-</td><td>France</td><td>516</td><td>7</td></tr><tr><td>77</td><td><a href="https://github.com/Mattrack">
        <img src="https://avatars.githubusercontent.com/u/1747403?s=72&u=031fcdc67c6ba38585c18dbdef5f36283499316e&v=4" height="12" />
        <b>Mattrack</b>
    </a></td><td>@holbertonschool </td><td>France</td><td>485</td><td>7</td></tr><tr><td>78</td><td><a href="https://github.com/samhocevar">
        <img src="https://avatars.githubusercontent.com/u/245089?s=72&u=3bdd6a36b91d0fc859040a47f0b5fac441f513ab&v=4" height="12" />
        <b>samhocevar</b>
    </a></td><td>@dontnod </td><td>Paris, France</td><td>471</td><td>7</td></tr><tr><td>79</td><td><a href="https://github.com/millsp">
        <img src="https://avatars.githubusercontent.com/u/18401805?s=72&u=2318b2d8f5f09a3cc1454121661f4ba9064a6c8b&v=4" height="12" />
        <b>millsp</b>
    </a></td><td>@prisma</td><td>France</td><td>471</td><td>7</td></tr><tr><td>80</td><td><a href="https://github.com/hadrienj">
        <img src="https://avatars.githubusercontent.com/u/6381368?s=72&u=57573c80d86dd1522e0ad45670004882617f47a3&v=4" height="12" />
        <b>hadrienj</b>
    </a></td><td>-</td><td>Paris, France</td><td>467</td><td>7</td></tr><tr><td>81</td><td><a href="https://github.com/spolu">
        <img src="https://avatars.githubusercontent.com/u/15067?s=72&u=6297f8db333ba5fbf2be0ee9d796a09b1419115f&v=4" height="12" />
        <b>spolu</b>
    </a></td><td>Dust</td><td>Paris</td><td>452</td><td>7</td></tr><tr><td>82</td><td><a href="https://github.com/hallard">
        <img src="https://avatars.githubusercontent.com/u/2471931?s=72&u=3ae568da0ba3a6e7f4ba03f35fd14f8149f0cff2&v=4" height="12" />
        <b>hallard</b>
    </a></td><td>@ch2i @evolyenergy</td><td>Poitiers, France</td><td>439</td><td>7</td></tr><tr><td>83</td><td><a href="https://github.com/raphaelvallat">
        <img src="https://avatars.githubusercontent.com/u/25703792?s=72&u=106689cdafc3ba03b63d8311b08a54344a56d831&v=4" height="12" />
        <b>raphaelvallat</b>
    </a></td><td>Oura Ring</td><td>Lyon, France</td><td>381</td><td>7</td></tr><tr><td>84</td><td><a href="https://github.com/pchaigno">
        <img src="https://avatars.githubusercontent.com/u/1764210?s=72&v=4" height="12" />
        <b>pchaigno</b>
    </a></td><td>Isovalent</td><td>Rennes, France</td><td>346</td><td>7</td></tr><tr><td>85</td><td><a href="https://github.com/sylvestre">
        <img src="https://avatars.githubusercontent.com/u/733326?s=72&v=4" height="12" />
        <b>sylvestre</b>
    </a></td><td>Mozilla</td><td>France</td><td>326</td><td>7</td></tr><tr><td>86</td><td><a href="https://github.com/benjamincanac">
        <img src="https://avatars.githubusercontent.com/u/739984?s=72&u=a263ce7469841c60ad76354f0779055b7e8365d5&v=4" height="12" />
        <b>benjamincanac</b>
    </a></td><td>@nuxtlabs</td><td>Bordeaux</td><td>325</td><td>7</td></tr><tr><td>87</td><td><a href="https://github.com/sunny">
        <img src="https://avatars.githubusercontent.com/u/132?s=72&v=4" height="12" />
        <b>sunny</b>
    </a></td><td>Cults.</td><td>Paris, France</td><td>320</td><td>7</td></tr><tr><td>88</td><td><a href="https://github.com/tgrall">
        <img src="https://avatars.githubusercontent.com/u/541250?s=72&u=ed72bb083428632c5788c3e65202d33c19953712&v=4" height="12" />
        <b>tgrall</b>
    </a></td><td>@github</td><td>Nantes, France</td><td>303</td><td>7</td></tr><tr><td>89</td><td><a href="https://github.com/kelu124">
        <img src="https://avatars.githubusercontent.com/u/2452634?s=72&u=55b50a96ed1143c6cf84704446464eb7c069daf5&v=4" height="12" />
        <b>kelu124</b>
    </a></td><td>-</td><td>Paris</td><td>296</td><td>7</td></tr><tr><td>90</td><td><a href="https://github.com/gsmet">
        <img src="https://avatars.githubusercontent.com/u/1279749?s=72&u=e462a6165ea17647aed446ca31fae604338ae18c&v=4" height="12" />
        <b>gsmet</b>
    </a></td><td>Red Hat</td><td>Lyon, France</td><td>293</td><td>7</td></tr><tr><td>91</td><td><a href="https://github.com/piitaya">
        <img src="https://avatars.githubusercontent.com/u/5878303?s=72&u=ab28a992669ff3369d3f23bebe1313e7b3fbee0b&v=4" height="12" />
        <b>piitaya</b>
    </a></td><td>@home-assistant @NabuCasa</td><td>Lille</td><td>271</td><td>7</td></tr><tr><td>92</td><td><a href="https://github.com/Ysurac">
        <img src="https://avatars.githubusercontent.com/u/6342954?s=72&u=f609c4350ded22b839bbc356875be03d2772f98f&v=4" height="12" />
        <b>Ysurac</b>
    </a></td><td>-</td><td>France</td><td>266</td><td>7</td></tr><tr><td>93</td><td><a href="https://github.com/NiLuJe">
        <img src="https://avatars.githubusercontent.com/u/111974?s=72&v=4" height="12" />
        <b>NiLuJe</b>
    </a></td><td>-</td><td>Paris, France</td><td>257</td><td>7</td></tr><tr><td>94</td><td><a href="https://github.com/paradoxxxzero">
        <img src="https://avatars.githubusercontent.com/u/271144?s=72&u=03daedbbb192f3d91ebf331ea1c6a2e33050f3dc&v=4" height="12" />
        <b>paradoxxxzero</b>
    </a></td><td>-</td><td>Lyon, France</td><td>244</td><td>7</td></tr><tr><td>95</td><td><a href="https://github.com/dubzzz">
        <img src="https://avatars.githubusercontent.com/u/5300235?s=72&u=283a572a5010b5350eee7168cf6ce1b566747903&v=4" height="12" />
        <b>dubzzz</b>
    </a></td><td>Pigment</td><td>Remote, France</td><td>235</td><td>7</td></tr><tr><td>96</td><td><a href="https://github.com/ManUtopiK">
        <img src="https://avatars.githubusercontent.com/u/188172?s=72&v=4" height="12" />
        <b>ManUtopiK</b>
    </a></td><td>-</td><td>France</td><td>226</td><td>7</td></tr><tr><td>97</td><td><a href="https://github.com/marvinroger">
        <img src="https://avatars.githubusercontent.com/u/990773?s=72&u=1b45a66d675a546da81dff18d5d5a43f125de4f8&v=4" height="12" />
        <b>marvinroger</b>
    </a></td><td>@orus-tech </td><td>Paris, France</td><td>226</td><td>7</td></tr><tr><td>98</td><td><a href="https://github.com/greeeg">
        <img src="https://avatars.githubusercontent.com/u/12447517?s=72&u=848b5a2fa03fa7cc0c99078d30750d5b6837a514&v=4" height="12" />
        <b>greeeg</b>
    </a></td><td>@pennylane-hq</td><td>Paris, France</td><td>217</td><td>7</td></tr><tr><td>99</td><td><a href="https://github.com/MattKetmo">
        <img src="https://avatars.githubusercontent.com/u/334996?s=72&u=2b06b452771518c77550e819cb6991bbe8866078&v=4" height="12" />
        <b>MattKetmo</b>
    </a></td><td>Kiln</td><td>Paris</td><td>200</td><td>7</td></tr><tr><td>100</td><td><a href="https://github.com/williamdes">
        <img src="https://avatars.githubusercontent.com/u/7784660?s=72&u=bfe835db1bfe0416a9f065affe24beb0b6c4fb26&v=4" height="12" />
        <b>williamdes</b>
    </a></td><td>@datacenters-network, @phpmyadmin, @wdes, @sudo-bot, @code-lts </td><td>Brittany, France</td><td>193</td><td>7</td></tr><tr><td>101</td><td><a href="https://github.com/clarus">
        <img src="https://avatars.githubusercontent.com/u/316665?s=72&u=18aacb0561d43abcf7ecca90bebbf753b655ee75&v=4" height="12" />
        <b>clarus</b>
    </a></td><td>Formal Land</td><td>Paris</td><td>188</td><td>7</td></tr><tr><td>102</td><td><a href="https://github.com/db0sch">
        <img src="https://avatars.githubusercontent.com/u/6984619?s=72&u=d4ae59c8252393b73c9afa30f4d28b564dc2c366&v=4" height="12" />
        <b>db0sch</b>
    </a></td><td>@lewagon </td><td>Paris, France</td><td>183</td><td>7</td></tr><tr><td>103</td><td><a href="https://github.com/gnodet">
        <img src="https://avatars.githubusercontent.com/u/84022?s=72&u=411d6cc1a1007325d0051d524e5ec04b5a859e1f&v=4" height="12" />
        <b>gnodet</b>
    </a></td><td>Red Hat</td><td>Caen, France</td><td>181</td><td>7</td></tr><tr><td>104</td><td><a href="https://github.com/BoD">
        <img src="https://avatars.githubusercontent.com/u/372852?s=72&u=7569719a93bcc9da6dbec73e93464aded3bacfb7&v=4" height="12" />
        <b>BoD</b>
    </a></td><td>-</td><td>Paris, France</td><td>177</td><td>7</td></tr><tr><td>105</td><td><a href="https://github.com/bugsounet">
        <img src="https://avatars.githubusercontent.com/u/30669209?s=72&u=09764eac7a1ed73a3e63048003cb379fe0ee391d&v=4" height="12" />
        <b>bugsounet</b>
    </a></td><td>-</td><td>France</td><td>170</td><td>7</td></tr><tr><td>106</td><td><a href="https://github.com/charlesBochet">
        <img src="https://avatars.githubusercontent.com/u/12035771?s=72&u=d630d76a6340dbc94ecacfe80be2095b4548c376&v=4" height="12" />
        <b>charlesBochet</b>
    </a></td><td>Twenty</td><td>Paris</td><td>165</td><td>7</td></tr><tr><td>107</td><td><a href="https://github.com/xoofx">
        <img src="https://avatars.githubusercontent.com/u/715038?s=72&u=944abb5708b2c03b6c13e3284dd76bb327791456&v=4" height="12" />
        <b>xoofx</b>
    </a></td><td>Unity-Technologies</td><td>Grenoble - France</td><td>1.1K</td><td>6</td></tr><tr><td>108</td><td><a href="https://github.com/teivah">
        <img src="https://avatars.githubusercontent.com/u/934784?s=72&u=a3bcd31aa1872977f2f9d203f7d28d1faf0e978c&v=4" height="12" />
        <b>teivah</b>
    </a></td><td>@google</td><td>France</td><td>807</td><td>6</td></tr><tr><td>109</td><td><a href="https://github.com/NathanLovato">
        <img src="https://avatars.githubusercontent.com/u/12694995?s=72&u=e4abd5fa8b74c82c57955f490da199a1ac7b9d8c&v=4" height="12" />
        <b>NathanLovato</b>
    </a></td><td>GDQuest</td><td>France</td><td>739</td><td>6</td></tr><tr><td>110</td><td><a href="https://github.com/glemaitre">
        <img src="https://avatars.githubusercontent.com/u/7454015?s=72&u=d9704641f89c00ce86f8207e59aedb554109d7fa&v=4" height="12" />
        <b>glemaitre</b>
    </a></td><td>Scikit-learn @ Inria foundation</td><td>Paris-Saclay / France</td><td>668</td><td>6</td></tr><tr><td>111</td><td><a href="https://github.com/BellezaEmporium">
        <img src="https://avatars.githubusercontent.com/u/30985701?s=72&u=01282e8cda7d5f163e5bbee29b03222e0a5d247e&v=4" height="12" />
        <b>BellezaEmporium</b>
    </a></td><td>-</td><td>France</td><td>264</td><td>6</td></tr><tr><td>112</td><td><a href="https://github.com/mfrachet">
        <img src="https://avatars.githubusercontent.com/u/3874873?s=72&u=7d1dc8a6e9b6144403e5402039c4db686b8d292c&v=4" height="12" />
        <b>mfrachet</b>
    </a></td><td>-</td><td>France</td><td>231</td><td>6</td></tr><tr><td>113</td><td><a href="https://github.com/ISSOtm">
        <img src="https://avatars.githubusercontent.com/u/15271137?s=72&u=e1646d5c0c78ac164e86bd5f171ca38bb10deb7c&v=4" height="12" />
        <b>ISSOtm</b>
    </a></td><td>@SII-Public-Research </td><td>France, often close to a PC and a Game Boy</td><td>192</td><td>6</td></tr><tr><td>114</td><td><a href="https://github.com/cyrildiagne">
        <img src="https://avatars.githubusercontent.com/u/144372?s=72&u=e829a8ddba74bc0744e55d91d735ee931ffbe07f&v=4" height="12" />
        <b>cyrildiagne</b>
    </a></td><td>Stability AI</td><td>Paris - France</td><td>2.55K</td><td>5</td></tr><tr><td>115</td><td><a href="https://github.com/ssaunier">
        <img src="https://avatars.githubusercontent.com/u/414418?s=72&u=173c3eae211bc1b31534408ac062d917d0b6d162&v=4" height="12" />
        <b>ssaunier</b>
    </a></td><td>@lewagon</td><td>France</td><td>2.25K</td><td>5</td></tr><tr><td>116</td><td><a href="https://github.com/jd">
        <img src="https://avatars.githubusercontent.com/u/2644?s=72&u=f53dcbcc3a08993cbad5f187123738be26ed4053&v=4" height="12" />
        <b>jd</b>
    </a></td><td>@Mergifyio</td><td>Toulouse, France</td><td>1.15K</td><td>5</td></tr><tr><td>117</td><td><a href="https://github.com/Amxx">
        <img src="https://avatars.githubusercontent.com/u/2432299?s=72&v=4" height="12" />
        <b>Amxx</b>
    </a></td><td>-</td><td>Lyon</td><td>586</td><td>5</td></tr><tr><td>118</td><td><a href="https://github.com/alejandro-ao">
        <img src="https://avatars.githubusercontent.com/u/18406448?s=72&v=4" height="12" />
        <b>alejandro-ao</b>
    </a></td><td>-</td><td>Bordeaux, France</td><td>422</td><td>5</td></tr><tr><td>119</td><td><a href="https://github.com/guillaumepotier">
        <img src="https://avatars.githubusercontent.com/u/496234?s=72&v=4" height="12" />
        <b>guillaumepotier</b>
    </a></td><td>CTO @Wisembly</td><td>Paris</td><td>315</td><td>5</td></tr><tr><td>120</td><td><a href="https://github.com/raphaelgoetter">
        <img src="https://avatars.githubusercontent.com/u/491029?s=72&u=43cc6df4ef14309bd8a8c04b3207c0945840beae&v=4" height="12" />
        <b>raphaelgoetter</b>
    </a></td><td>Alsacreations</td><td>Strasbourg, France</td><td>312</td><td>5</td></tr><tr><td>121</td><td><a href="https://github.com/btco">
        <img src="https://avatars.githubusercontent.com/u/4420556?s=72&u=df4b268f6f76b0b45bfef2a5910f4c5b3e0c78d7&v=4" height="12" />
        <b>btco</b>
    </a></td><td>-</td><td>Paris, France</td><td>173</td><td>5</td></tr><tr><td>122</td><td><a href="https://github.com/fasterthanlime">
        <img src="https://avatars.githubusercontent.com/u/7998310?s=72&u=fd6cb24423c35c26ee1ce7e00f0a3925bc964d1d&v=4" height="12" />
        <b>fasterthanlime</b>
    </a></td><td>@bearcove</td><td>Lyon, France</td><td>3.64K</td><td>4</td></tr><tr><td>123</td><td><a href="https://github.com/Geal">
        <img src="https://avatars.githubusercontent.com/u/119296?s=72&v=4" height="12" />
        <b>Geal</b>
    </a></td><td>-</td><td>Nantes, France</td><td>1.23K</td><td>4</td></tr><tr><td>124</td><td><a href="https://github.com/femtotrader">
        <img src="https://avatars.githubusercontent.com/u/5049737?s=72&v=4" height="12" />
        <b>femtotrader</b>
    </a></td><td>-</td><td>France</td><td>455</td><td>4</td></tr><tr><td>125</td><td><a href="https://github.com/kevinchalet">
        <img src="https://avatars.githubusercontent.com/u/6998306?s=72&u=71c40a231984c198d230974e6536b1aea5caf756&v=4" height="12" />
        <b>kevinchalet</b>
    </a></td><td>-</td><td>France</td><td>452</td><td>4</td></tr><tr><td>126</td><td><a href="https://github.com/bnjbvr">
        <img src="https://avatars.githubusercontent.com/u/1180019?s=72&v=4" height="12" />
        <b>bnjbvr</b>
    </a></td><td>@element-hq </td><td>Lyon, France</td><td>356</td><td>4</td></tr><tr><td>127</td><td><a href="https://github.com/flozz">
        <img src="https://avatars.githubusercontent.com/u/971438?s=72&u=327f13393db4e4314f06a920a20ea55b1a3f8e00&v=4" height="12" />
        <b>flozz</b>
    </a></td><td>@wanadev </td><td>Lyon, France</td><td>324</td><td>4</td></tr><tr><td>128</td><td><a href="https://github.com/yogsototh">
        <img src="https://avatars.githubusercontent.com/u/93899?s=72&v=4" height="12" />
        <b>yogsototh</b>
    </a></td><td>@threatgrid</td><td>Sophia Antipolis, France</td><td>286</td><td>4</td></tr><tr><td>129</td><td><a href="https://github.com/RaitoBezarius">
        <img src="https://avatars.githubusercontent.com/u/314564?s=72&u=2b23b8b25c888f248f04be073e6b4994f932f7b7&v=4" height="12" />
        <b>RaitoBezarius</b>
    </a></td><td>Independent Contributor</td><td>France</td><td>286</td><td>4</td></tr><tr><td>130</td><td><a href="https://github.com/pascalgrimaud">
        <img src="https://avatars.githubusercontent.com/u/9156882?s=72&u=048a3f914bddbb33320df8ec2c7cc22c26f22646&v=4" height="12" />
        <b>pascalgrimaud</b>
    </a></td><td>Freelance</td><td>Lyon, France</td><td>265</td><td>4</td></tr><tr><td>131</td><td><a href="https://github.com/vindarel">
        <img src="https://avatars.githubusercontent.com/u/3721004?s=72&u=1dd339c8791cde01920fd5235e5ce82cda9049e4&v=4" height="12" />
        <b>vindarel</b>
    </a></td><td>-</td><td>France</td><td>242</td><td>4</td></tr><tr><td>132</td><td><a href="https://github.com/beauby">
        <img src="https://avatars.githubusercontent.com/u/2215778?s=72&u=3974b0c10467a0fd8beb8fca87865f906ac4ed88&v=4" height="12" />
        <b>beauby</b>
    </a></td><td>Skip Labs</td><td>Paris</td><td>208</td><td>4</td></tr><tr><td>133</td><td><a href="https://github.com/guillaumeduhan">
        <img src="https://avatars.githubusercontent.com/u/31253241?s=72&u=208ccdb5527e97b028eebff33b0479cfa534cca2&v=4" height="12" />
        <b>guillaumeduhan</b>
    </a></td><td>My Happy Agency</td><td>Paris, France</td><td>208</td><td>4</td></tr><tr><td>134</td><td><a href="https://github.com/buybackoff">
        <img src="https://avatars.githubusercontent.com/u/489852?s=72&u=1e80a12d74166139c18595010635a9547cc8e467&v=4" height="12" />
        <b>buybackoff</b>
    </a></td><td>-</td><td>Paris</td><td>189</td><td>4</td></tr><tr><td>135</td><td><a href="https://github.com/maziyarpanahi">
        <img src="https://avatars.githubusercontent.com/u/5762953?s=72&u=17070601b919833c70fc8cb61381822fdb987639&v=4" height="12" />
        <b>maziyarpanahi</b>
    </a></td><td>@ISCPIF @JohnSnowLabs</td><td>Paris, France</td><td>186</td><td>4</td></tr><tr><td>136</td><td><a href="https://github.com/ornicar">
        <img src="https://avatars.githubusercontent.com/u/140370?s=72&v=4" height="12" />
        <b>ornicar</b>
    </a></td><td>lichess.org</td><td>France</td><td>4.98K</td><td>3</td></tr><tr><td>137</td><td><a href="https://github.com/vincentbernat">
        <img src="https://avatars.githubusercontent.com/u/631446?s=72&v=4" height="12" />
        <b>vincentbernat</b>
    </a></td><td>Free</td><td>Paris, France</td><td>1.04K</td><td>3</td></tr><tr><td>138</td><td><a href="https://github.com/potatoqualitee">
        <img src="https://avatars.githubusercontent.com/u/8278033?s=72&u=5a511a15023e5852701b547a867cb56c1dcb21a7&v=4" height="12" />
        <b>potatoqualitee</b>
    </a></td><td>@dataplat</td><td>North of France</td><td>856</td><td>3</td></tr><tr><td>139</td><td><a href="https://github.com/Xyl2k">
        <img src="https://avatars.githubusercontent.com/u/8536299?s=72&u=88d2fa98d1bdcef6b2578e57e988c5cb64c735e8&v=4" height="12" />
        <b>Xyl2k</b>
    </a></td><td>-</td><td>France</td><td>758</td><td>3</td></tr><tr><td>140</td><td><a href="https://github.com/chalasr">
        <img src="https://avatars.githubusercontent.com/u/7502063?s=72&u=56b8ba0944e917bd324d87ec7c2074665a0e699d&v=4" height="12" />
        <b>chalasr</b>
    </a></td><td>@alximy</td><td>Lyon, France</td><td>524</td><td>3</td></tr><tr><td>141</td><td><a href="https://github.com/darrachequesne">
        <img src="https://avatars.githubusercontent.com/u/13031701?s=72&u=f4865fe7225a33a7c187123c47ed8254eba8d40a&v=4" height="12" />
        <b>darrachequesne</b>
    </a></td><td>-</td><td>Lille, France</td><td>505</td><td>3</td></tr><tr><td>142</td><td><a href="https://github.com/Canop">
        <img src="https://avatars.githubusercontent.com/u/617006?s=72&u=d37ffb41ad4ef32e831e315ef5316b51e57c2597&v=4" height="12" />
        <b>Canop</b>
    </a></td><td>-</td><td>Lyon, France</td><td>494</td><td>3</td></tr><tr><td>143</td><td><a href="https://github.com/oliviergimenez">
        <img src="https://avatars.githubusercontent.com/u/12683635?s=72&u=c5a60d598ab4e98660dc7589de4609414a6af089&v=4" height="12" />
        <b>oliviergimenez</b>
    </a></td><td>CNRS</td><td>Montpellier</td><td>437</td><td>3</td></tr><tr><td>144</td><td><a href="https://github.com/amilamen">
        <img src="https://avatars.githubusercontent.com/u/46297789?s=72&u=6eb3e2ba9a183b7b2c39fcb57e125bd58f0f12b3&v=4" height="12" />
        <b>amilamen</b>
    </a></td><td>Co-founder at @wetillix</td><td>Île-de-France</td><td>434</td><td>3</td></tr><tr><td>145</td><td><a href="https://github.com/KtorZ">
        <img src="https://avatars.githubusercontent.com/u/5680256?s=72&u=020eb2bc68211d32c1691695b6ab22ad55478501&v=4" height="12" />
        <b>KtorZ</b>
    </a></td><td>@cardano-foundation</td><td>Toulouse</td><td>386</td><td>3</td></tr><tr><td>146</td><td><a href="https://github.com/vincelwt">
        <img src="https://avatars.githubusercontent.com/u/5092466?s=72&u=713f9947e4315b6f0ef62ec5cccd978133006783&v=4" height="12" />
        <b>vincelwt</b>
    </a></td><td>llmonitor.com</td><td>France</td><td>330</td><td>3</td></tr><tr><td>147</td><td><a href="https://github.com/tbruyelle">
        <img src="https://avatars.githubusercontent.com/u/92280?s=72&u=bea626ad4024e0727ca1f358b0e007f928e128d6&v=4" height="12" />
        <b>tbruyelle</b>
    </a></td><td>@allinbits</td><td>Montpellier, France</td><td>314</td><td>3</td></tr><tr><td>148</td><td><a href="https://github.com/veloce">
        <img src="https://avatars.githubusercontent.com/u/423393?s=72&v=4" height="12" />
        <b>veloce</b>
    </a></td><td>lichess.org</td><td>France</td><td>276</td><td>3</td></tr><tr><td>149</td><td><a href="https://github.com/Guilouz">
        <img src="https://avatars.githubusercontent.com/u/12702322?s=72&u=f6da23f5fd8d72ed72413e5bc8b9b2c170670783&v=4" height="12" />
        <b>Guilouz</b>
    </a></td><td>-</td><td>France</td><td>268</td><td>3</td></tr><tr><td>150</td><td><a href="https://github.com/ksator">
        <img src="https://avatars.githubusercontent.com/u/16098629?s=72&u=4d476bf5190e8e8659f5be2e1aa324076ff4895c&v=4" height="12" />
        <b>ksator</b>
    </a></td><td>Arista Networks</td><td>Paris</td><td>245</td><td>3</td></tr><tr><td>151</td><td><a href="https://github.com/DeveloppeurPascal">
        <img src="https://avatars.githubusercontent.com/u/29439699?s=72&u=3b413495092a9927526da35a406812d44b64048b&v=4" height="12" />
        <b>DeveloppeurPascal</b>
    </a></td><td>-</td><td>Orléans, France</td><td>243</td><td>3</td></tr><tr><td>152</td><td><a href="https://github.com/darold">
        <img src="https://avatars.githubusercontent.com/u/538862?s=72&u=c7f0d89a00a8290d56d6168a3d1a7ab4be36f10d&v=4" height="12" />
        <b>darold</b>
    </a></td><td>-</td><td>France</td><td>229</td><td>3</td></tr><tr><td>153</td><td><a href="https://github.com/greg0ire">
        <img src="https://avatars.githubusercontent.com/u/657779?s=72&u=96a0c076123934fb61c88da5b4d5b72b03dd69cb&v=4" height="12" />
        <b>greg0ire</b>
    </a></td><td>@ManoManoTech </td><td>Paris</td><td>217</td><td>3</td></tr><tr><td>154</td><td><a href="https://github.com/ggrossetie">
        <img src="https://avatars.githubusercontent.com/u/333276?s=72&u=9087930b05d462a706f06a9ce6bf0c8289d8069d&v=4" height="12" />
        <b>ggrossetie</b>
    </a></td><td>Yuzu tech</td><td>Lyon</td><td>198</td><td>3</td></tr><tr><td>155</td><td><a href="https://github.com/jnizet">
        <img src="https://avatars.githubusercontent.com/u/1608223?s=72&v=4" height="12" />
        <b>jnizet</b>
    </a></td><td>-</td><td>Lyon</td><td>195</td><td>3</td></tr><tr><td>156</td><td><a href="https://github.com/woctezuma">
        <img src="https://avatars.githubusercontent.com/u/570669?s=72&u=af46fc886659da64e893e12e83eeaccf9445ed1c&v=4" height="12" />
        <b>woctezuma</b>
    </a></td><td>-</td><td>Paris, France</td><td>188</td><td>3</td></tr><tr><td>157</td><td><a href="https://github.com/axeldelafosse">
        <img src="https://avatars.githubusercontent.com/u/10477267?s=72&u=0322ffa7017942defa4c6de7cdcd4d42b7d364e5&v=4" height="12" />
        <b>axeldelafosse</b>
    </a></td><td>-</td><td>Paris</td><td>186</td><td>3</td></tr><tr><td>158</td><td><a href="https://github.com/astahmer">
        <img src="https://avatars.githubusercontent.com/u/47224540?s=72&u=3bc3ac9c3c1f64b68704b973c30aae89ad99cc66&v=4" height="12" />
        <b>astahmer</b>
    </a></td><td>-</td><td>Montpellier</td><td>179</td><td>3</td></tr><tr><td>159</td><td><a href="https://github.com/wheybags">
        <img src="https://avatars.githubusercontent.com/u/1093274?s=72&v=4" height="12" />
        <b>wheybags</b>
    </a></td><td>Powder.gg</td><td>Paris, France</td><td>162</td><td>3</td></tr><tr><td>160</td><td><a href="https://github.com/jedisct1">
        <img src="https://avatars.githubusercontent.com/u/124872?s=72&v=4" height="12" />
        <b>jedisct1</b>
    </a></td><td>-</td><td>France</td><td>3.6K</td><td>2</td></tr><tr><td>161</td><td><a href="https://github.com/holtzy">
        <img src="https://avatars.githubusercontent.com/u/10254401?s=72&u=d554070e82949f6c7c6c57d4597f4cfddb053956&v=4" height="12" />
        <b>holtzy</b>
    </a></td><td>Software Engineer - Dataviz</td><td>Montpellier, France</td><td>3.53K</td><td>2</td></tr><tr><td>162</td><td><a href="https://github.com/oliviertassinari">
        <img src="https://avatars.githubusercontent.com/u/3165635?s=72&u=15a7ca3a64c1839a55c83a987d6f906c817d9e85&v=4" height="12" />
        <b>oliviertassinari</b>
    </a></td><td>MUI</td><td>Paris, France</td><td>2.86K</td><td>2</td></tr><tr><td>163</td><td><a href="https://github.com/BartoszMilewski">
        <img src="https://avatars.githubusercontent.com/u/799370?s=72&v=4" height="12" />
        <b>BartoszMilewski</b>
    </a></td><td>Programming Cafe</td><td>Paris, France</td><td>2.17K</td><td>2</td></tr><tr><td>164</td><td><a href="https://github.com/StanGirard">
        <img src="https://avatars.githubusercontent.com/u/19614572?s=72&u=173c2e47345431892f3101b4febe851ea99c08ad&v=4" height="12" />
        <b>StanGirard</b>
    </a></td><td>@Theodo</td><td>Paris</td><td>1.86K</td><td>2</td></tr><tr><td>165</td><td><a href="https://github.com/sarahdayan">
        <img src="https://avatars.githubusercontent.com/u/5370675?s=72&u=eb2bd0eaf36d3c355f17fb18c7711b16b95091bf&v=4" height="12" />
        <b>sarahdayan</b>
    </a></td><td>@algolia</td><td>France</td><td>1.57K</td><td>2</td></tr><tr><td>166</td><td><a href="https://github.com/aaugustin">
        <img src="https://avatars.githubusercontent.com/u/788910?s=72&u=f30dc7f46606e10020dd8bcb98f7d205be371ace&v=4" height="12" />
        <b>aaugustin</b>
    </a></td><td>@qonto</td><td>Paris, France</td><td>1.26K</td><td>2</td></tr><tr><td>167</td><td><a href="https://github.com/agramfort">
        <img src="https://avatars.githubusercontent.com/u/161052?s=72&u=28620e0e14597ad721a7505cf486aaf5687aea66&v=4" height="12" />
        <b>agramfort</b>
    </a></td><td>Meta</td><td>Paris, France</td><td>1.23K</td><td>2</td></tr><tr><td>168</td><td><a href="https://github.com/groue">
        <img src="https://avatars.githubusercontent.com/u/54219?s=72&u=73ae5871c4a96c72fae2650b267d578440e38983&v=4" height="12" />
        <b>groue</b>
    </a></td><td>Pierlis</td><td>Paris, France</td><td>1.03K</td><td>2</td></tr><tr><td>169</td><td><a href="https://github.com/nadimkobeissi">
        <img src="https://avatars.githubusercontent.com/u/9953?s=72&u=108ca67baf136bdb7e363419b8d757f2a3c96d5d&v=4" height="12" />
        <b>nadimkobeissi</b>
    </a></td><td>@symbolicsoft</td><td>Paris, France</td><td>921</td><td>2</td></tr><tr><td>170</td><td><a href="https://github.com/nicolargo">
        <img src="https://avatars.githubusercontent.com/u/776747?s=72&u=aa191d095cac0b9bb8ff2aca1d87370b47c0edee&v=4" height="12" />
        <b>nicolargo</b>
    </a></td><td>Le blog de Nicolargo</td><td>Valbonne, France</td><td>756</td><td>2</td></tr><tr><td>171</td><td><a href="https://github.com/jasonchampagne">
        <img src="https://avatars.githubusercontent.com/u/979506?s=72&u=2bdb20651e0cc5e6b8e751521638a003fb7305a9&v=4" height="12" />
        <b>jasonchampagne</b>
    </a></td><td>EvoluNoob</td><td>France</td><td>618</td><td>2</td></tr><tr><td>172</td><td><a href="https://github.com/fraxken">
        <img src="https://avatars.githubusercontent.com/u/4438263?s=72&u=5e2d0c11f001871b76e25dd3a96bd662d6a706ba&v=4" height="12" />
        <b>fraxken</b>
    </a></td><td>@MyUnisoft</td><td>Paris</td><td>613</td><td>2</td></tr><tr><td>173</td><td><a href="https://github.com/pgrimaud">
        <img src="https://avatars.githubusercontent.com/u/1866496?s=72&u=4b2f258754b4728d019d03d7a014be1812ae69fa&v=4" height="12" />
        <b>pgrimaud</b>
    </a></td><td>-</td><td>Paris, France</td><td>590</td><td>2</td></tr><tr><td>174</td><td><a href="https://github.com/marysaka">
        <img src="https://avatars.githubusercontent.com/u/1760003?s=72&u=9e62a6f327159a1dc67d89b3dd7173d56e1bf15c&v=4" height="12" />
        <b>marysaka</b>
    </a></td><td>Collabora</td><td>Paris, France</td><td>531</td><td>2</td></tr><tr><td>175</td><td><a href="https://github.com/ccadic">
        <img src="https://avatars.githubusercontent.com/u/6250103?s=72&u=9c651ca426bbca33a9bf3201515fd70c8f672af8&v=4" height="12" />
        <b>ccadic</b>
    </a></td><td>Morpheans</td><td>France, Europe</td><td>510</td><td>2</td></tr><tr><td>176</td><td><a href="https://github.com/davidgohel">
        <img src="https://avatars.githubusercontent.com/u/4331618?s=72&v=4" height="12" />
        <b>davidgohel</b>
    </a></td><td>ArData</td><td>Paris</td><td>510</td><td>2</td></tr><tr><td>177</td><td><a href="https://github.com/forax">
        <img src="https://avatars.githubusercontent.com/u/828220?s=72&v=4" height="12" />
        <b>forax</b>
    </a></td><td>University Gustave Eiffel (Paris)</td><td>Paris, France</td><td>502</td><td>2</td></tr><tr><td>178</td><td><a href="https://github.com/Kerollmops">
        <img src="https://avatars.githubusercontent.com/u/3610253?s=72&u=5997d202d7af48cde9b2c53a29000548886fa81e&v=4" height="12" />
        <b>Kerollmops</b>
    </a></td><td>@meilisearch</td><td>France, Paris</td><td>457</td><td>2</td></tr><tr><td>179</td><td><a href="https://github.com/gus33000">
        <img src="https://avatars.githubusercontent.com/u/3755345?s=72&u=8be4944a8331aaff14de13cf7f0354c4a8c192b8&v=4" height="12" />
        <b>gus33000</b>
    </a></td><td>labri</td><td>France</td><td>447</td><td>2</td></tr><tr><td>180</td><td><a href="https://github.com/hhamon">
        <img src="https://avatars.githubusercontent.com/u/235550?s=72&u=e27b6374d235613e20aa71d381aade84524fd42f&v=4" height="12" />
        <b>hhamon</b>
    </a></td><td>KODERO SAS</td><td>Paris, France</td><td>407</td><td>2</td></tr><tr><td>181</td><td><a href="https://github.com/luislavena">
        <img src="https://avatars.githubusercontent.com/u/4182?s=72&u=baab980311df526d41631de7362837955f474076&v=4" height="12" />
        <b>luislavena</b>
    </a></td><td>@area17 </td><td>Paris, France</td><td>399</td><td>2</td></tr><tr><td>182</td><td><a href="https://github.com/cveneziani">
        <img src="https://avatars.githubusercontent.com/u/50518?s=72&u=c7b2a45bb87459c343007be7019dcac9eff24d2e&v=4" height="12" />
        <b>cveneziani</b>
    </a></td><td>Cecilitse</td><td>Nantes, France</td><td>386</td><td>2</td></tr><tr><td>183</td><td><a href="https://github.com/LudovicRousseau">
        <img src="https://avatars.githubusercontent.com/u/398496?s=72&v=4" height="12" />
        <b>LudovicRousseau</b>
    </a></td><td>-</td><td>France</td><td>358</td><td>2</td></tr><tr><td>184</td><td><a href="https://github.com/sailro">
        <img src="https://avatars.githubusercontent.com/u/638167?s=72&u=100f354f54a8f49ea4d89cf2d8f5e206ea09ad77&v=4" height="12" />
        <b>sailro</b>
    </a></td><td>Microsoft</td><td>Lyon, France</td><td>330</td><td>2</td></tr><tr><td>185</td><td><a href="https://github.com/fredrik-johansson">
        <img src="https://avatars.githubusercontent.com/u/368838?s=72&u=33a576c5ece3772cf74c9bc302a6148b7d9a767a&v=4" height="12" />
        <b>fredrik-johansson</b>
    </a></td><td>INRIA & Institut de Mathématiques de Bordeaux</td><td>Bordeaux, France</td><td>326</td><td>2</td></tr><tr><td>186</td><td><a href="https://github.com/mpromonet">
        <img src="https://avatars.githubusercontent.com/u/1367630?s=72&u=656527786957614d8cf8dec22644fe40dadbbe6f&v=4" height="12" />
        <b>mpromonet</b>
    </a></td><td>-</td><td>France</td><td>308</td><td>2</td></tr><tr><td>187</td><td><a href="https://github.com/yohanboniface">
        <img src="https://avatars.githubusercontent.com/u/146023?s=72&v=4" height="12" />
        <b>yohanboniface</b>
    </a></td><td>Enix</td><td>France</td><td>305</td><td>2</td></tr><tr><td>188</td><td><a href="https://github.com/laluka">
        <img src="https://avatars.githubusercontent.com/u/7013722?s=72&u=99ab7a21f20471afc4643db1f6fa326d9218cc57&v=4" height="12" />
        <b>laluka</b>
    </a></td><td>ThinkLoveShare</td><td>FRANCE</td><td>304</td><td>2</td></tr><tr><td>189</td><td><a href="https://github.com/sebanc">
        <img src="https://avatars.githubusercontent.com/u/22224731?s=72&v=4" height="12" />
        <b>sebanc</b>
    </a></td><td>-</td><td>Paris, France</td><td>292</td><td>2</td></tr><tr><td>190</td><td><a href="https://github.com/Tucsky">
        <img src="https://avatars.githubusercontent.com/u/5738336?s=72&u=33e59d3c0f0f31900db8026ce93a4ed5a0ad89b1&v=4" height="12" />
        <b>Tucsky</b>
    </a></td><td>-</td><td>France</td><td>283</td><td>2</td></tr><tr><td>191</td><td><a href="https://github.com/peeweek">
        <img src="https://avatars.githubusercontent.com/u/4037271?s=72&u=798b17dcef0bba8e80e021ab04f4cd8990d2dca0&v=4" height="12" />
        <b>peeweek</b>
    </a></td><td>-</td><td>Paris</td><td>281</td><td>2</td></tr><tr><td>192</td><td><a href="https://github.com/xvw">
        <img src="https://avatars.githubusercontent.com/u/5732466?s=72&u=e2da3651aae7faf29d3c54c4d7cf66d92f35f16e&v=4" height="12" />
        <b>xvw</b>
    </a></td><td>@funkywork</td><td>Nantes</td><td>275</td><td>2</td></tr><tr><td>193</td><td><a href="https://github.com/pmdartus">
        <img src="https://avatars.githubusercontent.com/u/2567083?s=72&u=4453d744dc59256067d3989423ead364cb59af23&v=4" height="12" />
        <b>pmdartus</b>
    </a></td><td>@salesforce </td><td>Paris, France</td><td>267</td><td>2</td></tr><tr><td>194</td><td><a href="https://github.com/benkuper">
        <img src="https://avatars.githubusercontent.com/u/1291595?s=72&u=642b551224f7695f923cf41025d9b1b7b605962e&v=4" height="12" />
        <b>benkuper</b>
    </a></td><td>-</td><td>France</td><td>267</td><td>2</td></tr><tr><td>195</td><td><a href="https://github.com/SirLynix">
        <img src="https://avatars.githubusercontent.com/u/3002461?s=72&u=4135665e8c9d7743b47a266b9cf93ca5d06eef61&v=4" height="12" />
        <b>SirLynix</b>
    </a></td><td>-</td><td>France</td><td>249</td><td>2</td></tr><tr><td>196</td><td><a href="https://github.com/thbar">
        <img src="https://avatars.githubusercontent.com/u/10141?s=72&u=41c21f0cc2eb57c17dd9533bebad9c4d34bae89d&v=4" height="12" />
        <b>thbar</b>
    </a></td><td>LoGeek (ETL, data processing, SaaS products, RubyOnRails, Elixir)</td><td>Saintes, France</td><td>248</td><td>2</td></tr><tr><td>197</td><td><a href="https://github.com/ysbaddaden">
        <img src="https://avatars.githubusercontent.com/u/47380?s=72&v=4" height="12" />
        <b>ysbaddaden</b>
    </a></td><td>Ruby, JavaScript, Crystal</td><td>Nogent sur Oise, France</td><td>243</td><td>2</td></tr><tr><td>198</td><td><a href="https://github.com/dzello">
        <img src="https://avatars.githubusercontent.com/u/174777?s=72&u=ca3d3c86a98aada7ee26b9567e6d5e9cc34598d4&v=4" height="12" />
        <b>dzello</b>
    </a></td><td>@orbit-love</td><td>Paris</td><td>242</td><td>2</td></tr><tr><td>199</td><td><a href="https://github.com/NTag">
        <img src="https://avatars.githubusercontent.com/u/906276?s=72&u=c686367f063914cb3978840fc52a44199bdb8639&v=4" height="12" />
        <b>NTag</b>
    </a></td><td>-</td><td>Paris</td><td>234</td><td>2</td></tr><tr><td>200</td><td><a href="https://github.com/Chocapikk">
        <img src="https://avatars.githubusercontent.com/u/88535377?s=72&u=6b8983d2cd12765fbbfa53e35463d9ef97ab495a&v=4" height="12" />
        <b>Chocapikk</b>
    </a></td><td>https://github.com/AxerVault</td><td>France</td><td>233</td><td>2</td></tr>
    </tbody>
</table>

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
        <tr><td>🥇</td><td><a href="https://github.com/rozierguillaume">
        <img src="https://avatars.githubusercontent.com/u/22763678?s=72&u=f10c1d50d6f9ce7ed6c7d64a767c02911df19cf4&v=4" height="12" />
        <b>rozierguillaume</b>
    </a></td><td>-</td><td>Paris</td><td>335</td><td>1.2K</td></tr><tr><td>🥈</td><td><a href="https://github.com/gsmet">
        <img src="https://avatars.githubusercontent.com/u/1279749?s=72&u=e462a6165ea17647aed446ca31fae604338ae18c&v=4" height="12" />
        <b>gsmet</b>
    </a></td><td>Red Hat</td><td>Lyon, France</td><td>327</td><td>1.06K</td></tr><tr><td>🥉</td><td><a href="https://github.com/Caceresenzo">
        <img src="https://avatars.githubusercontent.com/u/7386242?s=72&u=17d4617bb086732fd4da9287942494386d06ebb3&v=4" height="12" />
        <b>Caceresenzo</b>
    </a></td><td>-</td><td>France</td><td>187</td><td>1.05K</td></tr><tr><td>4</td><td><a href="https://github.com/bloodyowl">
        <img src="https://avatars.githubusercontent.com/u/1688645?s=72&u=7f12174aeae34c99861918836ef527b7fd927101&v=4" height="12" />
        <b>bloodyowl</b>
    </a></td><td>@swan-io</td><td>Paris, France</td><td>406</td><td>970</td></tr><tr><td>5</td><td><a href="https://github.com/MoOx">
        <img src="https://avatars.githubusercontent.com/u/157534?s=72&u=399d4103e3bcf74bb9ef02eb5fe5da40dc90d2db&v=4" height="12" />
        <b>MoOx</b>
    </a></td><td>Freelance at MoOx.io</td><td>Toulouse, France</td><td>1.23K</td><td>838</td></tr><tr><td>6</td><td><a href="https://github.com/Haroenv">
        <img src="https://avatars.githubusercontent.com/u/6270048?s=72&u=767b8fde5c473100da40c50fd2f7c2df139c8d48&v=4" height="12" />
        <b>Haroenv</b>
    </a></td><td>@algolia</td><td>Paris, France</td><td>561</td><td>814</td></tr><tr><td>7</td><td><a href="https://github.com/stephrobert">
        <img src="https://avatars.githubusercontent.com/u/681788?s=72&u=cda76428fe4d06957a063238e1dcc1d4c4ae2cf6&v=4" height="12" />
        <b>stephrobert</b>
    </a></td><td>Outscale France</td><td>Lille</td><td>299</td><td>743</td></tr><tr><td>8</td><td><a href="https://github.com/Progi1984">
        <img src="https://avatars.githubusercontent.com/u/1533248?s=72&u=096bead2eab90e4795096b7d518583223dd34be6&v=4" height="12" />
        <b>Progi1984</b>
    </a></td><td>@PrestaShopCorp </td><td>Rennes, France</td><td>218</td><td>630</td></tr><tr><td>9</td><td><a href="https://github.com/nhoizey">
        <img src="https://avatars.githubusercontent.com/u/78213?s=72&v=4" height="12" />
        <b>nhoizey</b>
    </a></td><td>@cleverage</td><td>Paris, France</td><td>256</td><td>574</td></tr><tr><td>10</td><td><a href="https://github.com/BrunoLevy">
        <img src="https://avatars.githubusercontent.com/u/19478253?s=72&u=5d291f158e7d7f0ebb99475e5f8974a7a8ec374d&v=4" height="12" />
        <b>BrunoLevy</b>
    </a></td><td>@inria</td><td>Saclay, France</td><td>640</td><td>383</td></tr><tr><td>11</td><td><a href="https://github.com/crazy-max">
        <img src="https://avatars.githubusercontent.com/u/1951866?s=72&v=4" height="12" />
        <b>crazy-max</b>
    </a></td><td>@docker</td><td>France</td><td>2.42K</td><td>368</td></tr><tr><td>12</td><td><a href="https://github.com/Tahul">
        <img src="https://avatars.githubusercontent.com/u/1385263?s=72&u=5fa8ea08de4cd72e468943edabfa9d72f3c02e70&v=4" height="12" />
        <b>Tahul</b>
    </a></td><td>@thecompaniesapi</td><td>Nantes, France</td><td>437</td><td>266</td></tr><tr><td>13</td><td><a href="https://github.com/soyuka">
        <img src="https://avatars.githubusercontent.com/u/1321971?s=72&u=c89bcb8e5eeff581d304dcfc5f26628ddc1760a5&v=4" height="12" />
        <b>soyuka</b>
    </a></td><td>@coopTilleuls</td><td>Nantes, France</td><td>391</td><td>130</td></tr><tr><td>14</td><td><a href="https://github.com/maelle">
        <img src="https://avatars.githubusercontent.com/u/8360597?s=72&u=824f03caa87c92420352e3dd9a05470320a67412&v=4" height="12" />
        <b>maelle</b>
    </a></td><td>@ropensci</td><td>Nancy, France</td><td>1.01K</td><td>69</td></tr><tr><td>15</td><td><a href="https://github.com/l-lin">
        <img src="https://avatars.githubusercontent.com/u/5452304?s=72&u=2e2f03b021b647037453379a788385f317c8208f&v=4" height="12" />
        <b>l-lin</b>
    </a></td><td>@doctolib</td><td>Paris</td><td>249</td><td>57</td></tr><tr><td>16</td><td><a href="https://github.com/LaurentMazare">
        <img src="https://avatars.githubusercontent.com/u/1041292?s=72&u=4d4c5fe94c63a8eb244d812c6d97511c3640d122&v=4" height="12" />
        <b>LaurentMazare</b>
    </a></td><td>-</td><td>Paris</td><td>2.11K</td><td>53</td></tr><tr><td>17</td><td><a href="https://github.com/azerpas">
        <img src="https://avatars.githubusercontent.com/u/19282069?s=72&u=23fefaa28d073e8c7fc44a5a8737145773e38c74&v=4" height="12" />
        <b>azerpas</b>
    </a></td><td>@DataDome</td><td>Paris</td><td>211</td><td>53</td></tr><tr><td>18</td><td><a href="https://github.com/rlouf">
        <img src="https://avatars.githubusercontent.com/u/3885044?s=72&u=d25f1b19c341ad092b89b860547177a7b5107261&v=4" height="12" />
        <b>rlouf</b>
    </a></td><td>.txt</td><td>Bourron-Marlotte, France</td><td>430</td><td>43</td></tr><tr><td>19</td><td><a href="https://github.com/fxcoudert">
        <img src="https://avatars.githubusercontent.com/u/1980544?s=72&u=9a73e04b4876d134ff69035fd7ea77eebecda2a3&v=4" height="12" />
        <b>fxcoudert</b>
    </a></td><td>-</td><td>Paris, France</td><td>318</td><td>42</td></tr><tr><td>20</td><td><a href="https://github.com/BoboTiG">
        <img src="https://avatars.githubusercontent.com/u/2033598?s=72&u=7885aa35660361472a378a2e5e300e13ec76ae87&v=4" height="12" />
        <b>BoboTiG</b>
    </a></td><td>Hyland|Nuxeo</td><td>Remote, France</td><td>184</td><td>36</td></tr><tr><td>21</td><td><a href="https://github.com/rubenfiszel">
        <img src="https://avatars.githubusercontent.com/u/275584?s=72&u=eb0fe584ca9e8636a35ab822b93cc4a1ad10bf42&v=4" height="12" />
        <b>rubenfiszel</b>
    </a></td><td>Windmill</td><td>Paris, France</td><td>249</td><td>35</td></tr><tr><td>22</td><td><a href="https://github.com/Kocal">
        <img src="https://avatars.githubusercontent.com/u/2103975?s=72&u=3dbe19812c9328970d9f6de4947962fe1271273a&v=4" height="12" />
        <b>Kocal</b>
    </a></td><td>-</td><td>Lyon, France</td><td>202</td><td>33</td></tr><tr><td>23</td><td><a href="https://github.com/MeymounB">
        <img src="https://avatars.githubusercontent.com/u/77726988?s=72&u=67eba8479e13b466632b81e4f388272ab4dc8f5f&v=4" height="12" />
        <b>MeymounB</b>
    </a></td><td>Meymoun Boualaoui</td><td>France</td><td>273</td><td>31</td></tr><tr><td>24</td><td><a href="https://github.com/ptitSeb">
        <img src="https://avatars.githubusercontent.com/u/3250792?s=72&u=f206420ae21c0bbf92fea09871f11adea98adb39&v=4" height="12" />
        <b>ptitSeb</b>
    </a></td><td>-</td><td>France</td><td>749</td><td>30</td></tr><tr><td>25</td><td><a href="https://github.com/Androz2091">
        <img src="https://avatars.githubusercontent.com/u/42497995?s=72&u=6f40d52a49652087722a05d55013645bca6745b6&v=4" height="12" />
        <b>Androz2091</b>
    </a></td><td>-</td><td>France, Toulouse</td><td>1.22K</td><td>29</td></tr><tr><td>26</td><td><a href="https://github.com/oliviertassinari">
        <img src="https://avatars.githubusercontent.com/u/3165635?s=72&u=15a7ca3a64c1839a55c83a987d6f906c817d9e85&v=4" height="12" />
        <b>oliviertassinari</b>
    </a></td><td>MUI</td><td>Paris, France</td><td>3.08K</td><td>24</td></tr><tr><td>27</td><td><a href="https://github.com/ibelick">
        <img src="https://avatars.githubusercontent.com/u/14288396?s=72&u=73ee6fdd46dbab7bed83493f5f448654ff2d7f06&v=4" height="12" />
        <b>ibelick</b>
    </a></td><td>-</td><td>Paris</td><td>663</td><td>22</td></tr><tr><td>28</td><td><a href="https://github.com/sylvestre">
        <img src="https://avatars.githubusercontent.com/u/733326?s=72&u=77d7752593d6fa035b33e63386cc15479744ab24&v=4" height="12" />
        <b>sylvestre</b>
    </a></td><td>Mozilla</td><td>France</td><td>419</td><td>21</td></tr><tr><td>29</td><td><a href="https://github.com/frgfm">
        <img src="https://avatars.githubusercontent.com/u/26927750?s=72&u=dfbafc3534a42845875b527483a134ec48bfe6f9&v=4" height="12" />
        <b>frgfm</b>
    </a></td><td>@quack-ai @pyronear</td><td>Paris, FR</td><td>209</td><td>21</td></tr><tr><td>30</td><td><a href="https://github.com/kivutar">
        <img src="https://avatars.githubusercontent.com/u/442722?s=72&v=4" height="12" />
        <b>kivutar</b>
    </a></td><td>Implicit Conversions</td><td>Ajaccio, France</td><td>184</td><td>21</td></tr><tr><td>31</td><td><a href="https://github.com/NathanLovato">
        <img src="https://avatars.githubusercontent.com/u/12694995?s=72&u=e4abd5fa8b74c82c57955f490da199a1ac7b9d8c&v=4" height="12" />
        <b>NathanLovato</b>
    </a></td><td>GDQuest</td><td>France</td><td>823</td><td>20</td></tr><tr><td>32</td><td><a href="https://github.com/garronej">
        <img src="https://avatars.githubusercontent.com/u/6702424?s=72&u=13f489f6f1b3fde3b4d6be6ddc503d2b95a0f5c7&v=4" height="12" />
        <b>garronej</b>
    </a></td><td>@InseeFrLab</td><td>Paris, France</td><td>376</td><td>19</td></tr><tr><td>33</td><td><a href="https://github.com/SirLynix">
        <img src="https://avatars.githubusercontent.com/u/3002461?s=72&u=4135665e8c9d7743b47a266b9cf93ca5d06eef61&v=4" height="12" />
        <b>SirLynix</b>
    </a></td><td>Gameloft Paris</td><td>France</td><td>292</td><td>16</td></tr><tr><td>34</td><td><a href="https://github.com/vstinner">
        <img src="https://avatars.githubusercontent.com/u/194129?s=72&u=cf52678f5f02f96d9c5bc1b5079d4e6c2e441af4&v=4" height="12" />
        <b>vstinner</b>
    </a></td><td>@RedHatOfficial</td><td>France</td><td>1.3K</td><td>15</td></tr><tr><td>35</td><td><a href="https://github.com/williamdes">
        <img src="https://avatars.githubusercontent.com/u/7784660?s=72&u=bfe835db1bfe0416a9f065affe24beb0b6c4fb26&v=4" height="12" />
        <b>williamdes</b>
    </a></td><td>@wdes, @phpmyadmin, @sudo-bot, @code-lts </td><td>Brittany, France</td><td>206</td><td>15</td></tr><tr><td>36</td><td><a href="https://github.com/Calinou">
        <img src="https://avatars.githubusercontent.com/u/180032?s=72&v=4" height="12" />
        <b>Calinou</b>
    </a></td><td>@godotengine</td><td>Troyes, France</td><td>1.31K</td><td>14</td></tr><tr><td>37</td><td><a href="https://github.com/GuillaumeGomez">
        <img src="https://avatars.githubusercontent.com/u/3050060?s=72&u=6ca85464b07c5464a052250a4fc3e3f9c03c97ed&v=4" height="12" />
        <b>GuillaumeGomez</b>
    </a></td><td>@huawei</td><td>Paris</td><td>1.37K</td><td>13</td></tr><tr><td>38</td><td><a href="https://github.com/scraly">
        <img src="https://avatars.githubusercontent.com/u/2543381?s=72&u=d500ca96ff8a2a3f9b7bb300c71ed7e57449b072&v=4" height="12" />
        <b>scraly</b>
    </a></td><td>ovh</td><td>Toulouse</td><td>714</td><td>13</td></tr><tr><td>39</td><td><a href="https://github.com/jfalcou">
        <img src="https://avatars.githubusercontent.com/u/285977?s=72&u=aa9be7c63023593e6e3fb7765390e789f31b7509&v=4" height="12" />
        <b>jfalcou</b>
    </a></td><td>University Paris Sud XI, CNRS</td><td>Orsay, France</td><td>281</td><td>13</td></tr><tr><td>40</td><td><a href="https://github.com/cquest">
        <img src="https://avatars.githubusercontent.com/u/1202668?s=72&u=56fc4a65f907c7b7a80c799447036ba5cb1c5876&v=4" height="12" />
        <b>cquest</b>
    </a></td><td>-</td><td>Paris, France</td><td>252</td><td>13</td></tr><tr><td>41</td><td><a href="https://github.com/piitaya">
        <img src="https://avatars.githubusercontent.com/u/5878303?s=72&u=ab28a992669ff3369d3f23bebe1313e7b3fbee0b&v=4" height="12" />
        <b>piitaya</b>
    </a></td><td>@home-assistant @NabuCasa</td><td>Lille</td><td>341</td><td>12</td></tr><tr><td>42</td><td><a href="https://github.com/Nenkai">
        <img src="https://avatars.githubusercontent.com/u/13786175?s=72&u=c8c5184ee104323fcd17229ff4f44fc0568847e4&v=4" height="12" />
        <b>Nenkai</b>
    </a></td><td>-</td><td>Lyon, France</td><td>211</td><td>12</td></tr><tr><td>43</td><td><a href="https://github.com/mxrch">
        <img src="https://avatars.githubusercontent.com/u/17338428?s=72&u=78e744ba686776918a36fcc0047e2f031e3a3d50&v=4" height="12" />
        <b>mxrch</b>
    </a></td><td>HideAndSec</td><td>France</td><td>1.49K</td><td>11</td></tr><tr><td>44</td><td><a href="https://github.com/CorentinTh">
        <img src="https://avatars.githubusercontent.com/u/25065347?s=72&u=ddfc8b7812ebc8cbd9245f499e4703bf3165ec31&v=4" height="12" />
        <b>CorentinTh</b>
    </a></td><td>@GeorgesTech </td><td>France - Lyon</td><td>594</td><td>11</td></tr><tr><td>45</td><td><a href="https://github.com/lovasoa">
        <img src="https://avatars.githubusercontent.com/u/552629?s=72&u=3b5257f8d20ea6c313ed91ba80c024c3f00cf5dc&v=4" height="12" />
        <b>lovasoa</b>
    </a></td><td>@auto-grid @enexflow </td><td>Paris, France</td><td>530</td><td>10</td></tr><tr><td>46</td><td><a href="https://github.com/Chocapikk">
        <img src="https://avatars.githubusercontent.com/u/88535377?s=72&u=4b911f41d2c39151a09a3db492a6b24f85f0dbdc&v=4" height="12" />
        <b>Chocapikk</b>
    </a></td><td>-</td><td>France</td><td>528</td><td>10</td></tr><tr><td>47</td><td><a href="https://github.com/Kerollmops">
        <img src="https://avatars.githubusercontent.com/u/3610253?s=72&u=5997d202d7af48cde9b2c53a29000548886fa81e&v=4" height="12" />
        <b>Kerollmops</b>
    </a></td><td>@meilisearch</td><td>France, Paris</td><td>516</td><td>10</td></tr><tr><td>48</td><td><a href="https://github.com/DeveloppeurPascal">
        <img src="https://avatars.githubusercontent.com/u/29439699?s=72&u=3b413495092a9927526da35a406812d44b64048b&v=4" height="12" />
        <b>DeveloppeurPascal</b>
    </a></td><td>-</td><td>Orléans, France</td><td>293</td><td>10</td></tr><tr><td>49</td><td><a href="https://github.com/glample">
        <img src="https://avatars.githubusercontent.com/u/8885556?s=72&v=4" height="12" />
        <b>glample</b>
    </a></td><td>Facebook AI Research</td><td>Paris</td><td>1.02K</td><td>9</td></tr><tr><td>50</td><td><a href="https://github.com/gus33000">
        <img src="https://avatars.githubusercontent.com/u/3755345?s=72&u=8be4944a8331aaff14de13cf7f0354c4a8c192b8&v=4" height="12" />
        <b>gus33000</b>
    </a></td><td>labri</td><td>France</td><td>500</td><td>9</td></tr><tr><td>51</td><td><a href="https://github.com/maziyarpanahi">
        <img src="https://avatars.githubusercontent.com/u/5762953?s=72&u=17070601b919833c70fc8cb61381822fdb987639&v=4" height="12" />
        <b>maziyarpanahi</b>
    </a></td><td>@ISCPIF @JohnSnowLabs</td><td>Paris, France</td><td>320</td><td>9</td></tr><tr><td>52</td><td><a href="https://github.com/thomasbnt">
        <img src="https://avatars.githubusercontent.com/u/14293805?s=72&u=6049cd0655f3ed1ec256e900bbcd3b540491bd09&v=4" height="12" />
        <b>thomasbnt</b>
    </a></td><td>Creator of @mrrobotdotapp</td><td>Albi, France</td><td>201</td><td>9</td></tr><tr><td>53</td><td><a href="https://github.com/dunglas">
        <img src="https://avatars.githubusercontent.com/u/57224?s=72&u=a7ed2cf3f0ae84c9e06925b94091b85a7d6324b0&v=4" height="12" />
        <b>dunglas</b>
    </a></td><td>@coopTilleuls </td><td>Lille, France</td><td>3.94K</td><td>8</td></tr><tr><td>54</td><td><a href="https://github.com/sdispater">
        <img src="https://avatars.githubusercontent.com/u/555648?s=72&v=4" height="12" />
        <b>sdispater</b>
    </a></td><td>-</td><td>France</td><td>2.18K</td><td>8</td></tr><tr><td>55</td><td><a href="https://github.com/spolu">
        <img src="https://avatars.githubusercontent.com/u/15067?s=72&u=6297f8db333ba5fbf2be0ee9d796a09b1419115f&v=4" height="12" />
        <b>spolu</b>
    </a></td><td>Dust</td><td>Paris</td><td>484</td><td>8</td></tr><tr><td>56</td><td><a href="https://github.com/pommedeterresautee">
        <img src="https://avatars.githubusercontent.com/u/1029874?s=72&v=4" height="12" />
        <b>pommedeterresautee</b>
    </a></td><td>@ELS-RD Lefebvre Sarrut</td><td>Paris, France</td><td>417</td><td>8</td></tr><tr><td>57</td><td><a href="https://github.com/mcanouil">
        <img src="https://avatars.githubusercontent.com/u/8896044?s=72&u=86a5cbe0323a90349d87b7fa1fd4b22ae9d45ea2&v=4" height="12" />
        <b>mcanouil</b>
    </a></td><td>-</td><td>Lille, France</td><td>257</td><td>8</td></tr><tr><td>58</td><td><a href="https://github.com/astahmer">
        <img src="https://avatars.githubusercontent.com/u/47224540?s=72&u=3bc3ac9c3c1f64b68704b973c30aae89ad99cc66&v=4" height="12" />
        <b>astahmer</b>
    </a></td><td>-</td><td>Montpellier</td><td>243</td><td>8</td></tr><tr><td>59</td><td><a href="https://github.com/ParisNeo">
        <img src="https://avatars.githubusercontent.com/u/827993?s=72&u=17ad3b01b402b36d9424d6b4437561304616eb18&v=4" height="12" />
        <b>ParisNeo</b>
    </a></td><td>CEA</td><td>France</td><td>216</td><td>8</td></tr><tr><td>60</td><td><a href="https://github.com/tchiotludo">
        <img src="https://avatars.githubusercontent.com/u/2064609?s=72&u=ef0a161d66d8b92467d136b7f2cc50527907a3ab&v=4" height="12" />
        <b>tchiotludo</b>
    </a></td><td>@kestra-io</td><td>Lille, France</td><td>196</td><td>8</td></tr><tr><td>61</td><td><a href="https://github.com/mykiwi">
        <img src="https://avatars.githubusercontent.com/u/334432?s=72&u=8e0e09ca184a8891c4731401f39edba0895834c2&v=4" height="12" />
        <b>mykiwi</b>
    </a></td><td>open to work</td><td>Nantes, France</td><td>193</td><td>8</td></tr><tr><td>62</td><td><a href="https://github.com/fabpot">
        <img src="https://avatars.githubusercontent.com/u/47313?s=72&u=7ba05204271a726f8642ac15864e2f361b5c0198&v=4" height="12" />
        <b>fabpot</b>
    </a></td><td>Symfony/Platform.sh/Blackfire</td><td>Paris, France</td><td>13.24K</td><td>7</td></tr><tr><td>63</td><td><a href="https://github.com/posva">
        <img src="https://avatars.githubusercontent.com/u/664177?s=72&u=ded1e1cffd1d5620c9d9fb1a1c966c17204d6bef&v=4" height="12" />
        <b>posva</b>
    </a></td><td>Freelance</td><td>Paris </td><td>5.83K</td><td>7</td></tr><tr><td>64</td><td><a href="https://github.com/ornicar">
        <img src="https://avatars.githubusercontent.com/u/140370?s=72&v=4" height="12" />
        <b>ornicar</b>
    </a></td><td>lichess.org</td><td>France</td><td>5.2K</td><td>7</td></tr><tr><td>65</td><td><a href="https://github.com/gregberge">
        <img src="https://avatars.githubusercontent.com/u/266302?s=72&u=7b1d8d84bfbaf6cf8b340896f3cea02da2669c46&v=4" height="12" />
        <b>gregberge</b>
    </a></td><td>Argos</td><td>Paris, France</td><td>1.98K</td><td>7</td></tr><tr><td>66</td><td><a href="https://github.com/emersion">
        <img src="https://avatars.githubusercontent.com/u/506932?s=72&u=04995169ac1851b91ca12b47f4862ded1b108765&v=4" height="12" />
        <b>emersion</b>
    </a></td><td>-</td><td>France</td><td>1.77K</td><td>7</td></tr><tr><td>67</td><td><a href="https://github.com/samber">
        <img src="https://avatars.githubusercontent.com/u/2951285?s=72&u=571c795227b4edbd29f027478346834f83a95076&v=4" height="12" />
        <b>samber</b>
    </a></td><td>@ScreebApp </td><td>Nantes (France)</td><td>1.35K</td><td>7</td></tr><tr><td>68</td><td><a href="https://github.com/agramfort">
        <img src="https://avatars.githubusercontent.com/u/161052?s=72&u=28620e0e14597ad721a7505cf486aaf5687aea66&v=4" height="12" />
        <b>agramfort</b>
    </a></td><td>Meta</td><td>Paris, France</td><td>1.3K</td><td>7</td></tr><tr><td>69</td><td><a href="https://github.com/revolunet">
        <img src="https://avatars.githubusercontent.com/u/124937?s=72&u=76a0f640740597328fdfb6468cc32d823af42bff&v=4" height="12" />
        <b>revolunet</b>
    </a></td><td>@BetaGouv </td><td>Paris, France</td><td>1.06K</td><td>7</td></tr><tr><td>70</td><td><a href="https://github.com/MaxHalford">
        <img src="https://avatars.githubusercontent.com/u/8095957?s=72&u=5cced639da86554f497786d41134a5883db6ff62&v=4" height="12" />
        <b>MaxHalford</b>
    </a></td><td>@carbonfact</td><td>France</td><td>995</td><td>7</td></tr><tr><td>71</td><td><a href="https://github.com/darrachequesne">
        <img src="https://avatars.githubusercontent.com/u/13031701?s=72&u=f4865fe7225a33a7c187123c47ed8254eba8d40a&v=4" height="12" />
        <b>darrachequesne</b>
    </a></td><td>-</td><td>Lille, France</td><td>548</td><td>7</td></tr><tr><td>72</td><td><a href="https://github.com/lhoestq">
        <img src="https://avatars.githubusercontent.com/u/42851186?s=72&u=441d4b0bdf0915a4b1369e79b5b77092b8670928&v=4" height="12" />
        <b>lhoestq</b>
    </a></td><td>Hugging Face</td><td>Paris</td><td>409</td><td>7</td></tr><tr><td>73</td><td><a href="https://github.com/kartben">
        <img src="https://avatars.githubusercontent.com/u/128251?s=72&v=4" height="12" />
        <b>kartben</b>
    </a></td><td>-</td><td>Toulouse, France</td><td>368</td><td>7</td></tr><tr><td>74</td><td><a href="https://github.com/innocenzi">
        <img src="https://avatars.githubusercontent.com/u/16060559?s=72&u=cf061757407ef529958cf24bac8d2f699ad6e6ed&v=4" height="12" />
        <b>innocenzi</b>
    </a></td><td>Developer @JetflyAviation</td><td>France</td><td>354</td><td>7</td></tr><tr><td>75</td><td><a href="https://github.com/adrien2p">
        <img src="https://avatars.githubusercontent.com/u/25098370?s=72&u=366d976be7b156815c6712f7f8ecf35b3d0ff06e&v=4" height="12" />
        <b>adrien2p</b>
    </a></td><td>Medusajs</td><td>Lyon (France)</td><td>340</td><td>7</td></tr><tr><td>76</td><td><a href="https://github.com/unixfox">
        <img src="https://avatars.githubusercontent.com/u/4016501?s=72&u=d113bfcd7a1bb996a29af9ace2c158a3c6289b40&v=4" height="12" />
        <b>unixfox</b>
    </a></td><td>-</td><td>Auvergne-Rhône-Alpes, France - Wallonia, Belgium</td><td>334</td><td>7</td></tr><tr><td>77</td><td><a href="https://github.com/mpromonet">
        <img src="https://avatars.githubusercontent.com/u/1367630?s=72&u=656527786957614d8cf8dec22644fe40dadbbe6f&v=4" height="12" />
        <b>mpromonet</b>
    </a></td><td>-</td><td>France</td><td>332</td><td>7</td></tr><tr><td>78</td><td><a href="https://github.com/cor3ntin">
        <img src="https://avatars.githubusercontent.com/u/1409019?s=72&v=4" height="12" />
        <b>cor3ntin</b>
    </a></td><td>-</td><td>Bordeaux, France</td><td>328</td><td>7</td></tr><tr><td>79</td><td><a href="https://github.com/mckenziearts">
        <img src="https://avatars.githubusercontent.com/u/14105989?s=72&u=9c230c3e470fd4ddbbec22005757893bfa61d3ef&v=4" height="12" />
        <b>mckenziearts</b>
    </a></td><td>@shopperlabs </td><td>Paris, France</td><td>327</td><td>7</td></tr><tr><td>80</td><td><a href="https://github.com/frankie567">
        <img src="https://avatars.githubusercontent.com/u/1144727?s=72&u=c159fe047727aedecbbeeaa96a1b03ceb9d39add&v=4" height="12" />
        <b>frankie567</b>
    </a></td><td>@polarsource</td><td>Lyon, France</td><td>300</td><td>7</td></tr><tr><td>81</td><td><a href="https://github.com/cjbrigato">
        <img src="https://avatars.githubusercontent.com/u/680049?s=72&u=6e6b734ff1dfac605b6a378098676d9abf18b33e&v=4" height="12" />
        <b>cjbrigato</b>
    </a></td><td>COLIN BRIGATO E.I.R.L.</td><td>Paris - France</td><td>279</td><td>7</td></tr><tr><td>82</td><td><a href="https://github.com/julien-deramond">
        <img src="https://avatars.githubusercontent.com/u/17381666?s=72&u=a9b71c0b77efa17719595a35f1d1c637c4ad63ac&v=4" height="12" />
        <b>julien-deramond</b>
    </a></td><td>Orange</td><td>Paris, France</td><td>273</td><td>7</td></tr><tr><td>83</td><td><a href="https://github.com/dubzzz">
        <img src="https://avatars.githubusercontent.com/u/5300235?s=72&u=283a572a5010b5350eee7168cf6ce1b566747903&v=4" height="12" />
        <b>dubzzz</b>
    </a></td><td>Pigment</td><td>Remote, France</td><td>262</td><td>7</td></tr><tr><td>84</td><td><a href="https://github.com/JeanMeche">
        <img src="https://avatars.githubusercontent.com/u/1300985?s=72&u=ba0f3dbc4cae44232ebf50bdd845bc98750fa42e&v=4" height="12" />
        <b>JeanMeche</b>
    </a></td><td>👀</td><td>Grenoble - France</td><td>259</td><td>7</td></tr><tr><td>85</td><td><a href="https://github.com/Illegal-Services">
        <img src="https://avatars.githubusercontent.com/u/62464560?s=72&u=d74835f40c35d390fb89037b72e1cd28040caa79&v=4" height="12" />
        <b>Illegal-Services</b>
    </a></td><td>IB_U_Z_Z_A_R_Dl</td><td>France</td><td>244</td><td>7</td></tr><tr><td>86</td><td><a href="https://github.com/marvinroger">
        <img src="https://avatars.githubusercontent.com/u/990773?s=72&u=1eadb64e486234988a873bc4bc1f7860618573db&v=4" height="12" />
        <b>marvinroger</b>
    </a></td><td>@orus-tech </td><td>Paris, France</td><td>234</td><td>7</td></tr><tr><td>87</td><td><a href="https://github.com/MattKetmo">
        <img src="https://avatars.githubusercontent.com/u/334996?s=72&u=2b06b452771518c77550e819cb6991bbe8866078&v=4" height="12" />
        <b>MattKetmo</b>
    </a></td><td>Kiln</td><td>Paris</td><td>209</td><td>7</td></tr><tr><td>88</td><td><a href="https://github.com/Romakita">
        <img src="https://avatars.githubusercontent.com/u/1763311?s=72&u=29dc6efc281f9b8c8de20eab797b894fed5e57d9&v=4" height="12" />
        <b>Romakita</b>
    </a></td><td>Zenika</td><td>Ile-de-france, France</td><td>199</td><td>7</td></tr><tr><td>89</td><td><a href="https://github.com/GromNaN">
        <img src="https://avatars.githubusercontent.com/u/400034?s=72&u=b92f9fbc757f5d361de7059b8e69a0eaac1164b5&v=4" height="12" />
        <b>GromNaN</b>
    </a></td><td>MongoDB</td><td>Rouen, France</td><td>198</td><td>7</td></tr><tr><td>90</td><td><a href="https://github.com/xavierlacot">
        <img src="https://avatars.githubusercontent.com/u/177293?s=72&v=4" height="12" />
        <b>xavierlacot</b>
    </a></td><td>JoliCode</td><td>Paris, France</td><td>197</td><td>7</td></tr><tr><td>91</td><td><a href="https://github.com/db0sch">
        <img src="https://avatars.githubusercontent.com/u/6984619?s=72&u=d4ae59c8252393b73c9afa30f4d28b564dc2c366&v=4" height="12" />
        <b>db0sch</b>
    </a></td><td>@lewagon </td><td>Paris, France</td><td>191</td><td>7</td></tr><tr><td>92</td><td><a href="https://github.com/angelozerr">
        <img src="https://avatars.githubusercontent.com/u/1932211?s=72&v=4" height="12" />
        <b>angelozerr</b>
    </a></td><td>Red Hat</td><td>France</td><td>185</td><td>7</td></tr><tr><td>93</td><td><a href="https://github.com/dgarros">
        <img src="https://avatars.githubusercontent.com/u/304126?s=72&u=edb7dc39e4e8ad7604fa2c352f23907a7f09ecd8&v=4" height="12" />
        <b>dgarros</b>
    </a></td><td>@opsmill</td><td>Annecy, France</td><td>182</td><td>7</td></tr><tr><td>94</td><td><a href="https://github.com/soywod">
        <img src="https://avatars.githubusercontent.com/u/10437171?s=72&u=4020552802c51ac1fb793051cd7685d10d0c4a04&v=4" height="12" />
        <b>soywod</b>
    </a></td><td>-</td><td>France</td><td>182</td><td>7</td></tr><tr><td>95</td><td><a href="https://github.com/jedisct1">
        <img src="https://avatars.githubusercontent.com/u/124872?s=72&v=4" height="12" />
        <b>jedisct1</b>
    </a></td><td>-</td><td>France</td><td>3.78K</td><td>6</td></tr><tr><td>96</td><td><a href="https://github.com/LysandreJik">
        <img src="https://avatars.githubusercontent.com/u/30755778?s=72&u=2a8797be4b4a8632bdaebcadc62a153b0ea112d3&v=4" height="12" />
        <b>LysandreJik</b>
    </a></td><td>Hugging Face</td><td>Paris</td><td>1.51K</td><td>6</td></tr><tr><td>97</td><td><a href="https://github.com/marcomiduri">
        <img src="https://avatars.githubusercontent.com/u/51230146?s=72&u=df59a119b037e9f0c8a4d186c6b650c3a601ff23&v=4" height="12" />
        <b>marcomiduri</b>
    </a></td><td>Webpoint Solutions, LLC</td><td>Paris, FR</td><td>500</td><td>6</td></tr><tr><td>98</td><td><a href="https://github.com/KtorZ">
        <img src="https://avatars.githubusercontent.com/u/5680256?s=72&u=020eb2bc68211d32c1691695b6ab22ad55478501&v=4" height="12" />
        <b>KtorZ</b>
    </a></td><td>@cardano-foundation</td><td>Toulouse</td><td>420</td><td>6</td></tr><tr><td>99</td><td><a href="https://github.com/thbar">
        <img src="https://avatars.githubusercontent.com/u/10141?s=72&u=41c21f0cc2eb57c17dd9533bebad9c4d34bae89d&v=4" height="12" />
        <b>thbar</b>
    </a></td><td>LoGeek (ETL, data processing, SaaS products, RubyOnRails, Elixir)</td><td>Saintes, France</td><td>267</td><td>6</td></tr><tr><td>100</td><td><a href="https://github.com/ggrossetie">
        <img src="https://avatars.githubusercontent.com/u/333276?s=72&u=9087930b05d462a706f06a9ce6bf0c8289d8069d&v=4" height="12" />
        <b>ggrossetie</b>
    </a></td><td>Yuzu tech</td><td>Lyon</td><td>219</td><td>6</td></tr><tr><td>101</td><td><a href="https://github.com/deepnight">
        <img src="https://avatars.githubusercontent.com/u/1671695?s=72&u=36316a70a49497f680e2efef9e8b48623178cdfb&v=4" height="12" />
        <b>deepnight</b>
    </a></td><td>Deepnight Games</td><td>Bordeaux, France</td><td>1.41K</td><td>5</td></tr><tr><td>102</td><td><a href="https://github.com/mnapoli">
        <img src="https://avatars.githubusercontent.com/u/720328?s=72&u=6681f9f4affebc487fbe00133f743f2551e9523c&v=4" height="12" />
        <b>mnapoli</b>
    </a></td><td>@brefphp </td><td>Lyon, France</td><td>1.41K</td><td>5</td></tr><tr><td>103</td><td><a href="https://github.com/ldez">
        <img src="https://avatars.githubusercontent.com/u/5674651?s=72&u=45f0e097891f1e7e0c45c5224dcce11c867038af&v=4" height="12" />
        <b>ldez</b>
    </a></td><td>-</td><td>France</td><td>534</td><td>5</td></tr><tr><td>104</td><td><a href="https://github.com/simongravelle">
        <img src="https://avatars.githubusercontent.com/u/43388542?s=72&u=16bc101821423023268d74e239583cbcc21b3881&v=4" height="12" />
        <b>simongravelle</b>
    </a></td><td>LIPhy</td><td>Grenoble</td><td>488</td><td>5</td></tr><tr><td>105</td><td><a href="https://github.com/clementroche">
        <img src="https://avatars.githubusercontent.com/u/28361254?s=72&u=617b111ad79a35e545994bdc651eb7967ae72f10&v=4" height="12" />
        <b>clementroche</b>
    </a></td><td>@darkroomengineering</td><td>France</td><td>315</td><td>5</td></tr><tr><td>106</td><td><a href="https://github.com/NelleV">
        <img src="https://avatars.githubusercontent.com/u/184798?s=72&v=4" height="12" />
        <b>NelleV</b>
    </a></td><td>TIMC</td><td>Grenoble</td><td>259</td><td>5</td></tr><tr><td>107</td><td><a href="https://github.com/NTag">
        <img src="https://avatars.githubusercontent.com/u/906276?s=72&u=c686367f063914cb3978840fc52a44199bdb8639&v=4" height="12" />
        <b>NTag</b>
    </a></td><td>-</td><td>Paris</td><td>239</td><td>5</td></tr><tr><td>108</td><td><a href="https://github.com/thierryvolpiatto">
        <img src="https://avatars.githubusercontent.com/u/1533939?s=72&v=4" height="12" />
        <b>thierryvolpiatto</b>
    </a></td><td>@emacs-helm </td><td>France</td><td>217</td><td>5</td></tr><tr><td>109</td><td><a href="https://github.com/tdimnet">
        <img src="https://avatars.githubusercontent.com/u/9935925?s=72&u=90d6020b1e99960d5cc4ad0517bf6e6e96907d6f&v=4" height="12" />
        <b>tdimnet</b>
    </a></td><td>@nx-academy, @EdenSchoolFrance</td><td>Paris, France</td><td>207</td><td>5</td></tr><tr><td>110</td><td><a href="https://github.com/nfroidure">
        <img src="https://avatars.githubusercontent.com/u/229633?s=72&v=4" height="12" />
        <b>nfroidure</b>
    </a></td><td>@DiagRAMS-Technologies</td><td>Lille - Nord Pas-de-Calais</td><td>201</td><td>5</td></tr><tr><td>111</td><td><a href="https://github.com/Charles-Chrismann">
        <img src="https://avatars.githubusercontent.com/u/78157563?s=72&u=fc17705222fa92912b9b8ad556101a0608308911&v=4" height="12" />
        <b>Charles-Chrismann</b>
    </a></td><td>Institut de l'Internet et du Multimédia (IIM)</td><td>Paris, La Défense</td><td>10.19K</td><td>4</td></tr><tr><td>112</td><td><a href="https://github.com/mbeaudru">
        <img src="https://avatars.githubusercontent.com/u/8942633?s=72&u=2612af9dfc44e2d045b0a67184b916f8d4efc802&v=4" height="12" />
        <b>mbeaudru</b>
    </a></td><td>Datadog</td><td>Paris</td><td>808</td><td>4</td></tr><tr><td>113</td><td><a href="https://github.com/vinayak-mehta">
        <img src="https://avatars.githubusercontent.com/u/4329421?s=72&u=9cf48f14e306d48adfda27ae7a0bbd7d7533b1d2&v=4" height="12" />
        <b>vinayak-mehta</b>
    </a></td><td>-</td><td>Paris</td><td>515</td><td>4</td></tr><tr><td>114</td><td><a href="https://github.com/TBoileau">
        <img src="https://avatars.githubusercontent.com/u/10845781?s=72&u=04d4799c25b80cde73b93a6af187c1531336f1c0&v=4" height="12" />
        <b>TBoileau</b>
    </a></td><td>Yousign</td><td>Nice, France</td><td>421</td><td>4</td></tr><tr><td>115</td><td><a href="https://github.com/Guilouz">
        <img src="https://avatars.githubusercontent.com/u/12702322?s=72&u=f6da23f5fd8d72ed72413e5bc8b9b2c170670783&v=4" height="12" />
        <b>Guilouz</b>
    </a></td><td>-</td><td>France</td><td>402</td><td>4</td></tr><tr><td>116</td><td><a href="https://github.com/vadimkantorov">
        <img src="https://avatars.githubusercontent.com/u/1041752?s=72&u=51c5c08f0f9be5206c4d5d6b3d09492bb6f9aa69&v=4" height="12" />
        <b>vadimkantorov</b>
    </a></td><td>INRIA</td><td>Paris, France</td><td>312</td><td>4</td></tr><tr><td>117</td><td><a href="https://github.com/ysbaddaden">
        <img src="https://avatars.githubusercontent.com/u/47380?s=72&v=4" height="12" />
        <b>ysbaddaden</b>
    </a></td><td>Ruby, JavaScript, Crystal</td><td>Nogent sur Oise, France</td><td>252</td><td>4</td></tr><tr><td>118</td><td><a href="https://github.com/noirbizarre">
        <img src="https://avatars.githubusercontent.com/u/15725?s=72&u=24aa7a44ae7c957043e6a39675c3546d2f925a46&v=4" height="12" />
        <b>noirbizarre</b>
    </a></td><td>@apihackers @LedgerHQ </td><td>Paris, France</td><td>237</td><td>4</td></tr><tr><td>119</td><td><a href="https://github.com/mockersf">
        <img src="https://avatars.githubusercontent.com/u/8672791?s=72&u=6350847888b0006d335bc98ca32a5359389d26b5&v=4" height="12" />
        <b>mockersf</b>
    </a></td><td>-</td><td>France</td><td>233</td><td>4</td></tr><tr><td>120</td><td><a href="https://github.com/xldenis">
        <img src="https://avatars.githubusercontent.com/u/451373?s=72&u=93fc9c79104404fbb0f657cdf17e89f301ae3d77&v=4" height="12" />
        <b>xldenis</b>
    </a></td><td>ETHZ</td><td>Zurich/Paris</td><td>220</td><td>4</td></tr><tr><td>121</td><td><a href="https://github.com/AdilZouitine">
        <img src="https://avatars.githubusercontent.com/u/24889239?s=72&u=f73d19686baca7decb0958da8f1f3836d04c641f&v=4" height="12" />
        <b>AdilZouitine</b>
    </a></td><td>-</td><td>Toulouse, France</td><td>213</td><td>4</td></tr><tr><td>122</td><td><a href="https://github.com/Julow">
        <img src="https://avatars.githubusercontent.com/u/2310568?s=72&v=4" height="12" />
        <b>Julow</b>
    </a></td><td>@tarides</td><td>France</td><td>195</td><td>4</td></tr><tr><td>123</td><td><a href="https://github.com/progval">
        <img src="https://avatars.githubusercontent.com/u/406946?s=72&v=4" height="12" />
        <b>progval</b>
    </a></td><td>@SoftwareHeritage </td><td>Île de France</td><td>181</td><td>4</td></tr><tr><td>124</td><td><a href="https://github.com/merveenoyan">
        <img src="https://avatars.githubusercontent.com/u/53175384?s=72&u=ab2077caabaaafab06be2b51c5e77f7e7da72050&v=4" height="12" />
        <b>merveenoyan</b>
    </a></td><td>@huggingface </td><td>Paris</td><td>3.09K</td><td>3</td></tr><tr><td>125</td><td><a href="https://github.com/aloisdeniel">
        <img src="https://avatars.githubusercontent.com/u/7687231?s=72&u=1e2ea5ef9ef2b7ec209404d5f7abee3b43259823&v=4" height="12" />
        <b>aloisdeniel</b>
    </a></td><td>Freelance</td><td>Rennes, France</td><td>1.23K</td><td>3</td></tr><tr><td>126</td><td><a href="https://github.com/vincentbernat">
        <img src="https://avatars.githubusercontent.com/u/631446?s=72&v=4" height="12" />
        <b>vincentbernat</b>
    </a></td><td>Free</td><td>Paris, France</td><td>1.1K</td><td>3</td></tr><tr><td>127</td><td><a href="https://github.com/FGRibreau">
        <img src="https://avatars.githubusercontent.com/u/138050?s=72&u=09ca579f8ce5f86026aa0d8858432fe77719eee7&v=4" height="12" />
        <b>FGRibreau</b>
    </a></td><td>@nobullshitbooks @netwo-io @hook0 @image-charts  @killbugtoday @mailpopin  / Sold @Redsmin @bringr</td><td>France</td><td>748</td><td>3</td></tr><tr><td>128</td><td><a href="https://github.com/chalasr">
        <img src="https://avatars.githubusercontent.com/u/7502063?s=72&u=56b8ba0944e917bd324d87ec7c2074665a0e699d&v=4" height="12" />
        <b>chalasr</b>
    </a></td><td>@bakslashHQ</td><td>Lyon, France</td><td>545</td><td>3</td></tr><tr><td>129</td><td><a href="https://github.com/Canop">
        <img src="https://avatars.githubusercontent.com/u/617006?s=72&u=d37ffb41ad4ef32e831e315ef5316b51e57c2597&v=4" height="12" />
        <b>Canop</b>
    </a></td><td>-</td><td>Lyon, France</td><td>542</td><td>3</td></tr><tr><td>130</td><td><a href="https://github.com/hadrienj">
        <img src="https://avatars.githubusercontent.com/u/6381368?s=72&u=57573c80d86dd1522e0ad45670004882617f47a3&v=4" height="12" />
        <b>hadrienj</b>
    </a></td><td>-</td><td>Paris, France</td><td>477</td><td>3</td></tr><tr><td>131</td><td><a href="https://github.com/TerrorJack">
        <img src="https://avatars.githubusercontent.com/u/3889585?s=72&u=9f17aa6e8c5e916757801a1852b271f4a307c722&v=4" height="12" />
        <b>TerrorJack</b>
    </a></td><td>@tweag</td><td>Paris</td><td>443</td><td>3</td></tr><tr><td>132</td><td><a href="https://github.com/luislavena">
        <img src="https://avatars.githubusercontent.com/u/4182?s=72&u=baab980311df526d41631de7362837955f474076&v=4" height="12" />
        <b>luislavena</b>
    </a></td><td>@area17 </td><td>Paris, France</td><td>405</td><td>3</td></tr><tr><td>133</td><td><a href="https://github.com/cyyynthia">
        <img src="https://avatars.githubusercontent.com/u/9999055?s=72&u=c2ca323c4b12e47ae04f433c0dd118f252c9c636&v=4" height="12" />
        <b>cyyynthia</b>
    </a></td><td>@Borkenware</td><td>Toulouse, France</td><td>382</td><td>3</td></tr><tr><td>134</td><td><a href="https://github.com/bnjbvr">
        <img src="https://avatars.githubusercontent.com/u/1180019?s=72&v=4" height="12" />
        <b>bnjbvr</b>
    </a></td><td>@element-hq </td><td>Brittany, France</td><td>374</td><td>3</td></tr><tr><td>135</td><td><a href="https://github.com/alikaragoz">
        <img src="https://avatars.githubusercontent.com/u/1283783?s=72&u=209d0bab8154866b06293080865a6345872a6efd&v=4" height="12" />
        <b>alikaragoz</b>
    </a></td><td>@Photoroom</td><td>Angers, France</td><td>363</td><td>3</td></tr><tr><td>136</td><td><a href="https://github.com/Julien-R44">
        <img src="https://avatars.githubusercontent.com/u/8337858?s=72&u=51dca49c82393b452f05ee4aa4129a659ef47e34&v=4" height="12" />
        <b>Julien-R44</b>
    </a></td><td>Freelancing </td><td>France</td><td>359</td><td>3</td></tr><tr><td>137</td><td><a href="https://github.com/felhix">
        <img src="https://avatars.githubusercontent.com/u/14750029?s=72&u=887874b08f944626a77d4d5f0f9b0716b3b376c3&v=4" height="12" />
        <b>felhix</b>
    </a></td><td>@TheHackingProject </td><td>Paris, France</td><td>318</td><td>3</td></tr><tr><td>138</td><td><a href="https://github.com/ccamel">
        <img src="https://avatars.githubusercontent.com/u/9574336?s=72&u=5d1de8c7eaf3289162c88956747465a8ed570d66&v=4" height="12" />
        <b>ccamel</b>
    </a></td><td>@axone-protocol</td><td>Toulouse</td><td>315</td><td>3</td></tr><tr><td>139</td><td><a href="https://github.com/pascalgrimaud">
        <img src="https://avatars.githubusercontent.com/u/9156882?s=72&u=048a3f914bddbb33320df8ec2c7cc22c26f22646&v=4" height="12" />
        <b>pascalgrimaud</b>
    </a></td><td>Freelance</td><td>Lyon, France</td><td>272</td><td>3</td></tr><tr><td>140</td><td><a href="https://github.com/baptadn">
        <img src="https://avatars.githubusercontent.com/u/1102595?s=72&u=449ce37c0361651279198ca5e178e3410b7d200f&v=4" height="12" />
        <b>baptadn</b>
    </a></td><td>Premier Octet</td><td>Paris</td><td>253</td><td>3</td></tr><tr><td>141</td><td><a href="https://github.com/abique">
        <img src="https://avatars.githubusercontent.com/u/31200?s=72&u=19e037bfe18806c410947eba3bab6d8e70c4654d&v=4" height="12" />
        <b>abique</b>
    </a></td><td>@bitwig </td><td>Sisteron, France</td><td>253</td><td>3</td></tr><tr><td>142</td><td><a href="https://github.com/aiekick">
        <img src="https://avatars.githubusercontent.com/u/1434736?s=72&u=41204d71f1aa785ef74f57c0987bc3ae7c32f1f7&v=4" height="12" />
        <b>aiekick</b>
    </a></td><td>-</td><td>France</td><td>250</td><td>3</td></tr><tr><td>143</td><td><a href="https://github.com/travier">
        <img src="https://avatars.githubusercontent.com/u/64795720?s=72&u=7f7c094b847bc8dc140f2e5aaa44dcd6b70a9486&v=4" height="12" />
        <b>travier</b>
    </a></td><td>Red Hat</td><td>Paris, France</td><td>224</td><td>3</td></tr><tr><td>144</td><td><a href="https://github.com/geromegrignon">
        <img src="https://avatars.githubusercontent.com/u/32737308?s=72&u=65991e3f02f05e572ae435e24659ba65ed5d6005&v=4" height="12" />
        <b>geromegrignon</b>
    </a></td><td>Lucca</td><td>France</td><td>222</td><td>3</td></tr><tr><td>145</td><td><a href="https://github.com/sebastiencs">
        <img src="https://avatars.githubusercontent.com/u/5273820?s=72&u=c3b0a4c7ab647e2e41164b3489f44d0d931193e0&v=4" height="12" />
        <b>sebastiencs</b>
    </a></td><td>-</td><td>Paris, France</td><td>198</td><td>3</td></tr><tr><td>146</td><td><a href="https://github.com/laurentkempe">
        <img src="https://avatars.githubusercontent.com/u/272612?s=72&u=d5a602c4b87d93c5497e13c2badc0f5d6f895ac4&v=4" height="12" />
        <b>laurentkempe</b>
    </a></td><td>@TechHeadBrothers @Innoveo </td><td>Illzach, France</td><td>189</td><td>3</td></tr><tr><td>147</td><td><a href="https://github.com/busybox11">
        <img src="https://avatars.githubusercontent.com/u/29630035?s=72&u=e206de0c3ec13b38abb0c21945b2545a3a1e21e1&v=4" height="12" />
        <b>busybox11</b>
    </a></td><td>Satelia</td><td>Bordeaux, France</td><td>189</td><td>3</td></tr><tr><td>148</td><td><a href="https://github.com/moufmouf">
        <img src="https://avatars.githubusercontent.com/u/1290952?s=72&v=4" height="12" />
        <b>moufmouf</b>
    </a></td><td>@thecodingmachine</td><td>Paris</td><td>188</td><td>3</td></tr><tr><td>149</td><td><a href="https://github.com/touilleMan">
        <img src="https://avatars.githubusercontent.com/u/3187637?s=72&v=4" height="12" />
        <b>touilleMan</b>
    </a></td><td>Scille</td><td>Grenoble, France</td><td>187</td><td>3</td></tr><tr><td>150</td><td><a href="https://github.com/mvila">
        <img src="https://avatars.githubusercontent.com/u/381671?s=72&u=8e4217249b4a9d825b0312cb3183ebb386a4be51&v=4" height="12" />
        <b>mvila</b>
    </a></td><td>@1placeinc</td><td>France</td><td>182</td><td>3</td></tr><tr><td>151</td><td><a href="https://github.com/Solido">
        <img src="https://avatars.githubusercontent.com/u/1295961?s=72&u=b85eaeb98c4c24aeec8046b7839a5ddf2d504289&v=4" height="12" />
        <b>Solido</b>
    </a></td><td>-</td><td>France, Bordeaux</td><td>2.91K</td><td>2</td></tr><tr><td>152</td><td><a href="https://github.com/slorber">
        <img src="https://avatars.githubusercontent.com/u/749374?s=72&u=d966ea75548708c18bda3d4d2acca2817169639e&v=4" height="12" />
        <b>slorber</b>
    </a></td><td>This Week In React</td><td>Paris</td><td>1.8K</td><td>2</td></tr><tr><td>153</td><td><a href="https://github.com/aaugustin">
        <img src="https://avatars.githubusercontent.com/u/788910?s=72&u=3a29db80be82d08a9068cfb35898e8a8179920ee&v=4" height="12" />
        <b>aaugustin</b>
    </a></td><td>@qonto</td><td>Paris, France</td><td>1.28K</td><td>2</td></tr><tr><td>154</td><td><a href="https://github.com/groue">
        <img src="https://avatars.githubusercontent.com/u/54219?s=72&u=73ae5871c4a96c72fae2650b267d578440e38983&v=4" height="12" />
        <b>groue</b>
    </a></td><td>Pierlis</td><td>Paris, France</td><td>1.09K</td><td>2</td></tr><tr><td>155</td><td><a href="https://github.com/thomasync">
        <img src="https://avatars.githubusercontent.com/u/12927290?s=72&u=46e5c515789397dc2f91f4fe0a5cfa3f9ea40177&v=4" height="12" />
        <b>thomasync</b>
    </a></td><td>-</td><td>Montpellier, France</td><td>1.03K</td><td>2</td></tr><tr><td>156</td><td><a href="https://github.com/Zylann">
        <img src="https://avatars.githubusercontent.com/u/1311555?s=72&u=98e85e0c6d8599c7de140000f240417c9f512cea&v=4" height="12" />
        <b>Zylann</b>
    </a></td><td>-</td><td>France</td><td>656</td><td>2</td></tr><tr><td>157</td><td><a href="https://github.com/gildas-lormeau">
        <img src="https://avatars.githubusercontent.com/u/396787?s=72&u=9c2aeab0c23cb368b4ae3df9e17bc1ba9d8a51ce&v=4" height="12" />
        <b>gildas-lormeau</b>
    </a></td><td>Capsule Code</td><td>Rennes, France</td><td>630</td><td>2</td></tr><tr><td>158</td><td><a href="https://github.com/ayamflow">
        <img src="https://avatars.githubusercontent.com/u/1998991?s=72&u=1b9615af6920665b4830647322d632de72f403ae&v=4" height="12" />
        <b>ayamflow</b>
    </a></td><td>-</td><td>Nantes, France</td><td>612</td><td>2</td></tr><tr><td>159</td><td><a href="https://github.com/Wenzel">
        <img src="https://avatars.githubusercontent.com/u/964610?s=72&u=f244bab6b14967638a88cef92752379e64b15996&v=4" height="12" />
        <b>Wenzel</b>
    </a></td><td>-</td><td>Paris, France</td><td>512</td><td>2</td></tr><tr><td>160</td><td><a href="https://github.com/LilaRest">
        <img src="https://avatars.githubusercontent.com/u/48853371?s=72&u=69566a79698e6f36c9afc03c3045d8d21ec48ba4&v=4" height="12" />
        <b>LilaRest</b>
    </a></td><td>@MeetVisitors @StudioR-eth</td><td>France</td><td>494</td><td>2</td></tr><tr><td>161</td><td><a href="https://github.com/tobozo">
        <img src="https://avatars.githubusercontent.com/u/1893754?s=72&u=abeb81f7fd64a894c9749afc1e54c823e872c254&v=4" height="12" />
        <b>tobozo</b>
    </a></td><td>-</td><td>Paris, France </td><td>414</td><td>2</td></tr><tr><td>162</td><td><a href="https://github.com/XenocodeRCE">
        <img src="https://avatars.githubusercontent.com/u/4918142?s=72&u=04e5e74f4dfc5c163795e6d338c76b68ef76a875&v=4" height="12" />
        <b>XenocodeRCE</b>
    </a></td><td>-</td><td>France</td><td>408</td><td>2</td></tr><tr><td>163</td><td><a href="https://github.com/pchaigno">
        <img src="https://avatars.githubusercontent.com/u/1764210?s=72&v=4" height="12" />
        <b>pchaigno</b>
    </a></td><td>Isovalent</td><td>Rennes, France</td><td>382</td><td>2</td></tr><tr><td>164</td><td><a href="https://github.com/s4cha">
        <img src="https://avatars.githubusercontent.com/u/1812953?s=72&u=0da4e0346444bec1d56b3c90eec5787ce94a32bc&v=4" height="12" />
        <b>s4cha</b>
    </a></td><td>-</td><td>Bordeaux, France</td><td>346</td><td>2</td></tr><tr><td>165</td><td><a href="https://github.com/Tk-Glitch">
        <img src="https://avatars.githubusercontent.com/u/741977?s=72&u=71e298c312c17a9a07c1c439e25199ab89e77045&v=4" height="12" />
        <b>Tk-Glitch</b>
    </a></td><td>-</td><td>France</td><td>345</td><td>2</td></tr><tr><td>166</td><td><a href="https://github.com/alexarchambault">
        <img src="https://avatars.githubusercontent.com/u/7063723?s=72&u=d5befca0ebfec0042dad7ef93973490eef750ff4&v=4" height="12" />
        <b>alexarchambault</b>
    </a></td><td>-</td><td>Paris</td><td>334</td><td>2</td></tr><tr><td>167</td><td><a href="https://github.com/HungryProton">
        <img src="https://avatars.githubusercontent.com/u/52043844?s=72&u=9a018a7316016546d7208a0d6289200e17a283bf&v=4" height="12" />
        <b>HungryProton</b>
    </a></td><td>-</td><td>France</td><td>330</td><td>2</td></tr><tr><td>168</td><td><a href="https://github.com/sebanc">
        <img src="https://avatars.githubusercontent.com/u/22224731?s=72&v=4" height="12" />
        <b>sebanc</b>
    </a></td><td>-</td><td>Paris, France</td><td>328</td><td>2</td></tr><tr><td>169</td><td><a href="https://github.com/yohanboniface">
        <img src="https://avatars.githubusercontent.com/u/146023?s=72&v=4" height="12" />
        <b>yohanboniface</b>
    </a></td><td>Enix</td><td>France</td><td>322</td><td>2</td></tr><tr><td>170</td><td><a href="https://github.com/MscrmTools">
        <img src="https://avatars.githubusercontent.com/u/10774317?s=72&u=c51bef29ab478bfde1aafd00404de395cfcf5c27&v=4" height="12" />
        <b>MscrmTools</b>
    </a></td><td>-</td><td>Nantes, France</td><td>310</td><td>2</td></tr><tr><td>171</td><td><a href="https://github.com/Tripouille">
        <img src="https://avatars.githubusercontent.com/u/49202412?s=72&u=76785d33c55894d68245685e62b1aa7ae5ed831a&v=4" height="12" />
        <b>Tripouille</b>
    </a></td><td>Au coin du fruit</td><td>France</td><td>308</td><td>2</td></tr><tr><td>172</td><td><a href="https://github.com/xvw">
        <img src="https://avatars.githubusercontent.com/u/5732466?s=72&u=e2da3651aae7faf29d3c54c4d7cf66d92f35f16e&v=4" height="12" />
        <b>xvw</b>
    </a></td><td>@funkywork, @tarides</td><td>Nantes</td><td>305</td><td>2</td></tr><tr><td>173</td><td><a href="https://github.com/peeweek">
        <img src="https://avatars.githubusercontent.com/u/4037271?s=72&u=798b17dcef0bba8e80e021ab04f4cd8990d2dca0&v=4" height="12" />
        <b>peeweek</b>
    </a></td><td>-</td><td>Paris</td><td>298</td><td>2</td></tr><tr><td>174</td><td><a href="https://github.com/gabrieldemarmiesse">
        <img src="https://avatars.githubusercontent.com/u/12891691?s=72&u=7f49c0407749c186e5df5e1cecb8b2daa47846e3&v=4" height="12" />
        <b>gabrieldemarmiesse</b>
    </a></td><td>-</td><td>Paris, France</td><td>291</td><td>2</td></tr><tr><td>175</td><td><a href="https://github.com/benjamincrozat">
        <img src="https://avatars.githubusercontent.com/u/3613731?s=72&v=4" height="12" />
        <b>benjamincrozat</b>
    </a></td><td>-</td><td>France</td><td>290</td><td>2</td></tr><tr><td>176</td><td><a href="https://github.com/nvuillam">
        <img src="https://avatars.githubusercontent.com/u/17500430?s=72&u=24ff06a935acf56fe06678874e2b297debb66fac&v=4" height="12" />
        <b>nvuillam</b>
    </a></td><td>Cloudity & OX Security</td><td>Paris, France</td><td>285</td><td>2</td></tr><tr><td>177</td><td><a href="https://github.com/alexis-jacq">
        <img src="https://avatars.githubusercontent.com/u/9195965?s=72&u=c0baa79377ae76f4c564cff78ec9b295953cc648&v=4" height="12" />
        <b>alexis-jacq</b>
    </a></td><td>Google</td><td>Paris</td><td>272</td><td>2</td></tr><tr><td>178</td><td><a href="https://github.com/Pierstoval">
        <img src="https://avatars.githubusercontent.com/u/3369266?s=72&u=cd40e98364c064016bdef62d5442d93c8b2a19a0&v=4" height="12" />
        <b>Pierstoval</b>
    </a></td><td>@Orbitaleio / @Orbitale - @StudioAgate</td><td>France</td><td>250</td><td>2</td></tr><tr><td>179</td><td><a href="https://github.com/corsonr">
        <img src="https://avatars.githubusercontent.com/u/1649788?s=72&u=36a376b200fd98e6100788c1ec39b3b7e912797a&v=4" height="12" />
        <b>corsonr</b>
    </a></td><td>-</td><td>France</td><td>247</td><td>2</td></tr><tr><td>180</td><td><a href="https://github.com/Keruspe">
        <img src="https://avatars.githubusercontent.com/u/222942?s=72&v=4" height="12" />
        <b>Keruspe</b>
    </a></td><td>Criteo</td><td>Nantes</td><td>245</td><td>2</td></tr><tr><td>181</td><td><a href="https://github.com/hai-vr">
        <img src="https://avatars.githubusercontent.com/u/60819407?s=72&u=b92c103e4def5b15e5883c9a2edd75e74aecbf90&v=4" height="12" />
        <b>hai-vr</b>
    </a></td><td>Haï ~ Sole proprietor</td><td>Paris, France</td><td>245</td><td>2</td></tr><tr><td>182</td><td><a href="https://github.com/darold">
        <img src="https://avatars.githubusercontent.com/u/538862?s=72&u=c7f0d89a00a8290d56d6168a3d1a7ab4be36f10d&v=4" height="12" />
        <b>darold</b>
    </a></td><td>-</td><td>France</td><td>244</td><td>2</td></tr><tr><td>183</td><td><a href="https://github.com/roblabla">
        <img src="https://avatars.githubusercontent.com/u/1069318?s=72&u=f270fc1cecf2076137002880491b4e25787de0e6&v=4" height="12" />
        <b>roblabla</b>
    </a></td><td>@Seed-Up </td><td>France, FR</td><td>229</td><td>2</td></tr><tr><td>184</td><td><a href="https://github.com/TheFrenchGhosty">
        <img src="https://avatars.githubusercontent.com/u/47571719?s=72&u=ae1807913bede5073ccb6adf33979a50e2c80db4&v=4" height="12" />
        <b>TheFrenchGhosty</b>
    </a></td><td>Currently Unemployed</td><td>Normandy, France</td><td>221</td><td>2</td></tr><tr><td>185</td><td><a href="https://github.com/ISSOtm">
        <img src="https://avatars.githubusercontent.com/u/15271137?s=72&u=e1646d5c0c78ac164e86bd5f171ca38bb10deb7c&v=4" height="12" />
        <b>ISSOtm</b>
    </a></td><td>Currently on a sabbatical</td><td>France, often close to a PC and a Game Boy</td><td>208</td><td>2</td></tr><tr><td>186</td><td><a href="https://github.com/jcarpent">
        <img src="https://avatars.githubusercontent.com/u/1567317?s=72&v=4" height="12" />
        <b>jcarpent</b>
    </a></td><td>Inria, Paris</td><td>Paris</td><td>206</td><td>2</td></tr><tr><td>187</td><td><a href="https://github.com/axeldelafosse">
        <img src="https://avatars.githubusercontent.com/u/10477267?s=72&u=0322ffa7017942defa4c6de7cdcd4d42b7d364e5&v=4" height="12" />
        <b>axeldelafosse</b>
    </a></td><td>-</td><td>Paris</td><td>201</td><td>2</td></tr><tr><td>188</td><td><a href="https://github.com/dgirardeau">
        <img src="https://avatars.githubusercontent.com/u/2735509?s=72&u=0456c0faa0f0cef7fe90cc74d5ae9bb8a19b6bf8&v=4" height="12" />
        <b>dgirardeau</b>
    </a></td><td>CloudCompare</td><td>France (Grenoble)</td><td>196</td><td>2</td></tr><tr><td>189</td><td><a href="https://github.com/pthom">
        <img src="https://avatars.githubusercontent.com/u/7694091?s=72&u=8e37f2e0c299a78d2f5eef74d483ebe55d01d6d2&v=4" height="12" />
        <b>pthom</b>
    </a></td><td>-</td><td>Paris</td><td>196</td><td>2</td></tr><tr><td>190</td><td><a href="https://github.com/antoinesd">
        <img src="https://avatars.githubusercontent.com/u/489817?s=72&u=e44b526ce690b0fbdffb1c95b4e20801a25e3847&v=4" height="12" />
        <b>antoinesd</b>
    </a></td><td>@SCIAM-FR </td><td>Paris, France</td><td>193</td><td>2</td></tr><tr><td>191</td><td><a href="https://github.com/damienalexandre">
        <img src="https://avatars.githubusercontent.com/u/225704?s=72&u=0db288d2431f6fd5962b41ea540dbd1299d0e955&v=4" height="12" />
        <b>damienalexandre</b>
    </a></td><td>JoliCode</td><td>Paris, France</td><td>190</td><td>2</td></tr><tr><td>192</td><td><a href="https://github.com/qgallouedec">
        <img src="https://avatars.githubusercontent.com/u/45557362?s=72&u=37cea872e44a4d597f3b9c899add7509044d9ef0&v=4" height="12" />
        <b>qgallouedec</b>
    </a></td><td>@huggingface</td><td>Lyon, France</td><td>190</td><td>2</td></tr><tr><td>193</td><td><a href="https://github.com/ssaunier">
        <img src="https://avatars.githubusercontent.com/u/414418?s=72&u=173c3eae211bc1b31534408ac062d917d0b6d162&v=4" height="12" />
        <b>ssaunier</b>
    </a></td><td>@lewagon</td><td>France</td><td>2.31K</td><td>1</td></tr><tr><td>194</td><td><a href="https://github.com/sdeleuze">
        <img src="https://avatars.githubusercontent.com/u/141109?s=72&u=f8043f7d49f1bc47c6891b0b6085e08cbc26dd61&v=4" height="12" />
        <b>sdeleuze</b>
    </a></td><td>Broadcom</td><td>Lyon</td><td>1.18K</td><td>1</td></tr><tr><td>195</td><td><a href="https://github.com/hadronized">
        <img src="https://avatars.githubusercontent.com/u/506592?s=72&u=bdd2a0502a6a0097f8db5d4601e64ab62cb86b96&v=4" height="12" />
        <b>hadronized</b>
    </a></td><td>@datadog </td><td>France</td><td>814</td><td>1</td></tr><tr><td>196</td><td><a href="https://github.com/rouault">
        <img src="https://avatars.githubusercontent.com/u/1192433?s=72&u=aebaf912a08a734156caf25b26ab78d1959f0ed5&v=4" height="12" />
        <b>rouault</b>
    </a></td><td>Spatialys</td><td>France</td><td>687</td><td>1</td></tr><tr><td>197</td><td><a href="https://github.com/LelouchFR">
        <img src="https://avatars.githubusercontent.com/u/75901978?s=72&u=e02a223c2f042f614bfa881e4f7c9771d88a4bb0&v=4" height="12" />
        <b>LelouchFR</b>
    </a></td><td>IUT Haguenau</td><td>France</td><td>343</td><td>1</td></tr><tr><td>198</td><td><a href="https://github.com/NiLuJe">
        <img src="https://avatars.githubusercontent.com/u/111974?s=72&v=4" height="12" />
        <b>NiLuJe</b>
    </a></td><td>-</td><td>Paris, France</td><td>290</td><td>1</td></tr><tr><td>199</td><td><a href="https://github.com/pablo-1610">
        <img src="https://avatars.githubusercontent.com/u/42814853?s=72&u=d314306d92e929c44d09727327440bd60febfdc4&v=4" height="12" />
        <b>pablo-1610</b>
    </a></td><td>-</td><td>Lille, France</td><td>290</td><td>1</td></tr><tr><td>200</td><td><a href="https://github.com/tericcabrel">
        <img src="https://avatars.githubusercontent.com/u/16793854?s=72&u=6d5d3ea9511adfc9486812b28dfa3baededf6680&v=4" height="12" />
        <b>tericcabrel</b>
    </a></td><td>@payfit</td><td>Paris - France</td><td>246</td><td>1</td></tr>
    </tbody>
</table>

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
-   Have one of `France,Paris,Marseille,Lyon,Bordeaux,Toulouse,Strasbourg,Nice,Nantes,Montpellier,Lille` in your profile location. [Ask to add a city name if you think it's missing.](https://github.com/7PH/github-top-users/issues/new).
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
        <tr><td>🥇</td><td><a href="https://github.com/solygambas">
        <img src="https://avatars.githubusercontent.com/u/51904909?s=72&u=8b618cebbc76985e16a93b1ac34e80b5f4a80a60&v=4" height="12" />
        <b>Solygambas</b>
    </a></td><td>Freelancer</td><td>Montpellier, France</td><td>315</td><td>1.54K</td></tr><tr><td>🥈</td><td><a href="https://github.com/rozierguillaume">
        <img src="https://avatars.githubusercontent.com/u/22763678?s=72&u=f10c1d50d6f9ce7ed6c7d64a767c02911df19cf4&v=4" height="12" />
        <b>Guillaume Rozier</b>
    </a></td><td>-</td><td>Paris</td><td>333</td><td>920</td></tr><tr><td>🥉</td><td><a href="https://github.com/Caceresenzo">
        <img src="https://avatars.githubusercontent.com/u/7386242?s=72&u=17d4617bb086732fd4da9287942494386d06ebb3&v=4" height="12" />
        <b>Enzo Caceres</b>
    </a></td><td>-</td><td>France</td><td>167</td><td>763</td></tr><tr><td>4</td><td><a href="https://github.com/bloodyowl">
        <img src="https://avatars.githubusercontent.com/u/1688645?s=72&u=7f12174aeae34c99861918836ef527b7fd927101&v=4" height="12" />
        <b>Matthias Le Brun</b>
    </a></td><td>@swan-io</td><td>Paris, France</td><td>391</td><td>700</td></tr><tr><td>5</td><td><a href="https://github.com/MoOx">
        <img src="https://avatars.githubusercontent.com/u/157534?s=72&u=399d4103e3bcf74bb9ef02eb5fe5da40dc90d2db&v=4" height="12" />
        <b>Max Thirouin</b>
    </a></td><td>Freelance at MoOx.io</td><td>Toulouse, France</td><td>1.22K</td><td>555</td></tr><tr><td>6</td><td><a href="https://github.com/Haroenv">
        <img src="https://avatars.githubusercontent.com/u/6270048?s=72&u=767b8fde5c473100da40c50fd2f7c2df139c8d48&v=4" height="12" />
        <b>Haroen Viaene</b>
    </a></td><td>@algolia</td><td>Paris, France</td><td>536</td><td>531</td></tr><tr><td>7</td><td><a href="https://github.com/stephrobert">
        <img src="https://avatars.githubusercontent.com/u/681788?s=72&u=cda76428fe4d06957a063238e1dcc1d4c4ae2cf6&v=4" height="12" />
        <b>Stéphane ROBERT</b>
    </a></td><td>Adlere</td><td>Lille</td><td>218</td><td>460</td></tr><tr><td>8</td><td><a href="https://github.com/innocenzi">
        <img src="https://avatars.githubusercontent.com/u/16060559?s=72&u=cf061757407ef529958cf24bac8d2f699ad6e6ed&v=4" height="12" />
        <b>Enzo Innocenzi</b>
    </a></td><td>Developer @JetflyAviation</td><td>France</td><td>312</td><td>405</td></tr><tr><td>9</td><td><a href="https://github.com/imath">
        <img src="https://avatars.githubusercontent.com/u/1834524?s=72&v=4" height="12" />
        <b>imath</b>
    </a></td><td>-</td><td>Paris</td><td>170</td><td>399</td></tr><tr><td>10</td><td><a href="https://github.com/Progi1984">
        <img src="https://avatars.githubusercontent.com/u/1533248?s=72&u=096bead2eab90e4795096b7d518583223dd34be6&v=4" height="12" />
        <b>Progi1984</b>
    </a></td><td>@PrestaShopCorp </td><td>Rennes, France</td><td>207</td><td>347</td></tr><tr><td>11</td><td><a href="https://github.com/FGRibreau">
        <img src="https://avatars.githubusercontent.com/u/138050?s=72&u=a3ba0d324f400f6497eca4a3d273f5020a4c7b31&v=4" height="12" />
        <b>Francois-Guillaume Ribreau</b>
    </a></td><td>@nobullshitbooks @netwo-io @hook0 @image-charts  @killbugtoday @mailpopin  / Sold @Redsmin @bringr</td><td>France</td><td>721</td><td>293</td></tr><tr><td>12</td><td><a href="https://github.com/nhoizey">
        <img src="https://avatars.githubusercontent.com/u/78213?s=72&v=4" height="12" />
        <b>Nicolas Hoizey</b>
    </a></td><td>@cleverage</td><td>Paris, France</td><td>238</td><td>291</td></tr><tr><td>13</td><td><a href="https://github.com/mcanouil">
        <img src="https://avatars.githubusercontent.com/u/8896044?s=72&u=86a5cbe0323a90349d87b7fa1fd4b22ae9d45ea2&v=4" height="12" />
        <b>Mickaël Canouil</b>
    </a></td><td>-</td><td>Lille, France</td><td>177</td><td>254</td></tr><tr><td>14</td><td><a href="https://github.com/maelle">
        <img src="https://avatars.githubusercontent.com/u/8360597?s=72&u=824f03caa87c92420352e3dd9a05470320a67412&v=4" height="12" />
        <b>Maëlle Salmon</b>
    </a></td><td>@ropensci</td><td>Nancy, France</td><td>921</td><td>214</td></tr><tr><td>15</td><td><a href="https://github.com/vietj">
        <img src="https://avatars.githubusercontent.com/u/225674?s=72&u=cd869981e0cd6d95f3c61e7275ce1ad5940fc76e&v=4" height="12" />
        <b>Julien Viet</b>
    </a></td><td>Red Hat</td><td>Marseille</td><td>973</td><td>162</td></tr><tr><td>16</td><td><a href="https://github.com/dherault">
        <img src="https://avatars.githubusercontent.com/u/4154003?s=72&u=4b24359c0f156b3bba83ea1ad3f030cb7a55d2e0&v=4" height="12" />
        <b>David Hérault</b>
    </a></td><td>@toptal</td><td>Aix-en-Provence, France</td><td>186</td><td>162</td></tr><tr><td>17</td><td><a href="https://github.com/QuiiBz">
        <img src="https://avatars.githubusercontent.com/u/43268759?s=72&u=1d8c6583c1cce98b7baeecd2b9646a9f41292376&v=4" height="12" />
        <b>Tom Lienard</b>
    </a></td><td>@vercel</td><td>Paris</td><td>392</td><td>154</td></tr><tr><td>18</td><td><a href="https://github.com/BoboTiG">
        <img src="https://avatars.githubusercontent.com/u/2033598?s=72&u=7885aa35660361472a378a2e5e300e13ec76ae87&v=4" height="12" />
        <b>Mickaël Schoentgen</b>
    </a></td><td>Hyland|Nuxeo</td><td>Remote, France</td><td>160</td><td>109</td></tr><tr><td>19</td><td><a href="https://github.com/BrunoLevy">
        <img src="https://avatars.githubusercontent.com/u/19478253?s=72&u=5d291f158e7d7f0ebb99475e5f8974a7a8ec374d&v=4" height="12" />
        <b>Bruno Levy</b>
    </a></td><td>@inria</td><td>Nancy, France</td><td>526</td><td>100</td></tr><tr><td>20</td><td><a href="https://github.com/crazy-max">
        <img src="https://avatars.githubusercontent.com/u/1951866?s=72&v=4" height="12" />
        <b>CrazyMax</b>
    </a></td><td>@docker</td><td>France</td><td>2.23K</td><td>85</td></tr><tr><td>21</td><td><a href="https://github.com/antoinevastel">
        <img src="https://avatars.githubusercontent.com/u/5827148?s=72&v=4" height="12" />
        <b>antoine vastel</b>
    </a></td><td>-</td><td>Lille, France</td><td>290</td><td>80</td></tr><tr><td>22</td><td><a href="https://github.com/pkestene">
        <img src="https://avatars.githubusercontent.com/u/8276295?s=72&v=4" height="12" />
        <b>Pierre Kestener</b>
    </a></td><td>CEA</td><td>France</td><td>183</td><td>57</td></tr><tr><td>23</td><td><a href="https://github.com/rouault">
        <img src="https://avatars.githubusercontent.com/u/1192433?s=72&u=947be9d1eb18e70faa08dbdedf84de7a1e2568f4&v=4" height="12" />
        <b>Even Rouault</b>
    </a></td><td>Spatialys</td><td>France</td><td>611</td><td>51</td></tr><tr><td>24</td><td><a href="https://github.com/rubenfiszel">
        <img src="https://avatars.githubusercontent.com/u/275584?s=72&u=eb0fe584ca9e8636a35ab822b93cc4a1ad10bf42&v=4" height="12" />
        <b>Ruben Fiszel</b>
    </a></td><td>Windmill</td><td>Paris, France</td><td>200</td><td>46</td></tr><tr><td>25</td><td><a href="https://github.com/mykiwi">
        <img src="https://avatars.githubusercontent.com/u/334432?s=72&u=8e0e09ca184a8891c4731401f39edba0895834c2&v=4" height="12" />
        <b>Romain Gautier</b>
    </a></td><td>freelancer</td><td>Nantes, France</td><td>190</td><td>39</td></tr><tr><td>26</td><td><a href="https://github.com/GuillaumeGomez">
        <img src="https://avatars.githubusercontent.com/u/3050060?s=72&u=6ca85464b07c5464a052250a4fc3e3f9c03c97ed&v=4" height="12" />
        <b>Guillaume Gomez</b>
    </a></td><td>@huawei</td><td>Paris</td><td>1.26K</td><td>34</td></tr><tr><td>27</td><td><a href="https://github.com/mcombeau">
        <img src="https://avatars.githubusercontent.com/u/52008667?s=72&u=889adc6df09a8b3f8ee8944b7179bf857860ac7c&v=4" height="12" />
        <b>Mia Combeau</b>
    </a></td><td>@42School</td><td>Paris, France</td><td>421</td><td>34</td></tr><tr><td>28</td><td><a href="https://github.com/lovasoa">
        <img src="https://avatars.githubusercontent.com/u/552629?s=72&u=3b5257f8d20ea6c313ed91ba80c024c3f00cf5dc&v=4" height="12" />
        <b>Ophir LOJKINE</b>
    </a></td><td>@auto-grid @enexflow </td><td>Paris, France</td><td>446</td><td>31</td></tr><tr><td>29</td><td><a href="https://github.com/benjamincrozat">
        <img src="https://avatars.githubusercontent.com/u/3613731?s=72&v=4" height="12" />
        <b>Benjamin Crozat</b>
    </a></td><td>Benjamin Crozat</td><td>France</td><td>206</td><td>26</td></tr><tr><td>30</td><td><a href="https://github.com/fabpot">
        <img src="https://avatars.githubusercontent.com/u/47313?s=72&u=7ba05204271a726f8642ac15864e2f361b5c0198&v=4" height="12" />
        <b>Fabien Potencier</b>
    </a></td><td>Symfony/Platform.sh/Blackfire</td><td>Paris, France</td><td>13.1K</td><td>24</td></tr><tr><td>31</td><td><a href="https://github.com/ptitSeb">
        <img src="https://avatars.githubusercontent.com/u/3250792?s=72&u=f206420ae21c0bbf92fea09871f11adea98adb39&v=4" height="12" />
        <b>ptitSeb</b>
    </a></td><td>-</td><td>France</td><td>546</td><td>19</td></tr><tr><td>32</td><td><a href="https://github.com/Kerollmops">
        <img src="https://avatars.githubusercontent.com/u/3610253?s=72&u=12492ae6cdfa655c09e69305c5e03b1730194001&v=4" height="12" />
        <b>Clément Renault</b>
    </a></td><td>@meilisearch</td><td>France, Paris</td><td>449</td><td>19</td></tr><tr><td>33</td><td><a href="https://github.com/SimonMarquis">
        <img src="https://avatars.githubusercontent.com/u/1921278?s=72&u=ace12a9fb3a0532f35285bce04898f7a7c97b2f9&v=4" height="12" />
        <b>Simon Marquis</b>
    </a></td><td>@leboncoin</td><td>Paris, France</td><td>315</td><td>19</td></tr><tr><td>34</td><td><a href="https://github.com/sylvestre">
        <img src="https://avatars.githubusercontent.com/u/733326?s=72&v=4" height="12" />
        <b>Sylvestre Ledru</b>
    </a></td><td>Mozilla</td><td>France</td><td>312</td><td>19</td></tr><tr><td>35</td><td><a href="https://github.com/StanGirard">
        <img src="https://avatars.githubusercontent.com/u/19614572?s=72&u=173c2e47345431892f3101b4febe851ea99c08ad&v=4" height="12" />
        <b>Stan Girard</b>
    </a></td><td>@Theodo</td><td>Paris</td><td>1.68K</td><td>18</td></tr><tr><td>36</td><td><a href="https://github.com/dgageot">
        <img src="https://avatars.githubusercontent.com/u/153495?s=72&u=7a06a6cbf585d2f329484b4f0b900bf48eee9b29&v=4" height="12" />
        <b>David Gageot</b>
    </a></td><td>Docker</td><td>Paris, France</td><td>682</td><td>18</td></tr><tr><td>37</td><td><a href="https://github.com/glemaitre">
        <img src="https://avatars.githubusercontent.com/u/7454015?s=72&u=d9704641f89c00ce86f8207e59aedb554109d7fa&v=4" height="12" />
        <b>Guillaume Lemaitre</b>
    </a></td><td>Scikit-learn @ Inria foundation</td><td>Paris-Saclay / France</td><td>662</td><td>18</td></tr><tr><td>38</td><td><a href="https://github.com/jonathantribouharet">
        <img src="https://avatars.githubusercontent.com/u/188946?s=72&u=7298b69cfb0aa8c1055ac262e7367d18a41b9cb8&v=4" height="12" />
        <b>Jonathan Vukovich</b>
    </a></td><td>@yokitup</td><td>Paris, France</td><td>343</td><td>18</td></tr><tr><td>39</td><td><a href="https://github.com/dubzzz">
        <img src="https://avatars.githubusercontent.com/u/5300235?s=72&u=283a572a5010b5350eee7168cf6ce1b566747903&v=4" height="12" />
        <b>Nicolas DUBIEN</b>
    </a></td><td>Pigment</td><td>Remote, France</td><td>233</td><td>18</td></tr><tr><td>40</td><td><a href="https://github.com/avivace">
        <img src="https://avatars.githubusercontent.com/u/14352721?s=72&u=08e677ada7800546456c6610c08ea83cd275f0c6&v=4" height="12" />
        <b>Antonio Vivace</b>
    </a></td><td>@EUROCONTROL</td><td>Paris</td><td>219</td><td>18</td></tr><tr><td>41</td><td><a href="https://github.com/jdesboeufs">
        <img src="https://avatars.githubusercontent.com/u/1231232?s=72&u=71bac788fd58c4cb53ae18559b6ffecd1e218725&v=4" height="12" />
        <b>Jérôme Desboeufs</b>
    </a></td><td>Living Data Inc.</td><td>Paris</td><td>212</td><td>16</td></tr><tr><td>42</td><td><a href="https://github.com/thomasbnt">
        <img src="https://avatars.githubusercontent.com/u/14293805?s=72&u=6049cd0655f3ed1ec256e900bbcd3b540491bd09&v=4" height="12" />
        <b>Thomas Bonnet</b>
    </a></td><td>Creator of @Mist3r-Robot</td><td>Toulouse, France</td><td>184</td><td>16</td></tr><tr><td>43</td><td><a href="https://github.com/pde-bakk">
        <img src="https://avatars.githubusercontent.com/u/36886300?s=72&u=09fd81e0c27e4980f382a4c276e24739df052aa9&v=4" height="12" />
        <b>Peer de Bakker</b>
    </a></td><td>-</td><td>42, Paris</td><td>166</td><td>16</td></tr><tr><td>44</td><td><a href="https://github.com/louischatriot">
        <img src="https://avatars.githubusercontent.com/u/926355?s=72&u=61b83299a47342078c7a68bd6373d206b7357ec2&v=4" height="12" />
        <b>Louis Chatriot</b>
    </a></td><td>@alma </td><td>Paris</td><td>394</td><td>15</td></tr><tr><td>45</td><td><a href="https://github.com/samber">
        <img src="https://avatars.githubusercontent.com/u/2951285?s=72&u=571c795227b4edbd29f027478346834f83a95076&v=4" height="12" />
        <b>Samuel Berthe</b>
    </a></td><td>@ScreebApp </td><td>Nantes (France)</td><td>1.03K</td><td>14</td></tr><tr><td>46</td><td><a href="https://github.com/teivah">
        <img src="https://avatars.githubusercontent.com/u/934784?s=72&u=a3bcd31aa1872977f2f9d203f7d28d1faf0e978c&v=4" height="12" />
        <b>Teiva Harsanyi</b>
    </a></td><td>@google</td><td>France</td><td>792</td><td>14</td></tr><tr><td>47</td><td><a href="https://github.com/samhocevar">
        <img src="https://avatars.githubusercontent.com/u/245089?s=72&u=3bdd6a36b91d0fc859040a47f0b5fac441f513ab&v=4" height="12" />
        <b>Sam Hocevar</b>
    </a></td><td>@dontnod </td><td>Paris, France</td><td>469</td><td>14</td></tr><tr><td>48</td><td><a href="https://github.com/RaitoBezarius">
        <img src="https://avatars.githubusercontent.com/u/314564?s=72&u=2b23b8b25c888f248f04be073e6b4994f932f7b7&v=4" height="12" />
        <b>Ryan Lahfa</b>
    </a></td><td>Independent Contributor</td><td>France</td><td>279</td><td>14</td></tr><tr><td>49</td><td><a href="https://github.com/Delapouite">
        <img src="https://avatars.githubusercontent.com/u/39315?s=72&v=4" height="12" />
        <b>Bruno Heridet</b>
    </a></td><td>Powipu</td><td>Nantes / Lyon - France</td><td>205</td><td>14</td></tr><tr><td>50</td><td><a href="https://github.com/nvuillam">
        <img src="https://avatars.githubusercontent.com/u/17500430?s=72&u=24ff06a935acf56fe06678874e2b297debb66fac&v=4" height="12" />
        <b>Nicolas Vuillamy</b>
    </a></td><td>Cloudity</td><td>Paris, France</td><td>237</td><td>13</td></tr><tr><td>51</td><td><a href="https://github.com/Dimillian">
        <img src="https://avatars.githubusercontent.com/u/535509?s=72&u=764d85a6d85e56cb2029e0e64af1bf37296e02a4&v=4" height="12" />
        <b>Thomas Ricouard</b>
    </a></td><td>@Medium @Glose </td><td>France</td><td>2.44K</td><td>12</td></tr><tr><td>52</td><td><a href="https://github.com/phaazon">
        <img src="https://avatars.githubusercontent.com/u/506592?s=72&u=bdd2a0502a6a0097f8db5d4601e64ab62cb86b96&v=4" height="12" />
        <b>Dimitri Sabadie</b>
    </a></td><td>@datadog </td><td>France</td><td>787</td><td>12</td></tr><tr><td>53</td><td><a href="https://github.com/zoontek">
        <img src="https://avatars.githubusercontent.com/u/1902323?s=72&u=b208315a0d0fd583a7cbda7b1badac19b473dc30&v=4" height="12" />
        <b>Mathieu Acthernoene</b>
    </a></td><td>Swan</td><td>Paris</td><td>581</td><td>12</td></tr><tr><td>54</td><td><a href="https://github.com/forax">
        <img src="https://avatars.githubusercontent.com/u/828220?s=72&v=4" height="12" />
        <b>Rémi Forax</b>
    </a></td><td>University Gustave Eiffel (Paris)</td><td>Paris, France</td><td>496</td><td>12</td></tr><tr><td>55</td><td><a href="https://github.com/CedricGuillemet">
        <img src="https://avatars.githubusercontent.com/u/1312968?s=72&u=09586c4d429addaa7fc099437bebda780a9e39ed&v=4" height="12" />
        <b>Cedric Guillemet</b>
    </a></td><td>Microsoft</td><td>Redon, Brittany, France</td><td>397</td><td>12</td></tr><tr><td>56</td><td><a href="https://github.com/blanklob">
        <img src="https://avatars.githubusercontent.com/u/63895927?s=72&u=7812801bf0da4cd3aca715243c391ca14f4594ea&v=4" height="12" />
        <b>Youness Idbakkasse</b>
    </a></td><td>-</td><td>Paris, France</td><td>198</td><td>12</td></tr><tr><td>57</td><td><a href="https://github.com/busybox11">
        <img src="https://avatars.githubusercontent.com/u/29630035?s=72&u=e206de0c3ec13b38abb0c21945b2545a3a1e21e1&v=4" height="12" />
        <b>busybox</b>
    </a></td><td>Satelia</td><td>Bordeaux, France</td><td>167</td><td>12</td></tr><tr><td>58</td><td><a href="https://github.com/jcarpent">
        <img src="https://avatars.githubusercontent.com/u/1567317?s=72&v=4" height="12" />
        <b>Justin Carpentier</b>
    </a></td><td>Inria, Paris</td><td>Paris</td><td>163</td><td>12</td></tr><tr><td>59</td><td><a href="https://github.com/Calinou">
        <img src="https://avatars.githubusercontent.com/u/180032?s=72&v=4" height="12" />
        <b>Hugo Locurcio</b>
    </a></td><td>@godotengine</td><td>Troyes, France</td><td>1.15K</td><td>11</td></tr><tr><td>60</td><td><a href="https://github.com/enjoy-digital">
        <img src="https://avatars.githubusercontent.com/u/1450143?s=72&u=1a9912f1a280ca3120df158d0d6eca1af88f04fe&v=4" height="12" />
        <b>enjoy-digital</b>
    </a></td><td>EnjoyDigital</td><td>France</td><td>1.09K</td><td>11</td></tr><tr><td>61</td><td><a href="https://github.com/tgrall">
        <img src="https://avatars.githubusercontent.com/u/541250?s=72&u=ed72bb083428632c5788c3e65202d33c19953712&v=4" height="12" />
        <b>Tugdual Grall</b>
    </a></td><td>@github</td><td>Nantes, France</td><td>302</td><td>11</td></tr><tr><td>62</td><td><a href="https://github.com/davidbrochart">
        <img src="https://avatars.githubusercontent.com/u/4711805?s=72&u=d39696d995a9e02ec3613ffb2f62b20b14f92f26&v=4" height="12" />
        <b>David Brochart</b>
    </a></td><td>@QuantStack</td><td>France</td><td>268</td><td>11</td></tr><tr><td>63</td><td><a href="https://github.com/jderusse">
        <img src="https://avatars.githubusercontent.com/u/578547?s=72&u=df76d0514c86209a3fff8c9fb9d15ae8592c43c9&v=4" height="12" />
        <b>Jérémy Derussé</b>
    </a></td><td>Blackfire</td><td>Paris, France</td><td>246</td><td>11</td></tr><tr><td>64</td><td><a href="https://github.com/ooflorent">
        <img src="https://avatars.githubusercontent.com/u/168498?s=72&u=77c7b4c4f0a77e647d275a2114242065fe2975e9&v=4" height="12" />
        <b>Florent Cailhol</b>
    </a></td><td>-</td><td>Toulouse, France</td><td>202</td><td>11</td></tr><tr><td>65</td><td><a href="https://github.com/abougouffa">
        <img src="https://avatars.githubusercontent.com/u/3716399?s=72&u=ad7a1e120fef1c19d7b7864ac183798de2711c59&v=4" height="12" />
        <b>Abdelhak Bougouffa</b>
    </a></td><td>@ezWheelSAS & Paris-Saclay University</td><td>Paris, France</td><td>165</td><td>11</td></tr><tr><td>66</td><td><a href="https://github.com/GromNaN">
        <img src="https://avatars.githubusercontent.com/u/400034?s=72&u=07314d8bce5dcff8c65fdcff04302ab788600465&v=4" height="12" />
        <b>Jérôme Tamarelle</b>
    </a></td><td>MongoDB</td><td>Rouen, France</td><td>164</td><td>11</td></tr><tr><td>67</td><td><a href="https://github.com/regisb">
        <img src="https://avatars.githubusercontent.com/u/44319?s=72&v=4" height="12" />
        <b>Régis Behmo</b>
    </a></td><td>-</td><td>France</td><td>264</td><td>10</td></tr><tr><td>68</td><td><a href="https://github.com/wheybags">
        <img src="https://avatars.githubusercontent.com/u/1093274?s=72&v=4" height="12" />
        <b>Tom Mason</b>
    </a></td><td>Powder.gg</td><td>Paris, France</td><td>161</td><td>10</td></tr><tr><td>69</td><td><a href="https://github.com/johnBuffer">
        <img src="https://avatars.githubusercontent.com/u/9960400?s=72&u=bc8911ac87edb913bca811d23f14c109d11e9dfa&v=4" height="12" />
        <b>Jean Tampon</b>
    </a></td><td>-</td><td>France</td><td>2.28K</td><td>9</td></tr><tr><td>70</td><td><a href="https://github.com/KtorZ">
        <img src="https://avatars.githubusercontent.com/u/5680256?s=72&u=020eb2bc68211d32c1691695b6ab22ad55478501&v=4" height="12" />
        <b>Matthias Benkort</b>
    </a></td><td>@cardano-foundation</td><td>Toulouse</td><td>383</td><td>9</td></tr><tr><td>71</td><td><a href="https://github.com/jfalcou">
        <img src="https://avatars.githubusercontent.com/u/285977?s=72&u=aa9be7c63023593e6e3fb7765390e789f31b7509&v=4" height="12" />
        <b>Joel Falcou</b>
    </a></td><td>University Paris Sud XI, CNRS</td><td>Orsay, France</td><td>248</td><td>9</td></tr><tr><td>72</td><td><a href="https://github.com/axeldelafosse">
        <img src="https://avatars.githubusercontent.com/u/10477267?s=72&u=0322ffa7017942defa4c6de7cdcd4d42b7d364e5&v=4" height="12" />
        <b>Axel Delafosse</b>
    </a></td><td>-</td><td>Paris</td><td>181</td><td>9</td></tr><tr><td>73</td><td><a href="https://github.com/sebcrozet">
        <img src="https://avatars.githubusercontent.com/u/1734958?s=72&v=4" height="12" />
        <b>Sébastien Crozet</b>
    </a></td><td>Dimforge</td><td>France</td><td>603</td><td>8</td></tr><tr><td>74</td><td><a href="https://github.com/yhenon">
        <img src="https://avatars.githubusercontent.com/u/9943242?s=72&v=4" height="12" />
        <b>Yann Henon</b>
    </a></td><td>@axteams-software  </td><td>Antibes, France</td><td>307</td><td>8</td></tr><tr><td>75</td><td><a href="https://github.com/Stormix">
        <img src="https://avatars.githubusercontent.com/u/18377687?s=72&u=39af1d1e6f0dfbc1c06089e15c8560c1464fb266&v=4" height="12" />
        <b>Anas Mazouni</b>
    </a></td><td>@Stormix-co </td><td>Marseille, France</td><td>232</td><td>8</td></tr><tr><td>76</td><td><a href="https://github.com/emersion">
        <img src="https://avatars.githubusercontent.com/u/506932?s=72&u=04995169ac1851b91ca12b47f4862ded1b108765&v=4" height="12" />
        <b>Simon Ser</b>
    </a></td><td>SourceHut</td><td>France</td><td>1.53K</td><td>7</td></tr><tr><td>77</td><td><a href="https://github.com/spolu">
        <img src="https://avatars.githubusercontent.com/u/15067?s=72&u=6297f8db333ba5fbf2be0ee9d796a09b1419115f&v=4" height="12" />
        <b>Stanislas Polu</b>
    </a></td><td>Dust</td><td>Paris</td><td>447</td><td>7</td></tr><tr><td>78</td><td><a href="https://github.com/l-lin">
        <img src="https://avatars.githubusercontent.com/u/5452304?s=72&u=2e2f03b021b647037453379a788385f317c8208f&v=4" height="12" />
        <b>Louis LIN</b>
    </a></td><td>BioSerenity</td><td>Paris</td><td>241</td><td>7</td></tr><tr><td>79</td><td><a href="https://github.com/greg0ire">
        <img src="https://avatars.githubusercontent.com/u/657779?s=72&u=96a0c076123934fb61c88da5b4d5b72b03dd69cb&v=4" height="12" />
        <b>Grégoire Paris</b>
    </a></td><td>@ManoManoTech </td><td>Paris</td><td>215</td><td>7</td></tr><tr><td>80</td><td><a href="https://github.com/bzg">
        <img src="https://avatars.githubusercontent.com/u/63500?s=72&u=5388581f4d8481e5c9ea311d4fb12eedee21647f&v=4" height="12" />
        <b>Bastien</b>
    </a></td><td>@etalab</td><td>Paris</td><td>727</td><td>6</td></tr><tr><td>81</td><td><a href="https://github.com/NathanLovato">
        <img src="https://avatars.githubusercontent.com/u/12694995?s=72&u=e4abd5fa8b74c82c57955f490da199a1ac7b9d8c&v=4" height="12" />
        <b>Nathan Lovato</b>
    </a></td><td>GDQuest</td><td>France</td><td>721</td><td>6</td></tr><tr><td>82</td><td><a href="https://github.com/scraly">
        <img src="https://avatars.githubusercontent.com/u/2543381?s=72&u=d500ca96ff8a2a3f9b7bb300c71ed7e57449b072&v=4" height="12" />
        <b>Aurelie Vache</b>
    </a></td><td>ovh</td><td>Toulouse</td><td>634</td><td>6</td></tr><tr><td>83</td><td><a href="https://github.com/fraxken">
        <img src="https://avatars.githubusercontent.com/u/4438263?s=72&u=5e2d0c11f001871b76e25dd3a96bd662d6a706ba&v=4" height="12" />
        <b>Thomas.G</b>
    </a></td><td>@MyUnisoft</td><td>Paris</td><td>607</td><td>6</td></tr><tr><td>84</td><td><a href="https://github.com/gus33000">
        <img src="https://avatars.githubusercontent.com/u/3755345?s=72&u=8be4944a8331aaff14de13cf7f0354c4a8c192b8&v=4" height="12" />
        <b>Gustave Monce</b>
    </a></td><td>labri</td><td>France</td><td>438</td><td>6</td></tr><tr><td>85</td><td><a href="https://github.com/paraboul">
        <img src="https://avatars.githubusercontent.com/u/80341?s=72&u=eea124424525852e2c9add8afa3b25fb889671f3&v=4" height="12" />
        <b>Anthony Catel</b>
    </a></td><td>-</td><td>France</td><td>328</td><td>6</td></tr><tr><td>86</td><td><a href="https://github.com/CorentinTh">
        <img src="https://avatars.githubusercontent.com/u/25065347?s=72&u=ddfc8b7812ebc8cbd9245f499e4703bf3165ec31&v=4" height="12" />
        <b>Corentin THOMASSET</b>
    </a></td><td>@GeorgesTech </td><td>France - Lyon</td><td>264</td><td>6</td></tr><tr><td>87</td><td><a href="https://github.com/brunosimon">
        <img src="https://avatars.githubusercontent.com/u/5439991?s=72&u=d7f9a046776f0960769c8d90ca8ced4d896c8e6a&v=4" height="12" />
        <b>Bruno Simon</b>
    </a></td><td>Creative Journey</td><td>Paris</td><td>16.83K</td><td>5</td></tr><tr><td>88</td><td><a href="https://github.com/ornicar">
        <img src="https://avatars.githubusercontent.com/u/140370?s=72&v=4" height="12" />
        <b>Thibault Duplessis</b>
    </a></td><td>lichess.org</td><td>France</td><td>4.96K</td><td>5</td></tr><tr><td>89</td><td><a href="https://github.com/ogrisel">
        <img src="https://avatars.githubusercontent.com/u/89061?s=72&v=4" height="12" />
        <b>Olivier Grisel</b>
    </a></td><td>Inria</td><td>Paris, France</td><td>4.6K</td><td>5</td></tr><tr><td>90</td><td><a href="https://github.com/revolunet">
        <img src="https://avatars.githubusercontent.com/u/124937?s=72&u=14a136192a3900c9aa0a4e79a8a285d30af57284&v=4" height="12" />
        <b>Julien Bouquillon</b>
    </a></td><td>@SocialGouv </td><td>Paris, France</td><td>1.02K</td><td>5</td></tr><tr><td>91</td><td><a href="https://github.com/florimondmanca">
        <img src="https://avatars.githubusercontent.com/u/15911462?s=72&u=8e66104c470276296ea2f5fdf986b15865d6f256&v=4" height="12" />
        <b>Florimond Manca</b>
    </a></td><td>Fairness</td><td>France</td><td>748</td><td>5</td></tr><tr><td>92</td><td><a href="https://github.com/kizu">
        <img src="https://avatars.githubusercontent.com/u/177485?s=72&u=4d84ea69f3e98cc16d9daf0c5e7e2ca09c9efad7&v=4" height="12" />
        <b>Roman Komarov</b>
    </a></td><td>@DataDog</td><td>France</td><td>747</td><td>5</td></tr><tr><td>93</td><td><a href="https://github.com/ArthurSonzogni">
        <img src="https://avatars.githubusercontent.com/u/4759106?s=72&v=4" height="12" />
        <b>Arthur Sonzogni</b>
    </a></td><td>-</td><td>Paris</td><td>634</td><td>5</td></tr><tr><td>94</td><td><a href="https://github.com/melix">
        <img src="https://avatars.githubusercontent.com/u/316357?s=72&u=2d99b7a2de1d0530b77e897df3667db916dc1cdd&v=4" height="12" />
        <b>Cédric Champeau</b>
    </a></td><td>Oracle Labs </td><td>Nantes, France</td><td>591</td><td>5</td></tr><tr><td>95</td><td><a href="https://github.com/pgrimaud">
        <img src="https://avatars.githubusercontent.com/u/1866496?s=72&u=4b2f258754b4728d019d03d7a014be1812ae69fa&v=4" height="12" />
        <b>Pierre Grimaud</b>
    </a></td><td>-</td><td>Paris, France</td><td>588</td><td>5</td></tr><tr><td>96</td><td><a href="https://github.com/Zylann">
        <img src="https://avatars.githubusercontent.com/u/1311555?s=72&u=98e85e0c6d8599c7de140000f240417c9f512cea&v=4" height="12" />
        <b>Marc</b>
    </a></td><td>-</td><td>France</td><td>586</td><td>5</td></tr><tr><td>97</td><td><a href="https://github.com/younesbelkada">
        <img src="https://avatars.githubusercontent.com/u/49240599?s=72&u=9074959eed8c7b1c7e6d74f8e3c13a46f8df516c&v=4" height="12" />
        <b>Younes Belkada</b>
    </a></td><td>@huggingface</td><td>Paris, France</td><td>457</td><td>5</td></tr><tr><td>98</td><td><a href="https://github.com/ldez">
        <img src="https://avatars.githubusercontent.com/u/5674651?s=72&u=45f0e097891f1e7e0c45c5224dcce11c867038af&v=4" height="12" />
        <b>Ludovic Fernandez</b>
    </a></td><td>-</td><td>France</td><td>455</td><td>5</td></tr><tr><td>99</td><td><a href="https://github.com/tgalopin">
        <img src="https://avatars.githubusercontent.com/u/1651494?s=72&u=ff057fae3d32e16223fbd1238811d5203111edb5&v=4" height="12" />
        <b>Titouan Galopin</b>
    </a></td><td>@symfony  </td><td>France</td><td>364</td><td>5</td></tr><tr><td>100</td><td><a href="https://github.com/JulienPalard">
        <img src="https://avatars.githubusercontent.com/u/239510?s=72&u=82a97cf72dd9dd061ec34e653c6e50eee0704c18&v=4" height="12" />
        <b>Julien Palard</b>
    </a></td><td>-</td><td>Paris, France</td><td>347</td><td>5</td></tr><tr><td>101</td><td><a href="https://github.com/pchaigno">
        <img src="https://avatars.githubusercontent.com/u/1764210?s=72&v=4" height="12" />
        <b>Paul Chaignon</b>
    </a></td><td>Isovalent</td><td>Rennes, France</td><td>344</td><td>5</td></tr><tr><td>102</td><td><a href="https://github.com/ClementPinard">
        <img src="https://avatars.githubusercontent.com/u/4380424?s=72&u=53e6490329da8249d6307a0baa12aca6f681414f&v=4" height="12" />
        <b>Clément Pinard</b>
    </a></td><td>XXII</td><td>Paris</td><td>331</td><td>5</td></tr><tr><td>103</td><td><a href="https://github.com/rlouf">
        <img src="https://avatars.githubusercontent.com/u/3885044?s=72&u=d25f1b19c341ad092b89b860547177a7b5107261&v=4" height="12" />
        <b>Rémi Louf</b>
    </a></td><td>.txt</td><td>Fontainebleau, France</td><td>326</td><td>5</td></tr><tr><td>104</td><td><a href="https://github.com/sunny">
        <img src="https://avatars.githubusercontent.com/u/132?s=72&v=4" height="12" />
        <b>Sunny Ripert</b>
    </a></td><td>Cults.</td><td>Paris, France</td><td>318</td><td>5</td></tr><tr><td>105</td><td><a href="https://github.com/mquandalle">
        <img src="https://avatars.githubusercontent.com/u/1730702?s=72&u=ebe99b2bcc14e2e2376df8637ddc47f1b26a5e7b&v=4" height="12" />
        <b>Maxime Quandalle</b>
    </a></td><td>-</td><td>Paris, France</td><td>301</td><td>5</td></tr><tr><td>106</td><td><a href="https://github.com/slandelle">
        <img src="https://avatars.githubusercontent.com/u/849197?s=72&v=4" height="12" />
        <b>Stephane Landelle</b>
    </a></td><td>@gatling</td><td>Paris, France</td><td>272</td><td>5</td></tr><tr><td>107</td><td><a href="https://github.com/NiLuJe">
        <img src="https://avatars.githubusercontent.com/u/111974?s=72&v=4" height="12" />
        <b>NiLuJe</b>
    </a></td><td>-</td><td>Paris, France</td><td>254</td><td>5</td></tr><tr><td>108</td><td><a href="https://github.com/jpountz">
        <img src="https://avatars.githubusercontent.com/u/299848?s=72&v=4" height="12" />
        <b>Adrien Grand</b>
    </a></td><td>Elasticsearch</td><td>Caen, France</td><td>253</td><td>5</td></tr><tr><td>109</td><td><a href="https://github.com/j0k3r">
        <img src="https://avatars.githubusercontent.com/u/62333?s=72&v=4" height="12" />
        <b>Jérémy Benoist</b>
    </a></td><td>@20Minutes</td><td>Bordeaux, France</td><td>245</td><td>5</td></tr><tr><td>110</td><td><a href="https://github.com/skarnet">
        <img src="https://avatars.githubusercontent.com/u/11243542?s=72&u=7e701b7a85d1ab24444160e78302d9d9eb9d056a&v=4" height="12" />
        <b>Laurent Bercot</b>
    </a></td><td>skarnet.com</td><td>Paris, France</td><td>245</td><td>5</td></tr><tr><td>111</td><td><a href="https://github.com/dzello">
        <img src="https://avatars.githubusercontent.com/u/174777?s=72&u=ca3d3c86a98aada7ee26b9567e6d5e9cc34598d4&v=4" height="12" />
        <b>Josh Dzielak</b>
    </a></td><td>@orbit-love</td><td>Paris</td><td>240</td><td>5</td></tr><tr><td>112</td><td><a href="https://github.com/Guilouz">
        <img src="https://avatars.githubusercontent.com/u/12702322?s=72&u=f6da23f5fd8d72ed72413e5bc8b9b2c170670783&v=4" height="12" />
        <b>Cyril Guislain</b>
    </a></td><td>-</td><td>France</td><td>238</td><td>5</td></tr><tr><td>113</td><td><a href="https://github.com/vindarel">
        <img src="https://avatars.githubusercontent.com/u/3721004?s=72&u=1dd339c8791cde01920fd5235e5ce82cda9049e4&v=4" height="12" />
        <b>vindarel</b>
    </a></td><td>-</td><td>France</td><td>236</td><td>5</td></tr><tr><td>114</td><td><a href="https://github.com/nfroidure">
        <img src="https://avatars.githubusercontent.com/u/229633?s=72&v=4" height="12" />
        <b>Nicolas Froidure</b>
    </a></td><td>@DiagRAMS-Technologies</td><td>Lille - Nord Pas-de-Calais</td><td>196</td><td>5</td></tr><tr><td>115</td><td><a href="https://github.com/Kocal">
        <img src="https://avatars.githubusercontent.com/u/2103975?s=72&u=4c456844df810b6c2879cbfbb54c3ec7fd10f23a&v=4" height="12" />
        <b>Hugo Alliaume</b>
    </a></td><td>Lead Tech full-stack at @Wamiz</td><td>Lyon, France</td><td>187</td><td>5</td></tr><tr><td>116</td><td><a href="https://github.com/julien-deramond">
        <img src="https://avatars.githubusercontent.com/u/17381666?s=72&u=a9b71c0b77efa17719595a35f1d1c637c4ad63ac&v=4" height="12" />
        <b>Julien Déramond</b>
    </a></td><td>Orange</td><td>Paris, France</td><td>183</td><td>5</td></tr><tr><td>117</td><td><a href="https://github.com/travier">
        <img src="https://avatars.githubusercontent.com/u/64795720?s=72&u=7f7c094b847bc8dc140f2e5aaa44dcd6b70a9486&v=4" height="12" />
        <b>Timothée Ravier</b>
    </a></td><td>Red Hat</td><td>Paris, France</td><td>182</td><td>5</td></tr><tr><td>118</td><td><a href="https://github.com/moufmouf">
        <img src="https://avatars.githubusercontent.com/u/1290952?s=72&v=4" height="12" />
        <b>David Négrier</b>
    </a></td><td>@thecodingmachine</td><td>Paris</td><td>180</td><td>5</td></tr><tr><td>119</td><td><a href="https://github.com/francois2metz">
        <img src="https://avatars.githubusercontent.com/u/86659?s=72&v=4" height="12" />
        <b>François de Metz</b>
    </a></td><td>-</td><td>Annecy, France</td><td>176</td><td>5</td></tr><tr><td>120</td><td><a href="https://github.com/BenBktech">
        <img src="https://avatars.githubusercontent.com/u/35254747?s=72&u=5bed74165d79148b9b4370dab1984c698c4cd0e6&v=4" height="12" />
        <b>Ben Bk</b>
    </a></td><td>Ben BK</td><td>Strasbourg</td><td>164</td><td>5</td></tr><tr><td>121</td><td><a href="https://github.com/o0Ignition0o">
        <img src="https://avatars.githubusercontent.com/u/9465678?s=72&u=86cd0443ac626456b456715baf3e9064f28c053d&v=4" height="12" />
        <b>Jeremy Lempereur</b>
    </a></td><td>@apollographql</td><td>Lille</td><td>161</td><td>5</td></tr><tr><td>122</td><td><a href="https://github.com/benoitletondor">
        <img src="https://avatars.githubusercontent.com/u/868054?s=72&u=3860549300a5ad7cfd4c9d71ce261578ec6fa2c4&v=4" height="12" />
        <b>Benoit Letondor</b>
    </a></td><td>@Nabla</td><td>Paris - France</td><td>161</td><td>5</td></tr><tr><td>123</td><td><a href="https://github.com/Grafikart">
        <img src="https://avatars.githubusercontent.com/u/395137?s=72&u=490adebe004adb66140ca0d5f14e4f2e1a986f9d&v=4" height="12" />
        <b>Jonathan</b>
    </a></td><td>-</td><td>Montpellier</td><td>5.6K</td><td>4</td></tr><tr><td>124</td><td><a href="https://github.com/posva">
        <img src="https://avatars.githubusercontent.com/u/664177?s=72&u=ded1e1cffd1d5620c9d9fb1a1c966c17204d6bef&v=4" height="12" />
        <b>Eduardo San Martin Morote</b>
    </a></td><td>Freelance</td><td>Paris </td><td>5.21K</td><td>4</td></tr><tr><td>125</td><td><a href="https://github.com/Atinux">
        <img src="https://avatars.githubusercontent.com/u/904724?s=72&u=c6c29f476e8aced6f47a2edcf057f83ceaeddade&v=4" height="12" />
        <b>Sébastien Chopin</b>
    </a></td><td>@nuxtlabs</td><td>France</td><td>4.11K</td><td>4</td></tr><tr><td>126</td><td><a href="https://github.com/dunglas">
        <img src="https://avatars.githubusercontent.com/u/57224?s=72&u=a7ed2cf3f0ae84c9e06925b94091b85a7d6324b0&v=4" height="12" />
        <b>Kévin Dunglas</b>
    </a></td><td>@coopTilleuls </td><td>Lille, France</td><td>3.52K</td><td>4</td></tr><tr><td>127</td><td><a href="https://github.com/merveenoyan">
        <img src="https://avatars.githubusercontent.com/u/53175384?s=72&u=44019936d0cc3f7fd709b2c59f91ee1b9811d421&v=4" height="12" />
        <b>Merve Noyan</b>
    </a></td><td>@huggingface </td><td>Paris</td><td>2.52K</td><td>4</td></tr><tr><td>128</td><td><a href="https://github.com/sdispater">
        <img src="https://avatars.githubusercontent.com/u/555648?s=72&v=4" height="12" />
        <b>Sébastien Eustace</b>
    </a></td><td>-</td><td>France</td><td>2.11K</td><td>4</td></tr><tr><td>129</td><td><a href="https://github.com/stof">
        <img src="https://avatars.githubusercontent.com/u/439401?s=72&u=bdedf550601e30f65b8759680868744e6c2607ed&v=4" height="12" />
        <b>Christophe Coevoet</b>
    </a></td><td>@Incenteev</td><td>Paris</td><td>2.06K</td><td>4</td></tr><tr><td>130</td><td><a href="https://github.com/donho">
        <img src="https://avatars.githubusercontent.com/u/90293?s=72&u=ecf6e2f9319cd333d4ffd0056c84848e91ae9870&v=4" height="12" />
        <b>Don HO</b>
    </a></td><td>Notepad++ Project</td><td>Paris France</td><td>1.8K</td><td>4</td></tr><tr><td>131</td><td><a href="https://github.com/arcanis">
        <img src="https://avatars.githubusercontent.com/u/1037931?s=72&u=82e4b7a547ac8f176b03d80223c932cf1ebbf019&v=4" height="12" />
        <b>Maël Nison</b>
    </a></td><td>@datadog</td><td>Paris, France</td><td>1.7K</td><td>4</td></tr><tr><td>132</td><td><a href="https://github.com/bclozel">
        <img src="https://avatars.githubusercontent.com/u/103264?s=72&u=7003334e562971b7b0fabb6bed21b940dce0cf89&v=4" height="12" />
        <b>Brian Clozel</b>
    </a></td><td>Broadcom</td><td>Lyon, France</td><td>1.43K</td><td>4</td></tr><tr><td>133</td><td><a href="https://github.com/manekinekko">
        <img src="https://avatars.githubusercontent.com/u/1699357?s=72&u=49863edce9963b33867ef61d3a2150161a0e3561&v=4" height="12" />
        <b>Wassim Chegham</b>
    </a></td><td>@microsoft</td><td>France</td><td>1.42K</td><td>4</td></tr><tr><td>134</td><td><a href="https://github.com/LysandreJik">
        <img src="https://avatars.githubusercontent.com/u/30755778?s=72&u=2a8797be4b4a8632bdaebcadc62a153b0ea112d3&v=4" height="12" />
        <b>Lysandre Debut</b>
    </a></td><td>Hugging Face</td><td>Paris</td><td>1.37K</td><td>4</td></tr><tr><td>135</td><td><a href="https://github.com/deepnight">
        <img src="https://avatars.githubusercontent.com/u/1671695?s=72&u=36316a70a49497f680e2efef9e8b48623178cdfb&v=4" height="12" />
        <b>Sébastien Bénard</b>
    </a></td><td>Deepnight Games</td><td>Bordeaux, France</td><td>1.26K</td><td>4</td></tr><tr><td>136</td><td><a href="https://github.com/Geal">
        <img src="https://avatars.githubusercontent.com/u/119296?s=72&v=4" height="12" />
        <b>Geoffroy Couprie</b>
    </a></td><td>-</td><td>Nantes, France</td><td>1.23K</td><td>4</td></tr><tr><td>137</td><td><a href="https://github.com/Carreau">
        <img src="https://avatars.githubusercontent.com/u/335567?s=72&v=4" height="12" />
        <b>Matthias Bussonnier</b>
    </a></td><td>@Quansight-Labs</td><td>France</td><td>1.23K</td><td>4</td></tr><tr><td>138</td><td><a href="https://github.com/jdubois">
        <img src="https://avatars.githubusercontent.com/u/316835?s=72&u=97e32d190bed00237282298cc795ab0ebec0101c&v=4" height="12" />
        <b>Julien Dubois</b>
    </a></td><td>@microsoft</td><td>Suresnes, France</td><td>1.21K</td><td>4</td></tr><tr><td>139</td><td><a href="https://github.com/vstinner">
        <img src="https://avatars.githubusercontent.com/u/194129?s=72&u=cf52678f5f02f96d9c5bc1b5079d4e6c2e441af4&v=4" height="12" />
        <b>Victor Stinner</b>
    </a></td><td>@RedHatOfficial</td><td>France</td><td>1.17K</td><td>4</td></tr><tr><td>140</td><td><a href="https://github.com/sdeleuze">
        <img src="https://avatars.githubusercontent.com/u/141109?s=72&u=f8043f7d49f1bc47c6891b0b6085e08cbc26dd61&v=4" height="12" />
        <b>Sébastien Deleuze</b>
    </a></td><td>Broadcom</td><td>Lyon</td><td>1.11K</td><td>4</td></tr><tr><td>141</td><td><a href="https://github.com/thomasync">
        <img src="https://avatars.githubusercontent.com/u/12927290?s=72&u=46e5c515789397dc2f91f4fe0a5cfa3f9ea40177&v=4" height="12" />
        <b>Thomas Cauquil</b>
    </a></td><td>-</td><td>Montpellier, France</td><td>1.07K</td><td>4</td></tr><tr><td>142</td><td><a href="https://github.com/nadimkobeissi">
        <img src="https://avatars.githubusercontent.com/u/9953?s=72&u=108ca67baf136bdb7e363419b8d757f2a3c96d5d&v=4" height="12" />
        <b>Nadim Kobeissi</b>
    </a></td><td>@symbolicsoft</td><td>Paris, France</td><td>916</td><td>4</td></tr><tr><td>143</td><td><a href="https://github.com/lroudge">
        <img src="https://avatars.githubusercontent.com/u/44481637?s=72&u=35323a38de6c58de09430e9e09f683275e523241&v=4" height="12" />
        <b>lroudge</b>
    </a></td><td>-</td><td>Paris</td><td>884</td><td>4</td></tr><tr><td>144</td><td><a href="https://github.com/rossant">
        <img src="https://avatars.githubusercontent.com/u/1942359?s=72&u=68956829fcd0b585d782e8cbbf90a85013a043d8&v=4" height="12" />
        <b>Cyrille Rossant</b>
    </a></td><td>@int-brain-lab @cortex-lab </td><td>Paris</td><td>864</td><td>4</td></tr><tr><td>145</td><td><a href="https://github.com/Yomguithereal">
        <img src="https://avatars.githubusercontent.com/u/2571951?s=72&v=4" height="12" />
        <b>Guillaume Plique</b>
    </a></td><td>médialab - Sciences Po</td><td>France</td><td>758</td><td>4</td></tr><tr><td>146</td><td><a href="https://github.com/xcarpentier">
        <img src="https://avatars.githubusercontent.com/u/923036?s=72&u=4c53e5865047c70bcb5204b7980fea22262a5951&v=4" height="12" />
        <b>Xavier Carpentier</b>
    </a></td><td>Freelance React-Native Developer</td><td>France</td><td>740</td><td>4</td></tr><tr><td>147</td><td><a href="https://github.com/mlabouardy">
        <img src="https://avatars.githubusercontent.com/u/10320205?s=72&u=022b2dc0e4696d43258b8364ca7e869aeb18181b&v=4" height="12" />
        <b>LABOUARDY Mohamed</b>
    </a></td><td>@tailwarden</td><td>Paris, France</td><td>740</td><td>4</td></tr><tr><td>148</td><td><a href="https://github.com/n1k0">
        <img src="https://avatars.githubusercontent.com/u/41547?s=72&u=4befdcee0c615dcf7aa6f56523df75e3387f567b&v=4" height="12" />
        <b>Nicolas Perriault</b>
    </a></td><td>Akei</td><td>Montpellier, France</td><td>736</td><td>4</td></tr><tr><td>149</td><td><a href="https://github.com/cgrand">
        <img src="https://avatars.githubusercontent.com/u/47025?s=72&v=4" height="12" />
        <b>Christophe Grand</b>
    </a></td><td>http://cgrand.net/</td><td>Saint-Étienne, France</td><td>664</td><td>4</td></tr><tr><td>150</td><td><a href="https://github.com/angeluriot">
        <img src="https://avatars.githubusercontent.com/u/46031994?s=72&u=8636531cc02d42681ad0935a16c18c6100ef0feb&v=4" height="12" />
        <b>Angel Uriot</b>
    </a></td><td>@blablacar</td><td>France</td><td>640</td><td>4</td></tr><tr><td>151</td><td><a href="https://github.com/dadoonet">
        <img src="https://avatars.githubusercontent.com/u/274222?s=72&u=0f1b78dd9419669d9e79bb47e7c152f9d7c26de9&v=4" height="12" />
        <b>David Pilato</b>
    </a></td><td>@elastic</td><td>France, Cergy</td><td>609</td><td>4</td></tr><tr><td>152</td><td><a href="https://github.com/byroot">
        <img src="https://avatars.githubusercontent.com/u/44640?s=72&v=4" height="12" />
        <b>Jean Boussier</b>
    </a></td><td>@Shopify (as @casperisfine)</td><td>Toulouse, France</td><td>580</td><td>4</td></tr><tr><td>153</td><td><a href="https://github.com/tarekziade">
        <img src="https://avatars.githubusercontent.com/u/250019?s=72&u=32895324ed3242985c9859858431b3fcafc4fff6&v=4" height="12" />
        <b>Tarek Ziade</b>
    </a></td><td>@mozilla</td><td>Turcey, Burgundy, France</td><td>574</td><td>4</td></tr><tr><td>154</td><td><a href="https://github.com/0intro">
        <img src="https://avatars.githubusercontent.com/u/6043744?s=72&u=3da32467d868e3ae8e27d13d93d371b154ab1eaf&v=4" height="12" />
        <b>David du Colombier</b>
    </a></td><td>@DataDog, ex-@videolabs</td><td>Paris, France</td><td>565</td><td>4</td></tr><tr><td>155</td><td><a href="https://github.com/stephane-caron">
        <img src="https://avatars.githubusercontent.com/u/1189580?s=72&u=783fb4eb71dec521b55e3b6a08a751436196c7c7&v=4" height="12" />
        <b>Stéphane Caron</b>
    </a></td><td>Inria</td><td>Paris</td><td>560</td><td>4</td></tr><tr><td>156</td><td><a href="https://github.com/teh-cmc">
        <img src="https://avatars.githubusercontent.com/u/2910679?s=72&u=21549b9a01e9e644a422f9c2dc62cd3b37a83eaf&v=4" height="12" />
        <b>Clement Rey</b>
    </a></td><td>@rerun-io</td><td>Paris, France</td><td>547</td><td>4</td></tr><tr><td>157</td><td><a href="https://github.com/tpaviot">
        <img src="https://avatars.githubusercontent.com/u/660130?s=72&u=8b187f9e0eebbe326c738320cbe5a9df34c753d4&v=4" height="12" />
        <b>Thomas Paviot</b>
    </a></td><td>University of Burgundy</td><td>France</td><td>514</td><td>4</td></tr><tr><td>158</td><td><a href="https://github.com/huextrat">
        <img src="https://avatars.githubusercontent.com/u/22995315?s=72&v=4" height="12" />
        <b>Hugo EXTRAT</b>
    </a></td><td>@appchoose</td><td>Lyon, France</td><td>505</td><td>4</td></tr><tr><td>159</td><td><a href="https://github.com/thom4parisot">
        <img src="https://avatars.githubusercontent.com/u/138627?s=72&u=02cc8f8fdcfa8f7195ab8db25b0080797da40307&v=4" height="12" />
        <b>Thomas Parisot</b>
    </a></td><td>détour.studio</td><td>Crest, Drôme, France</td><td>505</td><td>4</td></tr><tr><td>160</td><td><a href="https://github.com/guillaumebort">
        <img src="https://avatars.githubusercontent.com/u/94658?s=72&u=4958470fd3fb929ca24839f307d5dc65685a06e4&v=4" height="12" />
        <b>Guillaume Bort</b>
    </a></td><td>Datadog</td><td>Paris</td><td>504</td><td>4</td></tr><tr><td>161</td><td><a href="https://github.com/helaili">
        <img src="https://avatars.githubusercontent.com/u/2787414?s=72&u=5a502ce8ed44bf027687edf442390ff250e00b35&v=4" height="12" />
        <b>Alain Hélaïli</b>
    </a></td><td>GitHub</td><td>Paris</td><td>499</td><td>4</td></tr><tr><td>162</td><td><a href="https://github.com/martinRenou">
        <img src="https://avatars.githubusercontent.com/u/21197331?s=72&u=c8e008de470bb93523fe837b1dd00c893b827ecf&v=4" height="12" />
        <b>martinRenou</b>
    </a></td><td>@QuantStack</td><td>Angers (France)</td><td>479</td><td>4</td></tr><tr><td>163</td><td><a href="https://github.com/cderv">
        <img src="https://avatars.githubusercontent.com/u/6791940?s=72&u=a663577929b49c1add41e6d7ffe3210e819c7a4e&v=4" height="12" />
        <b>Christophe Dervieux</b>
    </a></td><td>https://posit.co</td><td>Paris</td><td>478</td><td>4</td></tr><tr><td>164</td><td><a href="https://github.com/millsp">
        <img src="https://avatars.githubusercontent.com/u/18401805?s=72&u=2318b2d8f5f09a3cc1454121661f4ba9064a6c8b&v=4" height="12" />
        <b>pierre</b>
    </a></td><td>@prisma</td><td>France</td><td>467</td><td>4</td></tr><tr><td>165</td><td><a href="https://github.com/tito">
        <img src="https://avatars.githubusercontent.com/u/37904?s=72&u=f3f765bff224c8139b9d5ea761818976a38f2037&v=4" height="12" />
        <b>Mathieu Virbel</b>
    </a></td><td>Melting Rocks</td><td>Lille</td><td>455</td><td>4</td></tr><tr><td>166</td><td><a href="https://github.com/kefranabg">
        <img src="https://avatars.githubusercontent.com/u/9840435?s=72&u=558f29861b9745b9900982eb73598dcd9c498199&v=4" height="12" />
        <b>Franck Abgrall</b>
    </a></td><td>Visage</td><td>Nantes, France</td><td>440</td><td>4</td></tr><tr><td>167</td><td><a href="https://github.com/mrkkrp">
        <img src="https://avatars.githubusercontent.com/u/8165792?s=72&u=d1f6d1a5e2a1f73d8f3255172d3fd2a1b5091e02&v=4" height="12" />
        <b>Mark Karpov</b>
    </a></td><td>@tweag</td><td>Château-Thierry, France</td><td>433</td><td>4</td></tr><tr><td>168</td><td><a href="https://github.com/jponge">
        <img src="https://avatars.githubusercontent.com/u/25961?s=72&u=42502a8051aa59eb90ee640617568f05be85bc86&v=4" height="12" />
        <b>Julien Ponge</b>
    </a></td><td>Red Hat</td><td>Lyon, France</td><td>416</td><td>4</td></tr><tr><td>169</td><td><a href="https://github.com/mynameisfiber">
        <img src="https://avatars.githubusercontent.com/u/47370?s=72&u=423710593aa928eacd33015d9e6460736b8d90e3&v=4" height="12" />
        <b>Micha Gorelick</b>
    </a></td><td>@digital-witness-lab </td><td>Montpellier, FR</td><td>415</td><td>4</td></tr><tr><td>170</td><td><a href="https://github.com/ffoodd">
        <img src="https://avatars.githubusercontent.com/u/2890570?s=72&v=4" height="12" />
        <b>Gaël Poupard</b>
    </a></td><td>-</td><td>Nantes</td><td>404</td><td>4</td></tr><tr><td>171</td><td><a href="https://github.com/alejandro-ao">
        <img src="https://avatars.githubusercontent.com/u/18406448?s=72&v=4" height="12" />
        <b>Alejandro AO</b>
    </a></td><td>-</td><td>Bordeaux, France</td><td>389</td><td>4</td></tr><tr><td>172</td><td><a href="https://github.com/raphaelvallat">
        <img src="https://avatars.githubusercontent.com/u/25703792?s=72&u=106689cdafc3ba03b63d8311b08a54344a56d831&v=4" height="12" />
        <b>Raphael Vallat</b>
    </a></td><td>Oura Ring</td><td>Lyon, France</td><td>377</td><td>4</td></tr><tr><td>173</td><td><a href="https://github.com/alexandreruban">
        <img src="https://avatars.githubusercontent.com/u/33979976?s=72&u=55cb7b791cdb7adf94ee02066347b63c0f835fe3&v=4" height="12" />
        <b>Alexandre Ruban</b>
    </a></td><td>-</td><td>Lyon, France</td><td>377</td><td>4</td></tr><tr><td>174</td><td><a href="https://github.com/ndeloof">
        <img src="https://avatars.githubusercontent.com/u/132757?s=72&v=4" height="12" />
        <b>Nicolas De loof</b>
    </a></td><td>Docker</td><td>Rennes, France</td><td>373</td><td>4</td></tr><tr><td>175</td><td><a href="https://github.com/tobozo">
        <img src="https://avatars.githubusercontent.com/u/1893754?s=72&u=abeb81f7fd64a894c9749afc1e54c823e872c254&v=4" height="12" />
        <b>tobozo</b>
    </a></td><td>-</td><td>Paris, France </td><td>367</td><td>4</td></tr><tr><td>176</td><td><a href="https://github.com/lhoestq">
        <img src="https://avatars.githubusercontent.com/u/42851186?s=72&u=441d4b0bdf0915a4b1369e79b5b77092b8670928&v=4" height="12" />
        <b>Quentin Lhoest</b>
    </a></td><td>Hugging Face</td><td>Paris</td><td>357</td><td>4</td></tr><tr><td>177</td><td><a href="https://github.com/ganatan">
        <img src="https://avatars.githubusercontent.com/u/32958393?s=72&u=fc4800d819397a6bc72c65257ae230c3348b8627&v=4" height="12" />
        <b>danny</b>
    </a></td><td>ganatan</td><td>France</td><td>356</td><td>4</td></tr><tr><td>178</td><td><a href="https://github.com/martinbonnin">
        <img src="https://avatars.githubusercontent.com/u/3974977?s=72&u=309f78046395d0c58ca6afbdb5ddf82c939ae66c&v=4" height="12" />
        <b>Martin Bonnin</b>
    </a></td><td>Apollo GraphQL</td><td>Paris</td><td>353</td><td>4</td></tr><tr><td>179</td><td><a href="https://github.com/kartben">
        <img src="https://avatars.githubusercontent.com/u/128251?s=72&v=4" height="12" />
        <b>Benjamin Cabé</b>
    </a></td><td>-</td><td>Toulouse, France</td><td>341</td><td>4</td></tr><tr><td>180</td><td><a href="https://github.com/felhix">
        <img src="https://avatars.githubusercontent.com/u/14750029?s=72&u=887874b08f944626a77d4d5f0f9b0716b3b376c3&v=4" height="12" />
        <b>Félix Gaudé</b>
    </a></td><td>@TheHackingProject </td><td>Paris, France</td><td>319</td><td>4</td></tr><tr><td>181</td><td><a href="https://github.com/flozz">
        <img src="https://avatars.githubusercontent.com/u/971438?s=72&u=327f13393db4e4314f06a920a20ea55b1a3f8e00&v=4" height="12" />
        <b>Fabien LOISON</b>
    </a></td><td>@wanadev </td><td>Lyon, France</td><td>317</td><td>4</td></tr><tr><td>182</td><td><a href="https://github.com/benjamincanac">
        <img src="https://avatars.githubusercontent.com/u/739984?s=72&u=a263ce7469841c60ad76354f0779055b7e8365d5&v=4" height="12" />
        <b>Benjamin Canac</b>
    </a></td><td>@nuxtlabs</td><td>Bordeaux</td><td>314</td><td>4</td></tr><tr><td>183</td><td><a href="https://github.com/tbruyelle">
        <img src="https://avatars.githubusercontent.com/u/92280?s=72&u=bea626ad4024e0727ca1f358b0e007f928e128d6&v=4" height="12" />
        <b>Thomas Bruyelle</b>
    </a></td><td>@allinbits</td><td>Montpellier, France</td><td>312</td><td>4</td></tr><tr><td>184</td><td><a href="https://github.com/baptisteArno">
        <img src="https://avatars.githubusercontent.com/u/16015833?s=72&u=176af81234c692c3b2ecc37aaae5dbb815fa0a36&v=4" height="12" />
        <b>Baptiste Arnaud</b>
    </a></td><td>-</td><td>Paris, France</td><td>311</td><td>4</td></tr><tr><td>185</td><td><a href="https://github.com/rap2hpoutre">
        <img src="https://avatars.githubusercontent.com/u/1575946?s=72&u=23e0b1c5feb3d6ad4862afd1393ae651b93ff960&v=4" height="12" />
        <b>Raphaël Huchet</b>
    </a></td><td>@betagouv</td><td>Nantes</td><td>308</td><td>4</td></tr><tr><td>186</td><td><a href="https://github.com/nono">
        <img src="https://avatars.githubusercontent.com/u/2767?s=72&u=ff72b1ad63026e0729acc2dd41378e28ab704a3f&v=4" height="12" />
        <b>Bruno Michel</b>
    </a></td><td>Cozy Cloud</td><td>Paris, France</td><td>293</td><td>4</td></tr><tr><td>187</td><td><a href="https://github.com/adrien2p">
        <img src="https://avatars.githubusercontent.com/u/25098370?s=72&u=366d976be7b156815c6712f7f8ecf35b3d0ff06e&v=4" height="12" />
        <b>Adrien de Peretti</b>
    </a></td><td>Medusajs</td><td>Lyon (France)</td><td>290</td><td>4</td></tr><tr><td>188</td><td><a href="https://github.com/gsmet">
        <img src="https://avatars.githubusercontent.com/u/1279749?s=72&u=e462a6165ea17647aed446ca31fae604338ae18c&v=4" height="12" />
        <b>Guillaume Smet</b>
    </a></td><td>Red Hat</td><td>Lyon, France</td><td>289</td><td>4</td></tr><tr><td>189</td><td><a href="https://github.com/yogsototh">
        <img src="https://avatars.githubusercontent.com/u/93899?s=72&v=4" height="12" />
        <b>Yann Esposito</b>
    </a></td><td>@threatgrid</td><td>Sophia Antipolis, France</td><td>286</td><td>4</td></tr><tr><td>190</td><td><a href="https://github.com/krokrob">
        <img src="https://avatars.githubusercontent.com/u/9978111?s=72&u=c37facf1cbac09f637751b492b6026e927b67b6c&v=4" height="12" />
        <b>Kevin ROBERT</b>
    </a></td><td>@lewagon </td><td>Paris</td><td>282</td><td>4</td></tr><tr><td>191</td><td><a href="https://github.com/pvictor">
        <img src="https://avatars.githubusercontent.com/u/4415580?s=72&u=20521e4b00f77d0e22b042bff019ed86abd03913&v=4" height="12" />
        <b>Victor Perrier</b>
    </a></td><td>@dreamRs </td><td>Paris, France</td><td>279</td><td>4</td></tr><tr><td>192</td><td><a href="https://github.com/mickaelandrieu">
        <img src="https://avatars.githubusercontent.com/u/1247388?s=72&u=599f6e73e452a9453f2bd91e5c3100750e731ad4&v=4" height="12" />
        <b>Mickaël Andrieu</b>
    </a></td><td>Article-1</td><td>Bordeaux, France</td><td>276</td><td>4</td></tr><tr><td>193</td><td><a href="https://github.com/vadimkantorov">
        <img src="https://avatars.githubusercontent.com/u/1041752?s=72&u=51c5c08f0f9be5206c4d5d6b3d09492bb6f9aa69&v=4" height="12" />
        <b>Vadim Kantorov</b>
    </a></td><td>INRIA</td><td>Paris, France</td><td>274</td><td>4</td></tr><tr><td>194</td><td><a href="https://github.com/Jguer">
        <img src="https://avatars.githubusercontent.com/u/8071073?s=72&u=31dcf861785552275aea3a89860b081ed114ee1f&v=4" height="12" />
        <b>Jo</b>
    </a></td><td>-</td><td>Paris, France</td><td>272</td><td>4</td></tr><tr><td>195</td><td><a href="https://github.com/veloce">
        <img src="https://avatars.githubusercontent.com/u/423393?s=72&v=4" height="12" />
        <b>Vincent Velociter</b>
    </a></td><td>lichess.org</td><td>France</td><td>271</td><td>4</td></tr><tr><td>196</td><td><a href="https://github.com/albertvillanova">
        <img src="https://avatars.githubusercontent.com/u/8515462?s=72&u=72a51bbb90c88db85efbc9260c63b0d6adfdfceb&v=4" height="12" />
        <b>Albert Villanova del Moral</b>
    </a></td><td>@huggingface @aiinnova</td><td>Paris (France)</td><td>269</td><td>4</td></tr><tr><td>197</td><td><a href="https://github.com/Betree">
        <img src="https://avatars.githubusercontent.com/u/1556356?s=72&u=3c91c5aba00cafe42284c7bce69e8b813e38b64d&v=4" height="12" />
        <b>Benjamin Piouffle</b>
    </a></td><td>@opencollective, @CaptainFact</td><td>La Ciotat, France</td><td>266</td><td>4</td></tr><tr><td>198</td><td><a href="https://github.com/julien-duponchelle">
        <img src="https://avatars.githubusercontent.com/u/345437?s=72&u=9adbd1bb8c652d1533471761063ac3700c4dfdc0&v=4" height="12" />
        <b>Julien Duponchelle</b>
    </a></td><td>-</td><td>Paris</td><td>263</td><td>4</td></tr><tr><td>199</td><td><a href="https://github.com/mauricesvay">
        <img src="https://avatars.githubusercontent.com/u/265349?s=72&u=f5cccb70201f0106834b2c1fc66af8c2f7d281ec&v=4" height="12" />
        <b>Maurice Svay</b>
    </a></td><td>-</td><td>Paris, France</td><td>259</td><td>4</td></tr><tr><td>200</td><td><a href="https://github.com/elbywan">
        <img src="https://avatars.githubusercontent.com/u/3428394?s=72&u=88d0088a68dd5e71c49063a5f97fe04d34d1e6ae&v=4" height="12" />
        <b>Julien Elbaz</b>
    </a></td><td>Datadog</td><td>Paris, France</td><td>248</td><td>4</td></tr>
    </tbody>
</table>

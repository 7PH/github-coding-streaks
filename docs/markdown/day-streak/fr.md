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
    </a></td><td>Freelancer</td><td>Montpellier, France</td><td>313</td><td>1.54K</td></tr><tr><td>🥈</td><td><a href="https://github.com/rozierguillaume">
        <img src="https://avatars.githubusercontent.com/u/22763678?s=72&u=f10c1d50d6f9ce7ed6c7d64a767c02911df19cf4&v=4" height="12" />
        <b>Guillaume Rozier</b>
    </a></td><td>-</td><td>Paris</td><td>333</td><td>917</td></tr><tr><td>🥉</td><td><a href="https://github.com/Caceresenzo">
        <img src="https://avatars.githubusercontent.com/u/7386242?s=72&u=17d4617bb086732fd4da9287942494386d06ebb3&v=4" height="12" />
        <b>Enzo Caceres</b>
    </a></td><td>-</td><td>France</td><td>167</td><td>760</td></tr><tr><td>4</td><td><a href="https://github.com/bloodyowl">
        <img src="https://avatars.githubusercontent.com/u/1688645?s=72&u=7f12174aeae34c99861918836ef527b7fd927101&v=4" height="12" />
        <b>Matthias Le Brun</b>
    </a></td><td>@swan-io</td><td>Paris, France</td><td>391</td><td>697</td></tr><tr><td>5</td><td><a href="https://github.com/MoOx">
        <img src="https://avatars.githubusercontent.com/u/157534?s=72&u=399d4103e3bcf74bb9ef02eb5fe5da40dc90d2db&v=4" height="12" />
        <b>Max Thirouin</b>
    </a></td><td>Freelance at MoOx.io</td><td>Toulouse, France</td><td>1.22K</td><td>552</td></tr><tr><td>6</td><td><a href="https://github.com/Haroenv">
        <img src="https://avatars.githubusercontent.com/u/6270048?s=72&u=767b8fde5c473100da40c50fd2f7c2df139c8d48&v=4" height="12" />
        <b>Haroen Viaene</b>
    </a></td><td>@algolia</td><td>Paris, France</td><td>535</td><td>528</td></tr><tr><td>7</td><td><a href="https://github.com/stephrobert">
        <img src="https://avatars.githubusercontent.com/u/681788?s=72&u=cda76428fe4d06957a063238e1dcc1d4c4ae2cf6&v=4" height="12" />
        <b>Stéphane ROBERT</b>
    </a></td><td>Adlere</td><td>Lille</td><td>217</td><td>457</td></tr><tr><td>8</td><td><a href="https://github.com/innocenzi">
        <img src="https://avatars.githubusercontent.com/u/16060559?s=72&u=cf061757407ef529958cf24bac8d2f699ad6e6ed&v=4" height="12" />
        <b>Enzo Innocenzi</b>
    </a></td><td>Developer @JetflyAviation</td><td>France</td><td>311</td><td>402</td></tr><tr><td>9</td><td><a href="https://github.com/imath">
        <img src="https://avatars.githubusercontent.com/u/1834524?s=72&v=4" height="12" />
        <b>imath</b>
    </a></td><td>-</td><td>Paris</td><td>170</td><td>396</td></tr><tr><td>10</td><td><a href="https://github.com/Progi1984">
        <img src="https://avatars.githubusercontent.com/u/1533248?s=72&u=096bead2eab90e4795096b7d518583223dd34be6&v=4" height="12" />
        <b>Progi1984</b>
    </a></td><td>@PrestaShopCorp </td><td>Rennes, France</td><td>207</td><td>344</td></tr><tr><td>11</td><td><a href="https://github.com/FGRibreau">
        <img src="https://avatars.githubusercontent.com/u/138050?s=72&u=a3ba0d324f400f6497eca4a3d273f5020a4c7b31&v=4" height="12" />
        <b>Francois-Guillaume Ribreau</b>
    </a></td><td>@nobullshitbooks @netwo-io @hook0 @image-charts  @killbugtoday @mailpopin  / Sold @Redsmin @bringr</td><td>France</td><td>721</td><td>290</td></tr><tr><td>12</td><td><a href="https://github.com/nhoizey">
        <img src="https://avatars.githubusercontent.com/u/78213?s=72&v=4" height="12" />
        <b>Nicolas Hoizey</b>
    </a></td><td>@cleverage</td><td>Paris, France</td><td>238</td><td>288</td></tr><tr><td>13</td><td><a href="https://github.com/mcanouil">
        <img src="https://avatars.githubusercontent.com/u/8896044?s=72&u=86a5cbe0323a90349d87b7fa1fd4b22ae9d45ea2&v=4" height="12" />
        <b>Mickaël Canouil</b>
    </a></td><td>-</td><td>Lille, France</td><td>175</td><td>251</td></tr><tr><td>14</td><td><a href="https://github.com/maelle">
        <img src="https://avatars.githubusercontent.com/u/8360597?s=72&u=824f03caa87c92420352e3dd9a05470320a67412&v=4" height="12" />
        <b>Maëlle Salmon</b>
    </a></td><td>@ropensci</td><td>Nancy, France</td><td>921</td><td>211</td></tr><tr><td>15</td><td><a href="https://github.com/vietj">
        <img src="https://avatars.githubusercontent.com/u/225674?s=72&u=cd869981e0cd6d95f3c61e7275ce1ad5940fc76e&v=4" height="12" />
        <b>Julien Viet</b>
    </a></td><td>Red Hat</td><td>Marseille</td><td>972</td><td>159</td></tr><tr><td>16</td><td><a href="https://github.com/dherault">
        <img src="https://avatars.githubusercontent.com/u/4154003?s=72&u=4b24359c0f156b3bba83ea1ad3f030cb7a55d2e0&v=4" height="12" />
        <b>David Hérault</b>
    </a></td><td>@toptal</td><td>Aix-en-Provence, France</td><td>186</td><td>159</td></tr><tr><td>17</td><td><a href="https://github.com/QuiiBz">
        <img src="https://avatars.githubusercontent.com/u/43268759?s=72&u=1d8c6583c1cce98b7baeecd2b9646a9f41292376&v=4" height="12" />
        <b>Tom Lienard</b>
    </a></td><td>@scaleway</td><td>Paris</td><td>387</td><td>151</td></tr><tr><td>18</td><td><a href="https://github.com/BrunoLevy">
        <img src="https://avatars.githubusercontent.com/u/19478253?s=72&u=5d291f158e7d7f0ebb99475e5f8974a7a8ec374d&v=4" height="12" />
        <b>Bruno Levy</b>
    </a></td><td>@inria</td><td>Nancy, France</td><td>523</td><td>97</td></tr><tr><td>19</td><td><a href="https://github.com/crazy-max">
        <img src="https://avatars.githubusercontent.com/u/1951866?s=72&v=4" height="12" />
        <b>CrazyMax</b>
    </a></td><td>@docker</td><td>France</td><td>2.23K</td><td>82</td></tr><tr><td>20</td><td><a href="https://github.com/antoinevastel">
        <img src="https://avatars.githubusercontent.com/u/5827148?s=72&v=4" height="12" />
        <b>antoine vastel</b>
    </a></td><td>-</td><td>Lille, France</td><td>290</td><td>77</td></tr><tr><td>21</td><td><a href="https://github.com/pkestene">
        <img src="https://avatars.githubusercontent.com/u/8276295?s=72&v=4" height="12" />
        <b>Pierre Kestener</b>
    </a></td><td>CEA</td><td>France</td><td>182</td><td>54</td></tr><tr><td>22</td><td><a href="https://github.com/rouault">
        <img src="https://avatars.githubusercontent.com/u/1192433?s=72&u=947be9d1eb18e70faa08dbdedf84de7a1e2568f4&v=4" height="12" />
        <b>Even Rouault</b>
    </a></td><td>Spatialys</td><td>France</td><td>611</td><td>48</td></tr><tr><td>23</td><td><a href="https://github.com/rubenfiszel">
        <img src="https://avatars.githubusercontent.com/u/275584?s=72&u=eb0fe584ca9e8636a35ab822b93cc4a1ad10bf42&v=4" height="12" />
        <b>Ruben Fiszel</b>
    </a></td><td>Windmill</td><td>Paris, France</td><td>200</td><td>43</td></tr><tr><td>24</td><td><a href="https://github.com/mykiwi">
        <img src="https://avatars.githubusercontent.com/u/334432?s=72&u=8e0e09ca184a8891c4731401f39edba0895834c2&v=4" height="12" />
        <b>Romain Gautier</b>
    </a></td><td>freelancer</td><td>Nantes, France</td><td>190</td><td>36</td></tr><tr><td>25</td><td><a href="https://github.com/GuillaumeGomez">
        <img src="https://avatars.githubusercontent.com/u/3050060?s=72&u=6ca85464b07c5464a052250a4fc3e3f9c03c97ed&v=4" height="12" />
        <b>Guillaume Gomez</b>
    </a></td><td>@huawei</td><td>Paris</td><td>1.26K</td><td>31</td></tr><tr><td>26</td><td><a href="https://github.com/mcombeau">
        <img src="https://avatars.githubusercontent.com/u/52008667?s=72&u=889adc6df09a8b3f8ee8944b7179bf857860ac7c&v=4" height="12" />
        <b>Mia Combeau</b>
    </a></td><td>@42School</td><td>Paris, France</td><td>426</td><td>31</td></tr><tr><td>27</td><td><a href="https://github.com/lovasoa">
        <img src="https://avatars.githubusercontent.com/u/552629?s=72&u=3b5257f8d20ea6c313ed91ba80c024c3f00cf5dc&v=4" height="12" />
        <b>Ophir LOJKINE</b>
    </a></td><td>@auto-grid @enexflow </td><td>Paris, France</td><td>444</td><td>28</td></tr><tr><td>28</td><td><a href="https://github.com/Phyronnaz">
        <img src="https://avatars.githubusercontent.com/u/16806877?s=72&u=9f22d47f8682df3061081987287e90d40f553cc8&v=4" height="12" />
        <b>Phyronnaz</b>
    </a></td><td>-</td><td>France</td><td>266</td><td>23</td></tr><tr><td>29</td><td><a href="https://github.com/benjamincrozat">
        <img src="https://avatars.githubusercontent.com/u/3613731?s=72&v=4" height="12" />
        <b>Benjamin Crozat</b>
    </a></td><td>Benjamin Crozat</td><td>France</td><td>205</td><td>23</td></tr><tr><td>30</td><td><a href="https://github.com/fabpot">
        <img src="https://avatars.githubusercontent.com/u/47313?s=72&u=7ba05204271a726f8642ac15864e2f361b5c0198&v=4" height="12" />
        <b>Fabien Potencier</b>
    </a></td><td>Symfony/Platform.sh/Blackfire</td><td>Paris, France</td><td>13.1K</td><td>21</td></tr><tr><td>31</td><td><a href="https://github.com/ptitSeb">
        <img src="https://avatars.githubusercontent.com/u/3250792?s=72&u=f206420ae21c0bbf92fea09871f11adea98adb39&v=4" height="12" />
        <b>ptitSeb</b>
    </a></td><td>-</td><td>France</td><td>546</td><td>16</td></tr><tr><td>32</td><td><a href="https://github.com/Kerollmops">
        <img src="https://avatars.githubusercontent.com/u/3610253?s=72&u=12492ae6cdfa655c09e69305c5e03b1730194001&v=4" height="12" />
        <b>Clément Renault</b>
    </a></td><td>@meilisearch</td><td>France, Paris</td><td>449</td><td>16</td></tr><tr><td>33</td><td><a href="https://github.com/SimonMarquis">
        <img src="https://avatars.githubusercontent.com/u/1921278?s=72&u=ace12a9fb3a0532f35285bce04898f7a7c97b2f9&v=4" height="12" />
        <b>Simon Marquis</b>
    </a></td><td>@leboncoin</td><td>Paris, France</td><td>314</td><td>16</td></tr><tr><td>34</td><td><a href="https://github.com/sylvestre">
        <img src="https://avatars.githubusercontent.com/u/733326?s=72&v=4" height="12" />
        <b>Sylvestre Ledru</b>
    </a></td><td>Mozilla</td><td>France</td><td>311</td><td>16</td></tr><tr><td>35</td><td><a href="https://github.com/jedisct1">
        <img src="https://avatars.githubusercontent.com/u/124872?s=72&v=4" height="12" />
        <b>Frank Denis</b>
    </a></td><td>-</td><td>France</td><td>3.59K</td><td>15</td></tr><tr><td>36</td><td><a href="https://github.com/StanGirard">
        <img src="https://avatars.githubusercontent.com/u/19614572?s=72&u=173c2e47345431892f3101b4febe851ea99c08ad&v=4" height="12" />
        <b>Stan Girard</b>
    </a></td><td>@Theodo</td><td>Paris</td><td>1.66K</td><td>15</td></tr><tr><td>37</td><td><a href="https://github.com/dgageot">
        <img src="https://avatars.githubusercontent.com/u/153495?s=72&u=7a06a6cbf585d2f329484b4f0b900bf48eee9b29&v=4" height="12" />
        <b>David Gageot</b>
    </a></td><td>Docker</td><td>Paris, France</td><td>682</td><td>15</td></tr><tr><td>38</td><td><a href="https://github.com/glemaitre">
        <img src="https://avatars.githubusercontent.com/u/7454015?s=72&u=d9704641f89c00ce86f8207e59aedb554109d7fa&v=4" height="12" />
        <b>Guillaume Lemaitre</b>
    </a></td><td>Scikit-learn @ Inria foundation</td><td>Paris-Saclay / France</td><td>661</td><td>15</td></tr><tr><td>39</td><td><a href="https://github.com/jonathantribouharet">
        <img src="https://avatars.githubusercontent.com/u/188946?s=72&u=7298b69cfb0aa8c1055ac262e7367d18a41b9cb8&v=4" height="12" />
        <b>Jonathan Vukovich</b>
    </a></td><td>@yokitup</td><td>Paris, France</td><td>343</td><td>15</td></tr><tr><td>40</td><td><a href="https://github.com/corsonr">
        <img src="https://avatars.githubusercontent.com/u/1649788?s=72&u=36a376b200fd98e6100788c1ec39b3b7e912797a&v=4" height="12" />
        <b>Remi Corson</b>
    </a></td><td>Automattic, Inc.</td><td>France</td><td>240</td><td>15</td></tr><tr><td>41</td><td><a href="https://github.com/avivace">
        <img src="https://avatars.githubusercontent.com/u/14352721?s=72&u=08e677ada7800546456c6610c08ea83cd275f0c6&v=4" height="12" />
        <b>Antonio Vivace</b>
    </a></td><td>@EUROCONTROL</td><td>Paris</td><td>219</td><td>15</td></tr><tr><td>42</td><td><a href="https://github.com/clun">
        <img src="https://avatars.githubusercontent.com/u/726536?s=72&u=808319222b6d6b4a90ef3ba91a58028170c25029&v=4" height="12" />
        <b>Cedrick Lunven</b>
    </a></td><td>DataStax, FF4j</td><td>France</td><td>162</td><td>15</td></tr><tr><td>43</td><td><a href="https://github.com/eskatos">
        <img src="https://avatars.githubusercontent.com/u/132773?s=72&u=868442b2412111d43bf07e01ce0dc87bb410b80c&v=4" height="12" />
        <b>Paul Merlin</b>
    </a></td><td>Gradle</td><td>France</td><td>159</td><td>15</td></tr><tr><td>44</td><td><a href="https://github.com/DeveloppeurPascal">
        <img src="https://avatars.githubusercontent.com/u/29439699?s=72&u=3b413495092a9927526da35a406812d44b64048b&v=4" height="12" />
        <b>Patrick Prémartin</b>
    </a></td><td>-</td><td>Orléans, France</td><td>236</td><td>13</td></tr><tr><td>45</td><td><a href="https://github.com/jdesboeufs">
        <img src="https://avatars.githubusercontent.com/u/1231232?s=72&u=71bac788fd58c4cb53ae18559b6ffecd1e218725&v=4" height="12" />
        <b>Jérôme Desboeufs</b>
    </a></td><td>Living Data Inc.</td><td>Paris</td><td>212</td><td>13</td></tr><tr><td>46</td><td><a href="https://github.com/thomasbnt">
        <img src="https://avatars.githubusercontent.com/u/14293805?s=72&u=6049cd0655f3ed1ec256e900bbcd3b540491bd09&v=4" height="12" />
        <b>Thomas Bnt</b>
    </a></td><td>Creator of @Mist3r-Robot</td><td>Toulouse, France</td><td>183</td><td>13</td></tr><tr><td>47</td><td><a href="https://github.com/pde-bakk">
        <img src="https://avatars.githubusercontent.com/u/36886300?s=72&u=09fd81e0c27e4980f382a4c276e24739df052aa9&v=4" height="12" />
        <b>Peer de Bakker</b>
    </a></td><td>-</td><td>42, Paris</td><td>165</td><td>13</td></tr><tr><td>48</td><td><a href="https://github.com/louischatriot">
        <img src="https://avatars.githubusercontent.com/u/926355?s=72&u=61b83299a47342078c7a68bd6373d206b7357ec2&v=4" height="12" />
        <b>Louis Chatriot</b>
    </a></td><td>@alma </td><td>Paris</td><td>395</td><td>12</td></tr><tr><td>49</td><td><a href="https://github.com/angristan">
        <img src="https://avatars.githubusercontent.com/u/11699655?s=72&u=03a18584b40e4d9fd656b2120c3e75232960b9ac&v=4" height="12" />
        <b>Stanislas</b>
    </a></td><td>Backend Engineer @qonto</td><td>Paris</td><td>1.55K</td><td>11</td></tr><tr><td>50</td><td><a href="https://github.com/samber">
        <img src="https://avatars.githubusercontent.com/u/2951285?s=72&u=571c795227b4edbd29f027478346834f83a95076&v=4" height="12" />
        <b>Samuel Berthe</b>
    </a></td><td>@ScreebApp </td><td>Nantes (France)</td><td>1.02K</td><td>11</td></tr><tr><td>51</td><td><a href="https://github.com/teivah">
        <img src="https://avatars.githubusercontent.com/u/934784?s=72&u=a3bcd31aa1872977f2f9d203f7d28d1faf0e978c&v=4" height="12" />
        <b>Teiva Harsanyi</b>
    </a></td><td>@google</td><td>France</td><td>787</td><td>11</td></tr><tr><td>52</td><td><a href="https://github.com/samhocevar">
        <img src="https://avatars.githubusercontent.com/u/245089?s=72&u=3bdd6a36b91d0fc859040a47f0b5fac441f513ab&v=4" height="12" />
        <b>Sam Hocevar</b>
    </a></td><td>@dontnod </td><td>Paris, France</td><td>469</td><td>11</td></tr><tr><td>53</td><td><a href="https://github.com/RaitoBezarius">
        <img src="https://avatars.githubusercontent.com/u/314564?s=72&u=2b23b8b25c888f248f04be073e6b4994f932f7b7&v=4" height="12" />
        <b>Ryan Lahfa</b>
    </a></td><td>Independent Contributor</td><td>France</td><td>279</td><td>11</td></tr><tr><td>54</td><td><a href="https://github.com/Delapouite">
        <img src="https://avatars.githubusercontent.com/u/39315?s=72&v=4" height="12" />
        <b>Bruno Heridet</b>
    </a></td><td>Powipu</td><td>Nantes / Lyon - France</td><td>204</td><td>11</td></tr><tr><td>55</td><td><a href="https://github.com/alexAubin">
        <img src="https://avatars.githubusercontent.com/u/4533074?s=72&u=b5f8724f330d62cc40522697d41948683cbb37c9&v=4" height="12" />
        <b>Alexandre Aubin</b>
    </a></td><td>@YunoHost </td><td>Strasbourg</td><td>159</td><td>11</td></tr><tr><td>56</td><td><a href="https://github.com/nvuillam">
        <img src="https://avatars.githubusercontent.com/u/17500430?s=72&u=24ff06a935acf56fe06678874e2b297debb66fac&v=4" height="12" />
        <b>Nicolas Vuillamy</b>
    </a></td><td>Cloudity</td><td>Paris, France</td><td>237</td><td>10</td></tr><tr><td>57</td><td><a href="https://github.com/Dimillian">
        <img src="https://avatars.githubusercontent.com/u/535509?s=72&u=764d85a6d85e56cb2029e0e64af1bf37296e02a4&v=4" height="12" />
        <b>Thomas Ricouard</b>
    </a></td><td>@Medium @Glose </td><td>France</td><td>2.43K</td><td>9</td></tr><tr><td>58</td><td><a href="https://github.com/phaazon">
        <img src="https://avatars.githubusercontent.com/u/506592?s=72&u=bdd2a0502a6a0097f8db5d4601e64ab62cb86b96&v=4" height="12" />
        <b>Dimitri Sabadie</b>
    </a></td><td>@datadog </td><td>France</td><td>788</td><td>9</td></tr><tr><td>59</td><td><a href="https://github.com/zoontek">
        <img src="https://avatars.githubusercontent.com/u/1902323?s=72&u=b208315a0d0fd583a7cbda7b1badac19b473dc30&v=4" height="12" />
        <b>Mathieu Acthernoene</b>
    </a></td><td>Swan</td><td>Paris</td><td>579</td><td>9</td></tr><tr><td>60</td><td><a href="https://github.com/forax">
        <img src="https://avatars.githubusercontent.com/u/828220?s=72&v=4" height="12" />
        <b>Rémi Forax</b>
    </a></td><td>University Gustave Eiffel (Paris)</td><td>Paris, France</td><td>494</td><td>9</td></tr><tr><td>61</td><td><a href="https://github.com/CedricGuillemet">
        <img src="https://avatars.githubusercontent.com/u/1312968?s=72&u=09586c4d429addaa7fc099437bebda780a9e39ed&v=4" height="12" />
        <b>Cedric Guillemet</b>
    </a></td><td>Microsoft</td><td>Redon, Brittany, France</td><td>396</td><td>9</td></tr><tr><td>62</td><td><a href="https://github.com/blanklob">
        <img src="https://avatars.githubusercontent.com/u/63895927?s=72&u=7812801bf0da4cd3aca715243c391ca14f4594ea&v=4" height="12" />
        <b>Youness Idbakkasse</b>
    </a></td><td>-</td><td>Paris, France</td><td>197</td><td>9</td></tr><tr><td>63</td><td><a href="https://github.com/DavidBruant">
        <img src="https://avatars.githubusercontent.com/u/165829?s=72&u=df01db3934deaab6aec73838911b00a6d162f118&v=4" height="12" />
        <b>David Bruant</b>
    </a></td><td>@lechappeebelle</td><td>Bordeaux, France</td><td>179</td><td>9</td></tr><tr><td>64</td><td><a href="https://github.com/busybox11">
        <img src="https://avatars.githubusercontent.com/u/29630035?s=72&u=e206de0c3ec13b38abb0c21945b2545a3a1e21e1&v=4" height="12" />
        <b>busybox</b>
    </a></td><td>Satelia</td><td>Bordeaux, France</td><td>165</td><td>9</td></tr><tr><td>65</td><td><a href="https://github.com/jcarpent">
        <img src="https://avatars.githubusercontent.com/u/1567317?s=72&v=4" height="12" />
        <b>Justin Carpentier</b>
    </a></td><td>Inria, Paris</td><td>Paris</td><td>163</td><td>9</td></tr><tr><td>66</td><td><a href="https://github.com/Calinou">
        <img src="https://avatars.githubusercontent.com/u/180032?s=72&v=4" height="12" />
        <b>Hugo Locurcio</b>
    </a></td><td>@godotengine</td><td>Troyes, France</td><td>1.15K</td><td>8</td></tr><tr><td>67</td><td><a href="https://github.com/enjoy-digital">
        <img src="https://avatars.githubusercontent.com/u/1450143?s=72&u=1a9912f1a280ca3120df158d0d6eca1af88f04fe&v=4" height="12" />
        <b>enjoy-digital</b>
    </a></td><td>EnjoyDigital</td><td>France</td><td>1.09K</td><td>8</td></tr><tr><td>68</td><td><a href="https://github.com/kartben">
        <img src="https://avatars.githubusercontent.com/u/128251?s=72&v=4" height="12" />
        <b>Benjamin Cabé</b>
    </a></td><td>-</td><td>Toulouse, France</td><td>339</td><td>8</td></tr><tr><td>69</td><td><a href="https://github.com/tgrall">
        <img src="https://avatars.githubusercontent.com/u/541250?s=72&u=ed72bb083428632c5788c3e65202d33c19953712&v=4" height="12" />
        <b>Tugdual Grall</b>
    </a></td><td>@github</td><td>Nantes, France</td><td>302</td><td>8</td></tr><tr><td>70</td><td><a href="https://github.com/davidbrochart">
        <img src="https://avatars.githubusercontent.com/u/4711805?s=72&u=d39696d995a9e02ec3613ffb2f62b20b14f92f26&v=4" height="12" />
        <b>David Brochart</b>
    </a></td><td>@QuantStack</td><td>France</td><td>268</td><td>8</td></tr><tr><td>71</td><td><a href="https://github.com/jderusse">
        <img src="https://avatars.githubusercontent.com/u/578547?s=72&u=df76d0514c86209a3fff8c9fb9d15ae8592c43c9&v=4" height="12" />
        <b>Jérémy Derussé</b>
    </a></td><td>Blackfire</td><td>Paris, France</td><td>246</td><td>8</td></tr><tr><td>72</td><td><a href="https://github.com/ooflorent">
        <img src="https://avatars.githubusercontent.com/u/168498?s=72&u=77c7b4c4f0a77e647d275a2114242065fe2975e9&v=4" height="12" />
        <b>Florent Cailhol</b>
    </a></td><td>-</td><td>Toulouse, France</td><td>202</td><td>8</td></tr><tr><td>73</td><td><a href="https://github.com/GromNaN">
        <img src="https://avatars.githubusercontent.com/u/400034?s=72&u=07314d8bce5dcff8c65fdcff04302ab788600465&v=4" height="12" />
        <b>Jérôme Tamarelle</b>
    </a></td><td>MongoDB</td><td>Rouen, France</td><td>163</td><td>8</td></tr><tr><td>74</td><td><a href="https://github.com/abougouffa">
        <img src="https://avatars.githubusercontent.com/u/3716399?s=72&u=ad7a1e120fef1c19d7b7864ac183798de2711c59&v=4" height="12" />
        <b>Abdelhak Bougouffa</b>
    </a></td><td>@ezWheelSAS & Paris-Saclay University</td><td>Paris, France</td><td>163</td><td>8</td></tr><tr><td>75</td><td><a href="https://github.com/Palakis">
        <img src="https://avatars.githubusercontent.com/u/1812130?s=72&u=3645c7b6b17170c5284d26cd6d38cbd09b9aaec4&v=4" height="12" />
        <b>Stéphane Lepin</b>
    </a></td><td>-</td><td>France</td><td>384</td><td>7</td></tr><tr><td>76</td><td><a href="https://github.com/regisb">
        <img src="https://avatars.githubusercontent.com/u/44319?s=72&v=4" height="12" />
        <b>Régis Behmo</b>
    </a></td><td>-</td><td>France</td><td>264</td><td>7</td></tr><tr><td>77</td><td><a href="https://github.com/wheybags">
        <img src="https://avatars.githubusercontent.com/u/1093274?s=72&v=4" height="12" />
        <b>Tom Mason</b>
    </a></td><td>Powder.gg</td><td>Paris, France</td><td>160</td><td>7</td></tr><tr><td>78</td><td><a href="https://github.com/Solido">
        <img src="https://avatars.githubusercontent.com/u/1295961?s=72&u=b85eaeb98c4c24aeec8046b7839a5ddf2d504289&v=4" height="12" />
        <b>Robert Felker</b>
    </a></td><td>-</td><td>France, Bordeaux</td><td>2.8K</td><td>6</td></tr><tr><td>79</td><td><a href="https://github.com/johnBuffer">
        <img src="https://avatars.githubusercontent.com/u/9960400?s=72&u=bc8911ac87edb913bca811d23f14c109d11e9dfa&v=4" height="12" />
        <b>Jean Tampon</b>
    </a></td><td>-</td><td>France</td><td>2.27K</td><td>6</td></tr><tr><td>80</td><td><a href="https://github.com/KtorZ">
        <img src="https://avatars.githubusercontent.com/u/5680256?s=72&u=020eb2bc68211d32c1691695b6ab22ad55478501&v=4" height="12" />
        <b>Matthias Benkort</b>
    </a></td><td>@cardano-foundation</td><td>Toulouse</td><td>383</td><td>6</td></tr><tr><td>81</td><td><a href="https://github.com/vincelwt">
        <img src="https://avatars.githubusercontent.com/u/5092466?s=72&u=713f9947e4315b6f0ef62ec5cccd978133006783&v=4" height="12" />
        <b>Vince Lwt</b>
    </a></td><td>llmonitor.com</td><td>France</td><td>323</td><td>6</td></tr><tr><td>82</td><td><a href="https://github.com/kylekatarnls">
        <img src="https://avatars.githubusercontent.com/u/5966783?s=72&v=4" height="12" />
        <b>Kyle</b>
    </a></td><td>-</td><td>France</td><td>311</td><td>6</td></tr><tr><td>83</td><td><a href="https://github.com/jfalcou">
        <img src="https://avatars.githubusercontent.com/u/285977?s=72&u=aa9be7c63023593e6e3fb7765390e789f31b7509&v=4" height="12" />
        <b>Joel Falcou</b>
    </a></td><td>University Paris Sud XI, CNRS</td><td>Orsay, France</td><td>247</td><td>6</td></tr><tr><td>84</td><td><a href="https://github.com/axeldelafosse">
        <img src="https://avatars.githubusercontent.com/u/10477267?s=72&u=0322ffa7017942defa4c6de7cdcd4d42b7d364e5&v=4" height="12" />
        <b>Axel Delafosse</b>
    </a></td><td>-</td><td>Paris</td><td>181</td><td>6</td></tr><tr><td>85</td><td><a href="https://github.com/ncannasse">
        <img src="https://avatars.githubusercontent.com/u/1022912?s=72&u=38096d7e5a4d2a553fb90e5dd30e8a4f4aa782be&v=4" height="12" />
        <b>Nicolas Cannasse</b>
    </a></td><td>Shiro Games</td><td>Bordeaux, France</td><td>978</td><td>5</td></tr><tr><td>86</td><td><a href="https://github.com/sebcrozet">
        <img src="https://avatars.githubusercontent.com/u/1734958?s=72&v=4" height="12" />
        <b>Sébastien Crozet</b>
    </a></td><td>Dimforge</td><td>France</td><td>602</td><td>5</td></tr><tr><td>87</td><td><a href="https://github.com/eko">
        <img src="https://avatars.githubusercontent.com/u/103900?s=72&u=d185654f4e625741e01fc42c4a625be4756344c0&v=4" height="12" />
        <b>Vincent Composieux</b>
    </a></td><td>Freelance</td><td>Annecy, France</td><td>406</td><td>5</td></tr><tr><td>88</td><td><a href="https://github.com/yhenon">
        <img src="https://avatars.githubusercontent.com/u/9943242?s=72&v=4" height="12" />
        <b>Yann Henon</b>
    </a></td><td>@axteams-software  </td><td>Antibes, France</td><td>307</td><td>5</td></tr><tr><td>89</td><td><a href="https://github.com/BellezaEmporium">
        <img src="https://avatars.githubusercontent.com/u/30985701?s=72&u=01282e8cda7d5f163e5bbee29b03222e0a5d247e&v=4" height="12" />
        <b>Ismaël Moret</b>
    </a></td><td>-</td><td>France</td><td>258</td><td>5</td></tr><tr><td>90</td><td><a href="https://github.com/franky47">
        <img src="https://avatars.githubusercontent.com/u/1174092?s=72&u=031f74d0f1d64c317fb1d79b883b42f4434b17d1&v=4" height="12" />
        <b>François Best</b>
    </a></td><td>@47ng | @chiffre-io</td><td>Grenoble, France</td><td>233</td><td>5</td></tr><tr><td>91</td><td><a href="https://github.com/Stormix">
        <img src="https://avatars.githubusercontent.com/u/18377687?s=72&u=39af1d1e6f0dfbc1c06089e15c8560c1464fb266&v=4" height="12" />
        <b>Anas Mazouni</b>
    </a></td><td>@Stormix-co </td><td>Marseille, France</td><td>232</td><td>5</td></tr><tr><td>92</td><td><a href="https://github.com/roblabla">
        <img src="https://avatars.githubusercontent.com/u/1069318?s=72&u=f270fc1cecf2076137002880491b4e25787de0e6&v=4" height="12" />
        <b>Robin Lambertz</b>
    </a></td><td>@Seed-Up </td><td>France, FR</td><td>200</td><td>5</td></tr><tr><td>93</td><td><a href="https://github.com/alextekartik">
        <img src="https://avatars.githubusercontent.com/u/1721046?s=72&u=b4c1efee357999e688c1974995902a636dc611fe&v=4" height="12" />
        <b>Alexandre Roux</b>
    </a></td><td>Tekartik</td><td>Ledignan, France</td><td>162</td><td>5</td></tr><tr><td>94</td><td><a href="https://github.com/Nazky">
        <img src="https://avatars.githubusercontent.com/u/56560636?s=72&u=cc05eb1f5d8ded850b7a5aba2710a20b4839bb94&v=4" height="12" />
        <b>Nazky</b>
    </a></td><td>@Hakkuraifu </td><td>France</td><td>159</td><td>5</td></tr><tr><td>95</td><td><a href="https://github.com/nicolas-grekas">
        <img src="https://avatars.githubusercontent.com/u/243674?s=72&u=85243de9963ea46d545961980e34e6538ad59fd1&v=4" height="12" />
        <b>Nicolas Grekas</b>
    </a></td><td>@SymfonyCorp</td><td>Paris, France</td><td>1.86K</td><td>4</td></tr><tr><td>96</td><td><a href="https://github.com/emersion">
        <img src="https://avatars.githubusercontent.com/u/506932?s=72&u=04995169ac1851b91ca12b47f4862ded1b108765&v=4" height="12" />
        <b>Simon Ser</b>
    </a></td><td>SourceHut</td><td>France</td><td>1.53K</td><td>4</td></tr><tr><td>97</td><td><a href="https://github.com/agramfort">
        <img src="https://avatars.githubusercontent.com/u/161052?s=72&u=28620e0e14597ad721a7505cf486aaf5687aea66&v=4" height="12" />
        <b>Alexandre Gramfort</b>
    </a></td><td>Meta</td><td>Paris, France</td><td>1.23K</td><td>4</td></tr><tr><td>98</td><td><a href="https://github.com/Androz2091">
        <img src="https://avatars.githubusercontent.com/u/42497995?s=72&u=6f40d52a49652087722a05d55013645bca6745b6&v=4" height="12" />
        <b>Simon</b>
    </a></td><td>-</td><td>France, Toulouse</td><td>1.17K</td><td>4</td></tr><tr><td>99</td><td><a href="https://github.com/xoofx">
        <img src="https://avatars.githubusercontent.com/u/715038?s=72&u=944abb5708b2c03b6c13e3284dd76bb327791456&v=4" height="12" />
        <b>Alexandre Mutel</b>
    </a></td><td>Unity-Technologies</td><td>Grenoble - France</td><td>1.08K</td><td>4</td></tr><tr><td>100</td><td><a href="https://github.com/nicolargo">
        <img src="https://avatars.githubusercontent.com/u/776747?s=72&u=aa191d095cac0b9bb8ff2aca1d87370b47c0edee&v=4" height="12" />
        <b>Nicolas Hennion</b>
    </a></td><td>Le blog de Nicolargo</td><td>Valbonne, France</td><td>752</td><td>4</td></tr><tr><td>101</td><td><a href="https://github.com/spolu">
        <img src="https://avatars.githubusercontent.com/u/15067?s=72&u=6297f8db333ba5fbf2be0ee9d796a09b1419115f&v=4" height="12" />
        <b>Stanislas Polu</b>
    </a></td><td>Dust</td><td>Paris</td><td>446</td><td>4</td></tr><tr><td>102</td><td><a href="https://github.com/k33g">
        <img src="https://avatars.githubusercontent.com/u/491848?s=72&u=332138d1fe94fc2ab4953428187a92663e14eeac&v=4" height="12" />
        <b>Philippe Charrière</b>
    </a></td><td>Bots Garden</td><td>Lyon (France)</td><td>313</td><td>4</td></tr><tr><td>103</td><td><a href="https://github.com/bfontaine">
        <img src="https://avatars.githubusercontent.com/u/1334295?s=72&u=30d05c3a40d258edf7cd28dfd1694a34d9349dc4&v=4" height="12" />
        <b>Baptiste Fontaine</b>
    </a></td><td>@bixoto</td><td>Paris, France</td><td>306</td><td>4</td></tr><tr><td>104</td><td><a href="https://github.com/l-lin">
        <img src="https://avatars.githubusercontent.com/u/5452304?s=72&u=2e2f03b021b647037453379a788385f317c8208f&v=4" height="12" />
        <b>Louis LIN</b>
    </a></td><td>BioSerenity</td><td>Paris</td><td>241</td><td>4</td></tr><tr><td>105</td><td><a href="https://github.com/greg0ire">
        <img src="https://avatars.githubusercontent.com/u/657779?s=72&u=96a0c076123934fb61c88da5b4d5b72b03dd69cb&v=4" height="12" />
        <b>Grégoire Paris</b>
    </a></td><td>@ManoManoTech </td><td>Paris</td><td>215</td><td>4</td></tr><tr><td>106</td><td><a href="https://github.com/Kleidukos">
        <img src="https://avatars.githubusercontent.com/u/29253044?s=72&u=e8403c7e0f102de7283623eabb3dee0318307346&v=4" height="12" />
        <b>Hécate Moonlight</b>
    </a></td><td>-</td><td>Paris</td><td>213</td><td>4</td></tr><tr><td>107</td><td><a href="https://github.com/mockersf">
        <img src="https://avatars.githubusercontent.com/u/8672791?s=72&u=6350847888b0006d335bc98ca32a5359389d26b5&v=4" height="12" />
        <b>François</b>
    </a></td><td>-</td><td>France</td><td>176</td><td>4</td></tr><tr><td>108</td><td><a href="https://github.com/astahmer">
        <img src="https://avatars.githubusercontent.com/u/47224540?s=72&u=3bc3ac9c3c1f64b68704b973c30aae89ad99cc66&v=4" height="12" />
        <b>Alexandre Stahmer</b>
    </a></td><td>-</td><td>Montpellier</td><td>170</td><td>4</td></tr><tr><td>109</td><td><a href="https://github.com/FaridSafi">
        <img src="https://avatars.githubusercontent.com/u/388375?s=72&u=a10567f0c2ae0b6a68a4d590c8fbdd40851a7d59&v=4" height="12" />
        <b>Farid Safi</b>
    </a></td><td>@LeReacteur</td><td>Paris, France</td><td>1.72K</td><td>3</td></tr><tr><td>110</td><td><a href="https://github.com/vincentbernat">
        <img src="https://avatars.githubusercontent.com/u/631446?s=72&v=4" height="12" />
        <b>Vincent Bernat</b>
    </a></td><td>Free</td><td>Paris, France</td><td>1.03K</td><td>3</td></tr><tr><td>111</td><td><a href="https://github.com/potatoqualitee">
        <img src="https://avatars.githubusercontent.com/u/8278033?s=72&u=5a511a15023e5852701b547a867cb56c1dcb21a7&v=4" height="12" />
        <b>Chrissy LeMaire</b>
    </a></td><td>@dataplat</td><td>North of France</td><td>851</td><td>3</td></tr><tr><td>112</td><td><a href="https://github.com/mgcrea">
        <img src="https://avatars.githubusercontent.com/u/108273?s=72&u=379828073e655f59a77fe54a362673c3fc60ec0a&v=4" height="12" />
        <b>Olivier Louvignes</b>
    </a></td><td>Freelance</td><td>Paris, France</td><td>760</td><td>3</td></tr><tr><td>113</td><td><a href="https://github.com/bzg">
        <img src="https://avatars.githubusercontent.com/u/63500?s=72&u=5388581f4d8481e5c9ea311d4fb12eedee21647f&v=4" height="12" />
        <b>Bastien</b>
    </a></td><td>@etalab</td><td>Paris</td><td>726</td><td>3</td></tr><tr><td>114</td><td><a href="https://github.com/NathanLovato">
        <img src="https://avatars.githubusercontent.com/u/12694995?s=72&u=e4abd5fa8b74c82c57955f490da199a1ac7b9d8c&v=4" height="12" />
        <b>Nathan Lovato</b>
    </a></td><td>GDQuest</td><td>France</td><td>718</td><td>3</td></tr><tr><td>115</td><td><a href="https://github.com/scraly">
        <img src="https://avatars.githubusercontent.com/u/2543381?s=72&u=d500ca96ff8a2a3f9b7bb300c71ed7e57449b072&v=4" height="12" />
        <b>Aurelie Vache</b>
    </a></td><td>ovh</td><td>Toulouse</td><td>633</td><td>3</td></tr><tr><td>116</td><td><a href="https://github.com/fraxken">
        <img src="https://avatars.githubusercontent.com/u/4438263?s=72&u=5e2d0c11f001871b76e25dd3a96bd662d6a706ba&v=4" height="12" />
        <b>Thomas.G</b>
    </a></td><td>@MyUnisoft</td><td>Paris</td><td>606</td><td>3</td></tr><tr><td>117</td><td><a href="https://github.com/davidgohel">
        <img src="https://avatars.githubusercontent.com/u/4331618?s=72&v=4" height="12" />
        <b>David Gohel</b>
    </a></td><td>ArData</td><td>Paris</td><td>506</td><td>3</td></tr><tr><td>118</td><td><a href="https://github.com/gus33000">
        <img src="https://avatars.githubusercontent.com/u/3755345?s=72&u=8be4944a8331aaff14de13cf7f0354c4a8c192b8&v=4" height="12" />
        <b>Gustave Monce</b>
    </a></td><td>labri</td><td>France</td><td>436</td><td>3</td></tr><tr><td>119</td><td><a href="https://github.com/arnaud-lb">
        <img src="https://avatars.githubusercontent.com/u/365207?s=72&u=b7116aa4d644d6b20bed3122a1d03cf8b2a514ee&v=4" height="12" />
        <b>Arnaud Le Blanc</b>
    </a></td><td>Mention</td><td>Paris, France</td><td>408</td><td>3</td></tr><tr><td>120</td><td><a href="https://github.com/TBoileau">
        <img src="https://avatars.githubusercontent.com/u/10845781?s=72&u=04d4799c25b80cde73b93a6af187c1531336f1c0&v=4" height="12" />
        <b>Thomas Boileau (toham)</b>
    </a></td><td>-</td><td>Nice, France</td><td>407</td><td>3</td></tr><tr><td>121</td><td><a href="https://github.com/Tahul">
        <img src="https://avatars.githubusercontent.com/u/1385263?s=72&u=5fa8ea08de4cd72e468943edabfa9d72f3c02e70&v=4" height="12" />
        <b>Yaël Guilloux</b>
    </a></td><td>@nuxtlabs</td><td>Nantes, France</td><td>391</td><td>3</td></tr><tr><td>122</td><td><a href="https://github.com/marcgg">
        <img src="https://avatars.githubusercontent.com/u/127343?s=72&u=9567ac987af7bf4f644151fad9f81ab55158ac5d&v=4" height="12" />
        <b>Marc G Gauthier</b>
    </a></td><td>-</td><td>Paris</td><td>348</td><td>3</td></tr><tr><td>123</td><td><a href="https://github.com/paraboul">
        <img src="https://avatars.githubusercontent.com/u/80341?s=72&u=eea124424525852e2c9add8afa3b25fb889671f3&v=4" height="12" />
        <b>Anthony Catel</b>
    </a></td><td>-</td><td>France</td><td>327</td><td>3</td></tr><tr><td>124</td><td><a href="https://github.com/HungryProton">
        <img src="https://avatars.githubusercontent.com/u/52043844?s=72&u=9a018a7316016546d7208a0d6289200e17a283bf&v=4" height="12" />
        <b>HungryProton</b>
    </a></td><td>-</td><td>France</td><td>305</td><td>3</td></tr><tr><td>125</td><td><a href="https://github.com/CorentinTh">
        <img src="https://avatars.githubusercontent.com/u/25065347?s=72&u=ddfc8b7812ebc8cbd9245f499e4703bf3165ec31&v=4" height="12" />
        <b>Corentin THOMASSET</b>
    </a></td><td>@GeorgesTech </td><td>France - Lyon</td><td>260</td><td>3</td></tr><tr><td>126</td><td><a href="https://github.com/paradoxxxzero">
        <img src="https://avatars.githubusercontent.com/u/271144?s=72&u=03daedbbb192f3d91ebf331ea1c6a2e33050f3dc&v=4" height="12" />
        <b>Mounier Florian</b>
    </a></td><td>-</td><td>Lyon, France</td><td>243</td><td>3</td></tr><tr><td>127</td><td><a href="https://github.com/dubzzz">
        <img src="https://avatars.githubusercontent.com/u/5300235?s=72&u=283a572a5010b5350eee7168cf6ce1b566747903&v=4" height="12" />
        <b>Nicolas DUBIEN</b>
    </a></td><td>Pigment</td><td>Remote, France</td><td>233</td><td>3</td></tr><tr><td>128</td><td><a href="https://github.com/aiekick">
        <img src="https://avatars.githubusercontent.com/u/1434736?s=72&u=41204d71f1aa785ef74f57c0987bc3ae7c32f1f7&v=4" height="12" />
        <b>Aiekick</b>
    </a></td><td>-</td><td>France</td><td>224</td><td>3</td></tr><tr><td>129</td><td><a href="https://github.com/ManUtopiK">
        <img src="https://avatars.githubusercontent.com/u/188172?s=72&v=4" height="12" />
        <b>Emmanuel Salomon</b>
    </a></td><td>-</td><td>France</td><td>222</td><td>3</td></tr><tr><td>130</td><td><a href="https://github.com/arguiot">
        <img src="https://avatars.githubusercontent.com/u/18022260?s=72&u=b9efd5c3fc6c179e08b9823f0ed03c4f285a9544&v=4" height="12" />
        <b>Arthur Guiot</b>
    </a></td><td>Elva & PyratzLabs</td><td>Paris</td><td>206</td><td>3</td></tr><tr><td>131</td><td><a href="https://github.com/guillaumeduhan">
        <img src="https://avatars.githubusercontent.com/u/31253241?s=72&u=208ccdb5527e97b028eebff33b0479cfa534cca2&v=4" height="12" />
        <b>Guillaume Duhan</b>
    </a></td><td>My Happy Agency</td><td>Paris, France</td><td>187</td><td>3</td></tr><tr><td>132</td><td><a href="https://github.com/dgirardeau">
        <img src="https://avatars.githubusercontent.com/u/2735509?s=72&u=0456c0faa0f0cef7fe90cc74d5ae9bb8a19b6bf8&v=4" height="12" />
        <b>Daniel Girardeau-Montaut</b>
    </a></td><td>CloudCompare</td><td>France (Grenoble)</td><td>185</td><td>3</td></tr><tr><td>133</td><td><a href="https://github.com/sylvinus">
        <img src="https://avatars.githubusercontent.com/u/410452?s=72&v=4" height="12" />
        <b>Sylvain Zimmer</b>
    </a></td><td>Pricing Assistant / dotConferences</td><td>Paris, France</td><td>182</td><td>3</td></tr><tr><td>134</td><td><a href="https://github.com/brucelane">
        <img src="https://avatars.githubusercontent.com/u/138158?s=72&u=2acdc08ff422b253646ccec5206a03ee5c90af59&v=4" height="12" />
        <b>Bruce LANE</b>
    </a></td><td>sophiadigitalart</td><td>Alpes maritimes, France</td><td>172</td><td>3</td></tr><tr><td>135</td><td><a href="https://github.com/asbiin">
        <img src="https://avatars.githubusercontent.com/u/25419741?s=72&u=736357ef23ba1f333a7c72f53971fd94267fd131&v=4" height="12" />
        <b>Alexis Saettler</b>
    </a></td><td>@monicahq </td><td>Montreuil, France</td><td>168</td><td>3</td></tr><tr><td>136</td><td><a href="https://github.com/brunosimon">
        <img src="https://avatars.githubusercontent.com/u/5439991?s=72&u=d7f9a046776f0960769c8d90ca8ced4d896c8e6a&v=4" height="12" />
        <b>Bruno Simon</b>
    </a></td><td>Creative Journey</td><td>Paris</td><td>16.81K</td><td>2</td></tr><tr><td>137</td><td><a href="https://github.com/rougier">
        <img src="https://avatars.githubusercontent.com/u/327203?s=72&v=4" height="12" />
        <b>Nicolas P. Rougier</b>
    </a></td><td>@INRIA </td><td>Bordeaux, France</td><td>6.39K</td><td>2</td></tr><tr><td>138</td><td><a href="https://github.com/ornicar">
        <img src="https://avatars.githubusercontent.com/u/140370?s=72&v=4" height="12" />
        <b>Thibault Duplessis</b>
    </a></td><td>lichess.org</td><td>France</td><td>4.96K</td><td>2</td></tr><tr><td>139</td><td><a href="https://github.com/ogrisel">
        <img src="https://avatars.githubusercontent.com/u/89061?s=72&v=4" height="12" />
        <b>Olivier Grisel</b>
    </a></td><td>Inria</td><td>Paris, France</td><td>4.6K</td><td>2</td></tr><tr><td>140</td><td><a href="https://github.com/holtzy">
        <img src="https://avatars.githubusercontent.com/u/10254401?s=72&u=d554070e82949f6c7c6c57d4597f4cfddb053956&v=4" height="12" />
        <b>Holtz Yan</b>
    </a></td><td>Software Engineer - Dataviz</td><td>Montpellier, France</td><td>3.49K</td><td>2</td></tr><tr><td>141</td><td><a href="https://github.com/juliangarnier">
        <img src="https://avatars.githubusercontent.com/u/1268691?s=72&u=95990fed154f63864340744f9d0c4947f1acb334&v=4" height="12" />
        <b>Julian Garnier</b>
    </a></td><td>-</td><td>Paris</td><td>3.39K</td><td>2</td></tr><tr><td>142</td><td><a href="https://github.com/ocornut">
        <img src="https://avatars.githubusercontent.com/u/8225057?s=72&u=de42cf0fa1f1970187db446beea30c61b9c1e6d3&v=4" height="12" />
        <b>omar</b>
    </a></td><td>Disco Hello / Lizardcube</td><td>Paris, France</td><td>2.92K</td><td>2</td></tr><tr><td>143</td><td><a href="https://github.com/michael-dm">
        <img src="https://avatars.githubusercontent.com/u/26444186?s=72&u=c46c6c238fac234f82fed95f744c126189425d32&v=4" height="12" />
        <b>Michaël</b>
    </a></td><td>OneClickStudio</td><td>France</td><td>2.31K</td><td>2</td></tr><tr><td>144</td><td><a href="https://github.com/BartoszMilewski">
        <img src="https://avatars.githubusercontent.com/u/799370?s=72&v=4" height="12" />
        <b>Bartosz Milewski</b>
    </a></td><td>Programming Cafe</td><td>Paris, France</td><td>2.15K</td><td>2</td></tr><tr><td>145</td><td><a href="https://github.com/emilwallner">
        <img src="https://avatars.githubusercontent.com/u/12543699?s=72&u=7c01c0fd416759246cfc11aab0e926ca7df1f42f&v=4" height="12" />
        <b>Emil Wallner</b>
    </a></td><td>Palette</td><td>Paris | Nyköping</td><td>1.85K</td><td>2</td></tr><tr><td>146</td><td><a href="https://github.com/GitSquared">
        <img src="https://avatars.githubusercontent.com/u/24496417?s=72&u=161b0a8aa57c55e6bfff0c1ee6ac59aaeeb774f5&v=4" height="12" />
        <b>Gabriel Saillard</b>
    </a></td><td>@alan-eu</td><td>Paris, France</td><td>1.64K</td><td>2</td></tr><tr><td>147</td><td><a href="https://github.com/revolunet">
        <img src="https://avatars.githubusercontent.com/u/124937?s=72&u=14a136192a3900c9aa0a4e79a8a285d30af57284&v=4" height="12" />
        <b>Julien Bouquillon</b>
    </a></td><td>@SocialGouv </td><td>Paris, France</td><td>1.02K</td><td>2</td></tr><tr><td>148</td><td><a href="https://github.com/Johann-S">
        <img src="https://avatars.githubusercontent.com/u/1689750?s=72&v=4" height="12" />
        <b>Johann-S</b>
    </a></td><td>IOfate</td><td>France</td><td>813</td><td>2</td></tr><tr><td>149</td><td><a href="https://github.com/florimondmanca">
        <img src="https://avatars.githubusercontent.com/u/15911462?s=72&u=8e66104c470276296ea2f5fdf986b15865d6f256&v=4" height="12" />
        <b>Florimond Manca</b>
    </a></td><td>Fairness</td><td>France</td><td>748</td><td>2</td></tr><tr><td>150</td><td><a href="https://github.com/kizu">
        <img src="https://avatars.githubusercontent.com/u/177485?s=72&u=4d84ea69f3e98cc16d9daf0c5e7e2ca09c9efad7&v=4" height="12" />
        <b>Roman Komarov</b>
    </a></td><td>@DataDog</td><td>France</td><td>747</td><td>2</td></tr><tr><td>151</td><td><a href="https://github.com/ArthurSonzogni">
        <img src="https://avatars.githubusercontent.com/u/4759106?s=72&v=4" height="12" />
        <b>Arthur Sonzogni</b>
    </a></td><td>-</td><td>Paris</td><td>633</td><td>2</td></tr><tr><td>152</td><td><a href="https://github.com/togglebyte">
        <img src="https://avatars.githubusercontent.com/u/74262215?s=72&u=4bb2d773c3a6324abd61f792c9b26847fc3b15ad&v=4" height="12" />
        <b>Togglebit</b>
    </a></td><td>-</td><td>preferably somewhere nice</td><td>626</td><td>2</td></tr><tr><td>153</td><td><a href="https://github.com/melix">
        <img src="https://avatars.githubusercontent.com/u/316357?s=72&u=2d99b7a2de1d0530b77e897df3667db916dc1cdd&v=4" height="12" />
        <b>Cédric Champeau</b>
    </a></td><td>Oracle Labs </td><td>Nantes, France</td><td>591</td><td>2</td></tr><tr><td>154</td><td><a href="https://github.com/pgrimaud">
        <img src="https://avatars.githubusercontent.com/u/1866496?s=72&u=4b2f258754b4728d019d03d7a014be1812ae69fa&v=4" height="12" />
        <b>Pierre Grimaud</b>
    </a></td><td>-</td><td>Paris, France</td><td>588</td><td>2</td></tr><tr><td>155</td><td><a href="https://github.com/Zylann">
        <img src="https://avatars.githubusercontent.com/u/1311555?s=72&u=98e85e0c6d8599c7de140000f240417c9f512cea&v=4" height="12" />
        <b>Marc</b>
    </a></td><td>-</td><td>France</td><td>586</td><td>2</td></tr><tr><td>156</td><td><a href="https://github.com/Anahkiasen">
        <img src="https://avatars.githubusercontent.com/u/1321596?s=72&v=4" height="12" />
        <b>Emma Fabre</b>
    </a></td><td>madewithlove</td><td>Bretagne, France</td><td>537</td><td>2</td></tr><tr><td>157</td><td><a href="https://github.com/bblanchon">
        <img src="https://avatars.githubusercontent.com/u/5462433?s=72&u=bec379310fcd0063e7555115cc65357c396e0f9b&v=4" height="12" />
        <b>Benoît Blanchon</b>
    </a></td><td>-</td><td>France</td><td>509</td><td>2</td></tr><tr><td>158</td><td><a href="https://github.com/hadrienj">
        <img src="https://avatars.githubusercontent.com/u/6381368?s=72&u=57573c80d86dd1522e0ad45670004882617f47a3&v=4" height="12" />
        <b>Hadrien Jean</b>
    </a></td><td>-</td><td>Paris, France</td><td>465</td><td>2</td></tr><tr><td>159</td><td><a href="https://github.com/ldez">
        <img src="https://avatars.githubusercontent.com/u/5674651?s=72&u=45f0e097891f1e7e0c45c5224dcce11c867038af&v=4" height="12" />
        <b>Ludovic Fernandez</b>
    </a></td><td>-</td><td>France</td><td>453</td><td>2</td></tr><tr><td>160</td><td><a href="https://github.com/koutto">
        <img src="https://avatars.githubusercontent.com/u/26327909?s=72&u=52b71d309c3c49e6bdf82bc6d41658f88d0d5b53&v=4" height="12" />
        <b>Koutto</b>
    </a></td><td>-</td><td>Paris</td><td>451</td><td>2</td></tr><tr><td>161</td><td><a href="https://github.com/younesbelkada">
        <img src="https://avatars.githubusercontent.com/u/49240599?s=72&u=9074959eed8c7b1c7e6d74f8e3c13a46f8df516c&v=4" height="12" />
        <b>Younes Belkada</b>
    </a></td><td>@huggingface</td><td>Paris, France</td><td>442</td><td>2</td></tr><tr><td>162</td><td><a href="https://github.com/oliviergimenez">
        <img src="https://avatars.githubusercontent.com/u/12683635?s=72&u=c5a60d598ab4e98660dc7589de4609414a6af089&v=4" height="12" />
        <b>Olivier Gimenez</b>
    </a></td><td>CNRS</td><td>Montpellier</td><td>430</td><td>2</td></tr><tr><td>163</td><td><a href="https://github.com/amilamen">
        <img src="https://avatars.githubusercontent.com/u/46297789?s=72&u=6eb3e2ba9a183b7b2c39fcb57e125bd58f0f12b3&v=4" height="12" />
        <b>Ezéchiel Amen AGBLA</b>
    </a></td><td>Co-founder at @wetillix</td><td>Île-de-France</td><td>418</td><td>2</td></tr><tr><td>164</td><td><a href="https://github.com/Chman">
        <img src="https://avatars.githubusercontent.com/u/849090?s=72&u=53cf1101aeeb35eb4b802aac1fbeec3e0d2f2611&v=4" height="12" />
        <b>Thomas</b>
    </a></td><td>Unity Technologies</td><td>France</td><td>404</td><td>2</td></tr><tr><td>165</td><td><a href="https://github.com/tgalopin">
        <img src="https://avatars.githubusercontent.com/u/1651494?s=72&u=ff057fae3d32e16223fbd1238811d5203111edb5&v=4" height="12" />
        <b>Titouan Galopin</b>
    </a></td><td>@symfony  </td><td>France</td><td>364</td><td>2</td></tr><tr><td>166</td><td><a href="https://github.com/LambdAurora">
        <img src="https://avatars.githubusercontent.com/u/12587332?s=72&u=5bc537e2ad331c812f09328154b69cee58adbe85&v=4" height="12" />
        <b>LambdAurora</b>
    </a></td><td>-</td><td>France</td><td>361</td><td>2</td></tr><tr><td>167</td><td><a href="https://github.com/LudovicRousseau">
        <img src="https://avatars.githubusercontent.com/u/398496?s=72&v=4" height="12" />
        <b>Ludovic Rousseau</b>
    </a></td><td>-</td><td>France</td><td>353</td><td>2</td></tr><tr><td>168</td><td><a href="https://github.com/pchaigno">
        <img src="https://avatars.githubusercontent.com/u/1764210?s=72&v=4" height="12" />
        <b>Paul Chaignon</b>
    </a></td><td>Isovalent</td><td>Rennes, France</td><td>345</td><td>2</td></tr><tr><td>169</td><td><a href="https://github.com/ClementPinard">
        <img src="https://avatars.githubusercontent.com/u/4380424?s=72&u=53e6490329da8249d6307a0baa12aca6f681414f&v=4" height="12" />
        <b>Clément Pinard</b>
    </a></td><td>XXII</td><td>Paris</td><td>331</td><td>2</td></tr><tr><td>170</td><td><a href="https://github.com/rlouf">
        <img src="https://avatars.githubusercontent.com/u/3885044?s=72&u=d25f1b19c341ad092b89b860547177a7b5107261&v=4" height="12" />
        <b>Rémi Louf</b>
    </a></td><td>.txt</td><td>Fontainebleau, France</td><td>326</td><td>2</td></tr><tr><td>171</td><td><a href="https://github.com/sunny">
        <img src="https://avatars.githubusercontent.com/u/132?s=72&v=4" height="12" />
        <b>Sunny Ripert</b>
    </a></td><td>Cults.</td><td>Paris, France</td><td>318</td><td>2</td></tr><tr><td>172</td><td><a href="https://github.com/hbredin">
        <img src="https://avatars.githubusercontent.com/u/1080837?s=72&v=4" height="12" />
        <b>Hervé BREDIN</b>
    </a></td><td>CNRS</td><td>France</td><td>304</td><td>2</td></tr><tr><td>173</td><td><a href="https://github.com/kelu124">
        <img src="https://avatars.githubusercontent.com/u/2452634?s=72&u=55b50a96ed1143c6cf84704446464eb7c069daf5&v=4" height="12" />
        <b>K. Ghosh</b>
    </a></td><td>-</td><td>Paris</td><td>296</td><td>2</td></tr><tr><td>174</td><td><a href="https://github.com/Marsup">
        <img src="https://avatars.githubusercontent.com/u/796194?s=72&v=4" height="12" />
        <b>Nicolas Morel</b>
    </a></td><td>-</td><td>Lyon, France</td><td>281</td><td>2</td></tr><tr><td>175</td><td><a href="https://github.com/xvw">
        <img src="https://avatars.githubusercontent.com/u/5732466?s=72&u=e2da3651aae7faf29d3c54c4d7cf66d92f35f16e&v=4" height="12" />
        <b>Xavier Van de Woestyne</b>
    </a></td><td>@funkywork</td><td>Nantes</td><td>274</td><td>2</td></tr><tr><td>176</td><td><a href="https://github.com/sdpython">
        <img src="https://avatars.githubusercontent.com/u/4695832?s=72&u=9a0581b7da03088ea4ad3a37c5b680a64d864f33&v=4" height="12" />
        <b>xavier dupré</b>
    </a></td><td>@ENSAE</td><td>paris</td><td>274</td><td>2</td></tr><tr><td>177</td><td><a href="https://github.com/slandelle">
        <img src="https://avatars.githubusercontent.com/u/849197?s=72&v=4" height="12" />
        <b>Stephane Landelle</b>
    </a></td><td>@gatling</td><td>Paris, France</td><td>272</td><td>2</td></tr><tr><td>178</td><td><a href="https://github.com/Ysurac">
        <img src="https://avatars.githubusercontent.com/u/6342954?s=72&u=f609c4350ded22b839bbc356875be03d2772f98f&v=4" height="12" />
        <b>Ycarus (Yannick Chabanois)</b>
    </a></td><td>-</td><td>France</td><td>265</td><td>2</td></tr><tr><td>179</td><td><a href="https://github.com/dmathieu">
        <img src="https://avatars.githubusercontent.com/u/9347?s=72&u=ade95e23ea06fc13514de6a7bb9bf7b5b90d37a5&v=4" height="12" />
        <b>Damien Mathieu</b>
    </a></td><td>@elastic</td><td>France</td><td>265</td><td>2</td></tr><tr><td>180</td><td><a href="https://github.com/tbroyer">
        <img src="https://avatars.githubusercontent.com/u/173813?s=72&v=4" height="12" />
        <b>Thomas Broyer</b>
    </a></td><td>@atolcd </td><td>Dijon, France</td><td>264</td><td>2</td></tr><tr><td>181</td><td><a href="https://github.com/enzocaudron">
        <img src="https://avatars.githubusercontent.com/u/138821961?s=72&v=4" height="12" />
        <b>Enzo Caudron</b>
    </a></td><td>-</td><td>France</td><td>257</td><td>2</td></tr><tr><td>182</td><td><a href="https://github.com/Stilic">
        <img src="https://avatars.githubusercontent.com/u/63605602?s=72&u=6662329db31f63d8bbf4c7755a1c5de99cf54f3b&v=4" height="12" />
        <b>Stilic</b>
    </a></td><td>-</td><td>France</td><td>256</td><td>2</td></tr><tr><td>183</td><td><a href="https://github.com/NiLuJe">
        <img src="https://avatars.githubusercontent.com/u/111974?s=72&v=4" height="12" />
        <b>NiLuJe</b>
    </a></td><td>-</td><td>Paris, France</td><td>253</td><td>2</td></tr><tr><td>184</td><td><a href="https://github.com/jpountz">
        <img src="https://avatars.githubusercontent.com/u/299848?s=72&v=4" height="12" />
        <b>Adrien Grand</b>
    </a></td><td>Elasticsearch</td><td>Caen, France</td><td>252</td><td>2</td></tr><tr><td>185</td><td><a href="https://github.com/skarnet">
        <img src="https://avatars.githubusercontent.com/u/11243542?s=72&u=7e701b7a85d1ab24444160e78302d9d9eb9d056a&v=4" height="12" />
        <b>Laurent Bercot</b>
    </a></td><td>skarnet.com</td><td>Paris, France</td><td>244</td><td>2</td></tr><tr><td>186</td><td><a href="https://github.com/dzello">
        <img src="https://avatars.githubusercontent.com/u/174777?s=72&u=ca3d3c86a98aada7ee26b9567e6d5e9cc34598d4&v=4" height="12" />
        <b>Josh Dzielak</b>
    </a></td><td>@orbit-love</td><td>Paris</td><td>239</td><td>2</td></tr><tr><td>187</td><td><a href="https://github.com/vindarel">
        <img src="https://avatars.githubusercontent.com/u/3721004?s=72&u=1dd339c8791cde01920fd5235e5ce82cda9049e4&v=4" height="12" />
        <b>vindarel</b>
    </a></td><td>-</td><td>France</td><td>236</td><td>2</td></tr><tr><td>188</td><td><a href="https://github.com/Pierstoval">
        <img src="https://avatars.githubusercontent.com/u/3369266?s=72&u=cd40e98364c064016bdef62d5442d93c8b2a19a0&v=4" height="12" />
        <b>Alex Rock</b>
    </a></td><td>@Orbitaleio / @Orbitale - @StudioAgate</td><td>France</td><td>236</td><td>2</td></tr><tr><td>189</td><td><a href="https://github.com/Guilouz">
        <img src="https://avatars.githubusercontent.com/u/12702322?s=72&u=f6da23f5fd8d72ed72413e5bc8b9b2c170670783&v=4" height="12" />
        <b>Cyril Guislain</b>
    </a></td><td>-</td><td>France</td><td>234</td><td>2</td></tr><tr><td>190</td><td><a href="https://github.com/joeybronner">
        <img src="https://avatars.githubusercontent.com/u/5888510?s=72&u=4daff88ed8e2277b4e63362fbb64077fe14f8f48&v=4" height="12" />
        <b>Joey Bronner</b>
    </a></td><td>-</td><td>Paris</td><td>233</td><td>2</td></tr><tr><td>191</td><td><a href="https://github.com/chiptune">
        <img src="https://avatars.githubusercontent.com/u/1513464?s=72&u=ff8232434ba6872e0b7c1e8b9ac9e87c29f027e1&v=4" height="12" />
        <b>rez</b>
    </a></td><td>-</td><td>Paris, France</td><td>225</td><td>2</td></tr><tr><td>192</td><td><a href="https://github.com/tsileo">
        <img src="https://avatars.githubusercontent.com/u/395031?s=72&u=88ffed9978b7120d8edd50ab46421a4770674499&v=4" height="12" />
        <b>Thomas Sileo</b>
    </a></td><td>-</td><td>France</td><td>222</td><td>2</td></tr><tr><td>193</td><td><a href="https://github.com/darold">
        <img src="https://avatars.githubusercontent.com/u/538862?s=72&u=c7f0d89a00a8290d56d6168a3d1a7ab4be36f10d&v=4" height="12" />
        <b>Gilles Darold</b>
    </a></td><td>-</td><td>France</td><td>221</td><td>2</td></tr><tr><td>194</td><td><a href="https://github.com/QuentinPerez">
        <img src="https://avatars.githubusercontent.com/u/3081204?s=72&v=4" height="12" />
        <b>Quentin Perez</b>
    </a></td><td>@znly </td><td>Paris</td><td>213</td><td>2</td></tr><tr><td>195</td><td><a href="https://github.com/CongducPham">
        <img src="https://avatars.githubusercontent.com/u/1262647?s=72&u=dafa652b225b05e9708c9674ba4580f4d809698f&v=4" height="12" />
        <b>Congduc Pham</b>
    </a></td><td>University of Pau</td><td>Pau, France</td><td>211</td><td>2</td></tr><tr><td>196</td><td><a href="https://github.com/MAKIO135">
        <img src="https://avatars.githubusercontent.com/u/1162231?s=72&u=3a89d7d4ee1036220a1defe1fb5d78e21e382b92&v=4" height="12" />
        <b>Lionel RADISSON</b>
    </a></td><td>-</td><td>Lyon, France</td><td>207</td><td>2</td></tr><tr><td>197</td><td><a href="https://github.com/RodZill4">
        <img src="https://avatars.githubusercontent.com/u/6957908?s=72&u=c19aecbe4d441eb008a4485fdcddb661ce659951&v=4" height="12" />
        <b>Rodz Labs</b>
    </a></td><td>-</td><td>France</td><td>201</td><td>2</td></tr><tr><td>198</td><td><a href="https://github.com/danielhenrymantilla">
        <img src="https://avatars.githubusercontent.com/u/9920355?s=72&u=4c06b60917f2274874f3d96e68342eab655c0d6a&v=4" height="12" />
        <b>Daniel Henry-Mantilla</b>
    </a></td><td>https://www.ditto.live/</td><td>France - Spain</td><td>199</td><td>2</td></tr><tr><td>199</td><td><a href="https://github.com/ggrossetie">
        <img src="https://avatars.githubusercontent.com/u/333276?s=72&u=9087930b05d462a706f06a9ce6bf0c8289d8069d&v=4" height="12" />
        <b>Guillaume Grossetie</b>
    </a></td><td>Yuzu tech</td><td>Lyon</td><td>197</td><td>2</td></tr><tr><td>200</td><td><a href="https://github.com/nfroidure">
        <img src="https://avatars.githubusercontent.com/u/229633?s=72&v=4" height="12" />
        <b>Nicolas Froidure</b>
    </a></td><td>@DiagRAMS-Technologies</td><td>Lille - Nord Pas-de-Calais</td><td>196</td><td>2</td></tr>
    </tbody>
</table>

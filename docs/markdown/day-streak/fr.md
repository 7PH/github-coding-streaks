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
    </a></td><td>Freelance WordPress / Magento</td><td>Paris, France</td><td>179</td><td>3.66K</td></tr><tr><td>🥈</td><td><a href="https://github.com/rozierguillaume">
        <img src="https://avatars.githubusercontent.com/u/22763678?s=72&u=f10c1d50d6f9ce7ed6c7d64a767c02911df19cf4&v=4" height="12" />
        <b>rozierguillaume</b>
    </a></td><td>-</td><td>Paris</td><td>333</td><td>944</td></tr><tr><td>🥉</td><td><a href="https://github.com/Caceresenzo">
        <img src="https://avatars.githubusercontent.com/u/7386242?s=72&u=17d4617bb086732fd4da9287942494386d06ebb3&v=4" height="12" />
        <b>Caceresenzo</b>
    </a></td><td>-</td><td>France</td><td>167</td><td>787</td></tr><tr><td>4</td><td><a href="https://github.com/bloodyowl">
        <img src="https://avatars.githubusercontent.com/u/1688645?s=72&u=7f12174aeae34c99861918836ef527b7fd927101&v=4" height="12" />
        <b>bloodyowl</b>
    </a></td><td>@swan-io</td><td>Paris, France</td><td>395</td><td>724</td></tr><tr><td>5</td><td><a href="https://github.com/MoOx">
        <img src="https://avatars.githubusercontent.com/u/157534?s=72&u=399d4103e3bcf74bb9ef02eb5fe5da40dc90d2db&v=4" height="12" />
        <b>MoOx</b>
    </a></td><td>Freelance at MoOx.io</td><td>Toulouse, France</td><td>1.22K</td><td>579</td></tr><tr><td>6</td><td><a href="https://github.com/Haroenv">
        <img src="https://avatars.githubusercontent.com/u/6270048?s=72&u=767b8fde5c473100da40c50fd2f7c2df139c8d48&v=4" height="12" />
        <b>Haroenv</b>
    </a></td><td>@algolia</td><td>Paris, France</td><td>539</td><td>555</td></tr><tr><td>7</td><td><a href="https://github.com/stephrobert">
        <img src="https://avatars.githubusercontent.com/u/681788?s=72&u=cda76428fe4d06957a063238e1dcc1d4c4ae2cf6&v=4" height="12" />
        <b>stephrobert</b>
    </a></td><td>Adlere</td><td>Lille</td><td>229</td><td>484</td></tr><tr><td>8</td><td><a href="https://github.com/innocenzi">
        <img src="https://avatars.githubusercontent.com/u/16060559?s=72&u=cf061757407ef529958cf24bac8d2f699ad6e6ed&v=4" height="12" />
        <b>innocenzi</b>
    </a></td><td>Developer @JetflyAviation</td><td>France</td><td>312</td><td>429</td></tr><tr><td>9</td><td><a href="https://github.com/imath">
        <img src="https://avatars.githubusercontent.com/u/1834524?s=72&v=4" height="12" />
        <b>imath</b>
    </a></td><td>-</td><td>Paris</td><td>171</td><td>423</td></tr><tr><td>10</td><td><a href="https://github.com/Progi1984">
        <img src="https://avatars.githubusercontent.com/u/1533248?s=72&u=096bead2eab90e4795096b7d518583223dd34be6&v=4" height="12" />
        <b>Progi1984</b>
    </a></td><td>@PrestaShopCorp </td><td>Rennes, France</td><td>210</td><td>371</td></tr><tr><td>11</td><td><a href="https://github.com/nhoizey">
        <img src="https://avatars.githubusercontent.com/u/78213?s=72&v=4" height="12" />
        <b>nhoizey</b>
    </a></td><td>@cleverage</td><td>Paris, France</td><td>240</td><td>315</td></tr><tr><td>12</td><td><a href="https://github.com/maelle">
        <img src="https://avatars.githubusercontent.com/u/8360597?s=72&u=824f03caa87c92420352e3dd9a05470320a67412&v=4" height="12" />
        <b>maelle</b>
    </a></td><td>@ropensci</td><td>Nancy, France</td><td>918</td><td>238</td></tr><tr><td>13</td><td><a href="https://github.com/NelleV">
        <img src="https://avatars.githubusercontent.com/u/184798?s=72&v=4" height="12" />
        <b>NelleV</b>
    </a></td><td>TIMC</td><td>Grenoble</td><td>254</td><td>230</td></tr><tr><td>14</td><td><a href="https://github.com/dherault">
        <img src="https://avatars.githubusercontent.com/u/4154003?s=72&u=4b24359c0f156b3bba83ea1ad3f030cb7a55d2e0&v=4" height="12" />
        <b>dherault</b>
    </a></td><td>@toptal</td><td>Aix-en-Provence, France</td><td>186</td><td>186</td></tr><tr><td>15</td><td><a href="https://github.com/BrunoLevy">
        <img src="https://avatars.githubusercontent.com/u/19478253?s=72&u=5d291f158e7d7f0ebb99475e5f8974a7a8ec374d&v=4" height="12" />
        <b>BrunoLevy</b>
    </a></td><td>@inria</td><td>Saclay, France</td><td>536</td><td>124</td></tr><tr><td>16</td><td><a href="https://github.com/ccamel">
        <img src="https://avatars.githubusercontent.com/u/9574336?s=72&u=5d1de8c7eaf3289162c88956747465a8ed570d66&v=4" height="12" />
        <b>ccamel</b>
    </a></td><td>@OKP4</td><td>Toulouse</td><td>171</td><td>113</td></tr><tr><td>17</td><td><a href="https://github.com/crazy-max">
        <img src="https://avatars.githubusercontent.com/u/1951866?s=72&v=4" height="12" />
        <b>crazy-max</b>
    </a></td><td>@docker</td><td>France</td><td>2.25K</td><td>109</td></tr><tr><td>18</td><td><a href="https://github.com/antoinevastel">
        <img src="https://avatars.githubusercontent.com/u/5827148?s=72&v=4" height="12" />
        <b>antoinevastel</b>
    </a></td><td>-</td><td>Lille, France</td><td>292</td><td>104</td></tr><tr><td>19</td><td><a href="https://github.com/Phyronnaz">
        <img src="https://avatars.githubusercontent.com/u/16806877?s=72&u=9f22d47f8682df3061081987287e90d40f553cc8&v=4" height="12" />
        <b>Phyronnaz</b>
    </a></td><td>-</td><td>France</td><td>267</td><td>51</td></tr><tr><td>20</td><td><a href="https://github.com/benjamincrozat">
        <img src="https://avatars.githubusercontent.com/u/3613731?s=72&v=4" height="12" />
        <b>benjamincrozat</b>
    </a></td><td>Benjamin Crozat</td><td>France</td><td>213</td><td>50</td></tr><tr><td>21</td><td><a href="https://github.com/sylvestre">
        <img src="https://avatars.githubusercontent.com/u/733326?s=72&v=4" height="12" />
        <b>sylvestre</b>
    </a></td><td>Mozilla</td><td>France</td><td>325</td><td>43</td></tr><tr><td>22</td><td><a href="https://github.com/williamdes">
        <img src="https://avatars.githubusercontent.com/u/7784660?s=72&u=bfe835db1bfe0416a9f065affe24beb0b6c4fb26&v=4" height="12" />
        <b>williamdes</b>
    </a></td><td>@datacenters-network, @phpmyadmin, @wdes, @sudo-bot, @code-lts </td><td>Brittany, France</td><td>194</td><td>27</td></tr><tr><td>23</td><td><a href="https://github.com/SirLynix">
        <img src="https://avatars.githubusercontent.com/u/3002461?s=72&u=4135665e8c9d7743b47a266b9cf93ca5d06eef61&v=4" height="12" />
        <b>SirLynix</b>
    </a></td><td>-</td><td>France</td><td>248</td><td>22</td></tr><tr><td>24</td><td><a href="https://github.com/cquest">
        <img src="https://avatars.githubusercontent.com/u/1202668?s=72&u=56fc4a65f907c7b7a80c799447036ba5cb1c5876&v=4" height="12" />
        <b>cquest</b>
    </a></td><td>-</td><td>Paris, France</td><td>237</td><td>22</td></tr><tr><td>25</td><td><a href="https://github.com/xoofx">
        <img src="https://avatars.githubusercontent.com/u/715038?s=72&u=944abb5708b2c03b6c13e3284dd76bb327791456&v=4" height="12" />
        <b>xoofx</b>
    </a></td><td>Unity-Technologies</td><td>Grenoble - France</td><td>1.09K</td><td>21</td></tr><tr><td>26</td><td><a href="https://github.com/hai-vr">
        <img src="https://avatars.githubusercontent.com/u/60819407?s=72&u=b92c103e4def5b15e5883c9a2edd75e74aecbf90&v=4" height="12" />
        <b>hai-vr</b>
    </a></td><td>-</td><td>Paris, France</td><td>196</td><td>20</td></tr><tr><td>27</td><td><a href="https://github.com/mykiwi">
        <img src="https://avatars.githubusercontent.com/u/334432?s=72&u=8e0e09ca184a8891c4731401f39edba0895834c2&v=4" height="12" />
        <b>mykiwi</b>
    </a></td><td>open to work</td><td>Nantes, France</td><td>190</td><td>20</td></tr><tr><td>28</td><td><a href="https://github.com/oliviertassinari">
        <img src="https://avatars.githubusercontent.com/u/3165635?s=72&u=15a7ca3a64c1839a55c83a987d6f906c817d9e85&v=4" height="12" />
        <b>oliviertassinari</b>
    </a></td><td>MUI</td><td>Paris, France</td><td>2.85K</td><td>18</td></tr><tr><td>29</td><td><a href="https://github.com/ParisNeo">
        <img src="https://avatars.githubusercontent.com/u/827993?s=72&u=17ad3b01b402b36d9424d6b4437561304616eb18&v=4" height="12" />
        <b>ParisNeo</b>
    </a></td><td>CEA</td><td>France</td><td>168</td><td>18</td></tr><tr><td>30</td><td><a href="https://github.com/blanklob">
        <img src="https://avatars.githubusercontent.com/u/63895927?s=72&u=7812801bf0da4cd3aca715243c391ca14f4594ea&v=4" height="12" />
        <b>blanklob</b>
    </a></td><td>-</td><td>Paris, France</td><td>200</td><td>16</td></tr><tr><td>31</td><td><a href="https://github.com/jonathantribouharet">
        <img src="https://avatars.githubusercontent.com/u/188946?s=72&u=7298b69cfb0aa8c1055ac262e7367d18a41b9cb8&v=4" height="12" />
        <b>jonathantribouharet</b>
    </a></td><td>@yokitup</td><td>Paris, France</td><td>343</td><td>15</td></tr><tr><td>32</td><td><a href="https://github.com/vdeturckheim">
        <img src="https://avatars.githubusercontent.com/u/7135896?s=72&u=37e384998fa12b5ba6445ff880cf6825013ecbf6&v=4" height="12" />
        <b>vdeturckheim</b>
    </a></td><td>@Datadog</td><td>Paris France</td><td>203</td><td>14</td></tr><tr><td>33</td><td><a href="https://github.com/Alexays">
        <img src="https://avatars.githubusercontent.com/u/13947260?s=72&u=8da5ea8627d2c2418d6cb08221e9febb3a95f997&v=4" height="12" />
        <b>Alexays</b>
    </a></td><td>@Screebapp</td><td>Nantes, France</td><td>161</td><td>14</td></tr><tr><td>34</td><td><a href="https://github.com/Dimillian">
        <img src="https://avatars.githubusercontent.com/u/535509?s=72&u=764d85a6d85e56cb2029e0e64af1bf37296e02a4&v=4" height="12" />
        <b>Dimillian</b>
    </a></td><td>@Medium @Glose </td><td>France</td><td>2.48K</td><td>13</td></tr><tr><td>35</td><td><a href="https://github.com/mbeaudru">
        <img src="https://avatars.githubusercontent.com/u/8942633?s=72&u=2612af9dfc44e2d045b0a67184b916f8d4efc802&v=4" height="12" />
        <b>mbeaudru</b>
    </a></td><td>Datadog</td><td>Paris</td><td>768</td><td>13</td></tr><tr><td>36</td><td><a href="https://github.com/simongravelle">
        <img src="https://avatars.githubusercontent.com/u/43388542?s=72&u=16bc101821423023268d74e239583cbcc21b3881&v=4" height="12" />
        <b>simongravelle</b>
    </a></td><td>LIPhy</td><td>Grenoble</td><td>368</td><td>13</td></tr><tr><td>37</td><td><a href="https://github.com/SimonMarquis">
        <img src="https://avatars.githubusercontent.com/u/1921278?s=72&u=ace12a9fb3a0532f35285bce04898f7a7c97b2f9&v=4" height="12" />
        <b>SimonMarquis</b>
    </a></td><td>@leboncoin</td><td>Paris, France</td><td>323</td><td>13</td></tr><tr><td>38</td><td><a href="https://github.com/l-lin">
        <img src="https://avatars.githubusercontent.com/u/5452304?s=72&u=2e2f03b021b647037453379a788385f317c8208f&v=4" height="12" />
        <b>l-lin</b>
    </a></td><td>BioSerenity</td><td>Paris</td><td>243</td><td>13</td></tr><tr><td>39</td><td><a href="https://github.com/rom1504">
        <img src="https://avatars.githubusercontent.com/u/2346494?s=72&v=4" height="12" />
        <b>rom1504</b>
    </a></td><td>@google</td><td>Paris</td><td>1.92K</td><td>12</td></tr><tr><td>40</td><td><a href="https://github.com/QuiiBz">
        <img src="https://avatars.githubusercontent.com/u/43268759?s=72&u=1d8c6583c1cce98b7baeecd2b9646a9f41292376&v=4" height="12" />
        <b>QuiiBz</b>
    </a></td><td>@vercel</td><td>Paris</td><td>414</td><td>12</td></tr><tr><td>41</td><td><a href="https://github.com/woctezuma">
        <img src="https://avatars.githubusercontent.com/u/570669?s=72&u=af46fc886659da64e893e12e83eeaccf9445ed1c&v=4" height="12" />
        <b>woctezuma</b>
    </a></td><td>-</td><td>Paris, France</td><td>187</td><td>12</td></tr><tr><td>42</td><td><a href="https://github.com/rouault">
        <img src="https://avatars.githubusercontent.com/u/1192433?s=72&u=947be9d1eb18e70faa08dbdedf84de7a1e2568f4&v=4" height="12" />
        <b>rouault</b>
    </a></td><td>Spatialys</td><td>France</td><td>611</td><td>11</td></tr><tr><td>43</td><td><a href="https://github.com/Geal">
        <img src="https://avatars.githubusercontent.com/u/119296?s=72&v=4" height="12" />
        <b>Geal</b>
    </a></td><td>-</td><td>Nantes, France</td><td>1.23K</td><td>10</td></tr><tr><td>44</td><td><a href="https://github.com/greeeg">
        <img src="https://avatars.githubusercontent.com/u/12447517?s=72&u=848b5a2fa03fa7cc0c99078d30750d5b6837a514&v=4" height="12" />
        <b>greeeg</b>
    </a></td><td>@pennylane-hq</td><td>Paris, France</td><td>218</td><td>10</td></tr><tr><td>45</td><td><a href="https://github.com/astahmer">
        <img src="https://avatars.githubusercontent.com/u/47224540?s=72&u=3bc3ac9c3c1f64b68704b973c30aae89ad99cc66&v=4" height="12" />
        <b>astahmer</b>
    </a></td><td>-</td><td>Montpellier</td><td>177</td><td>10</td></tr><tr><td>46</td><td><a href="https://github.com/KOUISAmine">
        <img src="https://avatars.githubusercontent.com/u/25127148?s=72&u=f9c0ce9c5670d90158aecb1b5e9a6e533e852366&v=4" height="12" />
        <b>KOUISAmine</b>
    </a></td><td>BackEnd Developer</td><td>Paris</td><td>564</td><td>9</td></tr><tr><td>47</td><td><a href="https://github.com/thomasbnt">
        <img src="https://avatars.githubusercontent.com/u/14293805?s=72&u=6049cd0655f3ed1ec256e900bbcd3b540491bd09&v=4" height="12" />
        <b>thomasbnt</b>
    </a></td><td>Creator of @Mist3r-Robot</td><td>Toulouse, France</td><td>187</td><td>9</td></tr><tr><td>48</td><td><a href="https://github.com/mockersf">
        <img src="https://avatars.githubusercontent.com/u/8672791?s=72&u=6350847888b0006d335bc98ca32a5359389d26b5&v=4" height="12" />
        <b>mockersf</b>
    </a></td><td>-</td><td>France</td><td>180</td><td>9</td></tr><tr><td>49</td><td><a href="https://github.com/ptitSeb">
        <img src="https://avatars.githubusercontent.com/u/3250792?s=72&u=f206420ae21c0bbf92fea09871f11adea98adb39&v=4" height="12" />
        <b>ptitSeb</b>
    </a></td><td>-</td><td>France</td><td>565</td><td>8</td></tr><tr><td>50</td><td><a href="https://github.com/gildas-lormeau">
        <img src="https://avatars.githubusercontent.com/u/396787?s=72&u=9c2aeab0c23cb368b4ae3df9e17bc1ba9d8a51ce&v=4" height="12" />
        <b>gildas-lormeau</b>
    </a></td><td>CEO at Capsule Code</td><td>Rennes, France</td><td>545</td><td>8</td></tr><tr><td>51</td><td><a href="https://github.com/ldez">
        <img src="https://avatars.githubusercontent.com/u/5674651?s=72&u=45f0e097891f1e7e0c45c5224dcce11c867038af&v=4" height="12" />
        <b>ldez</b>
    </a></td><td>-</td><td>France</td><td>462</td><td>8</td></tr><tr><td>52</td><td><a href="https://github.com/RaitoBezarius">
        <img src="https://avatars.githubusercontent.com/u/314564?s=72&u=2b23b8b25c888f248f04be073e6b4994f932f7b7&v=4" height="12" />
        <b>RaitoBezarius</b>
    </a></td><td>Independent Contributor</td><td>France</td><td>287</td><td>8</td></tr><tr><td>53</td><td><a href="https://github.com/franky47">
        <img src="https://avatars.githubusercontent.com/u/1174092?s=72&u=031f74d0f1d64c317fb1d79b883b42f4434b17d1&v=4" height="12" />
        <b>franky47</b>
    </a></td><td>@47ng | @chiffre-io</td><td>Grenoble, France</td><td>234</td><td>8</td></tr><tr><td>54</td><td><a href="https://github.com/dubzzz">
        <img src="https://avatars.githubusercontent.com/u/5300235?s=72&u=283a572a5010b5350eee7168cf6ce1b566747903&v=4" height="12" />
        <b>dubzzz</b>
    </a></td><td>Pigment</td><td>Remote, France</td><td>234</td><td>8</td></tr><tr><td>55</td><td><a href="https://github.com/AndrewJBateman">
        <img src="https://avatars.githubusercontent.com/u/27190679?s=72&u=50ac5fbecc4c6ea0ec6ebf10d02d61b1b1012cd7&v=4" height="12" />
        <b>AndrewJBateman</b>
    </a></td><td>Bateman Industries</td><td>France, Spain, Norway, UK, Mars</td><td>172</td><td>8</td></tr><tr><td>56</td><td><a href="https://github.com/fabpot">
        <img src="https://avatars.githubusercontent.com/u/47313?s=72&u=7ba05204271a726f8642ac15864e2f361b5c0198&v=4" height="12" />
        <b>fabpot</b>
    </a></td><td>Symfony/Platform.sh/Blackfire</td><td>Paris, France</td><td>13.1K</td><td>7</td></tr><tr><td>57</td><td><a href="https://github.com/Calinou">
        <img src="https://avatars.githubusercontent.com/u/180032?s=72&v=4" height="12" />
        <b>Calinou</b>
    </a></td><td>@godotengine</td><td>Troyes, France</td><td>1.16K</td><td>7</td></tr><tr><td>58</td><td><a href="https://github.com/nadimkobeissi">
        <img src="https://avatars.githubusercontent.com/u/9953?s=72&u=108ca67baf136bdb7e363419b8d757f2a3c96d5d&v=4" height="12" />
        <b>nadimkobeissi</b>
    </a></td><td>@symbolicsoft</td><td>Paris, France</td><td>921</td><td>7</td></tr><tr><td>59</td><td><a href="https://github.com/lovasoa">
        <img src="https://avatars.githubusercontent.com/u/552629?s=72&u=3b5257f8d20ea6c313ed91ba80c024c3f00cf5dc&v=4" height="12" />
        <b>lovasoa</b>
    </a></td><td>@auto-grid @enexflow </td><td>Paris, France</td><td>452</td><td>7</td></tr><tr><td>60</td><td><a href="https://github.com/davidbrochart">
        <img src="https://avatars.githubusercontent.com/u/4711805?s=72&u=d39696d995a9e02ec3613ffb2f62b20b14f92f26&v=4" height="12" />
        <b>davidbrochart</b>
    </a></td><td>@QuantStack</td><td>France</td><td>269</td><td>7</td></tr><tr><td>61</td><td><a href="https://github.com/mcanouil">
        <img src="https://avatars.githubusercontent.com/u/8896044?s=72&u=86a5cbe0323a90349d87b7fa1fd4b22ae9d45ea2&v=4" height="12" />
        <b>mcanouil</b>
    </a></td><td>-</td><td>Lille, France</td><td>187</td><td>7</td></tr><tr><td>62</td><td><a href="https://github.com/pkestene">
        <img src="https://avatars.githubusercontent.com/u/8276295?s=72&v=4" height="12" />
        <b>pkestene</b>
    </a></td><td>CEA</td><td>France</td><td>186</td><td>7</td></tr><tr><td>63</td><td><a href="https://github.com/DavidBruant">
        <img src="https://avatars.githubusercontent.com/u/165829?s=72&u=df01db3934deaab6aec73838911b00a6d162f118&v=4" height="12" />
        <b>DavidBruant</b>
    </a></td><td>@lechappeebelle</td><td>Bordeaux, France</td><td>180</td><td>7</td></tr><tr><td>64</td><td><a href="https://github.com/posva">
        <img src="https://avatars.githubusercontent.com/u/664177?s=72&u=ded1e1cffd1d5620c9d9fb1a1c966c17204d6bef&v=4" height="12" />
        <b>posva</b>
    </a></td><td>Freelance</td><td>Paris </td><td>5.26K</td><td>6</td></tr><tr><td>65</td><td><a href="https://github.com/emersion">
        <img src="https://avatars.githubusercontent.com/u/506932?s=72&u=04995169ac1851b91ca12b47f4862ded1b108765&v=4" height="12" />
        <b>emersion</b>
    </a></td><td>SourceHut</td><td>France</td><td>1.57K</td><td>6</td></tr><tr><td>66</td><td><a href="https://github.com/LouisCAD">
        <img src="https://avatars.githubusercontent.com/u/6975237?s=72&v=4" height="12" />
        <b>LouisCAD</b>
    </a></td><td>Amande | Previously @Beepiz - SuiviDeFlotte.net </td><td>France</td><td>886</td><td>6</td></tr><tr><td>67</td><td><a href="https://github.com/phaazon">
        <img src="https://avatars.githubusercontent.com/u/506592?s=72&u=bdd2a0502a6a0097f8db5d4601e64ab62cb86b96&v=4" height="12" />
        <b>phaazon</b>
    </a></td><td>@datadog </td><td>France</td><td>792</td><td>6</td></tr><tr><td>68</td><td><a href="https://github.com/NathanLovato">
        <img src="https://avatars.githubusercontent.com/u/12694995?s=72&u=e4abd5fa8b74c82c57955f490da199a1ac7b9d8c&v=4" height="12" />
        <b>NathanLovato</b>
    </a></td><td>GDQuest</td><td>France</td><td>735</td><td>6</td></tr><tr><td>69</td><td><a href="https://github.com/pgrimaud">
        <img src="https://avatars.githubusercontent.com/u/1866496?s=72&u=4b2f258754b4728d019d03d7a014be1812ae69fa&v=4" height="12" />
        <b>pgrimaud</b>
    </a></td><td>-</td><td>Paris, France</td><td>590</td><td>6</td></tr><tr><td>70</td><td><a href="https://github.com/Kerollmops">
        <img src="https://avatars.githubusercontent.com/u/3610253?s=72&u=5997d202d7af48cde9b2c53a29000548886fa81e&v=4" height="12" />
        <b>Kerollmops</b>
    </a></td><td>@meilisearch</td><td>France, Paris</td><td>453</td><td>6</td></tr><tr><td>71</td><td><a href="https://github.com/spolu">
        <img src="https://avatars.githubusercontent.com/u/15067?s=72&u=6297f8db333ba5fbf2be0ee9d796a09b1419115f&v=4" height="12" />
        <b>spolu</b>
    </a></td><td>Dust</td><td>Paris</td><td>451</td><td>6</td></tr><tr><td>72</td><td><a href="https://github.com/gus33000">
        <img src="https://avatars.githubusercontent.com/u/3755345?s=72&u=8be4944a8331aaff14de13cf7f0354c4a8c192b8&v=4" height="12" />
        <b>gus33000</b>
    </a></td><td>labri</td><td>France</td><td>445</td><td>6</td></tr><tr><td>73</td><td><a href="https://github.com/CedricGuillemet">
        <img src="https://avatars.githubusercontent.com/u/1312968?s=72&u=09586c4d429addaa7fc099437bebda780a9e39ed&v=4" height="12" />
        <b>CedricGuillemet</b>
    </a></td><td>Microsoft</td><td>Redon, Brittany, France</td><td>399</td><td>6</td></tr><tr><td>74</td><td><a href="https://github.com/nical">
        <img src="https://avatars.githubusercontent.com/u/264854?s=72&u=43290726ca0f48051b8695b452644cc9fc025a85&v=4" height="12" />
        <b>nical</b>
    </a></td><td>Mozilla</td><td>Lyon, France</td><td>389</td><td>6</td></tr><tr><td>75</td><td><a href="https://github.com/alexandreruban">
        <img src="https://avatars.githubusercontent.com/u/33979976?s=72&u=55cb7b791cdb7adf94ee02066347b63c0f835fe3&v=4" height="12" />
        <b>alexandreruban</b>
    </a></td><td>-</td><td>Lyon, France</td><td>382</td><td>6</td></tr><tr><td>76</td><td><a href="https://github.com/raphaelvallat">
        <img src="https://avatars.githubusercontent.com/u/25703792?s=72&u=106689cdafc3ba03b63d8311b08a54344a56d831&v=4" height="12" />
        <b>raphaelvallat</b>
    </a></td><td>Oura Ring</td><td>Lyon, France</td><td>381</td><td>6</td></tr><tr><td>77</td><td><a href="https://github.com/pawamoy">
        <img src="https://avatars.githubusercontent.com/u/3999221?s=72&u=b030e4c89df2f3a36bc4710b925bdeb6745c9856&v=4" height="12" />
        <b>pawamoy</b>
    </a></td><td>-</td><td>France</td><td>381</td><td>6</td></tr><tr><td>78</td><td><a href="https://github.com/LudovicRousseau">
        <img src="https://avatars.githubusercontent.com/u/398496?s=72&v=4" height="12" />
        <b>LudovicRousseau</b>
    </a></td><td>-</td><td>France</td><td>356</td><td>6</td></tr><tr><td>79</td><td><a href="https://github.com/pablo-1610">
        <img src="https://avatars.githubusercontent.com/u/42814853?s=72&u=37871dc6aec95c795b011d38c7e3bd88097588ef&v=4" height="12" />
        <b>pablo-1610</b>
    </a></td><td>Slanting Studios</td><td>Lille, France</td><td>284</td><td>6</td></tr><tr><td>80</td><td><a href="https://github.com/CorentinTh">
        <img src="https://avatars.githubusercontent.com/u/25065347?s=72&u=ddfc8b7812ebc8cbd9245f499e4703bf3165ec31&v=4" height="12" />
        <b>CorentinTh</b>
    </a></td><td>@GeorgesTech </td><td>France - Lyon</td><td>275</td><td>6</td></tr><tr><td>81</td><td><a href="https://github.com/shinework">
        <img src="https://avatars.githubusercontent.com/u/1102595?s=72&u=449ce37c0361651279198ca5e178e3410b7d200f&v=4" height="12" />
        <b>shinework</b>
    </a></td><td>Premier Octet</td><td>Paris</td><td>236</td><td>6</td></tr><tr><td>82</td><td><a href="https://github.com/frankie567">
        <img src="https://avatars.githubusercontent.com/u/1144727?s=72&u=c159fe047727aedecbbeeaa96a1b03ceb9d39add&v=4" height="12" />
        <b>frankie567</b>
    </a></td><td>@polarsource</td><td>Lyon, France</td><td>236</td><td>6</td></tr><tr><td>83</td><td><a href="https://github.com/mremond">
        <img src="https://avatars.githubusercontent.com/u/86736?s=72&u=1f0a0539ac3e54352e7f481c89ce1586e970413d&v=4" height="12" />
        <b>mremond</b>
    </a></td><td>@ProcessOne</td><td>Paris, France</td><td>221</td><td>6</td></tr><tr><td>84</td><td><a href="https://github.com/eunjae-lee">
        <img src="https://avatars.githubusercontent.com/u/499898?s=72&u=aa57cd1eecb1b6590e419d2114573c419d2894fc&v=4" height="12" />
        <b>eunjae-lee</b>
    </a></td><td>@storyblok</td><td>Paris</td><td>216</td><td>6</td></tr><tr><td>85</td><td><a href="https://github.com/Julien-R44">
        <img src="https://avatars.githubusercontent.com/u/8337858?s=72&u=51dca49c82393b452f05ee4aa4129a659ef47e34&v=4" height="12" />
        <b>Julien-R44</b>
    </a></td><td>Freelancing </td><td>France</td><td>215</td><td>6</td></tr><tr><td>86</td><td><a href="https://github.com/rubenfiszel">
        <img src="https://avatars.githubusercontent.com/u/275584?s=72&u=eb0fe584ca9e8636a35ab822b93cc4a1ad10bf42&v=4" height="12" />
        <b>rubenfiszel</b>
    </a></td><td>Windmill</td><td>Paris, France</td><td>208</td><td>6</td></tr><tr><td>87</td><td><a href="https://github.com/valentinbreiz">
        <img src="https://avatars.githubusercontent.com/u/18724279?s=72&v=4" height="12" />
        <b>valentinbreiz</b>
    </a></td><td>@Epitech</td><td>France</td><td>205</td><td>6</td></tr><tr><td>88</td><td><a href="https://github.com/azerpas">
        <img src="https://avatars.githubusercontent.com/u/19282069?s=72&u=23fefaa28d073e8c7fc44a5a8737145773e38c74&v=4" height="12" />
        <b>azerpas</b>
    </a></td><td>@Bosch</td><td>Paris</td><td>205</td><td>6</td></tr><tr><td>89</td><td><a href="https://github.com/roblabla">
        <img src="https://avatars.githubusercontent.com/u/1069318?s=72&u=f270fc1cecf2076137002880491b4e25787de0e6&v=4" height="12" />
        <b>roblabla</b>
    </a></td><td>@Seed-Up </td><td>France, FR</td><td>201</td><td>6</td></tr><tr><td>90</td><td><a href="https://github.com/valryon">
        <img src="https://avatars.githubusercontent.com/u/155884?s=72&u=e357ea0b5f2ba600cd031df0597f457e327b7298&v=4" height="12" />
        <b>valryon</b>
    </a></td><td>-</td><td>France</td><td>192</td><td>6</td></tr><tr><td>91</td><td><a href="https://github.com/brucelane">
        <img src="https://avatars.githubusercontent.com/u/138158?s=72&u=2acdc08ff422b253646ccec5206a03ee5c90af59&v=4" height="12" />
        <b>brucelane</b>
    </a></td><td>sophiadigitalart</td><td>Alpes maritimes, France</td><td>174</td><td>6</td></tr><tr><td>92</td><td><a href="https://github.com/kivutar">
        <img src="https://avatars.githubusercontent.com/u/442722?s=72&v=4" height="12" />
        <b>kivutar</b>
    </a></td><td>Piepacker</td><td>Ajaccio, France</td><td>172</td><td>6</td></tr><tr><td>93</td><td><a href="https://github.com/gmpetrov">
        <img src="https://avatars.githubusercontent.com/u/4693180?s=72&u=8cf781d9099d6e2f2d2caf7612a5c2811ba13ef8&v=4" height="12" />
        <b>gmpetrov</b>
    </a></td><td>❤️</td><td>Paris</td><td>169</td><td>6</td></tr><tr><td>94</td><td><a href="https://github.com/jbonofre">
        <img src="https://avatars.githubusercontent.com/u/158903?s=72&v=4" height="12" />
        <b>jbonofre</b>
    </a></td><td>-</td><td>France</td><td>168</td><td>6</td></tr><tr><td>95</td><td><a href="https://github.com/edomt">
        <img src="https://avatars.githubusercontent.com/u/7103774?s=72&u=01a6f51f408ca6694d6cf6e1e04fb5beee0c1bcd&v=4" height="12" />
        <b>edomt</b>
    </a></td><td>-</td><td>Paris, France</td><td>162</td><td>6</td></tr><tr><td>96</td><td><a href="https://github.com/merveenoyan">
        <img src="https://avatars.githubusercontent.com/u/53175384?s=72&u=44019936d0cc3f7fd709b2c59f91ee1b9811d421&v=4" height="12" />
        <b>merveenoyan</b>
    </a></td><td>@huggingface </td><td>Paris</td><td>2.54K</td><td>5</td></tr><tr><td>97</td><td><a href="https://github.com/GuillaumeGomez">
        <img src="https://avatars.githubusercontent.com/u/3050060?s=72&u=6ca85464b07c5464a052250a4fc3e3f9c03c97ed&v=4" height="12" />
        <b>GuillaumeGomez</b>
    </a></td><td>@huawei</td><td>Paris</td><td>1.27K</td><td>5</td></tr><tr><td>98</td><td><a href="https://github.com/thomasync">
        <img src="https://avatars.githubusercontent.com/u/12927290?s=72&u=46e5c515789397dc2f91f4fe0a5cfa3f9ea40177&v=4" height="12" />
        <b>thomasync</b>
    </a></td><td>-</td><td>Montpellier, France</td><td>1.06K</td><td>5</td></tr><tr><td>99</td><td><a href="https://github.com/mratsim">
        <img src="https://avatars.githubusercontent.com/u/22738317?s=72&u=2a86b7777fb12d4153cc9a805595445e81f7b537&v=4" height="12" />
        <b>mratsim</b>
    </a></td><td>-</td><td>Paris</td><td>779</td><td>5</td></tr><tr><td>100</td><td><a href="https://github.com/FGRibreau">
        <img src="https://avatars.githubusercontent.com/u/138050?s=72&u=a3ba0d324f400f6497eca4a3d273f5020a4c7b31&v=4" height="12" />
        <b>FGRibreau</b>
    </a></td><td>@nobullshitbooks @netwo-io @hook0 @image-charts  @killbugtoday @mailpopin  / Sold @Redsmin @bringr</td><td>France</td><td>722</td><td>5</td></tr><tr><td>101</td><td><a href="https://github.com/tgalopin">
        <img src="https://avatars.githubusercontent.com/u/1651494?s=72&u=ff057fae3d32e16223fbd1238811d5203111edb5&v=4" height="12" />
        <b>tgalopin</b>
    </a></td><td>@symfony  </td><td>France</td><td>367</td><td>5</td></tr><tr><td>102</td><td><a href="https://github.com/martinbonnin">
        <img src="https://avatars.githubusercontent.com/u/3974977?s=72&u=309f78046395d0c58ca6afbdb5ddf82c939ae66c&v=4" height="12" />
        <b>martinbonnin</b>
    </a></td><td>Apollo GraphQL</td><td>Paris</td><td>357</td><td>5</td></tr><tr><td>103</td><td><a href="https://github.com/laluka">
        <img src="https://avatars.githubusercontent.com/u/7013722?s=72&u=99ab7a21f20471afc4643db1f6fa326d9218cc57&v=4" height="12" />
        <b>laluka</b>
    </a></td><td>ThinkLoveShare</td><td>FRANCE</td><td>303</td><td>5</td></tr><tr><td>104</td><td><a href="https://github.com/Tucsky">
        <img src="https://avatars.githubusercontent.com/u/5738336?s=72&u=33e59d3c0f0f31900db8026ce93a4ed5a0ad89b1&v=4" height="12" />
        <b>Tucsky</b>
    </a></td><td>-</td><td>France</td><td>282</td><td>5</td></tr><tr><td>105</td><td><a href="https://github.com/piitaya">
        <img src="https://avatars.githubusercontent.com/u/5878303?s=72&u=ab28a992669ff3369d3f23bebe1313e7b3fbee0b&v=4" height="12" />
        <b>piitaya</b>
    </a></td><td>@home-assistant @NabuCasa</td><td>Lille</td><td>270</td><td>5</td></tr><tr><td>106</td><td><a href="https://github.com/benkuper">
        <img src="https://avatars.githubusercontent.com/u/1291595?s=72&u=642b551224f7695f923cf41025d9b1b7b605962e&v=4" height="12" />
        <b>benkuper</b>
    </a></td><td>-</td><td>France</td><td>267</td><td>5</td></tr><tr><td>107</td><td><a href="https://github.com/NTag">
        <img src="https://avatars.githubusercontent.com/u/906276?s=72&u=c686367f063914cb3978840fc52a44199bdb8639&v=4" height="12" />
        <b>NTag</b>
    </a></td><td>-</td><td>Paris</td><td>234</td><td>5</td></tr><tr><td>108</td><td><a href="https://github.com/db0sch">
        <img src="https://avatars.githubusercontent.com/u/6984619?s=72&u=d4ae59c8252393b73c9afa30f4d28b564dc2c366&v=4" height="12" />
        <b>db0sch</b>
    </a></td><td>@lewagon </td><td>Paris, France</td><td>183</td><td>5</td></tr><tr><td>109</td><td><a href="https://github.com/buybackoff">
        <img src="https://avatars.githubusercontent.com/u/489852?s=72&u=1e80a12d74166139c18595010635a9547cc8e467&v=4" height="12" />
        <b>buybackoff</b>
    </a></td><td>-</td><td>Paris</td><td>167</td><td>5</td></tr><tr><td>110</td><td><a href="https://github.com/abougouffa">
        <img src="https://avatars.githubusercontent.com/u/3716399?s=72&u=ad7a1e120fef1c19d7b7864ac183798de2711c59&v=4" height="12" />
        <b>abougouffa</b>
    </a></td><td>Astek Technology / Sagemcom</td><td>Paris, France</td><td>167</td><td>5</td></tr><tr><td>111</td><td><a href="https://github.com/ornicar">
        <img src="https://avatars.githubusercontent.com/u/140370?s=72&v=4" height="12" />
        <b>ornicar</b>
    </a></td><td>lichess.org</td><td>France</td><td>4.98K</td><td>4</td></tr><tr><td>112</td><td><a href="https://github.com/holtzy">
        <img src="https://avatars.githubusercontent.com/u/10254401?s=72&u=d554070e82949f6c7c6c57d4597f4cfddb053956&v=4" height="12" />
        <b>holtzy</b>
    </a></td><td>Software Engineer - Dataviz</td><td>Montpellier, France</td><td>3.52K</td><td>4</td></tr><tr><td>113</td><td><a href="https://github.com/femtotrader">
        <img src="https://avatars.githubusercontent.com/u/5049737?s=72&v=4" height="12" />
        <b>femtotrader</b>
    </a></td><td>-</td><td>France</td><td>453</td><td>4</td></tr><tr><td>114</td><td><a href="https://github.com/tbruyelle">
        <img src="https://avatars.githubusercontent.com/u/92280?s=72&u=bea626ad4024e0727ca1f358b0e007f928e128d6&v=4" height="12" />
        <b>tbruyelle</b>
    </a></td><td>@allinbits</td><td>Montpellier, France</td><td>313</td><td>4</td></tr><tr><td>115</td><td><a href="https://github.com/cor3ntin">
        <img src="https://avatars.githubusercontent.com/u/1409019?s=72&v=4" height="12" />
        <b>cor3ntin</b>
    </a></td><td>-</td><td>Bordeaux, France</td><td>295</td><td>4</td></tr><tr><td>116</td><td><a href="https://github.com/gabrieldemarmiesse">
        <img src="https://avatars.githubusercontent.com/u/12891691?s=72&u=7f49c0407749c186e5df5e1cecb8b2daa47846e3&v=4" height="12" />
        <b>gabrieldemarmiesse</b>
    </a></td><td>Preligens</td><td>Paris, France</td><td>270</td><td>4</td></tr><tr><td>117</td><td><a href="https://github.com/Guilouz">
        <img src="https://avatars.githubusercontent.com/u/12702322?s=72&u=f6da23f5fd8d72ed72413e5bc8b9b2c170670783&v=4" height="12" />
        <b>Guilouz</b>
    </a></td><td>-</td><td>France</td><td>261</td><td>4</td></tr><tr><td>118</td><td><a href="https://github.com/llenotre">
        <img src="https://avatars.githubusercontent.com/u/66486624?s=72&u=7da2690ef9c531b23456974d6b33dd5c56f16119&v=4" height="12" />
        <b>llenotre</b>
    </a></td><td>@numberly</td><td>France</td><td>199</td><td>4</td></tr><tr><td>119</td><td><a href="https://github.com/IV2FI">
        <img src="https://avatars.githubusercontent.com/u/63878365?s=72&u=3e3b93e833eb2c0e11fac062928b3efc6230744e&v=4" height="12" />
        <b>IV2FI</b>
    </a></td><td>-</td><td>France</td><td>183</td><td>4</td></tr><tr><td>120</td><td><a href="https://github.com/progval">
        <img src="https://avatars.githubusercontent.com/u/406946?s=72&v=4" height="12" />
        <b>progval</b>
    </a></td><td>@SoftwareHeritage </td><td>Île de France</td><td>178</td><td>4</td></tr><tr><td>121</td><td><a href="https://github.com/AdilZouitine">
        <img src="https://avatars.githubusercontent.com/u/24889239?s=72&u=f73d19686baca7decb0958da8f1f3836d04c641f&v=4" height="12" />
        <b>AdilZouitine</b>
    </a></td><td>IRT Saint-Exupéry</td><td>Toulouse, France</td><td>166</td><td>4</td></tr><tr><td>122</td><td><a href="https://github.com/fasterthanlime">
        <img src="https://avatars.githubusercontent.com/u/7998310?s=72&u=fd6cb24423c35c26ee1ce7e00f0a3925bc964d1d&v=4" height="12" />
        <b>fasterthanlime</b>
    </a></td><td>@bearcove</td><td>Lyon, France</td><td>3.63K</td><td>3</td></tr><tr><td>123</td><td><a href="https://github.com/HoussemDellai">
        <img src="https://avatars.githubusercontent.com/u/6548359?s=72&u=eaeaa7311ace2a0f32b92ed1f2137bb2459a809b&v=4" height="12" />
        <b>HoussemDellai</b>
    </a></td><td>Microsoft</td><td>Paris</td><td>2.71K</td><td>3</td></tr><tr><td>124</td><td><a href="https://github.com/donho">
        <img src="https://avatars.githubusercontent.com/u/90293?s=72&u=ecf6e2f9319cd333d4ffd0056c84848e91ae9870&v=4" height="12" />
        <b>donho</b>
    </a></td><td>Notepad++ Project</td><td>Paris France</td><td>1.81K</td><td>3</td></tr><tr><td>125</td><td><a href="https://github.com/noraj">
        <img src="https://avatars.githubusercontent.com/u/16578570?s=72&u=a95cbd7b496e688d77205c934c8ef9ebeb273a73&v=4" height="12" />
        <b>noraj</b>
    </a></td><td>Rawsec</td><td>FRANCE</td><td>1.53K</td><td>3</td></tr><tr><td>126</td><td><a href="https://github.com/Xyl2k">
        <img src="https://avatars.githubusercontent.com/u/8536299?s=72&u=88d2fa98d1bdcef6b2578e57e988c5cb64c735e8&v=4" height="12" />
        <b>Xyl2k</b>
    </a></td><td>-</td><td>France</td><td>759</td><td>3</td></tr><tr><td>127</td><td><a href="https://github.com/ArthurSonzogni">
        <img src="https://avatars.githubusercontent.com/u/4759106?s=72&v=4" height="12" />
        <b>ArthurSonzogni</b>
    </a></td><td>-</td><td>Paris</td><td>640</td><td>3</td></tr><tr><td>128</td><td><a href="https://github.com/darrachequesne">
        <img src="https://avatars.githubusercontent.com/u/13031701?s=72&u=f4865fe7225a33a7c187123c47ed8254eba8d40a&v=4" height="12" />
        <b>darrachequesne</b>
    </a></td><td>-</td><td>Lille, France</td><td>503</td><td>3</td></tr><tr><td>129</td><td><a href="https://github.com/mrkkrp">
        <img src="https://avatars.githubusercontent.com/u/8165792?s=72&u=d1f6d1a5e2a1f73d8f3255172d3fd2a1b5091e02&v=4" height="12" />
        <b>mrkkrp</b>
    </a></td><td>@tweag</td><td>Château-Thierry, France</td><td>435</td><td>3</td></tr><tr><td>130</td><td><a href="https://github.com/oliviergimenez">
        <img src="https://avatars.githubusercontent.com/u/12683635?s=72&u=c5a60d598ab4e98660dc7589de4609414a6af089&v=4" height="12" />
        <b>oliviergimenez</b>
    </a></td><td>CNRS</td><td>Montpellier</td><td>434</td><td>3</td></tr><tr><td>131</td><td><a href="https://github.com/amilamen">
        <img src="https://avatars.githubusercontent.com/u/46297789?s=72&u=6eb3e2ba9a183b7b2c39fcb57e125bd58f0f12b3&v=4" height="12" />
        <b>amilamen</b>
    </a></td><td>Co-founder at @wetillix</td><td>Île-de-France</td><td>424</td><td>3</td></tr><tr><td>132</td><td><a href="https://github.com/romainl">
        <img src="https://avatars.githubusercontent.com/u/344335?s=72&u=d83ba92bf7102948d3ddb554df771ef470233847&v=4" height="12" />
        <b>romainl</b>
    </a></td><td>Razorfish France</td><td>Paris, France</td><td>421</td><td>3</td></tr><tr><td>133</td><td><a href="https://github.com/paraboul">
        <img src="https://avatars.githubusercontent.com/u/80341?s=72&u=eea124424525852e2c9add8afa3b25fb889671f3&v=4" height="12" />
        <b>paraboul</b>
    </a></td><td>-</td><td>France</td><td>328</td><td>3</td></tr><tr><td>134</td><td><a href="https://github.com/fredrik-johansson">
        <img src="https://avatars.githubusercontent.com/u/368838?s=72&u=33a576c5ece3772cf74c9bc302a6148b7d9a767a&v=4" height="12" />
        <b>fredrik-johansson</b>
    </a></td><td>INRIA & Institut de Mathématiques de Bordeaux</td><td>Bordeaux, France</td><td>326</td><td>3</td></tr><tr><td>135</td><td><a href="https://github.com/flozz">
        <img src="https://avatars.githubusercontent.com/u/971438?s=72&u=327f13393db4e4314f06a920a20ea55b1a3f8e00&v=4" height="12" />
        <b>flozz</b>
    </a></td><td>@wanadev </td><td>Lyon, France</td><td>323</td><td>3</td></tr><tr><td>136</td><td><a href="https://github.com/kylekatarnls">
        <img src="https://avatars.githubusercontent.com/u/5966783?s=72&v=4" height="12" />
        <b>kylekatarnls</b>
    </a></td><td>-</td><td>France</td><td>316</td><td>3</td></tr><tr><td>137</td><td><a href="https://github.com/Cpasjuste">
        <img src="https://avatars.githubusercontent.com/u/51077?s=72&v=4" height="12" />
        <b>Cpasjuste</b>
    </a></td><td>-</td><td>France</td><td>262</td><td>3</td></tr><tr><td>138</td><td><a href="https://github.com/Stilic">
        <img src="https://avatars.githubusercontent.com/u/63605602?s=72&u=6662329db31f63d8bbf4c7755a1c5de99cf54f3b&v=4" height="12" />
        <b>Stilic</b>
    </a></td><td>-</td><td>France</td><td>259</td><td>3</td></tr><tr><td>139</td><td><a href="https://github.com/Stormix">
        <img src="https://avatars.githubusercontent.com/u/18377687?s=72&u=39af1d1e6f0dfbc1c06089e15c8560c1464fb266&v=4" height="12" />
        <b>Stormix</b>
    </a></td><td>@Stormix-co </td><td>Marseille, France</td><td>259</td><td>3</td></tr><tr><td>140</td><td><a href="https://github.com/Neamar">
        <img src="https://avatars.githubusercontent.com/u/536844?s=72&v=4" height="12" />
        <b>Neamar</b>
    </a></td><td>-</td><td>France</td><td>245</td><td>3</td></tr><tr><td>141</td><td><a href="https://github.com/fabriceyopa">
        <img src="https://avatars.githubusercontent.com/u/4902424?s=72&u=54bf5e65a787aaa0ea253953b4c391250563e997&v=4" height="12" />
        <b>fabriceyopa</b>
    </a></td><td>@laravelcm </td><td>France</td><td>232</td><td>3</td></tr><tr><td>142</td><td><a href="https://github.com/avivace">
        <img src="https://avatars.githubusercontent.com/u/14352721?s=72&u=08e677ada7800546456c6610c08ea83cd275f0c6&v=4" height="12" />
        <b>avivace</b>
    </a></td><td>@EUROCONTROL</td><td>Paris</td><td>220</td><td>3</td></tr><tr><td>143</td><td><a href="https://github.com/Profpatsch">
        <img src="https://avatars.githubusercontent.com/u/3153638?s=72&v=4" height="12" />
        <b>Profpatsch</b>
    </a></td><td>Possehl Analytics</td><td>Augsburg, Paris</td><td>216</td><td>3</td></tr><tr><td>144</td><td><a href="https://github.com/maziyarpanahi">
        <img src="https://avatars.githubusercontent.com/u/5762953?s=72&u=17070601b919833c70fc8cb61381822fdb987639&v=4" height="12" />
        <b>maziyarpanahi</b>
    </a></td><td>@ISCPIF @JohnSnowLabs</td><td>Paris, France</td><td>184</td><td>3</td></tr><tr><td>145</td><td><a href="https://github.com/francois2metz">
        <img src="https://avatars.githubusercontent.com/u/86659?s=72&v=4" height="12" />
        <b>francois2metz</b>
    </a></td><td>-</td><td>Annecy, France</td><td>176</td><td>3</td></tr><tr><td>146</td><td><a href="https://github.com/tdimnet">
        <img src="https://avatars.githubusercontent.com/u/9935925?s=72&u=90d6020b1e99960d5cc4ad0517bf6e6e96907d6f&v=4" height="12" />
        <b>tdimnet</b>
    </a></td><td>@nx-academy</td><td>Paris, France</td><td>176</td><td>3</td></tr><tr><td>147</td><td><a href="https://github.com/btco">
        <img src="https://avatars.githubusercontent.com/u/4420556?s=72&u=df4b268f6f76b0b45bfef2a5910f4c5b3e0c78d7&v=4" height="12" />
        <b>btco</b>
    </a></td><td>-</td><td>Paris, France</td><td>172</td><td>3</td></tr><tr><td>148</td><td><a href="https://github.com/metal3d">
        <img src="https://avatars.githubusercontent.com/u/100080?s=72&v=4" height="12" />
        <b>metal3d</b>
    </a></td><td>@kleegroup</td><td>Laval, France</td><td>164</td><td>3</td></tr><tr><td>149</td><td><a href="https://github.com/clun">
        <img src="https://avatars.githubusercontent.com/u/726536?s=72&u=808319222b6d6b4a90ef3ba91a58028170c25029&v=4" height="12" />
        <b>clun</b>
    </a></td><td>DataStax, FF4j</td><td>France</td><td>162</td><td>3</td></tr><tr><td>150</td><td><a href="https://github.com/rougier">
        <img src="https://avatars.githubusercontent.com/u/327203?s=72&v=4" height="12" />
        <b>rougier</b>
    </a></td><td>@INRIA </td><td>Bordeaux, France</td><td>6.45K</td><td>2</td></tr><tr><td>151</td><td><a href="https://github.com/dunglas">
        <img src="https://avatars.githubusercontent.com/u/57224?s=72&u=a7ed2cf3f0ae84c9e06925b94091b85a7d6324b0&v=4" height="12" />
        <b>dunglas</b>
    </a></td><td>@coopTilleuls </td><td>Lille, France</td><td>3.58K</td><td>2</td></tr><tr><td>152</td><td><a href="https://github.com/ssaunier">
        <img src="https://avatars.githubusercontent.com/u/414418?s=72&u=173c3eae211bc1b31534408ac062d917d0b6d162&v=4" height="12" />
        <b>ssaunier</b>
    </a></td><td>@lewagon</td><td>France</td><td>2.25K</td><td>2</td></tr><tr><td>153</td><td><a href="https://github.com/0xN0x">
        <img src="https://avatars.githubusercontent.com/u/1781547?s=72&u=84f608fab306dd7b1c3df0a578bd476fefb15f7a&v=4" height="12" />
        <b>0xN0x</b>
    </a></td><td>-</td><td>France</td><td>2.19K</td><td>2</td></tr><tr><td>154</td><td><a href="https://github.com/HeyHeyChicken">
        <img src="https://avatars.githubusercontent.com/u/33424294?s=72&u=28ce29b2dff38b124fd62cb89e86ca1e39a8dfeb&v=4" height="12" />
        <b>HeyHeyChicken</b>
    </a></td><td>-</td><td>Mesnil-Panneville, France</td><td>1.62K</td><td>2</td></tr><tr><td>155</td><td><a href="https://github.com/manekinekko">
        <img src="https://avatars.githubusercontent.com/u/1699357?s=72&u=49863edce9963b33867ef61d3a2150161a0e3561&v=4" height="12" />
        <b>manekinekko</b>
    </a></td><td>@microsoft</td><td>France</td><td>1.42K</td><td>2</td></tr><tr><td>156</td><td><a href="https://github.com/mnapoli">
        <img src="https://avatars.githubusercontent.com/u/720328?s=72&u=6681f9f4affebc487fbe00133f743f2551e9523c&v=4" height="12" />
        <b>mnapoli</b>
    </a></td><td>@brefphp </td><td>Lyon, France</td><td>1.33K</td><td>2</td></tr><tr><td>157</td><td><a href="https://github.com/PaulSec">
        <img src="https://avatars.githubusercontent.com/u/4060683?s=72&v=4" height="12" />
        <b>PaulSec</b>
    </a></td><td>-</td><td>France</td><td>1.27K</td><td>2</td></tr><tr><td>158</td><td><a href="https://github.com/vincentbernat">
        <img src="https://avatars.githubusercontent.com/u/631446?s=72&v=4" height="12" />
        <b>vincentbernat</b>
    </a></td><td>Free</td><td>Paris, France</td><td>1.04K</td><td>2</td></tr><tr><td>159</td><td><a href="https://github.com/groue">
        <img src="https://avatars.githubusercontent.com/u/54219?s=72&u=73ae5871c4a96c72fae2650b267d578440e38983&v=4" height="12" />
        <b>groue</b>
    </a></td><td>Pierlis</td><td>Paris, France</td><td>1.03K</td><td>2</td></tr><tr><td>160</td><td><a href="https://github.com/ncannasse">
        <img src="https://avatars.githubusercontent.com/u/1022912?s=72&u=38096d7e5a4d2a553fb90e5dd30e8a4f4aa782be&v=4" height="12" />
        <b>ncannasse</b>
    </a></td><td>Shiro Games</td><td>Bordeaux, France</td><td>985</td><td>2</td></tr><tr><td>161</td><td><a href="https://github.com/nicolargo">
        <img src="https://avatars.githubusercontent.com/u/776747?s=72&u=aa191d095cac0b9bb8ff2aca1d87370b47c0edee&v=4" height="12" />
        <b>nicolargo</b>
    </a></td><td>Le blog de Nicolargo</td><td>Valbonne, France</td><td>754</td><td>2</td></tr><tr><td>162</td><td><a href="https://github.com/jasonchampagne">
        <img src="https://avatars.githubusercontent.com/u/979506?s=72&u=2bdb20651e0cc5e6b8e751521638a003fb7305a9&v=4" height="12" />
        <b>jasonchampagne</b>
    </a></td><td>EvoluNoob</td><td>France</td><td>613</td><td>2</td></tr><tr><td>163</td><td><a href="https://github.com/fraxken">
        <img src="https://avatars.githubusercontent.com/u/4438263?s=72&u=5e2d0c11f001871b76e25dd3a96bd662d6a706ba&v=4" height="12" />
        <b>fraxken</b>
    </a></td><td>@MyUnisoft</td><td>Paris</td><td>610</td><td>2</td></tr><tr><td>164</td><td><a href="https://github.com/marysaka">
        <img src="https://avatars.githubusercontent.com/u/1760003?s=72&u=9e62a6f327159a1dc67d89b3dd7173d56e1bf15c&v=4" height="12" />
        <b>marysaka</b>
    </a></td><td>Collabora</td><td>Paris, France</td><td>531</td><td>2</td></tr><tr><td>165</td><td><a href="https://github.com/Canop">
        <img src="https://avatars.githubusercontent.com/u/617006?s=72&u=d37ffb41ad4ef32e831e315ef5316b51e57c2597&v=4" height="12" />
        <b>Canop</b>
    </a></td><td>-</td><td>Lyon, France</td><td>492</td><td>2</td></tr><tr><td>166</td><td><a href="https://github.com/eko">
        <img src="https://avatars.githubusercontent.com/u/103900?s=72&u=d185654f4e625741e01fc42c4a625be4756344c0&v=4" height="12" />
        <b>eko</b>
    </a></td><td>Freelance</td><td>Annecy, France</td><td>407</td><td>2</td></tr><tr><td>167</td><td><a href="https://github.com/luislavena">
        <img src="https://avatars.githubusercontent.com/u/4182?s=72&u=baab980311df526d41631de7362837955f474076&v=4" height="12" />
        <b>luislavena</b>
    </a></td><td>@area17 </td><td>Paris, France</td><td>397</td><td>2</td></tr><tr><td>168</td><td><a href="https://github.com/Tahul">
        <img src="https://avatars.githubusercontent.com/u/1385263?s=72&u=5fa8ea08de4cd72e468943edabfa9d72f3c02e70&v=4" height="12" />
        <b>Tahul</b>
    </a></td><td>@nuxtlabs</td><td>Nantes, France</td><td>392</td><td>2</td></tr><tr><td>169</td><td><a href="https://github.com/f4exb">
        <img src="https://avatars.githubusercontent.com/u/6192319?s=72&u=3f1ea59769818046445a4377305f55687ee4ad6b&v=4" height="12" />
        <b>f4exb</b>
    </a></td><td>-</td><td>Antibes, France</td><td>366</td><td>2</td></tr><tr><td>170</td><td><a href="https://github.com/rlouf">
        <img src="https://avatars.githubusercontent.com/u/3885044?s=72&u=d25f1b19c341ad092b89b860547177a7b5107261&v=4" height="12" />
        <b>rlouf</b>
    </a></td><td>.txt</td><td>Fontainebleau, France</td><td>333</td><td>2</td></tr><tr><td>171</td><td><a href="https://github.com/garronej">
        <img src="https://avatars.githubusercontent.com/u/6702424?s=72&u=13f489f6f1b3fde3b4d6be6ddc503d2b95a0f5c7&v=4" height="12" />
        <b>garronej</b>
    </a></td><td>@InseeFrLab</td><td>Paris, France</td><td>322</td><td>2</td></tr><tr><td>172</td><td><a href="https://github.com/Ovid">
        <img src="https://avatars.githubusercontent.com/u/24634?s=72&u=b0b1a4df441503bc7e892d053de4c0a7944bcdec&v=4" height="12" />
        <b>Ovid</b>
    </a></td><td>Freelance. Have Perl, Will Travel.</td><td>Châteaneuf-Grasse, France</td><td>322</td><td>2</td></tr><tr><td>173</td><td><a href="https://github.com/yoanbernabeu">
        <img src="https://avatars.githubusercontent.com/u/59195351?s=72&u=c8f1073abf2184d2eebea8efab19074068507d17&v=4" height="12" />
        <b>yoanbernabeu</b>
    </a></td><td>YoanDev.co</td><td>France</td><td>322</td><td>2</td></tr><tr><td>174</td><td><a href="https://github.com/k33g">
        <img src="https://avatars.githubusercontent.com/u/491848?s=72&u=332138d1fe94fc2ab4953428187a92663e14eeac&v=4" height="12" />
        <b>k33g</b>
    </a></td><td>Bots Garden</td><td>Lyon (France)</td><td>315</td><td>2</td></tr><tr><td>175</td><td><a href="https://github.com/mpromonet">
        <img src="https://avatars.githubusercontent.com/u/1367630?s=72&u=656527786957614d8cf8dec22644fe40dadbbe6f&v=4" height="12" />
        <b>mpromonet</b>
    </a></td><td>-</td><td>France</td><td>308</td><td>2</td></tr><tr><td>176</td><td><a href="https://github.com/mquandalle">
        <img src="https://avatars.githubusercontent.com/u/1730702?s=72&u=ebe99b2bcc14e2e2376df8637ddc47f1b26a5e7b&v=4" height="12" />
        <b>mquandalle</b>
    </a></td><td>-</td><td>Paris, France</td><td>305</td><td>2</td></tr><tr><td>177</td><td><a href="https://github.com/sebanc">
        <img src="https://avatars.githubusercontent.com/u/22224731?s=72&v=4" height="12" />
        <b>sebanc</b>
    </a></td><td>-</td><td>Paris, France</td><td>291</td><td>2</td></tr><tr><td>178</td><td><a href="https://github.com/Liryna">
        <img src="https://avatars.githubusercontent.com/u/4311419?s=72&v=4" height="12" />
        <b>Liryna</b>
    </a></td><td>Google</td><td>France</td><td>288</td><td>2</td></tr><tr><td>179</td><td><a href="https://github.com/LTHCTheMaster">
        <img src="https://avatars.githubusercontent.com/u/65359406?s=72&u=d8b51a904b040d1c89c65385d8da9dbe995baf89&v=4" height="12" />
        <b>LTHCTheMaster</b>
    </a></td><td>-</td><td>France</td><td>278</td><td>2</td></tr><tr><td>180</td><td><a href="https://github.com/xvw">
        <img src="https://avatars.githubusercontent.com/u/5732466?s=72&u=e2da3651aae7faf29d3c54c4d7cf66d92f35f16e&v=4" height="12" />
        <b>xvw</b>
    </a></td><td>@funkywork</td><td>Nantes</td><td>275</td><td>2</td></tr><tr><td>181</td><td><a href="https://github.com/slandelle">
        <img src="https://avatars.githubusercontent.com/u/849197?s=72&v=4" height="12" />
        <b>slandelle</b>
    </a></td><td>@gatling</td><td>Paris, France</td><td>273</td><td>2</td></tr><tr><td>182</td><td><a href="https://github.com/lihbr">
        <img src="https://avatars.githubusercontent.com/u/25330882?s=72&u=982d667590c1ea1a9100f2c39456dddd44b02d8b&v=4" height="12" />
        <b>lihbr</b>
    </a></td><td>@prismicio</td><td>France</td><td>268</td><td>2</td></tr><tr><td>183</td><td><a href="https://github.com/rCarto">
        <img src="https://avatars.githubusercontent.com/u/3041254?s=72&u=535becc82c562924df8c5d1e0ba0b065c4a697b5&v=4" height="12" />
        <b>rCarto</b>
    </a></td><td>CNRS</td><td>Paris, France</td><td>250</td><td>2</td></tr><tr><td>184</td><td><a href="https://github.com/elbywan">
        <img src="https://avatars.githubusercontent.com/u/3428394?s=72&u=88d0088a68dd5e71c49063a5f97fe04d34d1e6ae&v=4" height="12" />
        <b>elbywan</b>
    </a></td><td>Datadog</td><td>Paris, France</td><td>249</td><td>2</td></tr><tr><td>185</td><td><a href="https://github.com/thbar">
        <img src="https://avatars.githubusercontent.com/u/10141?s=72&u=41c21f0cc2eb57c17dd9533bebad9c4d34bae89d&v=4" height="12" />
        <b>thbar</b>
    </a></td><td>LoGeek (ETL, data processing, SaaS products, RubyOnRails, Elixir)</td><td>Saintes, France</td><td>248</td><td>2</td></tr><tr><td>186</td><td><a href="https://github.com/jderusse">
        <img src="https://avatars.githubusercontent.com/u/578547?s=72&u=df76d0514c86209a3fff8c9fb9d15ae8592c43c9&v=4" height="12" />
        <b>jderusse</b>
    </a></td><td>Blackfire</td><td>Paris, France</td><td>246</td><td>2</td></tr><tr><td>187</td><td><a href="https://github.com/JCluzet">
        <img src="https://avatars.githubusercontent.com/u/55356071?s=72&u=1e399003c32fba533c32f1b912b9ca56756e3887&v=4" height="12" />
        <b>JCluzet</b>
    </a></td><td>42Paris</td><td>Paris</td><td>242</td><td>2</td></tr><tr><td>188</td><td><a href="https://github.com/joeybronner">
        <img src="https://avatars.githubusercontent.com/u/5888510?s=72&u=4daff88ed8e2277b4e63362fbb64077fe14f8f48&v=4" height="12" />
        <b>joeybronner</b>
    </a></td><td>-</td><td>Paris</td><td>234</td><td>2</td></tr><tr><td>189</td><td><a href="https://github.com/louisabraham">
        <img src="https://avatars.githubusercontent.com/u/13174805?s=72&v=4" height="12" />
        <b>louisabraham</b>
    </a></td><td>-</td><td>Paris</td><td>233</td><td>2</td></tr><tr><td>190</td><td><a href="https://github.com/Kleidukos">
        <img src="https://avatars.githubusercontent.com/u/29253044?s=72&u=e8403c7e0f102de7283623eabb3dee0318307346&v=4" height="12" />
        <b>Kleidukos</b>
    </a></td><td>-</td><td>Paris</td><td>215</td><td>2</td></tr><tr><td>191</td><td><a href="https://github.com/elisee">
        <img src="https://avatars.githubusercontent.com/u/446986?s=72&v=4" height="12" />
        <b>elisee</b>
    </a></td><td>@elisee</td><td>Strasbourg, France</td><td>211</td><td>2</td></tr><tr><td>192</td><td><a href="https://github.com/AntoineAugusti">
        <img src="https://avatars.githubusercontent.com/u/295709?s=72&v=4" height="12" />
        <b>AntoineAugusti</b>
    </a></td><td>@betagouv @mtes-mct @etalab</td><td>Dijon, France</td><td>208</td><td>2</td></tr><tr><td>193</td><td><a href="https://github.com/madeindjs">
        <img src="https://avatars.githubusercontent.com/u/11815139?s=72&v=4" height="12" />
        <b>madeindjs</b>
    </a></td><td>@contentsquare</td><td>Lyon, France</td><td>207</td><td>2</td></tr><tr><td>194</td><td><a href="https://github.com/thierryvolpiatto">
        <img src="https://avatars.githubusercontent.com/u/1533939?s=72&v=4" height="12" />
        <b>thierryvolpiatto</b>
    </a></td><td>@emacs-helm </td><td>France</td><td>206</td><td>2</td></tr><tr><td>195</td><td><a href="https://github.com/Delapouite">
        <img src="https://avatars.githubusercontent.com/u/39315?s=72&v=4" height="12" />
        <b>Delapouite</b>
    </a></td><td>Powipu</td><td>Nantes / Lyon - France</td><td>206</td><td>2</td></tr><tr><td>196</td><td><a href="https://github.com/guillaumeduhan">
        <img src="https://avatars.githubusercontent.com/u/31253241?s=72&u=208ccdb5527e97b028eebff33b0479cfa534cca2&v=4" height="12" />
        <b>guillaumeduhan</b>
    </a></td><td>My Happy Agency</td><td>Paris, France</td><td>202</td><td>2</td></tr><tr><td>197</td><td><a href="https://github.com/scolladon">
        <img src="https://avatars.githubusercontent.com/u/522422?s=72&u=b4e5e596c88abd2919644ba3c050f035811d298c&v=4" height="12" />
        <b>scolladon</b>
    </a></td><td>-</td><td>Paris France</td><td>200</td><td>2</td></tr><tr><td>198</td><td><a href="https://github.com/xldenis">
        <img src="https://avatars.githubusercontent.com/u/451373?s=72&u=93fc9c79104404fbb0f657cdf17e89f301ae3d77&v=4" height="12" />
        <b>xldenis</b>
    </a></td><td>LMF</td><td>Paris</td><td>200</td><td>2</td></tr><tr><td>199</td><td><a href="https://github.com/ggrossetie">
        <img src="https://avatars.githubusercontent.com/u/333276?s=72&u=9087930b05d462a706f06a9ce6bf0c8289d8069d&v=4" height="12" />
        <b>ggrossetie</b>
    </a></td><td>Yuzu tech</td><td>Lyon</td><td>198</td><td>2</td></tr><tr><td>200</td><td><a href="https://github.com/pulgamecanica">
        <img src="https://avatars.githubusercontent.com/u/28810331?s=72&u=5f46d85747b93e8d9d37f8c5682e4af4026fcc22&v=4" height="12" />
        <b>pulgamecanica</b>
    </a></td><td>Pulgamecanica</td><td>Paris / Lisbon</td><td>198</td><td>2</td></tr>
    </tbody>
</table>

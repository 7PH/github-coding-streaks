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
        <img src="https://avatars.githubusercontent.com/u/1688645?s=72&u=1cf687904979439e58e6629628a0dd41b32a591b&v=4" height="12" />
        <b>bloodyowl</b>
    </a></td><td>@swan-io</td><td>Paris, France</td><td>415</td><td>1.62K</td></tr><tr><td>🥈</td><td><a href="https://github.com/Caceresenzo">
        <img src="https://avatars.githubusercontent.com/u/7386242?s=72&u=17d4617bb086732fd4da9287942494386d06ebb3&v=4" height="12" />
        <b>Caceresenzo</b>
    </a></td><td>-</td><td>France</td><td>228</td><td>1.26K</td></tr><tr><td>🥉</td><td><a href="https://github.com/Haroenv">
        <img src="https://avatars.githubusercontent.com/u/6270048?s=72&u=767b8fde5c473100da40c50fd2f7c2df139c8d48&v=4" height="12" />
        <b>Haroenv</b>
    </a></td><td>@algolia</td><td>Paris, France</td><td>597</td><td>1.03K</td></tr><tr><td>4</td><td><a href="https://github.com/ask0ldd">
        <img src="https://avatars.githubusercontent.com/u/117862447?s=72&u=26ccc7b22832feeb7a2dc7b8909f6cc90d239a82&v=4" height="12" />
        <b>ask0ldd</b>
    </a></td><td>-</td><td>Paris, France</td><td>665</td><td>829</td></tr><tr><td>5</td><td><a href="https://github.com/BrunoLevy">
        <img src="https://avatars.githubusercontent.com/u/19478253?s=72&u=5d291f158e7d7f0ebb99475e5f8974a7a8ec374d&v=4" height="12" />
        <b>BrunoLevy</b>
    </a></td><td>@inria</td><td>Saclay, France</td><td>718</td><td>600</td></tr><tr><td>6</td><td><a href="https://github.com/crazy-max">
        <img src="https://avatars.githubusercontent.com/u/1951866?s=72&v=4" height="12" />
        <b>crazy-max</b>
    </a></td><td>@docker</td><td>France</td><td>2.56K</td><td>585</td></tr><tr><td>7</td><td><a href="https://github.com/hugomd">
        <img src="https://avatars.githubusercontent.com/u/1646536?s=72&u=fd30e2bd322769f78c4e5f8091407b1cfb4794b6&v=4" height="12" />
        <b>hugomd</b>
    </a></td><td>@CashApp @Block</td><td>Lyon, France</td><td>498</td><td>533</td></tr><tr><td>8</td><td><a href="https://github.com/fxcoudert">
        <img src="https://avatars.githubusercontent.com/u/1980544?s=72&u=9a73e04b4876d134ff69035fd7ea77eebecda2a3&v=4" height="12" />
        <b>fxcoudert</b>
    </a></td><td>-</td><td>Paris, France</td><td>344</td><td>259</td></tr><tr><td>9</td><td><a href="https://github.com/NelleV">
        <img src="https://avatars.githubusercontent.com/u/184798?s=72&v=4" height="12" />
        <b>NelleV</b>
    </a></td><td>TIMC</td><td>Grenoble</td><td>267</td><td>222</td></tr><tr><td>10</td><td><a href="https://github.com/rlouf">
        <img src="https://avatars.githubusercontent.com/u/3885044?s=72&u=d25f1b19c341ad092b89b860547177a7b5107261&v=4" height="12" />
        <b>rlouf</b>
    </a></td><td>.txt</td><td>Bourron-Marlotte, France</td><td>504</td><td>211</td></tr><tr><td>11</td><td><a href="https://github.com/rozierguillaume">
        <img src="https://avatars.githubusercontent.com/u/22763678?s=72&u=f10c1d50d6f9ce7ed6c7d64a767c02911df19cf4&v=4" height="12" />
        <b>rozierguillaume</b>
    </a></td><td>-</td><td>Paris</td><td>334</td><td>208</td></tr><tr><td>12</td><td><a href="https://github.com/Progi1984">
        <img src="https://avatars.githubusercontent.com/u/1533248?s=72&u=096bead2eab90e4795096b7d518583223dd34be6&v=4" height="12" />
        <b>Progi1984</b>
    </a></td><td>@PrestaShopCorp </td><td>Rennes, France</td><td>236</td><td>190</td></tr><tr><td>13</td><td><a href="https://github.com/huang-julien">
        <img src="https://avatars.githubusercontent.com/u/63512348?s=72&u=b60a88c0337dc98b9cdbf1d0a4b3c635786a01b0&v=4" height="12" />
        <b>huang-julien</b>
    </a></td><td>Leetchi</td><td>France</td><td>240</td><td>136</td></tr><tr><td>14</td><td><a href="https://github.com/mcanouil">
        <img src="https://avatars.githubusercontent.com/u/8896044?s=72&u=86a5cbe0323a90349d87b7fa1fd4b22ae9d45ea2&v=4" height="12" />
        <b>mcanouil</b>
    </a></td><td>-</td><td>Lille, France</td><td>308</td><td>120</td></tr><tr><td>15</td><td><a href="https://github.com/posva">
        <img src="https://avatars.githubusercontent.com/u/664177?s=72&u=06259cb98f3d65c5901edf488b6bf4ab5f4bccec&v=4" height="12" />
        <b>posva</b>
    </a></td><td>Freelance</td><td>Paris </td><td>6.17K</td><td>113</td></tr><tr><td>16</td><td><a href="https://github.com/AkechiShiro">
        <img src="https://avatars.githubusercontent.com/u/14914796?s=72&u=467624ac1d1ab89ce51c8e4ba3b37d2f66088582&v=4" height="12" />
        <b>AkechiShiro</b>
    </a></td><td>-</td><td>France</td><td>203</td><td>89</td></tr><tr><td>17</td><td><a href="https://github.com/glemaitre">
        <img src="https://avatars.githubusercontent.com/u/7454015?s=72&u=d9704641f89c00ce86f8207e59aedb554109d7fa&v=4" height="12" />
        <b>glemaitre</b>
    </a></td><td>Chief ML Officer / OSS Engineeer @probabl-ai </td><td>Paris-Saclay / France</td><td>820</td><td>81</td></tr><tr><td>18</td><td><a href="https://github.com/ganatan">
        <img src="https://avatars.githubusercontent.com/u/32958393?s=72&u=e53563d16cd220e4901251cc32c332df4496c87c&v=4" height="12" />
        <b>ganatan</b>
    </a></td><td>ganatan</td><td>France</td><td>431</td><td>80</td></tr><tr><td>19</td><td><a href="https://github.com/nhoizey">
        <img src="https://avatars.githubusercontent.com/u/78213?s=72&u=7a2b7a2aca0dcc113d7a61a6dcf9e7a338e22053&v=4" height="12" />
        <b>nhoizey</b>
    </a></td><td>@cleverage</td><td>Paris, France</td><td>264</td><td>78</td></tr><tr><td>20</td><td><a href="https://github.com/antoinevastel">
        <img src="https://avatars.githubusercontent.com/u/5827148?s=72&u=58bfd63c66ed664f66c1338464c502e88cfef45b&v=4" height="12" />
        <b>antoinevastel</b>
    </a></td><td>-</td><td>Nantes, France</td><td>348</td><td>72</td></tr><tr><td>21</td><td><a href="https://github.com/soyuka">
        <img src="https://avatars.githubusercontent.com/u/1321971?s=72&u=c89bcb8e5eeff581d304dcfc5f26628ddc1760a5&v=4" height="12" />
        <b>soyuka</b>
    </a></td><td>@coopTilleuls</td><td>Nantes, France</td><td>459</td><td>70</td></tr><tr><td>22</td><td><a href="https://github.com/ibelick">
        <img src="https://avatars.githubusercontent.com/u/14288396?s=72&u=73ee6fdd46dbab7bed83493f5f448654ff2d7f06&v=4" height="12" />
        <b>ibelick</b>
    </a></td><td>-</td><td>Paris</td><td>990</td><td>63</td></tr><tr><td>23</td><td><a href="https://github.com/LaurentMazare">
        <img src="https://avatars.githubusercontent.com/u/1041292?s=72&u=4d4c5fe94c63a8eb244d812c6d97511c3640d122&v=4" height="12" />
        <b>LaurentMazare</b>
    </a></td><td>-</td><td>Paris, France</td><td>2.43K</td><td>59</td></tr><tr><td>24</td><td><a href="https://github.com/mquandalle">
        <img src="https://avatars.githubusercontent.com/u/1730702?s=72&u=ebe99b2bcc14e2e2376df8637ddc47f1b26a5e7b&v=4" height="12" />
        <b>mquandalle</b>
    </a></td><td>-</td><td>Paris, France</td><td>321</td><td>50</td></tr><tr><td>25</td><td><a href="https://github.com/kartben">
        <img src="https://avatars.githubusercontent.com/u/128251?s=72&v=4" height="12" />
        <b>kartben</b>
    </a></td><td>-</td><td>Toulouse, France</td><td>397</td><td>49</td></tr><tr><td>26</td><td><a href="https://github.com/fasterthanlime">
        <img src="https://avatars.githubusercontent.com/u/7998310?s=72&u=fd6cb24423c35c26ee1ce7e00f0a3925bc964d1d&v=4" height="12" />
        <b>fasterthanlime</b>
    </a></td><td>@bearcove</td><td>Lyon, France</td><td>4.37K</td><td>41</td></tr><tr><td>27</td><td><a href="https://github.com/ldez">
        <img src="https://avatars.githubusercontent.com/u/5674651?s=72&u=45f0e097891f1e7e0c45c5224dcce11c867038af&v=4" height="12" />
        <b>ldez</b>
    </a></td><td>-</td><td>France</td><td>624</td><td>36</td></tr><tr><td>28</td><td><a href="https://github.com/simongravelle">
        <img src="https://avatars.githubusercontent.com/u/43388542?s=72&u=16bc101821423023268d74e239583cbcc21b3881&v=4" height="12" />
        <b>simongravelle</b>
    </a></td><td>LIPhy</td><td>Grenoble, France</td><td>567</td><td>29</td></tr><tr><td>29</td><td><a href="https://github.com/gsmet">
        <img src="https://avatars.githubusercontent.com/u/1279749?s=72&u=e462a6165ea17647aed446ca31fae604338ae18c&v=4" height="12" />
        <b>gsmet</b>
    </a></td><td>Red Hat</td><td>Lyon, France</td><td>346</td><td>27</td></tr><tr><td>30</td><td><a href="https://github.com/ggrossetie">
        <img src="https://avatars.githubusercontent.com/u/333276?s=72&u=9087930b05d462a706f06a9ce6bf0c8289d8069d&v=4" height="12" />
        <b>ggrossetie</b>
    </a></td><td>Yuzu tech</td><td>Lyon</td><td>233</td><td>27</td></tr><tr><td>31</td><td><a href="https://github.com/sylvestre">
        <img src="https://avatars.githubusercontent.com/u/733326?s=72&u=77d7752593d6fa035b33e63386cc15479744ab24&v=4" height="12" />
        <b>sylvestre</b>
    </a></td><td>Mozilla</td><td>France</td><td>502</td><td>25</td></tr><tr><td>32</td><td><a href="https://github.com/Phyronnaz">
        <img src="https://avatars.githubusercontent.com/u/16806877?s=72&u=9f22d47f8682df3061081987287e90d40f553cc8&v=4" height="12" />
        <b>Phyronnaz</b>
    </a></td><td>-</td><td>France</td><td>301</td><td>24</td></tr><tr><td>33</td><td><a href="https://github.com/abougouffa">
        <img src="https://avatars.githubusercontent.com/u/3716399?s=72&u=ad7a1e120fef1c19d7b7864ac183798de2711c59&v=4" height="12" />
        <b>abougouffa</b>
    </a></td><td>Astek Research & Innovation | Sagemcom</td><td>Paris, France</td><td>217</td><td>20</td></tr><tr><td>34</td><td><a href="https://github.com/Charles-Chrismann">
        <img src="https://avatars.githubusercontent.com/u/78157563?s=72&u=fc17705222fa92912b9b8ad556101a0608308911&v=4" height="12" />
        <b>Charles-Chrismann</b>
    </a></td><td>Institut de l'Internet et du Multimédia (IIM)</td><td>Paris, La Défense</td><td>15.19K</td><td>18</td></tr><tr><td>35</td><td><a href="https://github.com/azerpas">
        <img src="https://avatars.githubusercontent.com/u/19282069?s=72&u=23fefaa28d073e8c7fc44a5a8737145773e38c74&v=4" height="12" />
        <b>azerpas</b>
    </a></td><td>@DataDome</td><td>Paris</td><td>216</td><td>18</td></tr><tr><td>36</td><td><a href="https://github.com/k33g">
        <img src="https://avatars.githubusercontent.com/u/491848?s=72&u=332138d1fe94fc2ab4953428187a92663e14eeac&v=4" height="12" />
        <b>k33g</b>
    </a></td><td>-</td><td>Lyon (France)</td><td>376</td><td>15</td></tr><tr><td>37</td><td><a href="https://github.com/veloce">
        <img src="https://avatars.githubusercontent.com/u/423393?s=72&v=4" height="12" />
        <b>veloce</b>
    </a></td><td>lichess.org</td><td>France</td><td>362</td><td>15</td></tr><tr><td>38</td><td><a href="https://github.com/DamienCassou">
        <img src="https://avatars.githubusercontent.com/u/217543?s=72&v=4" height="12" />
        <b>DamienCassou</b>
    </a></td><td>finsit @ Wolters Kluwer</td><td>Brest, France</td><td>276</td><td>15</td></tr><tr><td>39</td><td><a href="https://github.com/ParisNeo">
        <img src="https://avatars.githubusercontent.com/u/827993?s=72&u=17ad3b01b402b36d9424d6b4437561304616eb18&v=4" height="12" />
        <b>ParisNeo</b>
    </a></td><td>CEA</td><td>France</td><td>262</td><td>15</td></tr><tr><td>40</td><td><a href="https://github.com/GuillaumeGomez">
        <img src="https://avatars.githubusercontent.com/u/3050060?s=72&u=6ca85464b07c5464a052250a4fc3e3f9c03c97ed&v=4" height="12" />
        <b>GuillaumeGomez</b>
    </a></td><td>@huawei</td><td>Paris</td><td>1.48K</td><td>14</td></tr><tr><td>41</td><td><a href="https://github.com/martinbonnin">
        <img src="https://avatars.githubusercontent.com/u/3974977?s=72&u=309f78046395d0c58ca6afbdb5ddf82c939ae66c&v=4" height="12" />
        <b>martinbonnin</b>
    </a></td><td>Apollo GraphQL</td><td>Paris, France</td><td>417</td><td>14</td></tr><tr><td>42</td><td><a href="https://github.com/ArnaudBarre">
        <img src="https://avatars.githubusercontent.com/u/14235743?s=72&u=1e3fb343c89f3f3ab51080295026475541c390f8&v=4" height="12" />
        <b>ArnaudBarre</b>
    </a></td><td>Carbometrix</td><td>Paris</td><td>297</td><td>14</td></tr><tr><td>43</td><td><a href="https://github.com/frgfm">
        <img src="https://avatars.githubusercontent.com/u/26927750?s=72&u=dfbafc3534a42845875b527483a134ec48bfe6f9&v=4" height="12" />
        <b>frgfm</b>
    </a></td><td>@quack-ai @pyronear</td><td>Paris, FR</td><td>218</td><td>14</td></tr><tr><td>44</td><td><a href="https://github.com/spolu">
        <img src="https://avatars.githubusercontent.com/u/15067?s=72&u=6297f8db333ba5fbf2be0ee9d796a09b1419115f&v=4" height="12" />
        <b>spolu</b>
    </a></td><td>Dust</td><td>Paris</td><td>513</td><td>13</td></tr><tr><td>45</td><td><a href="https://github.com/arthaud">
        <img src="https://avatars.githubusercontent.com/u/2151557?s=72&u=20726f284e2b9874d52eddf9c2c447a0ac0c5ece&v=4" height="12" />
        <b>arthaud</b>
    </a></td><td>@facebook</td><td>Paris, France</td><td>287</td><td>13</td></tr><tr><td>46</td><td><a href="https://github.com/Fantomas42">
        <img src="https://avatars.githubusercontent.com/u/100376?s=72&v=4" height="12" />
        <b>Fantomas42</b>
    </a></td><td>-</td><td>Paris, France</td><td>231</td><td>13</td></tr><tr><td>47</td><td><a href="https://github.com/FGRibreau">
        <img src="https://avatars.githubusercontent.com/u/138050?s=72&u=09ca579f8ce5f86026aa0d8858432fe77719eee7&v=4" height="12" />
        <b>FGRibreau</b>
    </a></td><td>@nobullshitbooks @netwo-io @hook0 @image-charts  @killbugtoday @mailpopin  / Sold @Redsmin @bringr</td><td>France</td><td>775</td><td>12</td></tr><tr><td>48</td><td><a href="https://github.com/maelle">
        <img src="https://avatars.githubusercontent.com/u/8360597?s=72&u=824f03caa87c92420352e3dd9a05470320a67412&v=4" height="12" />
        <b>maelle</b>
    </a></td><td>@ropensci</td><td>Nancy, France</td><td>1.05K</td><td>10</td></tr><tr><td>49</td><td><a href="https://github.com/ptitSeb">
        <img src="https://avatars.githubusercontent.com/u/3250792?s=72&u=f206420ae21c0bbf92fea09871f11adea98adb39&v=4" height="12" />
        <b>ptitSeb</b>
    </a></td><td>-</td><td>France</td><td>949</td><td>10</td></tr><tr><td>50</td><td><a href="https://github.com/ngxson">
        <img src="https://avatars.githubusercontent.com/u/7702203?s=72&u=c998d920dbca6506c9dda1df1b28adae9842720e&v=4" height="12" />
        <b>ngxson</b>
    </a></td><td>@huggingface </td><td>France</td><td>310</td><td>10</td></tr><tr><td>51</td><td><a href="https://github.com/SimonMarquis">
        <img src="https://avatars.githubusercontent.com/u/1921278?s=72&u=ace12a9fb3a0532f35285bce04898f7a7c97b2f9&v=4" height="12" />
        <b>SimonMarquis</b>
    </a></td><td>@leboncoin</td><td>Paris, France</td><td>524</td><td>9</td></tr><tr><td>52</td><td><a href="https://github.com/tbruyelle">
        <img src="https://avatars.githubusercontent.com/u/92280?s=72&u=3035228f64ba51ad6fc2f9452e22e928604152f8&v=4" height="12" />
        <b>tbruyelle</b>
    </a></td><td>@allinbits</td><td>Montpellier, France</td><td>330</td><td>9</td></tr><tr><td>53</td><td><a href="https://github.com/BoD">
        <img src="https://avatars.githubusercontent.com/u/372852?s=72&u=7569719a93bcc9da6dbec73e93464aded3bacfb7&v=4" height="12" />
        <b>BoD</b>
    </a></td><td>-</td><td>Lyon, France</td><td>204</td><td>9</td></tr><tr><td>54</td><td><a href="https://github.com/MrEliptik">
        <img src="https://avatars.githubusercontent.com/u/24484962?s=72&u=3bec91a9402f1653deecaffdc3dd13af17c02c1c&v=4" height="12" />
        <b>MrEliptik</b>
    </a></td><td>-</td><td>France</td><td>299</td><td>8</td></tr><tr><td>55</td><td><a href="https://github.com/harryjmg">
        <img src="https://avatars.githubusercontent.com/u/7394780?s=72&u=023539d62ce43f4941c72322bad57ad6d293647a&v=4" height="12" />
        <b>harryjmg</b>
    </a></td><td>JMG Harry</td><td>France</td><td>269</td><td>8</td></tr><tr><td>56</td><td><a href="https://github.com/greg0ire">
        <img src="https://avatars.githubusercontent.com/u/657779?s=72&u=96a0c076123934fb61c88da5b4d5b72b03dd69cb&v=4" height="12" />
        <b>greg0ire</b>
    </a></td><td>@ManoManoTech </td><td>Paris</td><td>246</td><td>8</td></tr><tr><td>57</td><td><a href="https://github.com/pkestene">
        <img src="https://avatars.githubusercontent.com/u/8276295?s=72&v=4" height="12" />
        <b>pkestene</b>
    </a></td><td>CEA</td><td>France</td><td>214</td><td>8</td></tr><tr><td>58</td><td><a href="https://github.com/Calinou">
        <img src="https://avatars.githubusercontent.com/u/180032?s=72&v=4" height="12" />
        <b>Calinou</b>
    </a></td><td>@godotengine</td><td>Troyes, France</td><td>1.41K</td><td>7</td></tr><tr><td>59</td><td><a href="https://github.com/byroot">
        <img src="https://avatars.githubusercontent.com/u/44640?s=72&v=4" height="12" />
        <b>byroot</b>
    </a></td><td>@Shopify (as @casperisfine)</td><td>Toulouse, France</td><td>889</td><td>7</td></tr><tr><td>60</td><td><a href="https://github.com/dgageot">
        <img src="https://avatars.githubusercontent.com/u/153495?s=72&u=7a06a6cbf585d2f329484b4f0b900bf48eee9b29&v=4" height="12" />
        <b>dgageot</b>
    </a></td><td>Docker</td><td>Paris, France</td><td>740</td><td>7</td></tr><tr><td>61</td><td><a href="https://github.com/chalasr">
        <img src="https://avatars.githubusercontent.com/u/7502063?s=72&u=56b8ba0944e917bd324d87ec7c2074665a0e699d&v=4" height="12" />
        <b>chalasr</b>
    </a></td><td>@bakslashHQ</td><td>Lyon, France</td><td>573</td><td>7</td></tr><tr><td>62</td><td><a href="https://github.com/oliviergimenez">
        <img src="https://avatars.githubusercontent.com/u/12683635?s=72&u=c5a60d598ab4e98660dc7589de4609414a6af089&v=4" height="12" />
        <b>oliviergimenez</b>
    </a></td><td>CNRS</td><td>Montpellier</td><td>495</td><td>7</td></tr><tr><td>63</td><td><a href="https://github.com/CedricGuillemet">
        <img src="https://avatars.githubusercontent.com/u/1312968?s=72&u=09586c4d429addaa7fc099437bebda780a9e39ed&v=4" height="12" />
        <b>CedricGuillemet</b>
    </a></td><td>Microsoft</td><td>Redon, Brittany, France</td><td>479</td><td>7</td></tr><tr><td>64</td><td><a href="https://github.com/hussein-aitlahcen">
        <img src="https://avatars.githubusercontent.com/u/9103813?s=72&u=8ae26cf794cdbfc36ce096a69330bc31b582eec1&v=4" height="12" />
        <b>hussein-aitlahcen</b>
    </a></td><td>Block 6.282e+10</td><td>France</td><td>391</td><td>7</td></tr><tr><td>65</td><td><a href="https://github.com/mckenziearts">
        <img src="https://avatars.githubusercontent.com/u/14105989?s=72&u=9c230c3e470fd4ddbbec22005757893bfa61d3ef&v=4" height="12" />
        <b>mckenziearts</b>
    </a></td><td>@shopperlabs </td><td>Paris, France</td><td>337</td><td>7</td></tr><tr><td>66</td><td><a href="https://github.com/nvuillam">
        <img src="https://avatars.githubusercontent.com/u/17500430?s=72&u=24ff06a935acf56fe06678874e2b297debb66fac&v=4" height="12" />
        <b>nvuillam</b>
    </a></td><td>Cloudity & OX Security</td><td>Paris, France</td><td>316</td><td>7</td></tr><tr><td>67</td><td><a href="https://github.com/adrienpoly">
        <img src="https://avatars.githubusercontent.com/u/7847244?s=72&u=f4330ca5e036d365b3c41199ac76e3b979ab10bb&v=4" height="12" />
        <b>adrienpoly</b>
    </a></td><td>-</td><td>Bordeaux</td><td>316</td><td>7</td></tr><tr><td>68</td><td><a href="https://github.com/Stilic">
        <img src="https://avatars.githubusercontent.com/u/63605602?s=72&u=6662329db31f63d8bbf4c7755a1c5de99cf54f3b&v=4" height="12" />
        <b>Stilic</b>
    </a></td><td>-</td><td>France</td><td>303</td><td>7</td></tr><tr><td>69</td><td><a href="https://github.com/tcapelle">
        <img src="https://avatars.githubusercontent.com/u/18441985?s=72&u=e10addd1db7a6280bc8f73d099df8b061ac121ef&v=4" height="12" />
        <b>tcapelle</b>
    </a></td><td>W&B</td><td>Chambery, France</td><td>285</td><td>7</td></tr><tr><td>70</td><td><a href="https://github.com/joeybronner">
        <img src="https://avatars.githubusercontent.com/u/5888510?s=72&u=15e39a4e9954e51c531d3d636749bd80c6275b8c&v=4" height="12" />
        <b>joeybronner</b>
    </a></td><td>-</td><td>Paris</td><td>261</td><td>7</td></tr><tr><td>71</td><td><a href="https://github.com/corsonr">
        <img src="https://avatars.githubusercontent.com/u/1649788?s=72&u=36a376b200fd98e6100788c1ec39b3b7e912797a&v=4" height="12" />
        <b>corsonr</b>
    </a></td><td>Be API</td><td>France</td><td>248</td><td>7</td></tr><tr><td>72</td><td><a href="https://github.com/dimaMachina">
        <img src="https://avatars.githubusercontent.com/u/7361780?s=72&u=31ad3c2188d690ce38ec9ae437faf8788d34b916&v=4" height="12" />
        <b>dimaMachina</b>
    </a></td><td>hire me</td><td>Paris, France</td><td>234</td><td>7</td></tr><tr><td>73</td><td><a href="https://github.com/jeherve">
        <img src="https://avatars.githubusercontent.com/u/426388?s=72&u=ab6b17c6d89ec3a3d06b9e352ca6b985f8b0cb3e&v=4" height="12" />
        <b>jeherve</b>
    </a></td><td>Automattic, Inc.</td><td>Brittany, France</td><td>227</td><td>7</td></tr><tr><td>74</td><td><a href="https://github.com/axeldelafosse">
        <img src="https://avatars.githubusercontent.com/u/10477267?s=72&u=0322ffa7017942defa4c6de7cdcd4d42b7d364e5&v=4" height="12" />
        <b>axeldelafosse</b>
    </a></td><td>-</td><td>Paris</td><td>209</td><td>7</td></tr><tr><td>75</td><td><a href="https://github.com/valryon">
        <img src="https://avatars.githubusercontent.com/u/155884?s=72&u=115b607498d0b336a0f1648bef3f83ce4b14f5ec&v=4" height="12" />
        <b>valryon</b>
    </a></td><td>Pixelnest Studio</td><td>France</td><td>203</td><td>7</td></tr><tr><td>76</td><td><a href="https://github.com/holtzy">
        <img src="https://avatars.githubusercontent.com/u/10254401?s=72&u=d554070e82949f6c7c6c57d4597f4cfddb053956&v=4" height="12" />
        <b>holtzy</b>
    </a></td><td>Software Engineer - Dataviz</td><td>Montpellier, France</td><td>4.21K</td><td>6</td></tr><tr><td>77</td><td><a href="https://github.com/ssaunier">
        <img src="https://avatars.githubusercontent.com/u/414418?s=72&u=6517ac662c8a8db80b1fe2c4ef050f0af8ca26cd&v=4" height="12" />
        <b>ssaunier</b>
    </a></td><td>-</td><td>France</td><td>2.32K</td><td>6</td></tr><tr><td>78</td><td><a href="https://github.com/GitSquared">
        <img src="https://avatars.githubusercontent.com/u/24496417?s=72&u=161b0a8aa57c55e6bfff0c1ee6ac59aaeeb774f5&v=4" height="12" />
        <b>GitSquared</b>
    </a></td><td>@carbonfact</td><td>Paris, France</td><td>1.88K</td><td>6</td></tr><tr><td>79</td><td><a href="https://github.com/vstinner">
        <img src="https://avatars.githubusercontent.com/u/194129?s=72&u=cf52678f5f02f96d9c5bc1b5079d4e6c2e441af4&v=4" height="12" />
        <b>vstinner</b>
    </a></td><td>@RedHatOfficial</td><td>France</td><td>1.38K</td><td>6</td></tr><tr><td>80</td><td><a href="https://github.com/MoOx">
        <img src="https://avatars.githubusercontent.com/u/157534?s=72&u=7f6ef9c51c733eb73da5aec65c0a04149604ad10&v=4" height="12" />
        <b>MoOx</b>
    </a></td><td>Freelance at MoOx.io</td><td>Toulouse, France</td><td>1.25K</td><td>6</td></tr><tr><td>81</td><td><a href="https://github.com/kizu">
        <img src="https://avatars.githubusercontent.com/u/177485?s=72&u=4d84ea69f3e98cc16d9daf0c5e7e2ca09c9efad7&v=4" height="12" />
        <b>kizu</b>
    </a></td><td>@DataDog</td><td>France</td><td>822</td><td>6</td></tr><tr><td>82</td><td><a href="https://github.com/dadoonet">
        <img src="https://avatars.githubusercontent.com/u/274222?s=72&u=5bea3907d13c82eb1b812e92650e400798632c0e&v=4" height="12" />
        <b>dadoonet</b>
    </a></td><td>@elastic</td><td>France, Cergy</td><td>660</td><td>6</td></tr><tr><td>83</td><td><a href="https://github.com/anotherhadi">
        <img src="https://avatars.githubusercontent.com/u/112569860?s=72&u=03d5a0bb87355b24b8082e50d564f5c12cf58b5a&v=4" height="12" />
        <b>anotherhadi</b>
    </a></td><td>-</td><td>France</td><td>638</td><td>6</td></tr><tr><td>84</td><td><a href="https://github.com/baptisteArno">
        <img src="https://avatars.githubusercontent.com/u/16015833?s=72&u=176af81234c692c3b2ecc37aaae5dbb815fa0a36&v=4" height="12" />
        <b>baptisteArno</b>
    </a></td><td>Typebot</td><td>Paris, France</td><td>627</td><td>6</td></tr><tr><td>85</td><td><a href="https://github.com/huextrat">
        <img src="https://avatars.githubusercontent.com/u/22995315?s=72&u=5a80fa84eaa9a083d217fccaac2fd938612758c0&v=4" height="12" />
        <b>huextrat</b>
    </a></td><td>@appchoose</td><td>Lyon, France</td><td>558</td><td>6</td></tr><tr><td>86</td><td><a href="https://github.com/belem2050">
        <img src="https://avatars.githubusercontent.com/u/90107382?s=72&u=cb38380a892623c8b69482dfe86bbcfb62e9ba85&v=4" height="12" />
        <b>belem2050</b>
    </a></td><td>@cmrobotics </td><td>France</td><td>366</td><td>6</td></tr><tr><td>87</td><td><a href="https://github.com/sunny">
        <img src="https://avatars.githubusercontent.com/u/132?s=72&v=4" height="12" />
        <b>sunny</b>
    </a></td><td>Cults.</td><td>Paris, France</td><td>363</td><td>6</td></tr><tr><td>88</td><td><a href="https://github.com/w8r">
        <img src="https://avatars.githubusercontent.com/u/26884?s=72&u=af5d4ece22ded9074d19c05059952f9d428fcf87&v=4" height="12" />
        <b>w8r</b>
    </a></td><td>@Linkurious </td><td>Paris</td><td>352</td><td>6</td></tr><tr><td>89</td><td><a href="https://github.com/sayon">
        <img src="https://avatars.githubusercontent.com/u/2575074?s=72&u=47e8778cd61c3570659a9ba3d203f3fc4e7140f8&v=4" height="12" />
        <b>sayon</b>
    </a></td><td>Matter Labs</td><td>Nantes, France</td><td>347</td><td>6</td></tr><tr><td>90</td><td><a href="https://github.com/alexarchambault">
        <img src="https://avatars.githubusercontent.com/u/7063723?s=72&u=d5befca0ebfec0042dad7ef93973490eef750ff4&v=4" height="12" />
        <b>alexarchambault</b>
    </a></td><td>-</td><td>Paris</td><td>341</td><td>6</td></tr><tr><td>91</td><td><a href="https://github.com/patcito">
        <img src="https://avatars.githubusercontent.com/u/26435?s=72&v=4" height="12" />
        <b>patcito</b>
    </a></td><td>-</td><td>Paris, France</td><td>340</td><td>6</td></tr><tr><td>92</td><td><a href="https://github.com/rap2hpoutre">
        <img src="https://avatars.githubusercontent.com/u/1575946?s=72&u=23e0b1c5feb3d6ad4862afd1393ae651b93ff960&v=4" height="12" />
        <b>rap2hpoutre</b>
    </a></td><td>@betagouv</td><td>Nantes</td><td>329</td><td>6</td></tr><tr><td>93</td><td><a href="https://github.com/matbesancon">
        <img src="https://avatars.githubusercontent.com/u/7623090?s=72&u=5a4fa8371bbdd4b7647ebb0ec12d6c3b203f45e3&v=4" height="12" />
        <b>matbesancon</b>
    </a></td><td>Inria</td><td>Grenoble, France</td><td>317</td><td>6</td></tr><tr><td>94</td><td><a href="https://github.com/dubzzz">
        <img src="https://avatars.githubusercontent.com/u/5300235?s=72&u=283a572a5010b5350eee7168cf6ce1b566747903&v=4" height="12" />
        <b>dubzzz</b>
    </a></td><td>Pigment</td><td>Remote, France</td><td>285</td><td>6</td></tr><tr><td>95</td><td><a href="https://github.com/clarus">
        <img src="https://avatars.githubusercontent.com/u/316665?s=72&u=18aacb0561d43abcf7ecca90bebbf753b655ee75&v=4" height="12" />
        <b>clarus</b>
    </a></td><td>Formal Land</td><td>Paris</td><td>276</td><td>6</td></tr><tr><td>96</td><td><a href="https://github.com/l-lin">
        <img src="https://avatars.githubusercontent.com/u/5452304?s=72&u=2e2f03b021b647037453379a788385f317c8208f&v=4" height="12" />
        <b>l-lin</b>
    </a></td><td>@doctolib</td><td>Paris</td><td>263</td><td>6</td></tr><tr><td>97</td><td><a href="https://github.com/dotdc">
        <img src="https://avatars.githubusercontent.com/u/12827900?s=72&u=df40a5743483684bb6c6ba3259116c7e87cc3ab6&v=4" height="12" />
        <b>dotdc</b>
    </a></td><td>@hivebrite</td><td>France</td><td>250</td><td>6</td></tr><tr><td>98</td><td><a href="https://github.com/rm3l">
        <img src="https://avatars.githubusercontent.com/u/593208?s=72&v=4" height="12" />
        <b>rm3l</b>
    </a></td><td>Red Hat</td><td>Lyon, France</td><td>206</td><td>6</td></tr><tr><td>99</td><td><a href="https://github.com/fabpot">
        <img src="https://avatars.githubusercontent.com/u/47313?s=72&u=7ba05204271a726f8642ac15864e2f361b5c0198&v=4" height="12" />
        <b>fabpot</b>
    </a></td><td>Symfony/Platform.sh/Blackfire</td><td>Paris, France</td><td>13.3K</td><td>5</td></tr><tr><td>100</td><td><a href="https://github.com/nadimkobeissi">
        <img src="https://avatars.githubusercontent.com/u/9953?s=72&u=bc47cbab7ce4b508a5ff9b32ac97396e77503687&v=4" height="12" />
        <b>nadimkobeissi</b>
    </a></td><td>@symbolicsoft, @cure53berlin</td><td>Paris, France</td><td>1.26K</td><td>5</td></tr><tr><td>101</td><td><a href="https://github.com/ncannasse">
        <img src="https://avatars.githubusercontent.com/u/1022912?s=72&u=38096d7e5a4d2a553fb90e5dd30e8a4f4aa782be&v=4" height="12" />
        <b>ncannasse</b>
    </a></td><td>Shiro Games</td><td>Bordeaux, France</td><td>1.05K</td><td>5</td></tr><tr><td>102</td><td><a href="https://github.com/Yomguithereal">
        <img src="https://avatars.githubusercontent.com/u/2571951?s=72&v=4" height="12" />
        <b>Yomguithereal</b>
    </a></td><td>médialab - Sciences Po</td><td>France</td><td>819</td><td>5</td></tr><tr><td>103</td><td><a href="https://github.com/Chocapikk">
        <img src="https://avatars.githubusercontent.com/u/88535377?s=72&u=badd74b326c25b71d3a0d333c40f720bc3bc98d1&v=4" height="12" />
        <b>Chocapikk</b>
    </a></td><td>Balgo Security</td><td>France</td><td>717</td><td>5</td></tr><tr><td>104</td><td><a href="https://github.com/AstraaDev">
        <img src="https://avatars.githubusercontent.com/u/43183806?s=72&u=d3bc96c5d783478b819498fcb8c07a790204442f&v=4" height="12" />
        <b>AstraaDev</b>
    </a></td><td>-</td><td>France</td><td>585</td><td>5</td></tr><tr><td>105</td><td><a href="https://github.com/eko">
        <img src="https://avatars.githubusercontent.com/u/103900?s=72&u=d185654f4e625741e01fc42c4a625be4756344c0&v=4" height="12" />
        <b>eko</b>
    </a></td><td>Freelance</td><td>Annecy, France</td><td>435</td><td>5</td></tr><tr><td>106</td><td><a href="https://github.com/sebanc">
        <img src="https://avatars.githubusercontent.com/u/22224731?s=72&v=4" height="12" />
        <b>sebanc</b>
    </a></td><td>-</td><td>Paris, France</td><td>353</td><td>5</td></tr><tr><td>107</td><td><a href="https://github.com/xvw">
        <img src="https://avatars.githubusercontent.com/u/5732466?s=72&u=e2da3651aae7faf29d3c54c4d7cf66d92f35f16e&v=4" height="12" />
        <b>xvw</b>
    </a></td><td>@funkywork, @tarides</td><td>Nantes</td><td>324</td><td>5</td></tr><tr><td>108</td><td><a href="https://github.com/NiLuJe">
        <img src="https://avatars.githubusercontent.com/u/111974?s=72&v=4" height="12" />
        <b>NiLuJe</b>
    </a></td><td>-</td><td>Paris, France</td><td>323</td><td>5</td></tr><tr><td>109</td><td><a href="https://github.com/rubenfiszel">
        <img src="https://avatars.githubusercontent.com/u/275584?s=72&u=eb0fe584ca9e8636a35ab822b93cc4a1ad10bf42&v=4" height="12" />
        <b>rubenfiszel</b>
    </a></td><td>Windmill</td><td>Paris, France</td><td>302</td><td>5</td></tr><tr><td>110</td><td><a href="https://github.com/MrArnaudMichel">
        <img src="https://avatars.githubusercontent.com/u/87248697?s=72&u=3ced1cd1b0fde42c6e1a1a04eadcf7e8eb1345b3&v=4" height="12" />
        <b>MrArnaudMichel</b>
    </a></td><td>UTBM</td><td>France</td><td>283</td><td>5</td></tr><tr><td>111</td><td><a href="https://github.com/travier">
        <img src="https://avatars.githubusercontent.com/u/64795720?s=72&u=7f7c094b847bc8dc140f2e5aaa44dcd6b70a9486&v=4" height="12" />
        <b>travier</b>
    </a></td><td>Red Hat</td><td>Paris, France</td><td>267</td><td>5</td></tr><tr><td>112</td><td><a href="https://github.com/pulgamecanica">
        <img src="https://avatars.githubusercontent.com/u/28810331?s=72&u=5f46d85747b93e8d9d37f8c5682e4af4026fcc22&v=4" height="12" />
        <b>pulgamecanica</b>
    </a></td><td>Pulgamecanica</td><td>Paris / Lisbon</td><td>251</td><td>5</td></tr><tr><td>113</td><td><a href="https://github.com/elisee">
        <img src="https://avatars.githubusercontent.com/u/446986?s=72&u=df08e96da70c3f0c00a351bf3c344fb56c02d24d&v=4" height="12" />
        <b>elisee</b>
    </a></td><td>@elisee</td><td>Strasbourg, France</td><td>223</td><td>5</td></tr><tr><td>114</td><td><a href="https://github.com/tdimnet">
        <img src="https://avatars.githubusercontent.com/u/9935925?s=72&u=90d6020b1e99960d5cc4ad0517bf6e6e96907d6f&v=4" height="12" />
        <b>tdimnet</b>
    </a></td><td>@nx-academy, @EdenSchoolFrance</td><td>Paris, France</td><td>215</td><td>5</td></tr><tr><td>115</td><td><a href="https://github.com/gentilkiwi">
        <img src="https://avatars.githubusercontent.com/u/2307945?s=72&v=4" height="12" />
        <b>gentilkiwi</b>
    </a></td><td>@BdF-LabSec</td><td>France</td><td>4.33K</td><td>4</td></tr><tr><td>116</td><td><a href="https://github.com/oliviertassinari">
        <img src="https://avatars.githubusercontent.com/u/3165635?s=72&u=15a7ca3a64c1839a55c83a987d6f906c817d9e85&v=4" height="12" />
        <b>oliviertassinari</b>
    </a></td><td>MUI</td><td>Paris, France</td><td>3.19K</td><td>4</td></tr><tr><td>117</td><td><a href="https://github.com/noraj">
        <img src="https://avatars.githubusercontent.com/u/16578570?s=72&u=a95cbd7b496e688d77205c934c8ef9ebeb273a73&v=4" height="12" />
        <b>noraj</b>
    </a></td><td>Rawsec</td><td>FRANCE</td><td>1.96K</td><td>4</td></tr><tr><td>118</td><td><a href="https://github.com/manekinekko">
        <img src="https://avatars.githubusercontent.com/u/1699357?s=72&u=0df93e66e6a7f9c76d599d796edb00f68bbddf5b&v=4" height="12" />
        <b>manekinekko</b>
    </a></td><td>@microsoft</td><td>France</td><td>1.52K</td><td>4</td></tr><tr><td>119</td><td><a href="https://github.com/PetaTech">
        <img src="https://avatars.githubusercontent.com/u/130851533?s=72&u=946f44badecf8d4cb5b3a40c64654c95a6ceb585&v=4" height="12" />
        <b>PetaTech</b>
    </a></td><td>LovedByMen LTD</td><td>France</td><td>1.12K</td><td>4</td></tr><tr><td>120</td><td><a href="https://github.com/mklabs">
        <img src="https://avatars.githubusercontent.com/u/113832?s=72&u=99d9dde9317c0658dff2e0409c41495f5ef95077&v=4" height="12" />
        <b>mklabs</b>
    </a></td><td>@Geodesic-Games </td><td>Lyon, France</td><td>579</td><td>4</td></tr><tr><td>121</td><td><a href="https://github.com/VonC">
        <img src="https://avatars.githubusercontent.com/u/79478?s=72&v=4" height="12" />
        <b>VonC</b>
    </a></td><td>-</td><td>France</td><td>458</td><td>4</td></tr><tr><td>122</td><td><a href="https://github.com/RaitoBezarius">
        <img src="https://avatars.githubusercontent.com/u/314564?s=72&u=2b23b8b25c888f248f04be073e6b4994f932f7b7&v=4" height="12" />
        <b>RaitoBezarius</b>
    </a></td><td>Independent Contributor</td><td>France</td><td>406</td><td>4</td></tr><tr><td>123</td><td><a href="https://github.com/Yanlry">
        <img src="https://avatars.githubusercontent.com/u/122649131?s=72&u=ed01f26921d8c98ec9c54de3db9568fe88dae0b9&v=4" height="12" />
        <b>Yanlry</b>
    </a></td><td>Fsociety</td><td>Lille, France</td><td>359</td><td>4</td></tr><tr><td>124</td><td><a href="https://github.com/DeveloppeurPascal">
        <img src="https://avatars.githubusercontent.com/u/29439699?s=72&u=3b413495092a9927526da35a406812d44b64048b&v=4" height="12" />
        <b>DeveloppeurPascal</b>
    </a></td><td>-</td><td>Orléans, France</td><td>331</td><td>4</td></tr><tr><td>125</td><td><a href="https://github.com/SirLynix">
        <img src="https://avatars.githubusercontent.com/u/3002461?s=72&u=cd05ef11e7f6a4e0d2800639896c37fa6dd49dc9&v=4" height="12" />
        <b>SirLynix</b>
    </a></td><td>Gameloft Paris</td><td>France</td><td>313</td><td>4</td></tr><tr><td>126</td><td><a href="https://github.com/mockersf">
        <img src="https://avatars.githubusercontent.com/u/8672791?s=72&u=6350847888b0006d335bc98ca32a5359389d26b5&v=4" height="12" />
        <b>mockersf</b>
    </a></td><td>-</td><td>France</td><td>276</td><td>4</td></tr><tr><td>127</td><td><a href="https://github.com/gnodet">
        <img src="https://avatars.githubusercontent.com/u/84022?s=72&u=411d6cc1a1007325d0051d524e5ec04b5a859e1f&v=4" height="12" />
        <b>gnodet</b>
    </a></td><td>Red Hat</td><td>Caen, France</td><td>222</td><td>4</td></tr><tr><td>128</td><td><a href="https://github.com/teolemon">
        <img src="https://avatars.githubusercontent.com/u/1689815?s=72&u=6301f2326ab5595912a1fa33b8989823bba40071&v=4" height="12" />
        <b>teolemon</b>
    </a></td><td>@openfoodfacts </td><td>Paris</td><td>216</td><td>4</td></tr><tr><td>129</td><td><a href="https://github.com/wtarreau">
        <img src="https://avatars.githubusercontent.com/u/8141789?s=72&u=e9359a488ad99600a4b9393a83c0f736c29ba401&v=4" height="12" />
        <b>wtarreau</b>
    </a></td><td>HAProxy Technologies</td><td>France</td><td>203</td><td>4</td></tr><tr><td>130</td><td><a href="https://github.com/mnapoli">
        <img src="https://avatars.githubusercontent.com/u/720328?s=72&u=dc9333a6798810e941a0240566fe2a38a5f55bd7&v=4" height="12" />
        <b>mnapoli</b>
    </a></td><td>@brefphp </td><td>Lyon, France</td><td>1.45K</td><td>3</td></tr><tr><td>131</td><td><a href="https://github.com/thomasync">
        <img src="https://avatars.githubusercontent.com/u/12927290?s=72&u=46e5c515789397dc2f91f4fe0a5cfa3f9ea40177&v=4" height="12" />
        <b>thomasync</b>
    </a></td><td>-</td><td>Montpellier, France</td><td>1.02K</td><td>3</td></tr><tr><td>132</td><td><a href="https://github.com/Zylann">
        <img src="https://avatars.githubusercontent.com/u/1311555?s=72&u=98e85e0c6d8599c7de140000f240417c9f512cea&v=4" height="12" />
        <b>Zylann</b>
    </a></td><td>-</td><td>France</td><td>725</td><td>3</td></tr><tr><td>133</td><td><a href="https://github.com/Mattrack">
        <img src="https://avatars.githubusercontent.com/u/1747403?s=72&u=031fcdc67c6ba38585c18dbdef5f36283499316e&v=4" height="12" />
        <b>Mattrack</b>
    </a></td><td>@holbertonschool </td><td>France</td><td>495</td><td>3</td></tr><tr><td>134</td><td><a href="https://github.com/JCluzet">
        <img src="https://avatars.githubusercontent.com/u/55356071?s=72&u=1e399003c32fba533c32f1b912b9ca56756e3887&v=4" height="12" />
        <b>JCluzet</b>
    </a></td><td>42Paris</td><td>Paris</td><td>450</td><td>3</td></tr><tr><td>135</td><td><a href="https://github.com/ccamel">
        <img src="https://avatars.githubusercontent.com/u/9574336?s=72&u=5d1de8c7eaf3289162c88956747465a8ed570d66&v=4" height="12" />
        <b>ccamel</b>
    </a></td><td>@axone-protocol</td><td>Toulouse</td><td>449</td><td>3</td></tr><tr><td>136</td><td><a href="https://github.com/charlesBochet">
        <img src="https://avatars.githubusercontent.com/u/12035771?s=72&u=d630d76a6340dbc94ecacfe80be2095b4548c376&v=4" height="12" />
        <b>charlesBochet</b>
    </a></td><td>Twenty</td><td>Paris</td><td>392</td><td>3</td></tr><tr><td>137</td><td><a href="https://github.com/jfmengels">
        <img src="https://avatars.githubusercontent.com/u/3869412?s=72&u=94671e89962b7f55dafb2da49a5d7af113e74396&v=4" height="12" />
        <b>jfmengels</b>
    </a></td><td>CrowdStrike</td><td>Paris, France</td><td>387</td><td>3</td></tr><tr><td>138</td><td><a href="https://github.com/thierryvolpiatto">
        <img src="https://avatars.githubusercontent.com/u/1533939?s=72&v=4" height="12" />
        <b>thierryvolpiatto</b>
    </a></td><td>@emacs-helm </td><td>France</td><td>222</td><td>3</td></tr><tr><td>139</td><td><a href="https://github.com/gligli">
        <img src="https://avatars.githubusercontent.com/u/524324?s=72&u=215d625c578b4507d06a9b9607d10c77f0ed48d8&v=4" height="12" />
        <b>gligli</b>
    </a></td><td>-</td><td>near Lyon, France</td><td>211</td><td>3</td></tr><tr><td>140</td><td><a href="https://github.com/ornicar">
        <img src="https://avatars.githubusercontent.com/u/140370?s=72&v=4" height="12" />
        <b>ornicar</b>
    </a></td><td>lichess.org</td><td>France</td><td>6.05K</td><td>2</td></tr><tr><td>141</td><td><a href="https://github.com/dunglas">
        <img src="https://avatars.githubusercontent.com/u/57224?s=72&u=a7ed2cf3f0ae84c9e06925b94091b85a7d6324b0&v=4" height="12" />
        <b>dunglas</b>
    </a></td><td>@coopTilleuls </td><td>Lille, France</td><td>4.22K</td><td>2</td></tr><tr><td>142</td><td><a href="https://github.com/ocornut">
        <img src="https://avatars.githubusercontent.com/u/8225057?s=72&u=de42cf0fa1f1970187db446beea30c61b9c1e6d3&v=4" height="12" />
        <b>ocornut</b>
    </a></td><td>Disco Hello / Lizardcube</td><td>Paris, France</td><td>3.67K</td><td>2</td></tr><tr><td>143</td><td><a href="https://github.com/MaJerle">
        <img src="https://avatars.githubusercontent.com/u/405717?s=72&u=38e08e0842ed71ef9d972f001cfa73e8aa896362&v=4" height="12" />
        <b>MaJerle</b>
    </a></td><td>-</td><td>France</td><td>2.67K</td><td>2</td></tr><tr><td>144</td><td><a href="https://github.com/donho">
        <img src="https://avatars.githubusercontent.com/u/90293?s=72&u=ecf6e2f9319cd333d4ffd0056c84848e91ae9870&v=4" height="12" />
        <b>donho</b>
    </a></td><td>Notepad++ Project</td><td>Paris France</td><td>2.11K</td><td>2</td></tr><tr><td>145</td><td><a href="https://github.com/FaridSafi">
        <img src="https://avatars.githubusercontent.com/u/388375?s=72&u=a10567f0c2ae0b6a68a4d590c8fbdd40851a7d59&v=4" height="12" />
        <b>FaridSafi</b>
    </a></td><td>@LeReacteur</td><td>Paris, France</td><td>1.8K</td><td>2</td></tr><tr><td>146</td><td><a href="https://github.com/mxrch">
        <img src="https://avatars.githubusercontent.com/u/17338428?s=72&u=78e744ba686776918a36fcc0047e2f031e3a3d50&v=4" height="12" />
        <b>mxrch</b>
    </a></td><td>HideAndSec</td><td>France</td><td>1.66K</td><td>2</td></tr><tr><td>147</td><td><a href="https://github.com/samber">
        <img src="https://avatars.githubusercontent.com/u/2951285?s=72&u=571c795227b4edbd29f027478346834f83a95076&v=4" height="12" />
        <b>samber</b>
    </a></td><td>-</td><td>Nantes, France</td><td>1.59K</td><td>2</td></tr><tr><td>148</td><td><a href="https://github.com/agramfort">
        <img src="https://avatars.githubusercontent.com/u/161052?s=72&u=28620e0e14597ad721a7505cf486aaf5687aea66&v=4" height="12" />
        <b>agramfort</b>
    </a></td><td>Meta</td><td>Paris, France</td><td>1.36K</td><td>2</td></tr><tr><td>149</td><td><a href="https://github.com/Kakise">
        <img src="https://avatars.githubusercontent.com/u/18647044?s=72&u=be2d09004989d870eaa9c6285daa8c52f490c3a8&v=4" height="12" />
        <b>Kakise</b>
    </a></td><td>-</td><td>Paris, France</td><td>1.32K</td><td>2</td></tr><tr><td>150</td><td><a href="https://github.com/mpgn">
        <img src="https://avatars.githubusercontent.com/u/5891788?s=72&u=b9940284a900247ecbd99c9517c1142c33586621&v=4" height="12" />
        <b>mpgn</b>
    </a></td><td>-</td><td>France</td><td>1.27K</td><td>2</td></tr><tr><td>151</td><td><a href="https://github.com/vincentbernat">
        <img src="https://avatars.githubusercontent.com/u/631446?s=72&u=4fa1b32955881f764b4ca8556b8ba62db83f55d2&v=4" height="12" />
        <b>vincentbernat</b>
    </a></td><td>Free</td><td>Paris, France</td><td>1.15K</td><td>2</td></tr><tr><td>152</td><td><a href="https://github.com/groue">
        <img src="https://avatars.githubusercontent.com/u/54219?s=72&u=73ae5871c4a96c72fae2650b267d578440e38983&v=4" height="12" />
        <b>groue</b>
    </a></td><td>Pierlis</td><td>Paris, France</td><td>1.14K</td><td>2</td></tr><tr><td>153</td><td><a href="https://github.com/Bleuje">
        <img src="https://avatars.githubusercontent.com/u/17087687?s=72&u=43aeff24919f3b82dec581293d2f9df51bcfb187&v=4" height="12" />
        <b>Bleuje</b>
    </a></td><td>-</td><td>Paris</td><td>1.13K</td><td>2</td></tr><tr><td>154</td><td><a href="https://github.com/rossant">
        <img src="https://avatars.githubusercontent.com/u/1942359?s=72&v=4" height="12" />
        <b>rossant</b>
    </a></td><td>@int-brain-lab @cortex-lab </td><td>Paris</td><td>1.03K</td><td>2</td></tr><tr><td>155</td><td><a href="https://github.com/ShutdownRepo">
        <img src="https://avatars.githubusercontent.com/u/40902872?s=72&u=a83152b1ababd07d2295e28b9cf0adb69049f42f&v=4" height="12" />
        <b>ShutdownRepo</b>
    </a></td><td>-</td><td>France</td><td>996</td><td>2</td></tr><tr><td>156</td><td><a href="https://github.com/pozil">
        <img src="https://avatars.githubusercontent.com/u/5071767?s=72&u=b8193cb38d2ebd821e9c333761912d127cbe300d&v=4" height="12" />
        <b>pozil</b>
    </a></td><td>Salesforce</td><td>France</td><td>883</td><td>2</td></tr><tr><td>157</td><td><a href="https://github.com/Xyl2k">
        <img src="https://avatars.githubusercontent.com/u/8536299?s=72&u=88d2fa98d1bdcef6b2578e57e988c5cb64c735e8&v=4" height="12" />
        <b>Xyl2k</b>
    </a></td><td>-</td><td>France</td><td>855</td><td>2</td></tr><tr><td>158</td><td><a href="https://github.com/Te-k">
        <img src="https://avatars.githubusercontent.com/u/15989628?s=72&u=7e42e05b8b30d6706597aa6c9fd90f4b3c35d904&v=4" height="12" />
        <b>Te-k</b>
    </a></td><td>-</td><td>Toulouse, France</td><td>844</td><td>2</td></tr><tr><td>159</td><td><a href="https://github.com/eliemichel">
        <img src="https://avatars.githubusercontent.com/u/5802849?s=72&v=4" height="12" />
        <b>eliemichel</b>
    </a></td><td>@adobe</td><td>Paris</td><td>841</td><td>2</td></tr><tr><td>160</td><td><a href="https://github.com/Hackndo">
        <img src="https://avatars.githubusercontent.com/u/11051803?s=72&u=393d5e2fe597833da6063b156fab4931148c933a&v=4" height="12" />
        <b>Hackndo</b>
    </a></td><td>Login Sécurité</td><td>Paris</td><td>822</td><td>2</td></tr><tr><td>161</td><td><a href="https://github.com/bzg">
        <img src="https://avatars.githubusercontent.com/u/63500?s=72&u=5388581f4d8481e5c9ea311d4fb12eedee21647f&v=4" height="12" />
        <b>bzg</b>
    </a></td><td>@codegouvfr</td><td>Paris</td><td>812</td><td>2</td></tr><tr><td>162</td><td><a href="https://github.com/ArthurSonzogni">
        <img src="https://avatars.githubusercontent.com/u/4759106?s=72&v=4" height="12" />
        <b>ArthurSonzogni</b>
    </a></td><td>-</td><td>Paris</td><td>785</td><td>2</td></tr><tr><td>163</td><td><a href="https://github.com/scraly">
        <img src="https://avatars.githubusercontent.com/u/2543381?s=72&u=d500ca96ff8a2a3f9b7bb300c71ed7e57449b072&v=4" height="12" />
        <b>scraly</b>
    </a></td><td>ovh</td><td>Toulouse</td><td>781</td><td>2</td></tr><tr><td>164</td><td><a href="https://github.com/fraxken">
        <img src="https://avatars.githubusercontent.com/u/4438263?s=72&u=5e2d0c11f001871b76e25dd3a96bd662d6a706ba&v=4" height="12" />
        <b>fraxken</b>
    </a></td><td>@MyUnisoft</td><td>Paris</td><td>667</td><td>2</td></tr><tr><td>165</td><td><a href="https://github.com/samirsaci">
        <img src="https://avatars.githubusercontent.com/u/77899321?s=72&u=8106e44ec4cc3cb3c59ab36fe29235045ca45a5e&v=4" height="12" />
        <b>samirsaci</b>
    </a></td><td>-</td><td>Paris</td><td>610</td><td>2</td></tr><tr><td>166</td><td><a href="https://github.com/cderv">
        <img src="https://avatars.githubusercontent.com/u/6791940?s=72&u=a663577929b49c1add41e6d7ffe3210e819c7a4e&v=4" height="12" />
        <b>cderv</b>
    </a></td><td>https://posit.co</td><td>Paris</td><td>588</td><td>2</td></tr><tr><td>167</td><td><a href="https://github.com/Kerollmops">
        <img src="https://avatars.githubusercontent.com/u/3610253?s=72&u=5997d202d7af48cde9b2c53a29000548886fa81e&v=4" height="12" />
        <b>Kerollmops</b>
    </a></td><td>@meilisearch</td><td>France, Paris</td><td>578</td><td>2</td></tr><tr><td>168</td><td><a href="https://github.com/Guilouz">
        <img src="https://avatars.githubusercontent.com/u/12702322?s=72&u=f6da23f5fd8d72ed72413e5bc8b9b2c170670783&v=4" height="12" />
        <b>Guilouz</b>
    </a></td><td>-</td><td>France</td><td>535</td><td>2</td></tr><tr><td>169</td><td><a href="https://github.com/kevinchalet">
        <img src="https://avatars.githubusercontent.com/u/6998306?s=72&u=71c40a231984c198d230974e6536b1aea5caf756&v=4" height="12" />
        <b>kevinchalet</b>
    </a></td><td>-</td><td>France</td><td>523</td><td>2</td></tr><tr><td>170</td><td><a href="https://github.com/sebsto">
        <img src="https://avatars.githubusercontent.com/u/401798?s=72&u=dc5e8355d22fe5bc956c382be7fa9dddbebea5db&v=4" height="12" />
        <b>sebsto</b>
    </a></td><td>Amazon Web Services</td><td>Paris</td><td>506</td><td>2</td></tr><tr><td>171</td><td><a href="https://github.com/regismeyssonnier">
        <img src="https://avatars.githubusercontent.com/u/67794100?s=72&u=1ca7e47b4be58f6c409722e62e51987325889cba&v=4" height="12" />
        <b>regismeyssonnier</b>
    </a></td><td>RM</td><td>France</td><td>493</td><td>2</td></tr><tr><td>172</td><td><a href="https://github.com/KtorZ">
        <img src="https://avatars.githubusercontent.com/u/5680256?s=72&u=020eb2bc68211d32c1691695b6ab22ad55478501&v=4" height="12" />
        <b>KtorZ</b>
    </a></td><td>@cardano-foundation</td><td>Toulouse</td><td>461</td><td>2</td></tr><tr><td>173</td><td><a href="https://github.com/nical">
        <img src="https://avatars.githubusercontent.com/u/264854?s=72&u=43290726ca0f48051b8695b452644cc9fc025a85&v=4" height="12" />
        <b>nical</b>
    </a></td><td>Mozilla</td><td>Lyon, France</td><td>443</td><td>2</td></tr><tr><td>174</td><td><a href="https://github.com/maziyarpanahi">
        <img src="https://avatars.githubusercontent.com/u/5762953?s=72&u=17070601b919833c70fc8cb61381822fdb987639&v=4" height="12" />
        <b>maziyarpanahi</b>
    </a></td><td>@ISCPIF @JohnSnowLabs</td><td>Paris, France</td><td>441</td><td>2</td></tr><tr><td>175</td><td><a href="https://github.com/yoanbernabeu">
        <img src="https://avatars.githubusercontent.com/u/59195351?s=72&u=c8f1073abf2184d2eebea8efab19074068507d17&v=4" height="12" />
        <b>yoanbernabeu</b>
    </a></td><td>YoanDev.co</td><td>France</td><td>417</td><td>2</td></tr><tr><td>176</td><td><a href="https://github.com/NicolasPetton">
        <img src="https://avatars.githubusercontent.com/u/123539?s=72&u=5ddba75ca916a17ce1d818279b70ab97573c0a7a&v=4" height="12" />
        <b>NicolasPetton</b>
    </a></td><td>-</td><td>Brest, France</td><td>414</td><td>2</td></tr><tr><td>177</td><td><a href="https://github.com/Julien-R44">
        <img src="https://avatars.githubusercontent.com/u/8337858?s=72&u=51dca49c82393b452f05ee4aa4129a659ef47e34&v=4" height="12" />
        <b>Julien-R44</b>
    </a></td><td>Freelancing </td><td>France</td><td>409</td><td>2</td></tr><tr><td>178</td><td><a href="https://github.com/cyyynthia">
        <img src="https://avatars.githubusercontent.com/u/9999055?s=72&u=c2ca323c4b12e47ae04f433c0dd118f252c9c636&v=4" height="12" />
        <b>cyyynthia</b>
    </a></td><td>@Borkenware</td><td>Toulouse, France</td><td>401</td><td>2</td></tr><tr><td>179</td><td><a href="https://github.com/frankie567">
        <img src="https://avatars.githubusercontent.com/u/1144727?s=72&u=c159fe047727aedecbbeeaa96a1b03ceb9d39add&v=4" height="12" />
        <b>frankie567</b>
    </a></td><td>@polarsource</td><td>Lyon, France</td><td>374</td><td>2</td></tr><tr><td>180</td><td><a href="https://github.com/mpromonet">
        <img src="https://avatars.githubusercontent.com/u/1367630?s=72&u=656527786957614d8cf8dec22644fe40dadbbe6f&v=4" height="12" />
        <b>mpromonet</b>
    </a></td><td>-</td><td>France</td><td>358</td><td>2</td></tr><tr><td>181</td><td><a href="https://github.com/kelu124">
        <img src="https://avatars.githubusercontent.com/u/2452634?s=72&u=55b50a96ed1143c6cf84704446464eb7c069daf5&v=4" height="12" />
        <b>kelu124</b>
    </a></td><td>-</td><td>Paris</td><td>339</td><td>2</td></tr><tr><td>182</td><td><a href="https://github.com/bfontaine">
        <img src="https://avatars.githubusercontent.com/u/1334295?s=72&u=30d05c3a40d258edf7cd28dfd1694a34d9349dc4&v=4" height="12" />
        <b>bfontaine</b>
    </a></td><td>@bixoto</td><td>Paris, France</td><td>331</td><td>2</td></tr><tr><td>183</td><td><a href="https://github.com/vadimkantorov">
        <img src="https://avatars.githubusercontent.com/u/1041752?s=72&u=51c5c08f0f9be5206c4d5d6b3d09492bb6f9aa69&v=4" height="12" />
        <b>vadimkantorov</b>
    </a></td><td>INRIA</td><td>Paris, France</td><td>331</td><td>2</td></tr><tr><td>184</td><td><a href="https://github.com/sinedied">
        <img src="https://avatars.githubusercontent.com/u/593151?s=72&u=08557bbdd96221813b8aec932dd7de895ac040ea&v=4" height="12" />
        <b>sinedied</b>
    </a></td><td>@Microsoft</td><td>France</td><td>319</td><td>2</td></tr><tr><td>185</td><td><a href="https://github.com/bokub">
        <img src="https://avatars.githubusercontent.com/u/17952318?s=72&u=a56e98d9579c9926fc82ca7089563e37ba1b22d4&v=4" height="12" />
        <b>bokub</b>
    </a></td><td>Freelance</td><td>Toulouse, France</td><td>310</td><td>2</td></tr><tr><td>186</td><td><a href="https://github.com/MeymounB">
        <img src="https://avatars.githubusercontent.com/u/77726988?s=72&u=d12068913a829662f30751a4591327cdbf424ead&v=4" height="12" />
        <b>MeymounB</b>
    </a></td><td>@Next-Generation-Dev</td><td>France</td><td>304</td><td>2</td></tr><tr><td>187</td><td><a href="https://github.com/llenotre">
        <img src="https://avatars.githubusercontent.com/u/66486624?s=72&u=7da2690ef9c531b23456974d6b33dd5c56f16119&v=4" height="12" />
        <b>llenotre</b>
    </a></td><td>CleverCloud</td><td>France</td><td>302</td><td>2</td></tr><tr><td>188</td><td><a href="https://github.com/sdpython">
        <img src="https://avatars.githubusercontent.com/u/4695832?s=72&u=9a0581b7da03088ea4ad3a37c5b680a64d864f33&v=4" height="12" />
        <b>sdpython</b>
    </a></td><td>@ENSAE</td><td>paris</td><td>300</td><td>2</td></tr><tr><td>189</td><td><a href="https://github.com/Liryna">
        <img src="https://avatars.githubusercontent.com/u/4311419?s=72&v=4" height="12" />
        <b>Liryna</b>
    </a></td><td>Google</td><td>France</td><td>299</td><td>2</td></tr><tr><td>190</td><td><a href="https://github.com/mfuntowicz">
        <img src="https://avatars.githubusercontent.com/u/2241520?s=72&u=ee36ddd1373358f3e31ef52ba5721fe0d308bc8a&v=4" height="12" />
        <b>mfuntowicz</b>
    </a></td><td>@huggingface </td><td>Paris, France</td><td>296</td><td>2</td></tr><tr><td>191</td><td><a href="https://github.com/thbar">
        <img src="https://avatars.githubusercontent.com/u/10141?s=72&u=41c21f0cc2eb57c17dd9533bebad9c4d34bae89d&v=4" height="12" />
        <b>thbar</b>
    </a></td><td>LoGeek (ETL, data processing, SaaS products, RubyOnRails, Elixir)</td><td>Saintes, France</td><td>287</td><td>2</td></tr><tr><td>192</td><td><a href="https://github.com/Abonia1">
        <img src="https://avatars.githubusercontent.com/u/22887323?s=72&u=23dd96b05f8f5b382532f609956a63c9ea3cfc5a&v=4" height="12" />
        <b>Abonia1</b>
    </a></td><td>IBM</td><td>Paris,France</td><td>286</td><td>2</td></tr><tr><td>193</td><td><a href="https://github.com/jderusse">
        <img src="https://avatars.githubusercontent.com/u/578547?s=72&u=df76d0514c86209a3fff8c9fb9d15ae8592c43c9&v=4" height="12" />
        <b>jderusse</b>
    </a></td><td>Blackfire</td><td>Paris, France</td><td>271</td><td>2</td></tr><tr><td>194</td><td><a href="https://github.com/armel">
        <img src="https://avatars.githubusercontent.com/u/127889?s=72&u=e1dfe6a97714c81ef8e2307b27d66fb9446cbeca&v=4" height="12" />
        <b>armel</b>
    </a></td><td>Globalis</td><td>Paris (France)</td><td>265</td><td>2</td></tr><tr><td>195</td><td><a href="https://github.com/RodZill4">
        <img src="https://avatars.githubusercontent.com/u/6957908?s=72&u=c19aecbe4d441eb008a4485fdcddb661ce659951&v=4" height="12" />
        <b>RodZill4</b>
    </a></td><td>-</td><td>France</td><td>260</td><td>2</td></tr><tr><td>196</td><td><a href="https://github.com/roblabla">
        <img src="https://avatars.githubusercontent.com/u/1069318?s=72&u=f270fc1cecf2076137002880491b4e25787de0e6&v=4" height="12" />
        <b>roblabla</b>
    </a></td><td>@Seed-Up </td><td>France, FR</td><td>244</td><td>2</td></tr><tr><td>197</td><td><a href="https://github.com/joel-costigliola">
        <img src="https://avatars.githubusercontent.com/u/382613?s=72&u=949d272a648f69a6c2d8c7f8ed818fc82aa10749&v=4" height="12" />
        <b>joel-costigliola</b>
    </a></td><td>Agicap</td><td>France</td><td>232</td><td>2</td></tr><tr><td>198</td><td><a href="https://github.com/AntoineAugusti">
        <img src="https://avatars.githubusercontent.com/u/295709?s=72&v=4" height="12" />
        <b>AntoineAugusti</b>
    </a></td><td>@betagouv @mtes-mct @etalab</td><td>Dijon, France</td><td>227</td><td>2</td></tr><tr><td>199</td><td><a href="https://github.com/adamhlt">
        <img src="https://avatars.githubusercontent.com/u/48086737?s=72&u=389c4edb324b4335cd526046e99bdc9e80febf1c&v=4" height="12" />
        <b>adamhlt</b>
    </a></td><td>Lab-STICC</td><td>Lorient, France</td><td>217</td><td>2</td></tr><tr><td>200</td><td><a href="https://github.com/BenMorel">
        <img src="https://avatars.githubusercontent.com/u/1952838?s=72&v=4" height="12" />
        <b>BenMorel</b>
    </a></td><td>-</td><td>France</td><td>212</td><td>2</td></tr>
    </tbody>
</table>

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
    </a></td><td>@swan-io</td><td>Paris, France</td><td>417</td><td>1.63K</td></tr><tr><td>🥈</td><td><a href="https://github.com/Caceresenzo">
        <img src="https://avatars.githubusercontent.com/u/7386242?s=72&u=17d4617bb086732fd4da9287942494386d06ebb3&v=4" height="12" />
        <b>Caceresenzo</b>
    </a></td><td>-</td><td>France</td><td>229</td><td>1.27K</td></tr><tr><td>🥉</td><td><a href="https://github.com/Haroenv">
        <img src="https://avatars.githubusercontent.com/u/6270048?s=72&u=767b8fde5c473100da40c50fd2f7c2df139c8d48&v=4" height="12" />
        <b>Haroenv</b>
    </a></td><td>@algolia</td><td>Paris, France</td><td>597</td><td>1.04K</td></tr><tr><td>4</td><td><a href="https://github.com/ask0ldd">
        <img src="https://avatars.githubusercontent.com/u/117862447?s=72&u=26ccc7b22832feeb7a2dc7b8909f6cc90d239a82&v=4" height="12" />
        <b>ask0ldd</b>
    </a></td><td>-</td><td>Paris, France</td><td>671</td><td>836</td></tr><tr><td>5</td><td><a href="https://github.com/BrunoLevy">
        <img src="https://avatars.githubusercontent.com/u/19478253?s=72&u=5d291f158e7d7f0ebb99475e5f8974a7a8ec374d&v=4" height="12" />
        <b>BrunoLevy</b>
    </a></td><td>@inria</td><td>Saclay, France</td><td>719</td><td>607</td></tr><tr><td>6</td><td><a href="https://github.com/crazy-max">
        <img src="https://avatars.githubusercontent.com/u/1951866?s=72&v=4" height="12" />
        <b>crazy-max</b>
    </a></td><td>@docker</td><td>France</td><td>2.57K</td><td>592</td></tr><tr><td>7</td><td><a href="https://github.com/hugomd">
        <img src="https://avatars.githubusercontent.com/u/1646536?s=72&u=fd30e2bd322769f78c4e5f8091407b1cfb4794b6&v=4" height="12" />
        <b>hugomd</b>
    </a></td><td>@CashApp @Block</td><td>Lyon, France</td><td>499</td><td>540</td></tr><tr><td>8</td><td><a href="https://github.com/fxcoudert">
        <img src="https://avatars.githubusercontent.com/u/1980544?s=72&u=9a73e04b4876d134ff69035fd7ea77eebecda2a3&v=4" height="12" />
        <b>fxcoudert</b>
    </a></td><td>-</td><td>Paris, France</td><td>345</td><td>266</td></tr><tr><td>9</td><td><a href="https://github.com/NelleV">
        <img src="https://avatars.githubusercontent.com/u/184798?s=72&v=4" height="12" />
        <b>NelleV</b>
    </a></td><td>TIMC</td><td>Grenoble</td><td>267</td><td>229</td></tr><tr><td>10</td><td><a href="https://github.com/rlouf">
        <img src="https://avatars.githubusercontent.com/u/3885044?s=72&u=d25f1b19c341ad092b89b860547177a7b5107261&v=4" height="12" />
        <b>rlouf</b>
    </a></td><td>.txt</td><td>Bourron-Marlotte, France</td><td>506</td><td>218</td></tr><tr><td>11</td><td><a href="https://github.com/rozierguillaume">
        <img src="https://avatars.githubusercontent.com/u/22763678?s=72&u=f10c1d50d6f9ce7ed6c7d64a767c02911df19cf4&v=4" height="12" />
        <b>rozierguillaume</b>
    </a></td><td>-</td><td>Paris</td><td>334</td><td>215</td></tr><tr><td>12</td><td><a href="https://github.com/Progi1984">
        <img src="https://avatars.githubusercontent.com/u/1533248?s=72&u=096bead2eab90e4795096b7d518583223dd34be6&v=4" height="12" />
        <b>Progi1984</b>
    </a></td><td>@PrestaShopCorp </td><td>Rennes, France</td><td>235</td><td>197</td></tr><tr><td>13</td><td><a href="https://github.com/huang-julien">
        <img src="https://avatars.githubusercontent.com/u/63512348?s=72&u=b60a88c0337dc98b9cdbf1d0a4b3c635786a01b0&v=4" height="12" />
        <b>huang-julien</b>
    </a></td><td>Leetchi</td><td>France</td><td>241</td><td>143</td></tr><tr><td>14</td><td><a href="https://github.com/mcanouil">
        <img src="https://avatars.githubusercontent.com/u/8896044?s=72&u=86a5cbe0323a90349d87b7fa1fd4b22ae9d45ea2&v=4" height="12" />
        <b>mcanouil</b>
    </a></td><td>-</td><td>Lille, France</td><td>311</td><td>127</td></tr><tr><td>15</td><td><a href="https://github.com/glemaitre">
        <img src="https://avatars.githubusercontent.com/u/7454015?s=72&u=d9704641f89c00ce86f8207e59aedb554109d7fa&v=4" height="12" />
        <b>glemaitre</b>
    </a></td><td>Chief ML Officer / OSS Engineeer @probabl-ai </td><td>Paris-Saclay / France</td><td>825</td><td>88</td></tr><tr><td>16</td><td><a href="https://github.com/ganatan">
        <img src="https://avatars.githubusercontent.com/u/32958393?s=72&u=e53563d16cd220e4901251cc32c332df4496c87c&v=4" height="12" />
        <b>ganatan</b>
    </a></td><td>ganatan</td><td>France</td><td>431</td><td>87</td></tr><tr><td>17</td><td><a href="https://github.com/nhoizey">
        <img src="https://avatars.githubusercontent.com/u/78213?s=72&u=7a2b7a2aca0dcc113d7a61a6dcf9e7a338e22053&v=4" height="12" />
        <b>nhoizey</b>
    </a></td><td>@cleverage</td><td>Paris, France</td><td>263</td><td>85</td></tr><tr><td>18</td><td><a href="https://github.com/antoinevastel">
        <img src="https://avatars.githubusercontent.com/u/5827148?s=72&u=58bfd63c66ed664f66c1338464c502e88cfef45b&v=4" height="12" />
        <b>antoinevastel</b>
    </a></td><td>-</td><td>Nantes, France</td><td>349</td><td>79</td></tr><tr><td>19</td><td><a href="https://github.com/soyuka">
        <img src="https://avatars.githubusercontent.com/u/1321971?s=72&u=c89bcb8e5eeff581d304dcfc5f26628ddc1760a5&v=4" height="12" />
        <b>soyuka</b>
    </a></td><td>@coopTilleuls</td><td>Nantes, France</td><td>460</td><td>77</td></tr><tr><td>20</td><td><a href="https://github.com/LaurentMazare">
        <img src="https://avatars.githubusercontent.com/u/1041292?s=72&u=4d4c5fe94c63a8eb244d812c6d97511c3640d122&v=4" height="12" />
        <b>LaurentMazare</b>
    </a></td><td>-</td><td>Paris, France</td><td>2.43K</td><td>66</td></tr><tr><td>21</td><td><a href="https://github.com/mquandalle">
        <img src="https://avatars.githubusercontent.com/u/1730702?s=72&u=ebe99b2bcc14e2e2376df8637ddc47f1b26a5e7b&v=4" height="12" />
        <b>mquandalle</b>
    </a></td><td>-</td><td>Paris, France</td><td>321</td><td>57</td></tr><tr><td>22</td><td><a href="https://github.com/fasterthanlime">
        <img src="https://avatars.githubusercontent.com/u/7998310?s=72&u=fd6cb24423c35c26ee1ce7e00f0a3925bc964d1d&v=4" height="12" />
        <b>fasterthanlime</b>
    </a></td><td>@bearcove</td><td>Lyon, France</td><td>4.38K</td><td>48</td></tr><tr><td>23</td><td><a href="https://github.com/simongravelle">
        <img src="https://avatars.githubusercontent.com/u/43388542?s=72&u=16bc101821423023268d74e239583cbcc21b3881&v=4" height="12" />
        <b>simongravelle</b>
    </a></td><td>LIPhy</td><td>Grenoble, France</td><td>568</td><td>36</td></tr><tr><td>24</td><td><a href="https://github.com/gsmet">
        <img src="https://avatars.githubusercontent.com/u/1279749?s=72&u=e462a6165ea17647aed446ca31fae604338ae18c&v=4" height="12" />
        <b>gsmet</b>
    </a></td><td>Red Hat</td><td>Lyon, France</td><td>348</td><td>34</td></tr><tr><td>25</td><td><a href="https://github.com/ggrossetie">
        <img src="https://avatars.githubusercontent.com/u/333276?s=72&u=9087930b05d462a706f06a9ce6bf0c8289d8069d&v=4" height="12" />
        <b>ggrossetie</b>
    </a></td><td>Yuzu tech</td><td>Lyon</td><td>232</td><td>34</td></tr><tr><td>26</td><td><a href="https://github.com/abougouffa">
        <img src="https://avatars.githubusercontent.com/u/3716399?s=72&u=ad7a1e120fef1c19d7b7864ac183798de2711c59&v=4" height="12" />
        <b>abougouffa</b>
    </a></td><td>-</td><td>Paris, France</td><td>217</td><td>27</td></tr><tr><td>27</td><td><a href="https://github.com/Charles-Chrismann">
        <img src="https://avatars.githubusercontent.com/u/78157563?s=72&u=b02e3426a7d0cca0c38a58a3085e7bbca87a52e7&v=4" height="12" />
        <b>Charles-Chrismann</b>
    </a></td><td>Institut de l'Internet et du Multimédia (IIM)</td><td>Paris, La Défense</td><td>15.25K</td><td>25</td></tr><tr><td>28</td><td><a href="https://github.com/azerpas">
        <img src="https://avatars.githubusercontent.com/u/19282069?s=72&u=23fefaa28d073e8c7fc44a5a8737145773e38c74&v=4" height="12" />
        <b>azerpas</b>
    </a></td><td>@DataDome</td><td>Paris</td><td>217</td><td>25</td></tr><tr><td>29</td><td><a href="https://github.com/k33g">
        <img src="https://avatars.githubusercontent.com/u/491848?s=72&u=332138d1fe94fc2ab4953428187a92663e14eeac&v=4" height="12" />
        <b>k33g</b>
    </a></td><td>-</td><td>Lyon (France)</td><td>376</td><td>22</td></tr><tr><td>30</td><td><a href="https://github.com/veloce">
        <img src="https://avatars.githubusercontent.com/u/423393?s=72&v=4" height="12" />
        <b>veloce</b>
    </a></td><td>lichess.org</td><td>France</td><td>366</td><td>22</td></tr><tr><td>31</td><td><a href="https://github.com/ParisNeo">
        <img src="https://avatars.githubusercontent.com/u/827993?s=72&u=17ad3b01b402b36d9424d6b4437561304616eb18&v=4" height="12" />
        <b>ParisNeo</b>
    </a></td><td>CEA</td><td>France</td><td>262</td><td>22</td></tr><tr><td>32</td><td><a href="https://github.com/FGRibreau">
        <img src="https://avatars.githubusercontent.com/u/138050?s=72&u=09ca579f8ce5f86026aa0d8858432fe77719eee7&v=4" height="12" />
        <b>FGRibreau</b>
    </a></td><td>@nobullshitbooks @netwo-io @hook0 @image-charts  @killbugtoday @mailpopin  / Sold @Redsmin @bringr</td><td>France</td><td>774</td><td>19</td></tr><tr><td>33</td><td><a href="https://github.com/ptitSeb">
        <img src="https://avatars.githubusercontent.com/u/3250792?s=72&u=f206420ae21c0bbf92fea09871f11adea98adb39&v=4" height="12" />
        <b>ptitSeb</b>
    </a></td><td>-</td><td>France</td><td>955</td><td>17</td></tr><tr><td>34</td><td><a href="https://github.com/ngxson">
        <img src="https://avatars.githubusercontent.com/u/7702203?s=72&u=c998d920dbca6506c9dda1df1b28adae9842720e&v=4" height="12" />
        <b>ngxson</b>
    </a></td><td>@huggingface </td><td>France</td><td>323</td><td>17</td></tr><tr><td>35</td><td><a href="https://github.com/MrEliptik">
        <img src="https://avatars.githubusercontent.com/u/24484962?s=72&u=3bec91a9402f1653deecaffdc3dd13af17c02c1c&v=4" height="12" />
        <b>MrEliptik</b>
    </a></td><td>-</td><td>France</td><td>301</td><td>15</td></tr><tr><td>36</td><td><a href="https://github.com/harryjmg">
        <img src="https://avatars.githubusercontent.com/u/7394780?s=72&u=023539d62ce43f4941c72322bad57ad6d293647a&v=4" height="12" />
        <b>harryjmg</b>
    </a></td><td>JMG Harry</td><td>France</td><td>270</td><td>15</td></tr><tr><td>37</td><td><a href="https://github.com/byroot">
        <img src="https://avatars.githubusercontent.com/u/44640?s=72&v=4" height="12" />
        <b>byroot</b>
    </a></td><td>@Shopify (as @casperisfine)</td><td>Toulouse, France</td><td>891</td><td>14</td></tr><tr><td>38</td><td><a href="https://github.com/jdrouet">
        <img src="https://avatars.githubusercontent.com/u/6329508?s=72&u=f5bd082c68c76dd5df1b33a3eacc72912308c4da&v=4" height="12" />
        <b>jdrouet</b>
    </a></td><td>Previously @proton, @datadog and @docker</td><td>France</td><td>203</td><td>14</td></tr><tr><td>39</td><td><a href="https://github.com/vstinner">
        <img src="https://avatars.githubusercontent.com/u/194129?s=72&u=cf52678f5f02f96d9c5bc1b5079d4e6c2e441af4&v=4" height="12" />
        <b>vstinner</b>
    </a></td><td>@RedHatOfficial</td><td>France</td><td>1.39K</td><td>13</td></tr><tr><td>40</td><td><a href="https://github.com/matbesancon">
        <img src="https://avatars.githubusercontent.com/u/7623090?s=72&u=5a4fa8371bbdd4b7647ebb0ec12d6c3b203f45e3&v=4" height="12" />
        <b>matbesancon</b>
    </a></td><td>Inria</td><td>Grenoble, France</td><td>316</td><td>13</td></tr><tr><td>41</td><td><a href="https://github.com/dubzzz">
        <img src="https://avatars.githubusercontent.com/u/5300235?s=72&u=283a572a5010b5350eee7168cf6ce1b566747903&v=4" height="12" />
        <b>dubzzz</b>
    </a></td><td>Pigment</td><td>Remote, France</td><td>284</td><td>13</td></tr><tr><td>42</td><td><a href="https://github.com/l-lin">
        <img src="https://avatars.githubusercontent.com/u/5452304?s=72&u=2e2f03b021b647037453379a788385f317c8208f&v=4" height="12" />
        <b>l-lin</b>
    </a></td><td>@doctolib</td><td>Paris</td><td>263</td><td>13</td></tr><tr><td>43</td><td><a href="https://github.com/fabpot">
        <img src="https://avatars.githubusercontent.com/u/47313?s=72&u=7ba05204271a726f8642ac15864e2f361b5c0198&v=4" height="12" />
        <b>fabpot</b>
    </a></td><td>Symfony/Platform.sh/Blackfire</td><td>Paris, France</td><td>13.29K</td><td>12</td></tr><tr><td>44</td><td><a href="https://github.com/Chocapikk">
        <img src="https://avatars.githubusercontent.com/u/88535377?s=72&u=badd74b326c25b71d3a0d333c40f720bc3bc98d1&v=4" height="12" />
        <b>Chocapikk</b>
    </a></td><td>Balgo Security</td><td>France</td><td>723</td><td>12</td></tr><tr><td>45</td><td><a href="https://github.com/NiLuJe">
        <img src="https://avatars.githubusercontent.com/u/111974?s=72&v=4" height="12" />
        <b>NiLuJe</b>
    </a></td><td>-</td><td>Paris, France</td><td>323</td><td>12</td></tr><tr><td>46</td><td><a href="https://github.com/pulgamecanica">
        <img src="https://avatars.githubusercontent.com/u/28810331?s=72&u=5f46d85747b93e8d9d37f8c5682e4af4026fcc22&v=4" height="12" />
        <b>pulgamecanica</b>
    </a></td><td>Pulgamecanica</td><td>Paris / Lisbon</td><td>251</td><td>12</td></tr><tr><td>47</td><td><a href="https://github.com/elisee">
        <img src="https://avatars.githubusercontent.com/u/446986?s=72&u=df08e96da70c3f0c00a351bf3c344fb56c02d24d&v=4" height="12" />
        <b>elisee</b>
    </a></td><td>@elisee</td><td>Strasbourg, France</td><td>223</td><td>12</td></tr><tr><td>48</td><td><a href="https://github.com/teolemon">
        <img src="https://avatars.githubusercontent.com/u/1689815?s=72&u=6301f2326ab5595912a1fa33b8989823bba40071&v=4" height="12" />
        <b>teolemon</b>
    </a></td><td>@openfoodfacts </td><td>Paris</td><td>216</td><td>11</td></tr><tr><td>49</td><td><a href="https://github.com/Zylann">
        <img src="https://avatars.githubusercontent.com/u/1311555?s=72&u=98e85e0c6d8599c7de140000f240417c9f512cea&v=4" height="12" />
        <b>Zylann</b>
    </a></td><td>-</td><td>France</td><td>727</td><td>10</td></tr><tr><td>50</td><td><a href="https://github.com/ornicar">
        <img src="https://avatars.githubusercontent.com/u/140370?s=72&v=4" height="12" />
        <b>ornicar</b>
    </a></td><td>lichess.org</td><td>France</td><td>6.05K</td><td>9</td></tr><tr><td>51</td><td><a href="https://github.com/agramfort">
        <img src="https://avatars.githubusercontent.com/u/161052?s=72&u=28620e0e14597ad721a7505cf486aaf5687aea66&v=4" height="12" />
        <b>agramfort</b>
    </a></td><td>Meta</td><td>Paris, France</td><td>1.36K</td><td>9</td></tr><tr><td>52</td><td><a href="https://github.com/KtorZ">
        <img src="https://avatars.githubusercontent.com/u/5680256?s=72&u=020eb2bc68211d32c1691695b6ab22ad55478501&v=4" height="12" />
        <b>KtorZ</b>
    </a></td><td>@cardano-foundation</td><td>Toulouse</td><td>462</td><td>9</td></tr><tr><td>53</td><td><a href="https://github.com/maziyarpanahi">
        <img src="https://avatars.githubusercontent.com/u/5762953?s=72&u=17070601b919833c70fc8cb61381822fdb987639&v=4" height="12" />
        <b>maziyarpanahi</b>
    </a></td><td>@ISCPIF @JohnSnowLabs</td><td>Paris, France</td><td>444</td><td>9</td></tr><tr><td>54</td><td><a href="https://github.com/Julien-R44">
        <img src="https://avatars.githubusercontent.com/u/8337858?s=72&u=51dca49c82393b452f05ee4aa4129a659ef47e34&v=4" height="12" />
        <b>Julien-R44</b>
    </a></td><td>Freelancing </td><td>France</td><td>409</td><td>9</td></tr><tr><td>55</td><td><a href="https://github.com/atinux">
        <img src="https://avatars.githubusercontent.com/u/904724?s=72&u=6c520432e20d5ed603246764658accea4b4043c3&v=4" height="12" />
        <b>atinux</b>
    </a></td><td>@nuxtlabs</td><td>France</td><td>5.11K</td><td>8</td></tr><tr><td>56</td><td><a href="https://github.com/jedisct1">
        <img src="https://avatars.githubusercontent.com/u/124872?s=72&v=4" height="12" />
        <b>jedisct1</b>
    </a></td><td>-</td><td>Antibes, France</td><td>3.93K</td><td>8</td></tr><tr><td>57</td><td><a href="https://github.com/oliviertassinari">
        <img src="https://avatars.githubusercontent.com/u/3165635?s=72&u=15a7ca3a64c1839a55c83a987d6f906c817d9e85&v=4" height="12" />
        <b>oliviertassinari</b>
    </a></td><td>MUI</td><td>Paris, France</td><td>3.2K</td><td>8</td></tr><tr><td>58</td><td><a href="https://github.com/johnBuffer">
        <img src="https://avatars.githubusercontent.com/u/9960400?s=72&u=bc8911ac87edb913bca811d23f14c109d11e9dfa&v=4" height="12" />
        <b>johnBuffer</b>
    </a></td><td>-</td><td>France</td><td>3K</td><td>8</td></tr><tr><td>59</td><td><a href="https://github.com/0xN0x">
        <img src="https://avatars.githubusercontent.com/u/1781547?s=72&u=84f608fab306dd7b1c3df0a578bd476fefb15f7a&v=4" height="12" />
        <b>0xN0x</b>
    </a></td><td>-</td><td>France</td><td>2.28K</td><td>8</td></tr><tr><td>60</td><td><a href="https://github.com/aloisdeniel">
        <img src="https://avatars.githubusercontent.com/u/7687231?s=72&u=33f733fea40d7af3b4528613c8c40a015492349c&v=4" height="12" />
        <b>aloisdeniel</b>
    </a></td><td>Freelance</td><td>Rennes, France</td><td>1.26K</td><td>8</td></tr><tr><td>61</td><td><a href="https://github.com/patrickheng">
        <img src="https://avatars.githubusercontent.com/u/9051314?s=72&u=5c38c6cf3e902645bcb37c7ca3744b89de422156&v=4" height="12" />
        <b>patrickheng</b>
    </a></td><td>Freelance</td><td>Paris</td><td>792</td><td>8</td></tr><tr><td>62</td><td><a href="https://github.com/rouault">
        <img src="https://avatars.githubusercontent.com/u/1192433?s=72&u=aebaf912a08a734156caf25b26ab78d1959f0ed5&v=4" height="12" />
        <b>rouault</b>
    </a></td><td>Spatialys</td><td>France</td><td>753</td><td>8</td></tr><tr><td>63</td><td><a href="https://github.com/vinayak-mehta">
        <img src="https://avatars.githubusercontent.com/u/4329421?s=72&u=bced413b47ba8604871f6b4ac28f623f72bcf56d&v=4" height="12" />
        <b>vinayak-mehta</b>
    </a></td><td>-</td><td>Paris</td><td>559</td><td>8</td></tr><tr><td>64</td><td><a href="https://github.com/Anahkiasen">
        <img src="https://avatars.githubusercontent.com/u/1321596?s=72&v=4" height="12" />
        <b>Anahkiasen</b>
    </a></td><td>madewithlove</td><td>France</td><td>549</td><td>8</td></tr><tr><td>65</td><td><a href="https://github.com/JeanMeche">
        <img src="https://avatars.githubusercontent.com/u/1300985?s=72&u=ba0f3dbc4cae44232ebf50bdd845bc98750fa42e&v=4" height="12" />
        <b>JeanMeche</b>
    </a></td><td>👀</td><td>Grenoble - France</td><td>363</td><td>8</td></tr><tr><td>66</td><td><a href="https://github.com/florian-lefebvre">
        <img src="https://avatars.githubusercontent.com/u/69633530?s=72&u=e2ef3f44db480e30e0e7fe90aa559d3c39fac7e6&v=4" height="12" />
        <b>florian-lefebvre</b>
    </a></td><td>-</td><td>France</td><td>251</td><td>8</td></tr><tr><td>67</td><td><a href="https://github.com/poolpOrg">
        <img src="https://avatars.githubusercontent.com/u/895503?s=72&u=53309f6d07abe6fed906502aa7cb340d0bb6c465&v=4" height="12" />
        <b>poolpOrg</b>
    </a></td><td>poolp.org</td><td>Nantes, France</td><td>232</td><td>8</td></tr><tr><td>68</td><td><a href="https://github.com/asbiin">
        <img src="https://avatars.githubusercontent.com/u/25419741?s=72&u=736357ef23ba1f333a7c72f53971fd94267fd131&v=4" height="12" />
        <b>asbiin</b>
    </a></td><td>@monicahq </td><td>Montreuil, France</td><td>212</td><td>8</td></tr><tr><td>69</td><td><a href="https://github.com/stof">
        <img src="https://avatars.githubusercontent.com/u/439401?s=72&u=bdedf550601e30f65b8759680868744e6c2607ed&v=4" height="12" />
        <b>stof</b>
    </a></td><td>@Incenteev</td><td>Paris</td><td>2.11K</td><td>7</td></tr><tr><td>70</td><td><a href="https://github.com/arcanis">
        <img src="https://avatars.githubusercontent.com/u/1037931?s=72&u=b7caf9bbaa35c1114918e82b0a6d436f761dbec3&v=4" height="12" />
        <b>arcanis</b>
    </a></td><td>@datadog</td><td>Nantes, France</td><td>1.87K</td><td>7</td></tr><tr><td>71</td><td><a href="https://github.com/Calinou">
        <img src="https://avatars.githubusercontent.com/u/180032?s=72&v=4" height="12" />
        <b>Calinou</b>
    </a></td><td>@godotengine</td><td>Troyes, France</td><td>1.41K</td><td>7</td></tr><tr><td>72</td><td><a href="https://github.com/ibelick">
        <img src="https://avatars.githubusercontent.com/u/14288396?s=72&u=73ee6fdd46dbab7bed83493f5f448654ff2d7f06&v=4" height="12" />
        <b>ibelick</b>
    </a></td><td>-</td><td>Paris</td><td>1K</td><td>7</td></tr><tr><td>73</td><td><a href="https://github.com/dgageot">
        <img src="https://avatars.githubusercontent.com/u/153495?s=72&u=7a06a6cbf585d2f329484b4f0b900bf48eee9b29&v=4" height="12" />
        <b>dgageot</b>
    </a></td><td>Docker</td><td>Paris, France</td><td>741</td><td>7</td></tr><tr><td>74</td><td><a href="https://github.com/gdalle">
        <img src="https://avatars.githubusercontent.com/u/22795598?s=72&u=f2e448edb1e79720c999ccd5282d1124c9613ef3&v=4" height="12" />
        <b>gdalle</b>
    </a></td><td>École des Ponts</td><td>Paris</td><td>537</td><td>7</td></tr><tr><td>75</td><td><a href="https://github.com/CedricGuillemet">
        <img src="https://avatars.githubusercontent.com/u/1312968?s=72&u=09586c4d429addaa7fc099437bebda780a9e39ed&v=4" height="12" />
        <b>CedricGuillemet</b>
    </a></td><td>Microsoft</td><td>Redon, Brittany, France</td><td>479</td><td>7</td></tr><tr><td>76</td><td><a href="https://github.com/kartben">
        <img src="https://avatars.githubusercontent.com/u/128251?s=72&v=4" height="12" />
        <b>kartben</b>
    </a></td><td>-</td><td>Toulouse, France</td><td>397</td><td>7</td></tr><tr><td>77</td><td><a href="https://github.com/unixfox">
        <img src="https://avatars.githubusercontent.com/u/4016501?s=72&u=d113bfcd7a1bb996a29af9ace2c158a3c6289b40&v=4" height="12" />
        <b>unixfox</b>
    </a></td><td>-</td><td>Auvergne-Rhône-Alpes, France - Wallonia, Belgium</td><td>371</td><td>7</td></tr><tr><td>78</td><td><a href="https://github.com/Marsup">
        <img src="https://avatars.githubusercontent.com/u/796194?s=72&v=4" height="12" />
        <b>Marsup</b>
    </a></td><td>-</td><td>Lyon, France</td><td>298</td><td>7</td></tr><tr><td>79</td><td><a href="https://github.com/lra">
        <img src="https://avatars.githubusercontent.com/u/122286?s=72&u=5b877e8eca464d7f4351a20c1531828f99db6090&v=4" height="12" />
        <b>lra</b>
    </a></td><td>-</td><td>Toulouse, NY, SF</td><td>267</td><td>7</td></tr><tr><td>80</td><td><a href="https://github.com/corsonr">
        <img src="https://avatars.githubusercontent.com/u/1649788?s=72&u=36a376b200fd98e6100788c1ec39b3b7e912797a&v=4" height="12" />
        <b>corsonr</b>
    </a></td><td>Be API</td><td>France</td><td>247</td><td>7</td></tr><tr><td>81</td><td><a href="https://github.com/HiDeoo">
        <img src="https://avatars.githubusercontent.com/u/494699?s=72&u=e7468006f55deb36e1f3757f6691e0180b9257ca&v=4" height="12" />
        <b>HiDeoo</b>
    </a></td><td>-</td><td>France</td><td>227</td><td>7</td></tr><tr><td>82</td><td><a href="https://github.com/tdimnet">
        <img src="https://avatars.githubusercontent.com/u/9935925?s=72&u=90d6020b1e99960d5cc4ad0517bf6e6e96907d6f&v=4" height="12" />
        <b>tdimnet</b>
    </a></td><td>@nx-academy, @EdenSchoolFrance</td><td>Paris, France</td><td>215</td><td>7</td></tr><tr><td>83</td><td><a href="https://github.com/ArthurSonzogni">
        <img src="https://avatars.githubusercontent.com/u/4759106?s=72&v=4" height="12" />
        <b>ArthurSonzogni</b>
    </a></td><td>-</td><td>Paris</td><td>785</td><td>6</td></tr><tr><td>84</td><td><a href="https://github.com/Guilouz">
        <img src="https://avatars.githubusercontent.com/u/12702322?s=72&u=f6da23f5fd8d72ed72413e5bc8b9b2c170670783&v=4" height="12" />
        <b>Guilouz</b>
    </a></td><td>-</td><td>France</td><td>538</td><td>6</td></tr><tr><td>85</td><td><a href="https://github.com/greg0ire">
        <img src="https://avatars.githubusercontent.com/u/657779?s=72&u=96a0c076123934fb61c88da5b4d5b72b03dd69cb&v=4" height="12" />
        <b>greg0ire</b>
    </a></td><td>@ManoManoTech </td><td>Paris</td><td>247</td><td>6</td></tr><tr><td>86</td><td><a href="https://github.com/AkechiShiro">
        <img src="https://avatars.githubusercontent.com/u/14914796?s=72&u=467624ac1d1ab89ce51c8e4ba3b37d2f66088582&v=4" height="12" />
        <b>AkechiShiro</b>
    </a></td><td>-</td><td>France</td><td>203</td><td>6</td></tr><tr><td>87</td><td><a href="https://github.com/nadimkobeissi">
        <img src="https://avatars.githubusercontent.com/u/9953?s=72&u=bc47cbab7ce4b508a5ff9b32ac97396e77503687&v=4" height="12" />
        <b>nadimkobeissi</b>
    </a></td><td>@symbolicsoft, @cure53berlin</td><td>Paris, France</td><td>1.26K</td><td>5</td></tr><tr><td>88</td><td><a href="https://github.com/ccamel">
        <img src="https://avatars.githubusercontent.com/u/9574336?s=72&u=5d1de8c7eaf3289162c88956747465a8ed570d66&v=4" height="12" />
        <b>ccamel</b>
    </a></td><td>@axone-protocol</td><td>Toulouse</td><td>447</td><td>5</td></tr><tr><td>89</td><td><a href="https://github.com/mckenziearts">
        <img src="https://avatars.githubusercontent.com/u/14105989?s=72&u=9c230c3e470fd4ddbbec22005757893bfa61d3ef&v=4" height="12" />
        <b>mckenziearts</b>
    </a></td><td>@shopperlabs </td><td>Paris, France</td><td>338</td><td>5</td></tr><tr><td>90</td><td><a href="https://github.com/julien-deramond">
        <img src="https://avatars.githubusercontent.com/u/17381666?s=72&u=a9b71c0b77efa17719595a35f1d1c637c4ad63ac&v=4" height="12" />
        <b>julien-deramond</b>
    </a></td><td>Thales</td><td>Paris, France</td><td>334</td><td>5</td></tr><tr><td>91</td><td><a href="https://github.com/arthaud">
        <img src="https://avatars.githubusercontent.com/u/2151557?s=72&u=20726f284e2b9874d52eddf9c2c447a0ac0c5ece&v=4" height="12" />
        <b>arthaud</b>
    </a></td><td>@facebook</td><td>Paris, France</td><td>288</td><td>5</td></tr><tr><td>92</td><td><a href="https://github.com/Ellen010">
        <img src="https://avatars.githubusercontent.com/u/157579304?s=72&u=ba4e3cc3831e6dc06ced70a8f8ff74a615a70706&v=4" height="12" />
        <b>Ellen010</b>
    </a></td><td>-</td><td>Paris</td><td>236</td><td>5</td></tr><tr><td>93</td><td><a href="https://github.com/Grafikart">
        <img src="https://avatars.githubusercontent.com/u/395137?s=72&u=490adebe004adb66140ca0d5f14e4f2e1a986f9d&v=4" height="12" />
        <b>Grafikart</b>
    </a></td><td>-</td><td>Montpellier</td><td>6.09K</td><td>4</td></tr><tr><td>94</td><td><a href="https://github.com/MaJerle">
        <img src="https://avatars.githubusercontent.com/u/405717?s=72&u=38e08e0842ed71ef9d972f001cfa73e8aa896362&v=4" height="12" />
        <b>MaJerle</b>
    </a></td><td>-</td><td>France</td><td>2.68K</td><td>4</td></tr><tr><td>95</td><td><a href="https://github.com/lo-th">
        <img src="https://avatars.githubusercontent.com/u/1553208?s=72&u=b7331513e3ccb7d86e20d61cbf685fb0363e2957&v=4" height="12" />
        <b>lo-th</b>
    </a></td><td>3th</td><td>france</td><td>984</td><td>4</td></tr><tr><td>96</td><td><a href="https://github.com/LouisCAD">
        <img src="https://avatars.githubusercontent.com/u/6975237?s=72&v=4" height="12" />
        <b>LouisCAD</b>
    </a></td><td>Amande | Previously @Beepiz - SuiviDeFlotte.net </td><td>France</td><td>971</td><td>4</td></tr><tr><td>97</td><td><a href="https://github.com/bzg">
        <img src="https://avatars.githubusercontent.com/u/63500?s=72&u=5388581f4d8481e5c9ea311d4fb12eedee21647f&v=4" height="12" />
        <b>bzg</b>
    </a></td><td>@codegouvfr</td><td>Paris</td><td>813</td><td>4</td></tr><tr><td>98</td><td><a href="https://github.com/fraxken">
        <img src="https://avatars.githubusercontent.com/u/4438263?s=72&u=5e2d0c11f001871b76e25dd3a96bd662d6a706ba&v=4" height="12" />
        <b>fraxken</b>
    </a></td><td>@OpenAlly</td><td>Paris</td><td>667</td><td>4</td></tr><tr><td>99</td><td><a href="https://github.com/sylvestre">
        <img src="https://avatars.githubusercontent.com/u/733326?s=72&u=77d7752593d6fa035b33e63386cc15479744ab24&v=4" height="12" />
        <b>sylvestre</b>
    </a></td><td>Mozilla</td><td>France</td><td>502</td><td>4</td></tr><tr><td>100</td><td><a href="https://github.com/JCluzet">
        <img src="https://avatars.githubusercontent.com/u/55356071?s=72&u=1e399003c32fba533c32f1b912b9ca56756e3887&v=4" height="12" />
        <b>JCluzet</b>
    </a></td><td>42Paris</td><td>Paris</td><td>451</td><td>4</td></tr><tr><td>101</td><td><a href="https://github.com/RobinDavid">
        <img src="https://avatars.githubusercontent.com/u/1887063?s=72&u=0a61b1b95de647e0392b3596d6d451dc1e05401e&v=4" height="12" />
        <b>RobinDavid</b>
    </a></td><td>Quarkslab</td><td>Paris, France</td><td>383</td><td>4</td></tr><tr><td>102</td><td><a href="https://github.com/cor3ntin">
        <img src="https://avatars.githubusercontent.com/u/1409019?s=72&v=4" height="12" />
        <b>cor3ntin</b>
    </a></td><td>-</td><td>Bordeaux, France</td><td>359</td><td>4</td></tr><tr><td>103</td><td><a href="https://github.com/fyhertz">
        <img src="https://avatars.githubusercontent.com/u/2746007?s=72&v=4" height="12" />
        <b>fyhertz</b>
    </a></td><td>@upciti</td><td>Paris</td><td>353</td><td>4</td></tr><tr><td>104</td><td><a href="https://github.com/DeveloppeurPascal">
        <img src="https://avatars.githubusercontent.com/u/29439699?s=72&u=3b413495092a9927526da35a406812d44b64048b&v=4" height="12" />
        <b>DeveloppeurPascal</b>
    </a></td><td>-</td><td>Orléans, France</td><td>331</td><td>4</td></tr><tr><td>105</td><td><a href="https://github.com/nvuillam">
        <img src="https://avatars.githubusercontent.com/u/17500430?s=72&u=24ff06a935acf56fe06678874e2b297debb66fac&v=4" height="12" />
        <b>nvuillam</b>
    </a></td><td>Cloudity & OX Security</td><td>Paris, France</td><td>317</td><td>4</td></tr><tr><td>106</td><td><a href="https://github.com/Neamar">
        <img src="https://avatars.githubusercontent.com/u/536844?s=72&v=4" height="12" />
        <b>Neamar</b>
    </a></td><td>-</td><td>France</td><td>278</td><td>4</td></tr><tr><td>107</td><td><a href="https://github.com/Barbapapazes">
        <img src="https://avatars.githubusercontent.com/u/45267552?s=72&u=b4b5ab12a72fb2d26c2c3b8197033324be374956&v=4" height="12" />
        <b>Barbapapazes</b>
    </a></td><td>-</td><td>Paris</td><td>266</td><td>4</td></tr><tr><td>108</td><td><a href="https://github.com/erossignon">
        <img src="https://avatars.githubusercontent.com/u/680220?s=72&v=4" height="12" />
        <b>erossignon</b>
    </a></td><td>Sterfive</td><td>France</td><td>253</td><td>4</td></tr><tr><td>109</td><td><a href="https://github.com/avivace">
        <img src="https://avatars.githubusercontent.com/u/14352721?s=72&u=a7dc8be3aa7851dd1521ab77b98bb49749178634&v=4" height="12" />
        <b>avivace</b>
    </a></td><td>@EUROCONTROL</td><td>Paris</td><td>250</td><td>4</td></tr><tr><td>110</td><td><a href="https://github.com/dimaMachina">
        <img src="https://avatars.githubusercontent.com/u/7361780?s=72&u=31ad3c2188d690ce38ec9ae437faf8788d34b916&v=4" height="12" />
        <b>dimaMachina</b>
    </a></td><td>hire me</td><td>Paris, France</td><td>235</td><td>4</td></tr><tr><td>111</td><td><a href="https://github.com/ISSOtm">
        <img src="https://avatars.githubusercontent.com/u/15271137?s=72&u=e1646d5c0c78ac164e86bd5f171ca38bb10deb7c&v=4" height="12" />
        <b>ISSOtm</b>
    </a></td><td>@osdyne</td><td>France</td><td>227</td><td>4</td></tr><tr><td>112</td><td><a href="https://github.com/thierryvolpiatto">
        <img src="https://avatars.githubusercontent.com/u/1533939?s=72&v=4" height="12" />
        <b>thierryvolpiatto</b>
    </a></td><td>@emacs-helm </td><td>France</td><td>222</td><td>4</td></tr><tr><td>113</td><td><a href="https://github.com/brunosimon">
        <img src="https://avatars.githubusercontent.com/u/5439991?s=72&u=d7f9a046776f0960769c8d90ca8ced4d896c8e6a&v=4" height="12" />
        <b>brunosimon</b>
    </a></td><td>Creative Journey</td><td>Paris</td><td>19.86K</td><td>3</td></tr><tr><td>114</td><td><a href="https://github.com/gwen001">
        <img src="https://avatars.githubusercontent.com/u/5347721?s=72&u=5f5d54776448399a4558dba00d4ae3c2e31213df&v=4" height="12" />
        <b>gwen001</b>
    </a></td><td>10degres</td><td>Paris - France</td><td>2.6K</td><td>3</td></tr><tr><td>115</td><td><a href="https://github.com/donho">
        <img src="https://avatars.githubusercontent.com/u/90293?s=72&u=ecf6e2f9319cd333d4ffd0056c84848e91ae9870&v=4" height="12" />
        <b>donho</b>
    </a></td><td>Notepad++ Project</td><td>Paris France</td><td>2.12K</td><td>3</td></tr><tr><td>116</td><td><a href="https://github.com/p0dalirius">
        <img src="https://avatars.githubusercontent.com/u/79218792?s=72&u=f6b0f27134df6083787490cfcd2ccfdbd5eb70d6&v=4" height="12" />
        <b>p0dalirius</b>
    </a></td><td>Podalirius Labs</td><td>France</td><td>1.96K</td><td>3</td></tr><tr><td>117</td><td><a href="https://github.com/FaridSafi">
        <img src="https://avatars.githubusercontent.com/u/388375?s=72&u=a10567f0c2ae0b6a68a4d590c8fbdd40851a7d59&v=4" height="12" />
        <b>FaridSafi</b>
    </a></td><td>@LeReacteur</td><td>Paris, France</td><td>1.8K</td><td>3</td></tr><tr><td>118</td><td><a href="https://github.com/beaufortfrancois">
        <img src="https://avatars.githubusercontent.com/u/634478?s=72&v=4" height="12" />
        <b>beaufortfrancois</b>
    </a></td><td>@GoogleChrome</td><td>France</td><td>1.59K</td><td>3</td></tr><tr><td>119</td><td><a href="https://github.com/agoncal">
        <img src="https://avatars.githubusercontent.com/u/729277?s=72&u=d0da87cbc7086aaf1db7744e71017689abf4bd64&v=4" height="12" />
        <b>agoncal</b>
    </a></td><td>@microsoft</td><td>Paris</td><td>1.36K</td><td>3</td></tr><tr><td>120</td><td><a href="https://github.com/enjoy-digital">
        <img src="https://avatars.githubusercontent.com/u/1450143?s=72&u=1a9912f1a280ca3120df158d0d6eca1af88f04fe&v=4" height="12" />
        <b>enjoy-digital</b>
    </a></td><td>EnjoyDigital</td><td>France</td><td>1.36K</td><td>3</td></tr><tr><td>121</td><td><a href="https://github.com/scraly">
        <img src="https://avatars.githubusercontent.com/u/2543381?s=72&u=d500ca96ff8a2a3f9b7bb300c71ed7e57449b072&v=4" height="12" />
        <b>scraly</b>
    </a></td><td>ovh</td><td>Toulouse</td><td>784</td><td>3</td></tr><tr><td>122</td><td><a href="https://github.com/vicb">
        <img src="https://avatars.githubusercontent.com/u/248818?s=72&u=4447f9d1f51e304fceccbedff7c6a78224afc890&v=4" height="12" />
        <b>vicb</b>
    </a></td><td>@cloudflare </td><td>Grenoble, France</td><td>728</td><td>3</td></tr><tr><td>123</td><td><a href="https://github.com/SimonMarquis">
        <img src="https://avatars.githubusercontent.com/u/1921278?s=72&u=ace12a9fb3a0532f35285bce04898f7a7c97b2f9&v=4" height="12" />
        <b>SimonMarquis</b>
    </a></td><td>@leboncoin</td><td>Paris, France</td><td>526</td><td>3</td></tr><tr><td>124</td><td><a href="https://github.com/oliviergimenez">
        <img src="https://avatars.githubusercontent.com/u/12683635?s=72&u=c5a60d598ab4e98660dc7589de4609414a6af089&v=4" height="12" />
        <b>oliviergimenez</b>
    </a></td><td>CNRS</td><td>Montpellier</td><td>495</td><td>3</td></tr><tr><td>125</td><td><a href="https://github.com/Tahul">
        <img src="https://avatars.githubusercontent.com/u/1385263?s=72&u=5fa8ea08de4cd72e468943edabfa9d72f3c02e70&v=4" height="12" />
        <b>Tahul</b>
    </a></td><td>@thecompaniesapi</td><td>Nantes, France</td><td>470</td><td>3</td></tr><tr><td>126</td><td><a href="https://github.com/f4exb">
        <img src="https://avatars.githubusercontent.com/u/6192319?s=72&u=3f1ea59769818046445a4377305f55687ee4ad6b&v=4" height="12" />
        <b>f4exb</b>
    </a></td><td>-</td><td>Antibes, France</td><td>461</td><td>3</td></tr><tr><td>127</td><td><a href="https://github.com/rxlabz">
        <img src="https://avatars.githubusercontent.com/u/1397248?s=72&u=08246a686ad5379c959e9e6368ceb7f3982b00d4&v=4" height="12" />
        <b>rxlabz</b>
    </a></td><td>RX Labz</td><td>Lyon, France</td><td>445</td><td>3</td></tr><tr><td>128</td><td><a href="https://github.com/albertvillanova">
        <img src="https://avatars.githubusercontent.com/u/8515462?s=72&u=72a51bbb90c88db85efbc9260c63b0d6adfdfceb&v=4" height="12" />
        <b>albertvillanova</b>
    </a></td><td>@huggingface @aiinnova</td><td>Paris (France)</td><td>420</td><td>3</td></tr><tr><td>129</td><td><a href="https://github.com/SofianeHamlaoui">
        <img src="https://avatars.githubusercontent.com/u/16967174?s=72&u=1357194625eff600acb803134b1413824208ccb5&v=4" height="12" />
        <b>SofianeHamlaoui</b>
    </a></td><td>-</td><td>Lyon, France</td><td>417</td><td>3</td></tr><tr><td>130</td><td><a href="https://github.com/NicolasPetton">
        <img src="https://avatars.githubusercontent.com/u/123539?s=72&u=5ddba75ca916a17ce1d818279b70ab97573c0a7a&v=4" height="12" />
        <b>NicolasPetton</b>
    </a></td><td>-</td><td>Brest, France</td><td>414</td><td>3</td></tr><tr><td>131</td><td><a href="https://github.com/thoas">
        <img src="https://avatars.githubusercontent.com/u/19938?s=72&u=c1fa51350dbf4bc260670b025c94810ac19d6634&v=4" height="12" />
        <b>thoas</b>
    </a></td><td>Ulule</td><td>Paris, France</td><td>412</td><td>3</td></tr><tr><td>132</td><td><a href="https://github.com/belem2050">
        <img src="https://avatars.githubusercontent.com/u/90107382?s=72&u=cb38380a892623c8b69482dfe86bbcfb62e9ba85&v=4" height="12" />
        <b>belem2050</b>
    </a></td><td>@cmrobotics </td><td>France</td><td>378</td><td>3</td></tr><tr><td>133</td><td><a href="https://github.com/sunny">
        <img src="https://avatars.githubusercontent.com/u/132?s=72&v=4" height="12" />
        <b>sunny</b>
    </a></td><td>Cults.</td><td>Paris, France</td><td>364</td><td>3</td></tr><tr><td>134</td><td><a href="https://github.com/xroche">
        <img src="https://avatars.githubusercontent.com/u/4313143?s=72&u=6654239a3b10c8155a29487188f5c642b66bd25d&v=4" height="12" />
        <b>xroche</b>
    </a></td><td>httrack.com</td><td>Paris</td><td>356</td><td>3</td></tr><tr><td>135</td><td><a href="https://github.com/marcgg">
        <img src="https://avatars.githubusercontent.com/u/127343?s=72&u=a2999e1de2b0f4455906e6bc4aa6b5f235ddd49a&v=4" height="12" />
        <b>marcgg</b>
    </a></td><td>-</td><td>Paris</td><td>354</td><td>3</td></tr><tr><td>136</td><td><a href="https://github.com/sebanc">
        <img src="https://avatars.githubusercontent.com/u/22224731?s=72&v=4" height="12" />
        <b>sebanc</b>
    </a></td><td>-</td><td>Paris, France</td><td>353</td><td>3</td></tr><tr><td>137</td><td><a href="https://github.com/johnvuko">
        <img src="https://avatars.githubusercontent.com/u/188946?s=72&u=7298b69cfb0aa8c1055ac262e7367d18a41b9cb8&v=4" height="12" />
        <b>johnvuko</b>
    </a></td><td>@yokitup</td><td>Paris, France</td><td>351</td><td>3</td></tr><tr><td>138</td><td><a href="https://github.com/adrienpoly">
        <img src="https://avatars.githubusercontent.com/u/7847244?s=72&u=f4330ca5e036d365b3c41199ac76e3b979ab10bb&v=4" height="12" />
        <b>adrienpoly</b>
    </a></td><td>-</td><td>Bordeaux</td><td>316</td><td>3</td></tr><tr><td>139</td><td><a href="https://github.com/sdpython">
        <img src="https://avatars.githubusercontent.com/u/4695832?s=72&u=9a0581b7da03088ea4ad3a37c5b680a64d864f33&v=4" height="12" />
        <b>sdpython</b>
    </a></td><td>@ENSAE</td><td>paris</td><td>300</td><td>3</td></tr><tr><td>140</td><td><a href="https://github.com/ArnaudBarre">
        <img src="https://avatars.githubusercontent.com/u/14235743?s=72&u=1e3fb343c89f3f3ab51080295026475541c390f8&v=4" height="12" />
        <b>ArnaudBarre</b>
    </a></td><td>Carbometrix</td><td>Paris</td><td>296</td><td>3</td></tr><tr><td>141</td><td><a href="https://github.com/privefl">
        <img src="https://avatars.githubusercontent.com/u/11161036?s=72&u=bd883039d7f52cd9f97ade17949dab9487a2ccf4&v=4" height="12" />
        <b>privefl</b>
    </a></td><td>National Center for Register-based Research (NCRR, Aarhus University)</td><td>Aarhus, Denmark // Lyon, France</td><td>296</td><td>3</td></tr><tr><td>142</td><td><a href="https://github.com/MrArnaudMichel">
        <img src="https://avatars.githubusercontent.com/u/87248697?s=72&u=3ced1cd1b0fde42c6e1a1a04eadcf7e8eb1345b3&v=4" height="12" />
        <b>MrArnaudMichel</b>
    </a></td><td>UTBM</td><td>France</td><td>282</td><td>3</td></tr><tr><td>143</td><td><a href="https://github.com/Linux-Scratcher">
        <img src="https://avatars.githubusercontent.com/u/122288570?s=72&u=ca6cf4e1d1e2b46b3cce614ce5e80b1d077e062c&v=4" height="12" />
        <b>Linux-Scratcher</b>
    </a></td><td>@Socialteams</td><td>Occitanie - France</td><td>280</td><td>3</td></tr><tr><td>144</td><td><a href="https://github.com/mkcor">
        <img src="https://avatars.githubusercontent.com/u/2227806?s=72&u=5320031216d435cd2bb0259a116a5623108c9b26&v=4" height="12" />
        <b>mkcor</b>
    </a></td><td>-</td><td>Strasbourg, France</td><td>263</td><td>3</td></tr><tr><td>145</td><td><a href="https://github.com/astefanutti">
        <img src="https://avatars.githubusercontent.com/u/366207?s=72&u=dcec7e3f355f752ca32d4a61df72fe99fbfc051b&v=4" height="12" />
        <b>astefanutti</b>
    </a></td><td>Red Hat</td><td>Paris, France</td><td>256</td><td>3</td></tr><tr><td>146</td><td><a href="https://github.com/tchiotludo">
        <img src="https://avatars.githubusercontent.com/u/2064609?s=72&u=e0b81e6999b4fb51c0d7383ee10090d2d6332939&v=4" height="12" />
        <b>tchiotludo</b>
    </a></td><td>@kestra-io</td><td>Lille, France</td><td>254</td><td>3</td></tr><tr><td>147</td><td><a href="https://github.com/apirrone">
        <img src="https://avatars.githubusercontent.com/u/6552564?s=72&u=0e79575bb391a4a98156e72b7f29da0ce6bd315f&v=4" height="12" />
        <b>apirrone</b>
    </a></td><td>Pollen Robotics</td><td>Bordeaux</td><td>237</td><td>3</td></tr><tr><td>148</td><td><a href="https://github.com/Kocal">
        <img src="https://avatars.githubusercontent.com/u/2103975?s=72&u=a736d3293c082d2fd28065a359bd578ebc06a7af&v=4" height="12" />
        <b>Kocal</b>
    </a></td><td>-</td><td>Lyon, France</td><td>237</td><td>3</td></tr><tr><td>149</td><td><a href="https://github.com/laurentkempe">
        <img src="https://avatars.githubusercontent.com/u/272612?s=72&u=d5a602c4b87d93c5497e13c2badc0f5d6f895ac4&v=4" height="12" />
        <b>laurentkempe</b>
    </a></td><td>@TechHeadBrothers @Innoveo </td><td>Illzach, France</td><td>232</td><td>3</td></tr><tr><td>150</td><td><a href="https://github.com/alexandresalome">
        <img src="https://avatars.githubusercontent.com/u/134144?s=72&u=8c50ec76df87f3884aea3008681f741420f630bd&v=4" height="12" />
        <b>alexandresalome</b>
    </a></td><td>Platform.sh</td><td>Lille, France</td><td>232</td><td>3</td></tr><tr><td>151</td><td><a href="https://github.com/Fantomas42">
        <img src="https://avatars.githubusercontent.com/u/100376?s=72&v=4" height="12" />
        <b>Fantomas42</b>
    </a></td><td>-</td><td>Paris, France</td><td>231</td><td>3</td></tr><tr><td>152</td><td><a href="https://github.com/greeeg">
        <img src="https://avatars.githubusercontent.com/u/12447517?s=72&u=848b5a2fa03fa7cc0c99078d30750d5b6837a514&v=4" height="12" />
        <b>greeeg</b>
    </a></td><td>@pennylane-hq</td><td>Paris, France</td><td>228</td><td>3</td></tr><tr><td>153</td><td><a href="https://github.com/pkestene">
        <img src="https://avatars.githubusercontent.com/u/8276295?s=72&v=4" height="12" />
        <b>pkestene</b>
    </a></td><td>CEA</td><td>France</td><td>213</td><td>3</td></tr><tr><td>154</td><td><a href="https://github.com/Btelgeuse">
        <img src="https://avatars.githubusercontent.com/u/164326843?s=72&u=b5ee338740bcc9e593e893aefa57b599718e774a&v=4" height="12" />
        <b>Btelgeuse</b>
    </a></td><td>-</td><td>France</td><td>207</td><td>3</td></tr><tr><td>155</td><td><a href="https://github.com/wtarreau">
        <img src="https://avatars.githubusercontent.com/u/8141789?s=72&u=e9359a488ad99600a4b9393a83c0f736c29ba401&v=4" height="12" />
        <b>wtarreau</b>
    </a></td><td>HAProxy Technologies</td><td>France</td><td>204</td><td>3</td></tr><tr><td>156</td><td><a href="https://github.com/tony-go">
        <img src="https://avatars.githubusercontent.com/u/22824417?s=72&u=49fb909ccca0d349c08266f07b30a70f83a9a19a&v=4" height="12" />
        <b>tony-go</b>
    </a></td><td>Postman</td><td>Paris, FR</td><td>202</td><td>3</td></tr><tr><td>157</td><td><a href="https://github.com/posva">
        <img src="https://avatars.githubusercontent.com/u/664177?s=72&u=06259cb98f3d65c5901edf488b6bf4ab5f4bccec&v=4" height="12" />
        <b>posva</b>
    </a></td><td>Freelance</td><td>Paris </td><td>6.18K</td><td>2</td></tr><tr><td>158</td><td><a href="https://github.com/holtzy">
        <img src="https://avatars.githubusercontent.com/u/10254401?s=72&u=d554070e82949f6c7c6c57d4597f4cfddb053956&v=4" height="12" />
        <b>holtzy</b>
    </a></td><td>Software Engineer - Dataviz</td><td>Montpellier, France</td><td>4.22K</td><td>2</td></tr><tr><td>159</td><td><a href="https://github.com/moul">
        <img src="https://avatars.githubusercontent.com/u/94029?s=72&u=2acc3ed56cc696b595a069aef15cc975d8662e79&v=4" height="12" />
        <b>moul</b>
    </a></td><td>@gnolang, @berty, ...</td><td>France</td><td>1.6K</td><td>2</td></tr><tr><td>160</td><td><a href="https://github.com/samber">
        <img src="https://avatars.githubusercontent.com/u/2951285?s=72&u=571c795227b4edbd29f027478346834f83a95076&v=4" height="12" />
        <b>samber</b>
    </a></td><td>-</td><td>Nantes, France</td><td>1.59K</td><td>2</td></tr><tr><td>161</td><td><a href="https://github.com/gpeyre">
        <img src="https://avatars.githubusercontent.com/u/5560142?s=72&u=9f79459e385cc0235e09dea7253f0062fd04dc08&v=4" height="12" />
        <b>gpeyre</b>
    </a></td><td>CNRS</td><td>Paris</td><td>1.37K</td><td>2</td></tr><tr><td>162</td><td><a href="https://github.com/Androz2091">
        <img src="https://avatars.githubusercontent.com/u/42497995?s=72&u=6f40d52a49652087722a05d55013645bca6745b6&v=4" height="12" />
        <b>Androz2091</b>
    </a></td><td>EPFL</td><td>France, Toulouse</td><td>1.25K</td><td>2</td></tr><tr><td>163</td><td><a href="https://github.com/NathanLovato">
        <img src="https://avatars.githubusercontent.com/u/12694995?s=72&u=e4abd5fa8b74c82c57955f490da199a1ac7b9d8c&v=4" height="12" />
        <b>NathanLovato</b>
    </a></td><td>GDQuest</td><td>France</td><td>860</td><td>2</td></tr><tr><td>164</td><td><a href="https://github.com/cgrand">
        <img src="https://avatars.githubusercontent.com/u/47025?s=72&v=4" height="12" />
        <b>cgrand</b>
    </a></td><td>https://t10s.com/</td><td>Saint-Étienne, France</td><td>689</td><td>2</td></tr><tr><td>165</td><td><a href="https://github.com/lovasoa">
        <img src="https://avatars.githubusercontent.com/u/552629?s=72&u=3b5257f8d20ea6c313ed91ba80c024c3f00cf5dc&v=4" height="12" />
        <b>lovasoa</b>
    </a></td><td>@auto-grid @enexflow </td><td>Paris, France</td><td>594</td><td>2</td></tr><tr><td>166</td><td><a href="https://github.com/Kerollmops">
        <img src="https://avatars.githubusercontent.com/u/3610253?s=72&u=5997d202d7af48cde9b2c53a29000548886fa81e&v=4" height="12" />
        <b>Kerollmops</b>
    </a></td><td>@meilisearch</td><td>France, Paris</td><td>580</td><td>2</td></tr><tr><td>167</td><td><a href="https://github.com/lindenb">
        <img src="https://avatars.githubusercontent.com/u/33838?s=72&u=69f92e5fef0d06f78b08e36877633efa0c7f5441&v=4" height="12" />
        <b>lindenb</b>
    </a></td><td>INSERM</td><td>Nantes, France</td><td>546</td><td>2</td></tr><tr><td>168</td><td><a href="https://github.com/kevinchalet">
        <img src="https://avatars.githubusercontent.com/u/6998306?s=72&u=71c40a231984c198d230974e6536b1aea5caf756&v=4" height="12" />
        <b>kevinchalet</b>
    </a></td><td>-</td><td>France</td><td>523</td><td>2</td></tr><tr><td>169</td><td><a href="https://github.com/augustin7698">
        <img src="https://avatars.githubusercontent.com/u/86960242?s=72&u=3761173d4311ceb8f28a3ff5802c899aa99aecab&v=4" height="12" />
        <b>augustin7698</b>
    </a></td><td>-</td><td>Paris</td><td>510</td><td>2</td></tr><tr><td>170</td><td><a href="https://github.com/laluka">
        <img src="https://avatars.githubusercontent.com/u/7013722?s=72&u=99ab7a21f20471afc4643db1f6fa326d9218cc57&v=4" height="12" />
        <b>laluka</b>
    </a></td><td>ThinkLoveShare</td><td>FRANCE</td><td>403</td><td>2</td></tr><tr><td>171</td><td><a href="https://github.com/tgalopin">
        <img src="https://avatars.githubusercontent.com/u/1651494?s=72&u=ff057fae3d32e16223fbd1238811d5203111edb5&v=4" height="12" />
        <b>tgalopin</b>
    </a></td><td>@symfony  </td><td>France</td><td>377</td><td>2</td></tr><tr><td>172</td><td><a href="https://github.com/lihbr">
        <img src="https://avatars.githubusercontent.com/u/25330882?s=72&u=40027b74b9c4fef25782af3d68db978d261ce9cf&v=4" height="12" />
        <b>lihbr</b>
    </a></td><td>@prismicio</td><td>France</td><td>360</td><td>2</td></tr><tr><td>173</td><td><a href="https://github.com/Yanlry">
        <img src="https://avatars.githubusercontent.com/u/122649131?s=72&u=ed01f26921d8c98ec9c54de3db9568fe88dae0b9&v=4" height="12" />
        <b>Yanlry</b>
    </a></td><td>Fsociety</td><td>Lille, France</td><td>358</td><td>2</td></tr><tr><td>174</td><td><a href="https://github.com/benjamincrozat">
        <img src="https://avatars.githubusercontent.com/u/3613731?s=72&v=4" height="12" />
        <b>benjamincrozat</b>
    </a></td><td>-</td><td>France</td><td>335</td><td>2</td></tr><tr><td>175</td><td><a href="https://github.com/vadimkantorov">
        <img src="https://avatars.githubusercontent.com/u/1041752?s=72&u=51c5c08f0f9be5206c4d5d6b3d09492bb6f9aa69&v=4" height="12" />
        <b>vadimkantorov</b>
    </a></td><td>INRIA</td><td>Paris, France</td><td>331</td><td>2</td></tr><tr><td>176</td><td><a href="https://github.com/benkuper">
        <img src="https://avatars.githubusercontent.com/u/1291595?s=72&u=642b551224f7695f923cf41025d9b1b7b605962e&v=4" height="12" />
        <b>benkuper</b>
    </a></td><td>-</td><td>France</td><td>327</td><td>2</td></tr><tr><td>177</td><td><a href="https://github.com/jorio">
        <img src="https://avatars.githubusercontent.com/u/837086?s=72&u=e78583f53c8c3457a6358698bb7f1bf13565d81b&v=4" height="12" />
        <b>jorio</b>
    </a></td><td>-</td><td>France</td><td>312</td><td>2</td></tr><tr><td>178</td><td><a href="https://github.com/jfalcou">
        <img src="https://avatars.githubusercontent.com/u/285977?s=72&u=aa9be7c63023593e6e3fb7765390e789f31b7509&v=4" height="12" />
        <b>jfalcou</b>
    </a></td><td>University Paris Sud XI, CNRS</td><td>Orsay, France</td><td>309</td><td>2</td></tr><tr><td>179</td><td><a href="https://github.com/gabrieldemarmiesse">
        <img src="https://avatars.githubusercontent.com/u/12891691?s=72&u=7f49c0407749c186e5df5e1cecb8b2daa47846e3&v=4" height="12" />
        <b>gabrieldemarmiesse</b>
    </a></td><td>-</td><td>Paris, France</td><td>307</td><td>2</td></tr><tr><td>180</td><td><a href="https://github.com/cjbrigato">
        <img src="https://avatars.githubusercontent.com/u/680049?s=72&u=6e6b734ff1dfac605b6a378098676d9abf18b33e&v=4" height="12" />
        <b>cjbrigato</b>
    </a></td><td>COLIN BRIGATO E.I.R.L.</td><td>Paris - France</td><td>307</td><td>2</td></tr><tr><td>181</td><td><a href="https://github.com/MeymounB">
        <img src="https://avatars.githubusercontent.com/u/77726988?s=72&u=d12068913a829662f30751a4591327cdbf424ead&v=4" height="12" />
        <b>MeymounB</b>
    </a></td><td>@Next-Generation-Dev</td><td>France</td><td>305</td><td>2</td></tr><tr><td>182</td><td><a href="https://github.com/Stilic">
        <img src="https://avatars.githubusercontent.com/u/63605602?s=72&u=6662329db31f63d8bbf4c7755a1c5de99cf54f3b&v=4" height="12" />
        <b>Stilic</b>
    </a></td><td>-</td><td>France</td><td>302</td><td>2</td></tr><tr><td>183</td><td><a href="https://github.com/Liryna">
        <img src="https://avatars.githubusercontent.com/u/4311419?s=72&v=4" height="12" />
        <b>Liryna</b>
    </a></td><td>Google</td><td>France</td><td>300</td><td>2</td></tr><tr><td>184</td><td><a href="https://github.com/pablo-1610">
        <img src="https://avatars.githubusercontent.com/u/42814853?s=72&u=fb2703a1fe77e50827d80477233b9fda7011f5b4&v=4" height="12" />
        <b>pablo-1610</b>
    </a></td><td>-</td><td>Lille, France</td><td>288</td><td>2</td></tr><tr><td>185</td><td><a href="https://github.com/mockersf">
        <img src="https://avatars.githubusercontent.com/u/8672791?s=72&u=6350847888b0006d335bc98ca32a5359389d26b5&v=4" height="12" />
        <b>mockersf</b>
    </a></td><td>-</td><td>France</td><td>277</td><td>2</td></tr><tr><td>186</td><td><a href="https://github.com/abique">
        <img src="https://avatars.githubusercontent.com/u/31200?s=72&u=19e037bfe18806c410947eba3bab6d8e70c4654d&v=4" height="12" />
        <b>abique</b>
    </a></td><td>@bitwig </td><td>Sisteron, France</td><td>275</td><td>2</td></tr><tr><td>187</td><td><a href="https://github.com/erebe">
        <img src="https://avatars.githubusercontent.com/u/854278?s=72&u=e5043ea27db3f1357f92193b770aa32559e69869&v=4" height="12" />
        <b>erebe</b>
    </a></td><td>-</td><td>Paris</td><td>267</td><td>2</td></tr><tr><td>188</td><td><a href="https://github.com/jilljenn">
        <img src="https://avatars.githubusercontent.com/u/1729581?s=72&u=9a61a902e862f5f139a5c47339d462d1947b6cf2&v=4" height="12" />
        <b>jilljenn</b>
    </a></td><td>Inria</td><td>Paris</td><td>265</td><td>2</td></tr><tr><td>189</td><td><a href="https://github.com/RodZill4">
        <img src="https://avatars.githubusercontent.com/u/6957908?s=72&u=c19aecbe4d441eb008a4485fdcddb661ce659951&v=4" height="12" />
        <b>RodZill4</b>
    </a></td><td>-</td><td>France</td><td>261</td><td>2</td></tr><tr><td>190</td><td><a href="https://github.com/Pierstoval">
        <img src="https://avatars.githubusercontent.com/u/3369266?s=72&u=cd40e98364c064016bdef62d5442d93c8b2a19a0&v=4" height="12" />
        <b>Pierstoval</b>
    </a></td><td>@Orbitaleio / @Orbitale - @StudioAgate</td><td>France</td><td>259</td><td>2</td></tr><tr><td>191</td><td><a href="https://github.com/noirbizarre">
        <img src="https://avatars.githubusercontent.com/u/15725?s=72&u=24aa7a44ae7c957043e6a39675c3546d2f925a46&v=4" height="12" />
        <b>noirbizarre</b>
    </a></td><td>@apihackers @LedgerHQ </td><td>Paris, France</td><td>255</td><td>2</td></tr><tr><td>192</td><td><a href="https://github.com/vrabaud">
        <img src="https://avatars.githubusercontent.com/u/700766?s=72&v=4" height="12" />
        <b>vrabaud</b>
    </a></td><td>OpenCV Foundation</td><td>Paris, France</td><td>248</td><td>2</td></tr><tr><td>193</td><td><a href="https://github.com/NTag">
        <img src="https://avatars.githubusercontent.com/u/906276?s=72&u=c686367f063914cb3978840fc52a44199bdb8639&v=4" height="12" />
        <b>NTag</b>
    </a></td><td>-</td><td>Paris</td><td>248</td><td>2</td></tr><tr><td>194</td><td><a href="https://github.com/3outeille">
        <img src="https://avatars.githubusercontent.com/u/47445085?s=72&u=e4ac8a9ba9b0d4e5bde98d08302edb1bf02765ad&v=4" height="12" />
        <b>3outeille</b>
    </a></td><td>HuggingFace</td><td>France</td><td>248</td><td>2</td></tr><tr><td>195</td><td><a href="https://github.com/noteflakes">
        <img src="https://avatars.githubusercontent.com/u/291?s=72&u=1f1479a472b5eb557174462bb326a72fefe3a7f1&v=4" height="12" />
        <b>noteflakes</b>
    </a></td><td>Noteflakes</td><td>Bourgogne, France</td><td>245</td><td>2</td></tr><tr><td>196</td><td><a href="https://github.com/jdesboeufs">
        <img src="https://avatars.githubusercontent.com/u/1231232?s=72&u=71bac788fd58c4cb53ae18559b6ffecd1e218725&v=4" height="12" />
        <b>jdesboeufs</b>
    </a></td><td>Living Data</td><td>Paris</td><td>231</td><td>2</td></tr><tr><td>197</td><td><a href="https://github.com/QuentinPerez">
        <img src="https://avatars.githubusercontent.com/u/3081204?s=72&u=de850a79431d34b24985f9ec69db24053baa0c09&v=4" height="12" />
        <b>QuentinPerez</b>
    </a></td><td>@elder-eng </td><td>Paris</td><td>229</td><td>2</td></tr><tr><td>198</td><td><a href="https://github.com/Delapouite">
        <img src="https://avatars.githubusercontent.com/u/39315?s=72&v=4" height="12" />
        <b>Delapouite</b>
    </a></td><td>Powipu</td><td>Nantes / Lyon - France</td><td>227</td><td>2</td></tr><tr><td>199</td><td><a href="https://github.com/gnodet">
        <img src="https://avatars.githubusercontent.com/u/84022?s=72&u=411d6cc1a1007325d0051d524e5ec04b5a859e1f&v=4" height="12" />
        <b>gnodet</b>
    </a></td><td>Red Hat</td><td>Caen, France</td><td>225</td><td>2</td></tr><tr><td>200</td><td><a href="https://github.com/thomasbnt">
        <img src="https://avatars.githubusercontent.com/u/14293805?s=72&u=6049cd0655f3ed1ec256e900bbcd3b540491bd09&v=4" height="12" />
        <b>thomasbnt</b>
    </a></td><td>Creator of @mrrobotdotapp</td><td>Toulouse, France</td><td>217</td><td>2</td></tr>
    </tbody>
</table>

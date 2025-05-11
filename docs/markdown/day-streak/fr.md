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
    </a></td><td>@swan-io</td><td>Paris, France</td><td>418</td><td>1.64K</td></tr><tr><td>🥈</td><td><a href="https://github.com/Caceresenzo">
        <img src="https://avatars.githubusercontent.com/u/7386242?s=72&u=17d4617bb086732fd4da9287942494386d06ebb3&v=4" height="12" />
        <b>Caceresenzo</b>
    </a></td><td>-</td><td>France</td><td>231</td><td>1.28K</td></tr><tr><td>🥉</td><td><a href="https://github.com/Haroenv">
        <img src="https://avatars.githubusercontent.com/u/6270048?s=72&u=767b8fde5c473100da40c50fd2f7c2df139c8d48&v=4" height="12" />
        <b>Haroenv</b>
    </a></td><td>@algolia</td><td>Paris, France</td><td>599</td><td>1.05K</td></tr><tr><td>4</td><td><a href="https://github.com/ask0ldd">
        <img src="https://avatars.githubusercontent.com/u/117862447?s=72&u=26ccc7b22832feeb7a2dc7b8909f6cc90d239a82&v=4" height="12" />
        <b>ask0ldd</b>
    </a></td><td>-</td><td>Paris, France</td><td>672</td><td>843</td></tr><tr><td>5</td><td><a href="https://github.com/BrunoLevy">
        <img src="https://avatars.githubusercontent.com/u/19478253?s=72&u=5d291f158e7d7f0ebb99475e5f8974a7a8ec374d&v=4" height="12" />
        <b>BrunoLevy</b>
    </a></td><td>@inria</td><td>Saclay, France</td><td>721</td><td>614</td></tr><tr><td>6</td><td><a href="https://github.com/crazy-max">
        <img src="https://avatars.githubusercontent.com/u/1951866?s=72&v=4" height="12" />
        <b>crazy-max</b>
    </a></td><td>@docker</td><td>France</td><td>2.57K</td><td>599</td></tr><tr><td>7</td><td><a href="https://github.com/Tahul">
        <img src="https://avatars.githubusercontent.com/u/1385263?s=72&u=5fa8ea08de4cd72e468943edabfa9d72f3c02e70&v=4" height="12" />
        <b>Tahul</b>
    </a></td><td>@thecompaniesapi</td><td>Nantes, France</td><td>471</td><td>497</td></tr><tr><td>8</td><td><a href="https://github.com/fxcoudert">
        <img src="https://avatars.githubusercontent.com/u/1980544?s=72&u=9a73e04b4876d134ff69035fd7ea77eebecda2a3&v=4" height="12" />
        <b>fxcoudert</b>
    </a></td><td>-</td><td>Paris, France</td><td>345</td><td>273</td></tr><tr><td>9</td><td><a href="https://github.com/NelleV">
        <img src="https://avatars.githubusercontent.com/u/184798?s=72&v=4" height="12" />
        <b>NelleV</b>
    </a></td><td>TIMC</td><td>Grenoble</td><td>268</td><td>236</td></tr><tr><td>10</td><td><a href="https://github.com/rlouf">
        <img src="https://avatars.githubusercontent.com/u/3885044?s=72&u=d25f1b19c341ad092b89b860547177a7b5107261&v=4" height="12" />
        <b>rlouf</b>
    </a></td><td>.txt</td><td>Bourron-Marlotte, France</td><td>507</td><td>225</td></tr><tr><td>11</td><td><a href="https://github.com/rozierguillaume">
        <img src="https://avatars.githubusercontent.com/u/22763678?s=72&u=f10c1d50d6f9ce7ed6c7d64a767c02911df19cf4&v=4" height="12" />
        <b>rozierguillaume</b>
    </a></td><td>-</td><td>Paris</td><td>334</td><td>222</td></tr><tr><td>12</td><td><a href="https://github.com/Progi1984">
        <img src="https://avatars.githubusercontent.com/u/1533248?s=72&u=096bead2eab90e4795096b7d518583223dd34be6&v=4" height="12" />
        <b>Progi1984</b>
    </a></td><td>@PrestaShopCorp </td><td>Rennes, France</td><td>235</td><td>204</td></tr><tr><td>13</td><td><a href="https://github.com/mcanouil">
        <img src="https://avatars.githubusercontent.com/u/8896044?s=72&u=86a5cbe0323a90349d87b7fa1fd4b22ae9d45ea2&v=4" height="12" />
        <b>mcanouil</b>
    </a></td><td>-</td><td>Lille, France</td><td>313</td><td>134</td></tr><tr><td>14</td><td><a href="https://github.com/glemaitre">
        <img src="https://avatars.githubusercontent.com/u/7454015?s=72&u=d9704641f89c00ce86f8207e59aedb554109d7fa&v=4" height="12" />
        <b>glemaitre</b>
    </a></td><td>Chief ML Officer / OSS Engineeer @probabl-ai </td><td>Paris-Saclay / France</td><td>825</td><td>95</td></tr><tr><td>15</td><td><a href="https://github.com/ganatan">
        <img src="https://avatars.githubusercontent.com/u/32958393?s=72&u=e53563d16cd220e4901251cc32c332df4496c87c&v=4" height="12" />
        <b>ganatan</b>
    </a></td><td>ganatan</td><td>France</td><td>431</td><td>94</td></tr><tr><td>16</td><td><a href="https://github.com/nhoizey">
        <img src="https://avatars.githubusercontent.com/u/78213?s=72&u=7a2b7a2aca0dcc113d7a61a6dcf9e7a338e22053&v=4" height="12" />
        <b>nhoizey</b>
    </a></td><td>@cleverage</td><td>Paris, France</td><td>263</td><td>92</td></tr><tr><td>17</td><td><a href="https://github.com/antoinevastel">
        <img src="https://avatars.githubusercontent.com/u/5827148?s=72&u=58bfd63c66ed664f66c1338464c502e88cfef45b&v=4" height="12" />
        <b>antoinevastel</b>
    </a></td><td>-</td><td>Nantes, France</td><td>349</td><td>86</td></tr><tr><td>18</td><td><a href="https://github.com/soyuka">
        <img src="https://avatars.githubusercontent.com/u/1321971?s=72&u=c89bcb8e5eeff581d304dcfc5f26628ddc1760a5&v=4" height="12" />
        <b>soyuka</b>
    </a></td><td>@coopTilleuls</td><td>Nantes, France</td><td>459</td><td>84</td></tr><tr><td>19</td><td><a href="https://github.com/LaurentMazare">
        <img src="https://avatars.githubusercontent.com/u/1041292?s=72&u=4d4c5fe94c63a8eb244d812c6d97511c3640d122&v=4" height="12" />
        <b>LaurentMazare</b>
    </a></td><td>-</td><td>Paris, France</td><td>2.43K</td><td>73</td></tr><tr><td>20</td><td><a href="https://github.com/mquandalle">
        <img src="https://avatars.githubusercontent.com/u/1730702?s=72&u=ebe99b2bcc14e2e2376df8637ddc47f1b26a5e7b&v=4" height="12" />
        <b>mquandalle</b>
    </a></td><td>-</td><td>Paris, France</td><td>321</td><td>64</td></tr><tr><td>21</td><td><a href="https://github.com/fasterthanlime">
        <img src="https://avatars.githubusercontent.com/u/7998310?s=72&u=fd6cb24423c35c26ee1ce7e00f0a3925bc964d1d&v=4" height="12" />
        <b>fasterthanlime</b>
    </a></td><td>@bearcove</td><td>Lyon, France</td><td>4.38K</td><td>55</td></tr><tr><td>22</td><td><a href="https://github.com/simongravelle">
        <img src="https://avatars.githubusercontent.com/u/43388542?s=72&u=16bc101821423023268d74e239583cbcc21b3881&v=4" height="12" />
        <b>simongravelle</b>
    </a></td><td>LIPhy</td><td>Grenoble, France</td><td>569</td><td>43</td></tr><tr><td>23</td><td><a href="https://github.com/gsmet">
        <img src="https://avatars.githubusercontent.com/u/1279749?s=72&u=e462a6165ea17647aed446ca31fae604338ae18c&v=4" height="12" />
        <b>gsmet</b>
    </a></td><td>Red Hat</td><td>Lyon, France</td><td>350</td><td>41</td></tr><tr><td>24</td><td><a href="https://github.com/ggrossetie">
        <img src="https://avatars.githubusercontent.com/u/333276?s=72&u=9087930b05d462a706f06a9ce6bf0c8289d8069d&v=4" height="12" />
        <b>ggrossetie</b>
    </a></td><td>Yuzu tech</td><td>Lyon</td><td>233</td><td>41</td></tr><tr><td>25</td><td><a href="https://github.com/Phyronnaz">
        <img src="https://avatars.githubusercontent.com/u/16806877?s=72&u=9f22d47f8682df3061081987287e90d40f553cc8&v=4" height="12" />
        <b>Phyronnaz</b>
    </a></td><td>-</td><td>France</td><td>301</td><td>38</td></tr><tr><td>26</td><td><a href="https://github.com/abougouffa">
        <img src="https://avatars.githubusercontent.com/u/3716399?s=72&u=ad7a1e120fef1c19d7b7864ac183798de2711c59&v=4" height="12" />
        <b>abougouffa</b>
    </a></td><td>-</td><td>Paris, France</td><td>218</td><td>34</td></tr><tr><td>27</td><td><a href="https://github.com/Charles-Chrismann">
        <img src="https://avatars.githubusercontent.com/u/78157563?s=72&u=b02e3426a7d0cca0c38a58a3085e7bbca87a52e7&v=4" height="12" />
        <b>Charles-Chrismann</b>
    </a></td><td>Institut de l'Internet et du Multimédia (IIM)</td><td>Paris, La Défense</td><td>15.34K</td><td>32</td></tr><tr><td>28</td><td><a href="https://github.com/ParisNeo">
        <img src="https://avatars.githubusercontent.com/u/827993?s=72&u=17ad3b01b402b36d9424d6b4437561304616eb18&v=4" height="12" />
        <b>ParisNeo</b>
    </a></td><td>CEA</td><td>France</td><td>264</td><td>29</td></tr><tr><td>29</td><td><a href="https://github.com/FGRibreau">
        <img src="https://avatars.githubusercontent.com/u/138050?s=72&u=09ca579f8ce5f86026aa0d8858432fe77719eee7&v=4" height="12" />
        <b>FGRibreau</b>
    </a></td><td>@nobullshitbooks @netwo-io @hook0 @image-charts  @killbugtoday @mailpopin  / Sold @Redsmin @bringr</td><td>France</td><td>773</td><td>26</td></tr><tr><td>30</td><td><a href="https://github.com/ngxson">
        <img src="https://avatars.githubusercontent.com/u/7702203?s=72&u=c998d920dbca6506c9dda1df1b28adae9842720e&v=4" height="12" />
        <b>ngxson</b>
    </a></td><td>@huggingface </td><td>France</td><td>330</td><td>24</td></tr><tr><td>31</td><td><a href="https://github.com/harryjmg">
        <img src="https://avatars.githubusercontent.com/u/7394780?s=72&u=023539d62ce43f4941c72322bad57ad6d293647a&v=4" height="12" />
        <b>harryjmg</b>
    </a></td><td>JMG Harry</td><td>France</td><td>270</td><td>22</td></tr><tr><td>32</td><td><a href="https://github.com/byroot">
        <img src="https://avatars.githubusercontent.com/u/44640?s=72&v=4" height="12" />
        <b>byroot</b>
    </a></td><td>@Shopify (as @casperisfine)</td><td>Toulouse, France</td><td>892</td><td>21</td></tr><tr><td>33</td><td><a href="https://github.com/vstinner">
        <img src="https://avatars.githubusercontent.com/u/194129?s=72&u=cf52678f5f02f96d9c5bc1b5079d4e6c2e441af4&v=4" height="12" />
        <b>vstinner</b>
    </a></td><td>@RedHatOfficial</td><td>France</td><td>1.39K</td><td>20</td></tr><tr><td>34</td><td><a href="https://github.com/l-lin">
        <img src="https://avatars.githubusercontent.com/u/5452304?s=72&u=2e2f03b021b647037453379a788385f317c8208f&v=4" height="12" />
        <b>l-lin</b>
    </a></td><td>@doctolib</td><td>Paris</td><td>263</td><td>20</td></tr><tr><td>35</td><td><a href="https://github.com/fabpot">
        <img src="https://avatars.githubusercontent.com/u/47313?s=72&u=7ba05204271a726f8642ac15864e2f361b5c0198&v=4" height="12" />
        <b>fabpot</b>
    </a></td><td>Symfony/Platform.sh/Blackfire</td><td>Paris, France</td><td>13.29K</td><td>19</td></tr><tr><td>36</td><td><a href="https://github.com/Kakise">
        <img src="https://avatars.githubusercontent.com/u/18647044?s=72&u=be2d09004989d870eaa9c6285daa8c52f490c3a8&v=4" height="12" />
        <b>Kakise</b>
    </a></td><td>-</td><td>Paris, France</td><td>1.33K</td><td>16</td></tr><tr><td>37</td><td><a href="https://github.com/Julien-R44">
        <img src="https://avatars.githubusercontent.com/u/8337858?s=72&u=51dca49c82393b452f05ee4aa4129a659ef47e34&v=4" height="12" />
        <b>Julien-R44</b>
    </a></td><td>Freelancing </td><td>France</td><td>411</td><td>16</td></tr><tr><td>38</td><td><a href="https://github.com/oliviertassinari">
        <img src="https://avatars.githubusercontent.com/u/3165635?s=72&u=15a7ca3a64c1839a55c83a987d6f906c817d9e85&v=4" height="12" />
        <b>oliviertassinari</b>
    </a></td><td>MUI</td><td>Paris, France</td><td>3.2K</td><td>15</td></tr><tr><td>39</td><td><a href="https://github.com/rouault">
        <img src="https://avatars.githubusercontent.com/u/1192433?s=72&u=aebaf912a08a734156caf25b26ab78d1959f0ed5&v=4" height="12" />
        <b>rouault</b>
    </a></td><td>Spatialys</td><td>France</td><td>753</td><td>15</td></tr><tr><td>40</td><td><a href="https://github.com/geromegrignon">
        <img src="https://avatars.githubusercontent.com/u/32737308?s=72&u=65991e3f02f05e572ae435e24659ba65ed5d6005&v=4" height="12" />
        <b>geromegrignon</b>
    </a></td><td>Lucca</td><td>France</td><td>290</td><td>15</td></tr><tr><td>41</td><td><a href="https://github.com/florian-lefebvre">
        <img src="https://avatars.githubusercontent.com/u/69633530?s=72&u=e2ef3f44db480e30e0e7fe90aa559d3c39fac7e6&v=4" height="12" />
        <b>florian-lefebvre</b>
    </a></td><td>-</td><td>France</td><td>252</td><td>15</td></tr><tr><td>42</td><td><a href="https://github.com/poolpOrg">
        <img src="https://avatars.githubusercontent.com/u/895503?s=72&u=53309f6d07abe6fed906502aa7cb340d0bb6c465&v=4" height="12" />
        <b>poolpOrg</b>
    </a></td><td>poolp.org</td><td>Nantes, France</td><td>233</td><td>15</td></tr><tr><td>43</td><td><a href="https://github.com/Calinou">
        <img src="https://avatars.githubusercontent.com/u/180032?s=72&v=4" height="12" />
        <b>Calinou</b>
    </a></td><td>@godotengine</td><td>Troyes, France</td><td>1.42K</td><td>14</td></tr><tr><td>44</td><td><a href="https://github.com/ibelick">
        <img src="https://avatars.githubusercontent.com/u/14288396?s=72&u=73ee6fdd46dbab7bed83493f5f448654ff2d7f06&v=4" height="12" />
        <b>ibelick</b>
    </a></td><td>-</td><td>Paris</td><td>1.01K</td><td>14</td></tr><tr><td>45</td><td><a href="https://github.com/dgageot">
        <img src="https://avatars.githubusercontent.com/u/153495?s=72&u=7a06a6cbf585d2f329484b4f0b900bf48eee9b29&v=4" height="12" />
        <b>dgageot</b>
    </a></td><td>Docker</td><td>Paris, France</td><td>741</td><td>14</td></tr><tr><td>46</td><td><a href="https://github.com/gdalle">
        <img src="https://avatars.githubusercontent.com/u/22795598?s=72&u=f2e448edb1e79720c999ccd5282d1124c9613ef3&v=4" height="12" />
        <b>gdalle</b>
    </a></td><td>École des Ponts</td><td>Paris</td><td>545</td><td>14</td></tr><tr><td>47</td><td><a href="https://github.com/unixfox">
        <img src="https://avatars.githubusercontent.com/u/4016501?s=72&u=d113bfcd7a1bb996a29af9ace2c158a3c6289b40&v=4" height="12" />
        <b>unixfox</b>
    </a></td><td>-</td><td>Auvergne-Rhône-Alpes, France - Wallonia, Belgium</td><td>371</td><td>14</td></tr><tr><td>48</td><td><a href="https://github.com/lra">
        <img src="https://avatars.githubusercontent.com/u/122286?s=72&u=5b877e8eca464d7f4351a20c1531828f99db6090&v=4" height="12" />
        <b>lra</b>
    </a></td><td>-</td><td>Toulouse, NY, SF</td><td>269</td><td>14</td></tr><tr><td>49</td><td><a href="https://github.com/zoriya">
        <img src="https://avatars.githubusercontent.com/u/32224410?s=72&u=966b19ce0af0d82661baaea34396db0526f52f9d&v=4" height="12" />
        <b>zoriya</b>
    </a></td><td>-</td><td>France</td><td>250</td><td>14</td></tr><tr><td>50</td><td><a href="https://github.com/nadimkobeissi">
        <img src="https://avatars.githubusercontent.com/u/9953?s=72&u=bc47cbab7ce4b508a5ff9b32ac97396e77503687&v=4" height="12" />
        <b>nadimkobeissi</b>
    </a></td><td>@symbolicsoft, @cure53berlin</td><td>Paris, France</td><td>1.26K</td><td>12</td></tr><tr><td>51</td><td><a href="https://github.com/ccamel">
        <img src="https://avatars.githubusercontent.com/u/9574336?s=72&u=5d1de8c7eaf3289162c88956747465a8ed570d66&v=4" height="12" />
        <b>ccamel</b>
    </a></td><td>@axone-protocol</td><td>Toulouse</td><td>453</td><td>12</td></tr><tr><td>52</td><td><a href="https://github.com/sylvestre">
        <img src="https://avatars.githubusercontent.com/u/733326?s=72&u=77d7752593d6fa035b33e63386cc15479744ab24&v=4" height="12" />
        <b>sylvestre</b>
    </a></td><td>Mozilla</td><td>France</td><td>503</td><td>11</td></tr><tr><td>53</td><td><a href="https://github.com/cor3ntin">
        <img src="https://avatars.githubusercontent.com/u/1409019?s=72&v=4" height="12" />
        <b>cor3ntin</b>
    </a></td><td>-</td><td>Bordeaux, France</td><td>360</td><td>11</td></tr><tr><td>54</td><td><a href="https://github.com/Barbapapazes">
        <img src="https://avatars.githubusercontent.com/u/45267552?s=72&u=b4b5ab12a72fb2d26c2c3b8197033324be374956&v=4" height="12" />
        <b>Barbapapazes</b>
    </a></td><td>-</td><td>Paris</td><td>267</td><td>11</td></tr><tr><td>55</td><td><a href="https://github.com/thierryvolpiatto">
        <img src="https://avatars.githubusercontent.com/u/1533939?s=72&v=4" height="12" />
        <b>thierryvolpiatto</b>
    </a></td><td>@emacs-helm </td><td>France</td><td>222</td><td>11</td></tr><tr><td>56</td><td><a href="https://github.com/SofianeHamlaoui">
        <img src="https://avatars.githubusercontent.com/u/16967174?s=72&u=1357194625eff600acb803134b1413824208ccb5&v=4" height="12" />
        <b>SofianeHamlaoui</b>
    </a></td><td>-</td><td>Lyon, France</td><td>417</td><td>10</td></tr><tr><td>57</td><td><a href="https://github.com/ArnaudBarre">
        <img src="https://avatars.githubusercontent.com/u/14235743?s=72&u=1e3fb343c89f3f3ab51080295026475541c390f8&v=4" height="12" />
        <b>ArnaudBarre</b>
    </a></td><td>Carbometrix</td><td>Paris</td><td>298</td><td>10</td></tr><tr><td>58</td><td><a href="https://github.com/Fantomas42">
        <img src="https://avatars.githubusercontent.com/u/100376?s=72&v=4" height="12" />
        <b>Fantomas42</b>
    </a></td><td>-</td><td>Paris, France</td><td>232</td><td>10</td></tr><tr><td>59</td><td><a href="https://github.com/greeeg">
        <img src="https://avatars.githubusercontent.com/u/12447517?s=72&u=848b5a2fa03fa7cc0c99078d30750d5b6837a514&v=4" height="12" />
        <b>greeeg</b>
    </a></td><td>@pennylane-hq</td><td>Paris, France</td><td>228</td><td>10</td></tr><tr><td>60</td><td><a href="https://github.com/NathanLovato">
        <img src="https://avatars.githubusercontent.com/u/12694995?s=72&u=e4abd5fa8b74c82c57955f490da199a1ac7b9d8c&v=4" height="12" />
        <b>NathanLovato</b>
    </a></td><td>GDQuest</td><td>France</td><td>859</td><td>9</td></tr><tr><td>61</td><td><a href="https://github.com/benjamincrozat">
        <img src="https://avatars.githubusercontent.com/u/3613731?s=72&v=4" height="12" />
        <b>benjamincrozat</b>
    </a></td><td>-</td><td>France</td><td>335</td><td>9</td></tr><tr><td>62</td><td><a href="https://github.com/mockersf">
        <img src="https://avatars.githubusercontent.com/u/8672791?s=72&u=6350847888b0006d335bc98ca32a5359389d26b5&v=4" height="12" />
        <b>mockersf</b>
    </a></td><td>-</td><td>France</td><td>277</td><td>9</td></tr><tr><td>63</td><td><a href="https://github.com/gnodet">
        <img src="https://avatars.githubusercontent.com/u/84022?s=72&u=411d6cc1a1007325d0051d524e5ec04b5a859e1f&v=4" height="12" />
        <b>gnodet</b>
    </a></td><td>Red Hat</td><td>Caen, France</td><td>228</td><td>9</td></tr><tr><td>64</td><td><a href="https://github.com/pradel">
        <img src="https://avatars.githubusercontent.com/u/5749437?s=72&u=ce79dc96b5155bbb542a97840dca53ac266fedf8&v=4" height="12" />
        <b>pradel</b>
    </a></td><td>@sigle </td><td>Toulouse, France</td><td>226</td><td>9</td></tr><tr><td>65</td><td><a href="https://github.com/GuillaumeGomez">
        <img src="https://avatars.githubusercontent.com/u/3050060?s=72&u=6ca85464b07c5464a052250a4fc3e3f9c03c97ed&v=4" height="12" />
        <b>GuillaumeGomez</b>
    </a></td><td>@huawei</td><td>Paris</td><td>1.48K</td><td>8</td></tr><tr><td>66</td><td><a href="https://github.com/maelle">
        <img src="https://avatars.githubusercontent.com/u/8360597?s=72&u=824f03caa87c92420352e3dd9a05470320a67412&v=4" height="12" />
        <b>maelle</b>
    </a></td><td>@ropensci</td><td>Nancy, France</td><td>1.05K</td><td>8</td></tr><tr><td>67</td><td><a href="https://github.com/benjamincanac">
        <img src="https://avatars.githubusercontent.com/u/739984?s=72&u=a263ce7469841c60ad76354f0779055b7e8365d5&v=4" height="12" />
        <b>benjamincanac</b>
    </a></td><td>@nuxtlabs</td><td>Bordeaux, France</td><td>664</td><td>8</td></tr><tr><td>68</td><td><a href="https://github.com/ldez">
        <img src="https://avatars.githubusercontent.com/u/5674651?s=72&u=45f0e097891f1e7e0c45c5224dcce11c867038af&v=4" height="12" />
        <b>ldez</b>
    </a></td><td>-</td><td>France</td><td>629</td><td>8</td></tr><tr><td>69</td><td><a href="https://github.com/Canop">
        <img src="https://avatars.githubusercontent.com/u/617006?s=72&u=d37ffb41ad4ef32e831e315ef5316b51e57c2597&v=4" height="12" />
        <b>Canop</b>
    </a></td><td>-</td><td>Lyon, France</td><td>615</td><td>8</td></tr><tr><td>70</td><td><a href="https://github.com/Stormix">
        <img src="https://avatars.githubusercontent.com/u/18377687?s=72&u=84bad792fc870bdc31b2a05a06d2c886dd7e42f9&v=4" height="12" />
        <b>Stormix</b>
    </a></td><td>@Stormix-co </td><td>Marseille, France</td><td>353</td><td>8</td></tr><tr><td>71</td><td><a href="https://github.com/paraboul">
        <img src="https://avatars.githubusercontent.com/u/80341?s=72&u=eea124424525852e2c9add8afa3b25fb889671f3&v=4" height="12" />
        <b>paraboul</b>
    </a></td><td>-</td><td>France</td><td>349</td><td>8</td></tr><tr><td>72</td><td><a href="https://github.com/HungryProton">
        <img src="https://avatars.githubusercontent.com/u/52043844?s=72&u=9a018a7316016546d7208a0d6289200e17a283bf&v=4" height="12" />
        <b>HungryProton</b>
    </a></td><td>-</td><td>France</td><td>345</td><td>8</td></tr><tr><td>73</td><td><a href="https://github.com/charlypoly">
        <img src="https://avatars.githubusercontent.com/u/1252066?s=72&u=a72010bb5154bf3b718fb184c947247614642bb3&v=4" height="12" />
        <b>charlypoly</b>
    </a></td><td>-</td><td>Paris, France</td><td>223</td><td>8</td></tr><tr><td>74</td><td><a href="https://github.com/ComlanGiovanni">
        <img src="https://avatars.githubusercontent.com/u/15771034?s=72&u=0773f7ead12e29c448807c94bdadc66d9a5aa1de&v=4" height="12" />
        <b>ComlanGiovanni</b>
    </a></td><td>42's student</td><td>Paris, FR</td><td>212</td><td>8</td></tr><tr><td>75</td><td><a href="https://github.com/deepnight">
        <img src="https://avatars.githubusercontent.com/u/1671695?s=72&u=36316a70a49497f680e2efef9e8b48623178cdfb&v=4" height="12" />
        <b>deepnight</b>
    </a></td><td>Deepnight Games</td><td>Bordeaux, France</td><td>1.5K</td><td>7</td></tr><tr><td>76</td><td><a href="https://github.com/ptitSeb">
        <img src="https://avatars.githubusercontent.com/u/3250792?s=72&u=f206420ae21c0bbf92fea09871f11adea98adb39&v=4" height="12" />
        <b>ptitSeb</b>
    </a></td><td>-</td><td>France</td><td>960</td><td>7</td></tr><tr><td>77</td><td><a href="https://github.com/kizu">
        <img src="https://avatars.githubusercontent.com/u/177485?s=72&u=4d84ea69f3e98cc16d9daf0c5e7e2ca09c9efad7&v=4" height="12" />
        <b>kizu</b>
    </a></td><td>@DataDog</td><td>France</td><td>823</td><td>7</td></tr><tr><td>78</td><td><a href="https://github.com/angeluriot">
        <img src="https://avatars.githubusercontent.com/u/46031994?s=72&u=8636531cc02d42681ad0935a16c18c6100ef0feb&v=4" height="12" />
        <b>angeluriot</b>
    </a></td><td>@blablacar</td><td>France</td><td>727</td><td>7</td></tr><tr><td>79</td><td><a href="https://github.com/lovasoa">
        <img src="https://avatars.githubusercontent.com/u/552629?s=72&u=3b5257f8d20ea6c313ed91ba80c024c3f00cf5dc&v=4" height="12" />
        <b>lovasoa</b>
    </a></td><td>@auto-grid @enexflow </td><td>Paris, France</td><td>595</td><td>7</td></tr><tr><td>80</td><td><a href="https://github.com/millsp">
        <img src="https://avatars.githubusercontent.com/u/18401805?s=72&u=23f17b9bdeccde31d1659d51c5642ca6ecf38117&v=4" height="12" />
        <b>millsp</b>
    </a></td><td>@prisma</td><td>France</td><td>531</td><td>7</td></tr><tr><td>81</td><td><a href="https://github.com/thoas">
        <img src="https://avatars.githubusercontent.com/u/19938?s=72&u=c1fa51350dbf4bc260670b025c94810ac19d6634&v=4" height="12" />
        <b>thoas</b>
    </a></td><td>Ulule</td><td>Paris, France</td><td>412</td><td>7</td></tr><tr><td>82</td><td><a href="https://github.com/kartben">
        <img src="https://avatars.githubusercontent.com/u/128251?s=72&v=4" height="12" />
        <b>kartben</b>
    </a></td><td>-</td><td>Toulouse, France</td><td>400</td><td>7</td></tr><tr><td>83</td><td><a href="https://github.com/innocenzi">
        <img src="https://avatars.githubusercontent.com/u/16060559?s=72&u=cf061757407ef529958cf24bac8d2f699ad6e6ed&v=4" height="12" />
        <b>innocenzi</b>
    </a></td><td>Developer @JetflyAviation</td><td>France</td><td>390</td><td>7</td></tr><tr><td>84</td><td><a href="https://github.com/SirLynix">
        <img src="https://avatars.githubusercontent.com/u/3002461?s=72&u=cd05ef11e7f6a4e0d2800639896c37fa6dd49dc9&v=4" height="12" />
        <b>SirLynix</b>
    </a></td><td>Gameloft Paris</td><td>France</td><td>312</td><td>7</td></tr><tr><td>85</td><td><a href="https://github.com/sdpython">
        <img src="https://avatars.githubusercontent.com/u/4695832?s=72&u=9a0581b7da03088ea4ad3a37c5b680a64d864f33&v=4" height="12" />
        <b>sdpython</b>
    </a></td><td>@ENSAE</td><td>paris</td><td>300</td><td>7</td></tr><tr><td>86</td><td><a href="https://github.com/mfrachet">
        <img src="https://avatars.githubusercontent.com/u/3874873?s=72&u=7d1dc8a6e9b6144403e5402039c4db686b8d292c&v=4" height="12" />
        <b>mfrachet</b>
    </a></td><td>-</td><td>France</td><td>257</td><td>7</td></tr><tr><td>87</td><td><a href="https://github.com/3outeille">
        <img src="https://avatars.githubusercontent.com/u/47445085?s=72&u=e4ac8a9ba9b0d4e5bde98d08302edb1bf02765ad&v=4" height="12" />
        <b>3outeille</b>
    </a></td><td>HuggingFace</td><td>France</td><td>250</td><td>7</td></tr><tr><td>88</td><td><a href="https://github.com/corsonr">
        <img src="https://avatars.githubusercontent.com/u/1649788?s=72&u=36a376b200fd98e6100788c1ec39b3b7e912797a&v=4" height="12" />
        <b>corsonr</b>
    </a></td><td>Be API</td><td>France</td><td>247</td><td>7</td></tr><tr><td>89</td><td><a href="https://github.com/HiDeoo">
        <img src="https://avatars.githubusercontent.com/u/494699?s=72&u=e7468006f55deb36e1f3757f6691e0180b9257ca&v=4" height="12" />
        <b>HiDeoo</b>
    </a></td><td>-</td><td>France</td><td>229</td><td>7</td></tr><tr><td>90</td><td><a href="https://github.com/MattKetmo">
        <img src="https://avatars.githubusercontent.com/u/334996?s=72&u=2b06b452771518c77550e819cb6991bbe8866078&v=4" height="12" />
        <b>MattKetmo</b>
    </a></td><td>Kiln</td><td>Paris</td><td>215</td><td>7</td></tr><tr><td>91</td><td><a href="https://github.com/axeldelafosse">
        <img src="https://avatars.githubusercontent.com/u/10477267?s=72&u=0322ffa7017942defa4c6de7cdcd4d42b7d364e5&v=4" height="12" />
        <b>axeldelafosse</b>
    </a></td><td>-</td><td>Paris</td><td>208</td><td>7</td></tr><tr><td>92</td><td><a href="https://github.com/SimonMarquis">
        <img src="https://avatars.githubusercontent.com/u/1921278?s=72&u=ace12a9fb3a0532f35285bce04898f7a7c97b2f9&v=4" height="12" />
        <b>SimonMarquis</b>
    </a></td><td>@leboncoin</td><td>Paris, France</td><td>527</td><td>6</td></tr><tr><td>93</td><td><a href="https://github.com/RodZill4">
        <img src="https://avatars.githubusercontent.com/u/6957908?s=72&u=c19aecbe4d441eb008a4485fdcddb661ce659951&v=4" height="12" />
        <b>RodZill4</b>
    </a></td><td>-</td><td>France</td><td>261</td><td>6</td></tr><tr><td>94</td><td><a href="https://github.com/tdimnet">
        <img src="https://avatars.githubusercontent.com/u/9935925?s=72&u=90d6020b1e99960d5cc4ad0517bf6e6e96907d6f&v=4" height="12" />
        <b>tdimnet</b>
    </a></td><td>@nx-academy, @EdenSchoolFrance</td><td>Paris, France</td><td>215</td><td>6</td></tr><tr><td>95</td><td><a href="https://github.com/arcanis">
        <img src="https://avatars.githubusercontent.com/u/1037931?s=72&u=b7caf9bbaa35c1114918e82b0a6d436f761dbec3&v=4" height="12" />
        <b>arcanis</b>
    </a></td><td>@datadog</td><td>Nantes, France</td><td>1.87K</td><td>5</td></tr><tr><td>96</td><td><a href="https://github.com/mxrch">
        <img src="https://avatars.githubusercontent.com/u/17338428?s=72&u=78e744ba686776918a36fcc0047e2f031e3a3d50&v=4" height="12" />
        <b>mxrch</b>
    </a></td><td>HideAndSec</td><td>France</td><td>1.66K</td><td>5</td></tr><tr><td>97</td><td><a href="https://github.com/vincentbernat">
        <img src="https://avatars.githubusercontent.com/u/631446?s=72&u=4fa1b32955881f764b4ca8556b8ba62db83f55d2&v=4" height="12" />
        <b>vincentbernat</b>
    </a></td><td>Free</td><td>Paris, France</td><td>1.15K</td><td>5</td></tr><tr><td>98</td><td><a href="https://github.com/Zylann">
        <img src="https://avatars.githubusercontent.com/u/1311555?s=72&u=98e85e0c6d8599c7de140000f240417c9f512cea&v=4" height="12" />
        <b>Zylann</b>
    </a></td><td>-</td><td>France</td><td>729</td><td>5</td></tr><tr><td>99</td><td><a href="https://github.com/fraxken">
        <img src="https://avatars.githubusercontent.com/u/4438263?s=72&u=5e2d0c11f001871b76e25dd3a96bd662d6a706ba&v=4" height="12" />
        <b>fraxken</b>
    </a></td><td>@OpenAlly</td><td>Paris</td><td>668</td><td>5</td></tr><tr><td>100</td><td><a href="https://github.com/mklabs">
        <img src="https://avatars.githubusercontent.com/u/113832?s=72&u=99d9dde9317c0658dff2e0409c41495f5ef95077&v=4" height="12" />
        <b>mklabs</b>
    </a></td><td>@Geodesic-Games </td><td>Lyon, France</td><td>580</td><td>5</td></tr><tr><td>101</td><td><a href="https://github.com/cveneziani">
        <img src="https://avatars.githubusercontent.com/u/50518?s=72&u=c7b2a45bb87459c343007be7019dcac9eff24d2e&v=4" height="12" />
        <b>cveneziani</b>
    </a></td><td>Cecilitse</td><td>Nantes, France</td><td>400</td><td>5</td></tr><tr><td>102</td><td><a href="https://github.com/lihbr">
        <img src="https://avatars.githubusercontent.com/u/25330882?s=72&u=40027b74b9c4fef25782af3d68db978d261ce9cf&v=4" height="12" />
        <b>lihbr</b>
    </a></td><td>@prismicio</td><td>France</td><td>361</td><td>5</td></tr><tr><td>103</td><td><a href="https://github.com/tpetazzoni">
        <img src="https://avatars.githubusercontent.com/u/1089203?s=72&v=4" height="12" />
        <b>tpetazzoni</b>
    </a></td><td>Bootlin @bootlin </td><td>Toulouse, France</td><td>346</td><td>5</td></tr><tr><td>104</td><td><a href="https://github.com/DeveloppeurPascal">
        <img src="https://avatars.githubusercontent.com/u/29439699?s=72&u=3b413495092a9927526da35a406812d44b64048b&v=4" height="12" />
        <b>DeveloppeurPascal</b>
    </a></td><td>-</td><td>Orléans, France</td><td>331</td><td>5</td></tr><tr><td>105</td><td><a href="https://github.com/xvw">
        <img src="https://avatars.githubusercontent.com/u/5732466?s=72&u=e2da3651aae7faf29d3c54c4d7cf66d92f35f16e&v=4" height="12" />
        <b>xvw</b>
    </a></td><td>@funkywork, @tarides</td><td>Nantes</td><td>324</td><td>5</td></tr><tr><td>106</td><td><a href="https://github.com/aiekick">
        <img src="https://avatars.githubusercontent.com/u/1434736?s=72&u=41204d71f1aa785ef74f57c0987bc3ae7c32f1f7&v=4" height="12" />
        <b>aiekick</b>
    </a></td><td>-</td><td>France</td><td>281</td><td>5</td></tr><tr><td>107</td><td><a href="https://github.com/dunglas">
        <img src="https://avatars.githubusercontent.com/u/57224?s=72&u=a7ed2cf3f0ae84c9e06925b94091b85a7d6324b0&v=4" height="12" />
        <b>dunglas</b>
    </a></td><td>@coopTilleuls </td><td>Lille, France</td><td>4.23K</td><td>4</td></tr><tr><td>108</td><td><a href="https://github.com/MaJerle">
        <img src="https://avatars.githubusercontent.com/u/405717?s=72&u=38e08e0842ed71ef9d972f001cfa73e8aa896362&v=4" height="12" />
        <b>MaJerle</b>
    </a></td><td>-</td><td>France</td><td>2.7K</td><td>4</td></tr><tr><td>109</td><td><a href="https://github.com/moul">
        <img src="https://avatars.githubusercontent.com/u/94029?s=72&u=2acc3ed56cc696b595a069aef15cc975d8662e79&v=4" height="12" />
        <b>moul</b>
    </a></td><td>@gnolang, @berty, ...</td><td>France</td><td>1.6K</td><td>4</td></tr><tr><td>110</td><td><a href="https://github.com/scraly">
        <img src="https://avatars.githubusercontent.com/u/2543381?s=72&u=d500ca96ff8a2a3f9b7bb300c71ed7e57449b072&v=4" height="12" />
        <b>scraly</b>
    </a></td><td>ovh</td><td>Toulouse</td><td>787</td><td>4</td></tr><tr><td>111</td><td><a href="https://github.com/nvuillam">
        <img src="https://avatars.githubusercontent.com/u/17500430?s=72&u=24ff06a935acf56fe06678874e2b297debb66fac&v=4" height="12" />
        <b>nvuillam</b>
    </a></td><td>Cloudity & OX Security</td><td>Paris, France</td><td>320</td><td>4</td></tr><tr><td>112</td><td><a href="https://github.com/clarus">
        <img src="https://avatars.githubusercontent.com/u/316665?s=72&u=18aacb0561d43abcf7ecca90bebbf753b655ee75&v=4" height="12" />
        <b>clarus</b>
    </a></td><td>Formal Land</td><td>Paris</td><td>275</td><td>4</td></tr><tr><td>113</td><td><a href="https://github.com/arguiot">
        <img src="https://avatars.githubusercontent.com/u/18022260?s=72&u=b9efd5c3fc6c179e08b9823f0ed03c4f285a9544&v=4" height="12" />
        <b>arguiot</b>
    </a></td><td>@pr1mer-tech </td><td>San Francisco - Paris</td><td>247</td><td>4</td></tr><tr><td>114</td><td><a href="https://github.com/nicolas-grekas">
        <img src="https://avatars.githubusercontent.com/u/243674?s=72&u=85243de9963ea46d545961980e34e6538ad59fd1&v=4" height="12" />
        <b>nicolas-grekas</b>
    </a></td><td>@SymfonyCorp</td><td>Paris, France</td><td>2.02K</td><td>3</td></tr><tr><td>115</td><td><a href="https://github.com/Bleuje">
        <img src="https://avatars.githubusercontent.com/u/17087687?s=72&u=43aeff24919f3b82dec581293d2f9df51bcfb187&v=4" height="12" />
        <b>Bleuje</b>
    </a></td><td>-</td><td>Paris</td><td>1.13K</td><td>3</td></tr><tr><td>116</td><td><a href="https://github.com/thomasync">
        <img src="https://avatars.githubusercontent.com/u/12927290?s=72&u=46e5c515789397dc2f91f4fe0a5cfa3f9ea40177&v=4" height="12" />
        <b>thomasync</b>
    </a></td><td>-</td><td>Montpellier, France</td><td>1.02K</td><td>3</td></tr><tr><td>117</td><td><a href="https://github.com/ShutdownRepo">
        <img src="https://avatars.githubusercontent.com/u/40902872?s=72&u=a83152b1ababd07d2295e28b9cf0adb69049f42f&v=4" height="12" />
        <b>ShutdownRepo</b>
    </a></td><td>-</td><td>France</td><td>1K</td><td>3</td></tr><tr><td>118</td><td><a href="https://github.com/anotherhadi">
        <img src="https://avatars.githubusercontent.com/u/112569860?s=72&u=03d5a0bb87355b24b8082e50d564f5c12cf58b5a&v=4" height="12" />
        <b>anotherhadi</b>
    </a></td><td>-</td><td>France</td><td>630</td><td>3</td></tr><tr><td>119</td><td><a href="https://github.com/bblanchon">
        <img src="https://avatars.githubusercontent.com/u/5462433?s=72&u=bec379310fcd0063e7555115cc65357c396e0f9b&v=4" height="12" />
        <b>bblanchon</b>
    </a></td><td>-</td><td>France</td><td>587</td><td>3</td></tr><tr><td>120</td><td><a href="https://github.com/gus33000">
        <img src="https://avatars.githubusercontent.com/u/3755345?s=72&u=8be4944a8331aaff14de13cf7f0354c4a8c192b8&v=4" height="12" />
        <b>gus33000</b>
    </a></td><td>labri</td><td>France</td><td>532</td><td>3</td></tr><tr><td>121</td><td><a href="https://github.com/marcomiduri">
        <img src="https://avatars.githubusercontent.com/u/51230146?s=72&u=df59a119b037e9f0c8a4d186c6b650c3a601ff23&v=4" height="12" />
        <b>marcomiduri</b>
    </a></td><td>Webpoint Solutions, LLC</td><td>Paris, FR</td><td>502</td><td>3</td></tr><tr><td>122</td><td><a href="https://github.com/alexandreruban">
        <img src="https://avatars.githubusercontent.com/u/33979976?s=72&u=55cb7b791cdb7adf94ee02066347b63c0f835fe3&v=4" height="12" />
        <b>alexandreruban</b>
    </a></td><td>-</td><td>Lyon, France</td><td>502</td><td>3</td></tr><tr><td>123</td><td><a href="https://github.com/hussein-aitlahcen">
        <img src="https://avatars.githubusercontent.com/u/9103813?s=72&u=8ae26cf794cdbfc36ce096a69330bc31b582eec1&v=4" height="12" />
        <b>hussein-aitlahcen</b>
    </a></td><td>Block 6.282e+10</td><td>France</td><td>406</td><td>3</td></tr><tr><td>124</td><td><a href="https://github.com/LambdAurora">
        <img src="https://avatars.githubusercontent.com/u/12587332?s=72&u=5bc537e2ad331c812f09328154b69cee58adbe85&v=4" height="12" />
        <b>LambdAurora</b>
    </a></td><td>-</td><td>France</td><td>396</td><td>3</td></tr><tr><td>125</td><td><a href="https://github.com/frankie567">
        <img src="https://avatars.githubusercontent.com/u/1144727?s=72&u=c159fe047727aedecbbeeaa96a1b03ceb9d39add&v=4" height="12" />
        <b>frankie567</b>
    </a></td><td>@polarsource</td><td>Lyon, France</td><td>377</td><td>3</td></tr><tr><td>126</td><td><a href="https://github.com/mpromonet">
        <img src="https://avatars.githubusercontent.com/u/1367630?s=72&u=656527786957614d8cf8dec22644fe40dadbbe6f&v=4" height="12" />
        <b>mpromonet</b>
    </a></td><td>-</td><td>France</td><td>358</td><td>3</td></tr><tr><td>127</td><td><a href="https://github.com/Stilic">
        <img src="https://avatars.githubusercontent.com/u/63605602?s=72&u=6662329db31f63d8bbf4c7755a1c5de99cf54f3b&v=4" height="12" />
        <b>Stilic</b>
    </a></td><td>-</td><td>France</td><td>302</td><td>3</td></tr><tr><td>128</td><td><a href="https://github.com/privefl">
        <img src="https://avatars.githubusercontent.com/u/11161036?s=72&u=bd883039d7f52cd9f97ade17949dab9487a2ccf4&v=4" height="12" />
        <b>privefl</b>
    </a></td><td>National Center for Register-based Research (NCRR, Aarhus University)</td><td>Aarhus, Denmark // Lyon, France</td><td>296</td><td>3</td></tr><tr><td>129</td><td><a href="https://github.com/skarnet">
        <img src="https://avatars.githubusercontent.com/u/11243542?s=72&u=7e701b7a85d1ab24444160e78302d9d9eb9d056a&v=4" height="12" />
        <b>skarnet</b>
    </a></td><td>skarnet.com</td><td>Paris, France</td><td>293</td><td>3</td></tr><tr><td>130</td><td><a href="https://github.com/elierotenberg">
        <img src="https://avatars.githubusercontent.com/u/4177867?s=72&u=9672e1bcb5e585e0154096fd9127bb4de9afda6e&v=4" height="12" />
        <b>elierotenberg</b>
    </a></td><td>ifea.education</td><td>France</td><td>265</td><td>3</td></tr><tr><td>131</td><td><a href="https://github.com/joeybronner">
        <img src="https://avatars.githubusercontent.com/u/5888510?s=72&u=15e39a4e9954e51c531d3d636749bd80c6275b8c&v=4" height="12" />
        <b>joeybronner</b>
    </a></td><td>-</td><td>Paris</td><td>261</td><td>3</td></tr><tr><td>132</td><td><a href="https://github.com/tchiotludo">
        <img src="https://avatars.githubusercontent.com/u/2064609?s=72&u=e0b81e6999b4fb51c0d7383ee10090d2d6332939&v=4" height="12" />
        <b>tchiotludo</b>
    </a></td><td>@kestra-io</td><td>Lille, France</td><td>255</td><td>3</td></tr><tr><td>133</td><td><a href="https://github.com/GromNaN">
        <img src="https://avatars.githubusercontent.com/u/400034?s=72&u=b92f9fbc757f5d361de7059b8e69a0eaac1164b5&v=4" height="12" />
        <b>GromNaN</b>
    </a></td><td>MongoDB</td><td>Rouen, France</td><td>233</td><td>3</td></tr><tr><td>134</td><td><a href="https://github.com/laurentkempe">
        <img src="https://avatars.githubusercontent.com/u/272612?s=72&u=d5a602c4b87d93c5497e13c2badc0f5d6f895ac4&v=4" height="12" />
        <b>laurentkempe</b>
    </a></td><td>@TechHeadBrothers @Innoveo </td><td>Illzach, France</td><td>233</td><td>3</td></tr><tr><td>135</td><td><a href="https://github.com/jdesboeufs">
        <img src="https://avatars.githubusercontent.com/u/1231232?s=72&u=71bac788fd58c4cb53ae18559b6ffecd1e218725&v=4" height="12" />
        <b>jdesboeufs</b>
    </a></td><td>Living Data</td><td>Paris</td><td>232</td><td>3</td></tr><tr><td>136</td><td><a href="https://github.com/vvolhejn">
        <img src="https://avatars.githubusercontent.com/u/8401624?s=72&u=7cca4517e77e1a445ae2e5732db1fc022f4c3ebd&v=4" height="12" />
        <b>vvolhejn</b>
    </a></td><td>@kyutai-labs</td><td>Paris</td><td>220</td><td>3</td></tr><tr><td>137</td><td><a href="https://github.com/azerpas">
        <img src="https://avatars.githubusercontent.com/u/19282069?s=72&u=23fefaa28d073e8c7fc44a5a8737145773e38c74&v=4" height="12" />
        <b>azerpas</b>
    </a></td><td>@DataDome</td><td>Paris</td><td>218</td><td>3</td></tr><tr><td>138</td><td><a href="https://github.com/mykiwi">
        <img src="https://avatars.githubusercontent.com/u/334432?s=72&u=8e0e09ca184a8891c4731401f39edba0895834c2&v=4" height="12" />
        <b>mykiwi</b>
    </a></td><td>open to work</td><td>Nantes, France</td><td>207</td><td>3</td></tr><tr><td>139</td><td><a href="https://github.com/vdaubry">
        <img src="https://avatars.githubusercontent.com/u/498298?s=72&u=59fed465b4561ad78769951c38e14229f13930f7&v=4" height="12" />
        <b>vdaubry</b>
    </a></td><td>Corpogames</td><td>Paris</td><td>204</td><td>3</td></tr><tr><td>140</td><td><a href="https://github.com/brunosimon">
        <img src="https://avatars.githubusercontent.com/u/5439991?s=72&u=d7f9a046776f0960769c8d90ca8ced4d896c8e6a&v=4" height="12" />
        <b>brunosimon</b>
    </a></td><td>Creative Journey</td><td>Paris</td><td>19.9K</td><td>2</td></tr><tr><td>141</td><td><a href="https://github.com/GitSquared">
        <img src="https://avatars.githubusercontent.com/u/24496417?s=72&u=161b0a8aa57c55e6bfff0c1ee6ac59aaeeb774f5&v=4" height="12" />
        <b>GitSquared</b>
    </a></td><td>@carbonfact</td><td>Paris, France</td><td>1.89K</td><td>2</td></tr><tr><td>142</td><td><a href="https://github.com/Carreau">
        <img src="https://avatars.githubusercontent.com/u/335567?s=72&v=4" height="12" />
        <b>Carreau</b>
    </a></td><td>@Quansight-Labs</td><td>France</td><td>1.33K</td><td>2</td></tr><tr><td>143</td><td><a href="https://github.com/Geal">
        <img src="https://avatars.githubusercontent.com/u/119296?s=72&v=4" height="12" />
        <b>Geal</b>
    </a></td><td>-</td><td>Nantes, France</td><td>1.29K</td><td>2</td></tr><tr><td>144</td><td><a href="https://github.com/Cadene">
        <img src="https://avatars.githubusercontent.com/u/4681518?s=72&u=7b60f24dd0deb4dcbb097c9aeca2dd252f9907d9&v=4" height="12" />
        <b>Cadene</b>
    </a></td><td>@huggingface </td><td>Paris</td><td>1.22K</td><td>2</td></tr><tr><td>145</td><td><a href="https://github.com/LouisCAD">
        <img src="https://avatars.githubusercontent.com/u/6975237?s=72&v=4" height="12" />
        <b>LouisCAD</b>
    </a></td><td>Amande | Previously @Beepiz - SuiviDeFlotte.net </td><td>France</td><td>972</td><td>2</td></tr><tr><td>146</td><td><a href="https://github.com/hadronized">
        <img src="https://avatars.githubusercontent.com/u/506592?s=72&u=bdd2a0502a6a0097f8db5d4601e64ab62cb86b96&v=4" height="12" />
        <b>hadronized</b>
    </a></td><td>@datadog </td><td>France</td><td>853</td><td>2</td></tr><tr><td>147</td><td><a href="https://github.com/eliemichel">
        <img src="https://avatars.githubusercontent.com/u/5802849?s=72&v=4" height="12" />
        <b>eliemichel</b>
    </a></td><td>@adobe</td><td>Paris</td><td>850</td><td>2</td></tr><tr><td>148</td><td><a href="https://github.com/patrickheng">
        <img src="https://avatars.githubusercontent.com/u/9051314?s=72&u=5c38c6cf3e902645bcb37c7ca3744b89de422156&v=4" height="12" />
        <b>patrickheng</b>
    </a></td><td>Freelance</td><td>Paris</td><td>793</td><td>2</td></tr><tr><td>149</td><td><a href="https://github.com/zoontek">
        <img src="https://avatars.githubusercontent.com/u/1902323?s=72&u=b208315a0d0fd583a7cbda7b1badac19b473dc30&v=4" height="12" />
        <b>zoontek</b>
    </a></td><td>Swan</td><td>Paris</td><td>779</td><td>2</td></tr><tr><td>150</td><td><a href="https://github.com/mlabouardy">
        <img src="https://avatars.githubusercontent.com/u/10320205?s=72&u=022b2dc0e4696d43258b8364ca7e869aeb18181b&v=4" height="12" />
        <b>mlabouardy</b>
    </a></td><td>@tailwarden</td><td>Paris, France</td><td>765</td><td>2</td></tr><tr><td>151</td><td><a href="https://github.com/gildas-lormeau">
        <img src="https://avatars.githubusercontent.com/u/396787?s=72&u=9c2aeab0c23cb368b4ae3df9e17bc1ba9d8a51ce&v=4" height="12" />
        <b>gildas-lormeau</b>
    </a></td><td>Capsule Code</td><td>Rennes, France</td><td>741</td><td>2</td></tr><tr><td>152</td><td><a href="https://github.com/guillaumebriday">
        <img src="https://avatars.githubusercontent.com/u/8252238?s=72&u=c34e53afee0a1d7e6b1a8112f8bb875c51fcd657&v=4" height="12" />
        <b>guillaumebriday</b>
    </a></td><td>@spendhq</td><td>Lyon, France</td><td>589</td><td>2</td></tr><tr><td>153</td><td><a href="https://github.com/Amagash">
        <img src="https://avatars.githubusercontent.com/u/20380447?s=72&u=1c5deea446e3f81f4e86708d96bad45cbd633fe3&v=4" height="12" />
        <b>Amagash</b>
    </a></td><td>AWS</td><td>France</td><td>583</td><td>2</td></tr><tr><td>154</td><td><a href="https://github.com/stephrobert">
        <img src="https://avatars.githubusercontent.com/u/681788?s=72&u=cda76428fe4d06957a063238e1dcc1d4c4ae2cf6&v=4" height="12" />
        <b>stephrobert</b>
    </a></td><td>Outscale France</td><td>Lille</td><td>522</td><td>2</td></tr><tr><td>155</td><td><a href="https://github.com/oliviergimenez">
        <img src="https://avatars.githubusercontent.com/u/12683635?s=72&u=c5a60d598ab4e98660dc7589de4609414a6af089&v=4" height="12" />
        <b>oliviergimenez</b>
    </a></td><td>CNRS</td><td>Montpellier</td><td>496</td><td>2</td></tr><tr><td>156</td><td><a href="https://github.com/CedricGuillemet">
        <img src="https://avatars.githubusercontent.com/u/1312968?s=72&u=09586c4d429addaa7fc099437bebda780a9e39ed&v=4" height="12" />
        <b>CedricGuillemet</b>
    </a></td><td>Microsoft</td><td>Redon, Brittany, France</td><td>479</td><td>2</td></tr><tr><td>157</td><td><a href="https://github.com/TerrorJack">
        <img src="https://avatars.githubusercontent.com/u/3889585?s=72&u=9f17aa6e8c5e916757801a1852b271f4a307c722&v=4" height="12" />
        <b>TerrorJack</b>
    </a></td><td>@tweag</td><td>Paris</td><td>460</td><td>2</td></tr><tr><td>158</td><td><a href="https://github.com/pommedeterresautee">
        <img src="https://avatars.githubusercontent.com/u/1029874?s=72&v=4" height="12" />
        <b>pommedeterresautee</b>
    </a></td><td>@ELS-RD Lefebvre Sarrut</td><td>Paris, France</td><td>434</td><td>2</td></tr><tr><td>159</td><td><a href="https://github.com/Eschults">
        <img src="https://avatars.githubusercontent.com/u/8090140?s=72&u=8a860a3b8066c1c6fe7ddba93065bd8272c38f45&v=4" height="12" />
        <b>Eschults</b>
    </a></td><td>@lewagon</td><td>Paris</td><td>427</td><td>2</td></tr><tr><td>160</td><td><a href="https://github.com/LudovicRousseau">
        <img src="https://avatars.githubusercontent.com/u/398496?s=72&v=4" height="12" />
        <b>LudovicRousseau</b>
    </a></td><td>-</td><td>France</td><td>423</td><td>2</td></tr><tr><td>161</td><td><a href="https://github.com/tgalopin">
        <img src="https://avatars.githubusercontent.com/u/1651494?s=72&u=ff057fae3d32e16223fbd1238811d5203111edb5&v=4" height="12" />
        <b>tgalopin</b>
    </a></td><td>@symfony  </td><td>France</td><td>377</td><td>2</td></tr><tr><td>162</td><td><a href="https://github.com/LelouchFR">
        <img src="https://avatars.githubusercontent.com/u/75901978?s=72&u=6ea1761cefac342d073f9fede5adbb3d6f8609e4&v=4" height="12" />
        <b>LelouchFR</b>
    </a></td><td>IUT Haguenau</td><td>France</td><td>366</td><td>2</td></tr><tr><td>163</td><td><a href="https://github.com/clementroche">
        <img src="https://avatars.githubusercontent.com/u/28361254?s=72&u=617b111ad79a35e545994bdc651eb7967ae72f10&v=4" height="12" />
        <b>clementroche</b>
    </a></td><td>@darkroomengineering</td><td>France</td><td>358</td><td>2</td></tr><tr><td>164</td><td><a href="https://github.com/johnvuko">
        <img src="https://avatars.githubusercontent.com/u/188946?s=72&u=7298b69cfb0aa8c1055ac262e7367d18a41b9cb8&v=4" height="12" />
        <b>johnvuko</b>
    </a></td><td>@yokitup</td><td>Paris, France</td><td>351</td><td>2</td></tr><tr><td>165</td><td><a href="https://github.com/Ovid">
        <img src="https://avatars.githubusercontent.com/u/24634?s=72&u=b0b1a4df441503bc7e892d053de4c0a7944bcdec&v=4" height="12" />
        <b>Ovid</b>
    </a></td><td>Jack of all trades, master of some.</td><td>France</td><td>344</td><td>2</td></tr><tr><td>166</td><td><a href="https://github.com/toufik-airane">
        <img src="https://avatars.githubusercontent.com/u/5610269?s=72&u=1b72057199197e4edb29ee4928078e1633ea0efa&v=4" height="12" />
        <b>toufik-airane</b>
    </a></td><td>SecurityforTech</td><td>Paris, France</td><td>332</td><td>2</td></tr><tr><td>167</td><td><a href="https://github.com/vadimkantorov">
        <img src="https://avatars.githubusercontent.com/u/1041752?s=72&u=51c5c08f0f9be5206c4d5d6b3d09492bb6f9aa69&v=4" height="12" />
        <b>vadimkantorov</b>
    </a></td><td>INRIA</td><td>Paris, France</td><td>331</td><td>2</td></tr><tr><td>168</td><td><a href="https://github.com/rap2hpoutre">
        <img src="https://avatars.githubusercontent.com/u/1575946?s=72&u=23e0b1c5feb3d6ad4862afd1393ae651b93ff960&v=4" height="12" />
        <b>rap2hpoutre</b>
    </a></td><td>@betagouv</td><td>Nantes</td><td>330</td><td>2</td></tr><tr><td>169</td><td><a href="https://github.com/adrienpoly">
        <img src="https://avatars.githubusercontent.com/u/7847244?s=72&u=f4330ca5e036d365b3c41199ac76e3b979ab10bb&v=4" height="12" />
        <b>adrienpoly</b>
    </a></td><td>-</td><td>Bordeaux</td><td>317</td><td>2</td></tr><tr><td>170</td><td><a href="https://github.com/MeymounB">
        <img src="https://avatars.githubusercontent.com/u/77726988?s=72&u=d12068913a829662f30751a4591327cdbf424ead&v=4" height="12" />
        <b>MeymounB</b>
    </a></td><td>@Next-Generation-Dev</td><td>France</td><td>303</td><td>2</td></tr><tr><td>171</td><td><a href="https://github.com/mfuntowicz">
        <img src="https://avatars.githubusercontent.com/u/2241520?s=72&u=ee36ddd1373358f3e31ef52ba5721fe0d308bc8a&v=4" height="12" />
        <b>mfuntowicz</b>
    </a></td><td>@huggingface </td><td>Paris, France</td><td>299</td><td>2</td></tr><tr><td>172</td><td><a href="https://github.com/krokrob">
        <img src="https://avatars.githubusercontent.com/u/9978111?s=72&u=c37facf1cbac09f637751b492b6026e927b67b6c&v=4" height="12" />
        <b>krokrob</b>
    </a></td><td>@lewagon </td><td>Paris</td><td>294</td><td>2</td></tr><tr><td>173</td><td><a href="https://github.com/Abonia1">
        <img src="https://avatars.githubusercontent.com/u/22887323?s=72&u=23dd96b05f8f5b382532f609956a63c9ea3cfc5a&v=4" height="12" />
        <b>Abonia1</b>
    </a></td><td>IBM</td><td>Paris,France</td><td>291</td><td>2</td></tr><tr><td>174</td><td><a href="https://github.com/arthaud">
        <img src="https://avatars.githubusercontent.com/u/2151557?s=72&u=20726f284e2b9874d52eddf9c2c447a0ac0c5ece&v=4" height="12" />
        <b>arthaud</b>
    </a></td><td>@facebook</td><td>Paris, France</td><td>288</td><td>2</td></tr><tr><td>175</td><td><a href="https://github.com/EiffL">
        <img src="https://avatars.githubusercontent.com/u/861591?s=72&u=49d14cd4b0db6b074c7c010dfc0a32d4d7eac615&v=4" height="12" />
        <b>EiffL</b>
    </a></td><td>-</td><td>Paris / New York City</td><td>280</td><td>2</td></tr><tr><td>176</td><td><a href="https://github.com/armel">
        <img src="https://avatars.githubusercontent.com/u/127889?s=72&u=e1dfe6a97714c81ef8e2307b27d66fb9446cbeca&v=4" height="12" />
        <b>armel</b>
    </a></td><td>Globalis</td><td>Paris (France)</td><td>271</td><td>2</td></tr><tr><td>177</td><td><a href="https://github.com/louisabraham">
        <img src="https://avatars.githubusercontent.com/u/13174805?s=72&v=4" height="12" />
        <b>louisabraham</b>
    </a></td><td>-</td><td>Paris</td><td>270</td><td>2</td></tr><tr><td>178</td><td><a href="https://github.com/kevin-sakemaer">
        <img src="https://avatars.githubusercontent.com/u/5434752?s=72&u=cca13dc9862c9829bf1ff91b0ee56dfb90edf76b&v=4" height="12" />
        <b>kevin-sakemaer</b>
    </a></td><td>@KLEAK-Development  </td><td>Toulouse</td><td>269</td><td>2</td></tr><tr><td>179</td><td><a href="https://github.com/travier">
        <img src="https://avatars.githubusercontent.com/u/64795720?s=72&u=7f7c094b847bc8dc140f2e5aaa44dcd6b70a9486&v=4" height="12" />
        <b>travier</b>
    </a></td><td>Red Hat</td><td>Paris, France</td><td>267</td><td>2</td></tr><tr><td>180</td><td><a href="https://github.com/mkcor">
        <img src="https://avatars.githubusercontent.com/u/2227806?s=72&u=5320031216d435cd2bb0259a116a5623108c9b26&v=4" height="12" />
        <b>mkcor</b>
    </a></td><td>-</td><td>Strasbourg, France</td><td>262</td><td>2</td></tr><tr><td>181</td><td><a href="https://github.com/Bubhux">
        <img src="https://avatars.githubusercontent.com/u/110377006?s=72&u=0309cab6fd716667c5e7e7d50f14c51803135a83&v=4" height="12" />
        <b>Bubhux</b>
    </a></td><td>-</td><td>France</td><td>262</td><td>2</td></tr><tr><td>182</td><td><a href="https://github.com/Keruspe">
        <img src="https://avatars.githubusercontent.com/u/222942?s=72&v=4" height="12" />
        <b>Keruspe</b>
    </a></td><td>Criteo</td><td>Nantes</td><td>257</td><td>2</td></tr><tr><td>183</td><td><a href="https://github.com/noirbizarre">
        <img src="https://avatars.githubusercontent.com/u/15725?s=72&u=24aa7a44ae7c957043e6a39675c3546d2f925a46&v=4" height="12" />
        <b>noirbizarre</b>
    </a></td><td>@apihackers @LedgerHQ </td><td>Paris, France</td><td>256</td><td>2</td></tr><tr><td>184</td><td><a href="https://github.com/geowarin">
        <img src="https://avatars.githubusercontent.com/u/1045636?s=72&v=4" height="12" />
        <b>geowarin</b>
    </a></td><td>Freelancer</td><td>Paris, France</td><td>253</td><td>2</td></tr><tr><td>185</td><td><a href="https://github.com/huang-julien">
        <img src="https://avatars.githubusercontent.com/u/63512348?s=72&u=b60a88c0337dc98b9cdbf1d0a4b3c635786a01b0&v=4" height="12" />
        <b>huang-julien</b>
    </a></td><td>Leetchi</td><td>France</td><td>242</td><td>2</td></tr><tr><td>186</td><td><a href="https://github.com/valentinbreiz">
        <img src="https://avatars.githubusercontent.com/u/18724279?s=72&v=4" height="12" />
        <b>valentinbreiz</b>
    </a></td><td>@Epitech</td><td>France</td><td>234</td><td>2</td></tr><tr><td>187</td><td><a href="https://github.com/AntoineAugusti">
        <img src="https://avatars.githubusercontent.com/u/295709?s=72&v=4" height="12" />
        <b>AntoineAugusti</b>
    </a></td><td>@betagouv @mtes-mct @etalab</td><td>Dijon, France</td><td>228</td><td>2</td></tr><tr><td>188</td><td><a href="https://github.com/thomasbnt">
        <img src="https://avatars.githubusercontent.com/u/14293805?s=72&u=6049cd0655f3ed1ec256e900bbcd3b540491bd09&v=4" height="12" />
        <b>thomasbnt</b>
    </a></td><td>Creator of @mrrobotdotapp</td><td>Toulouse, France</td><td>217</td><td>2</td></tr><tr><td>189</td><td><a href="https://github.com/Anttwo">
        <img src="https://avatars.githubusercontent.com/u/65666237?s=72&u=4b1cf9721ace6725bdaee12546c1063f9b7140aa&v=4" height="12" />
        <b>Anttwo</b>
    </a></td><td>Ecole des Ponts ParisTech</td><td>Paris, France</td><td>209</td><td>2</td></tr><tr><td>190</td><td><a href="https://github.com/matyo91">
        <img src="https://avatars.githubusercontent.com/u/1254025?s=72&u=9b7ebe3f2a1154386cef252f1819e13128300355&v=4" height="12" />
        <b>matyo91</b>
    </a></td><td>@darkwood-com</td><td>Paris</td><td>207</td><td>2</td></tr><tr><td>191</td><td><a href="https://github.com/Romakita">
        <img src="https://avatars.githubusercontent.com/u/1763311?s=72&u=29dc6efc281f9b8c8de20eab797b894fed5e57d9&v=4" height="12" />
        <b>Romakita</b>
    </a></td><td>Zenika</td><td>Ile-de-france, France</td><td>205</td><td>2</td></tr><tr><td>192</td><td><a href="https://github.com/posva">
        <img src="https://avatars.githubusercontent.com/u/664177?s=72&u=06259cb98f3d65c5901edf488b6bf4ab5f4bccec&v=4" height="12" />
        <b>posva</b>
    </a></td><td>Freelance</td><td>Paris </td><td>6.19K</td><td>1</td></tr><tr><td>193</td><td><a href="https://github.com/ssaunier">
        <img src="https://avatars.githubusercontent.com/u/414418?s=72&u=6517ac662c8a8db80b1fe2c4ef050f0af8ca26cd&v=4" height="12" />
        <b>ssaunier</b>
    </a></td><td>-</td><td>France</td><td>2.32K</td><td>1</td></tr><tr><td>194</td><td><a href="https://github.com/0xN0x">
        <img src="https://avatars.githubusercontent.com/u/1781547?s=72&u=84f608fab306dd7b1c3df0a578bd476fefb15f7a&v=4" height="12" />
        <b>0xN0x</b>
    </a></td><td>-</td><td>France</td><td>2.28K</td><td>1</td></tr><tr><td>195</td><td><a href="https://github.com/Johann-S">
        <img src="https://avatars.githubusercontent.com/u/1689750?s=72&v=4" height="12" />
        <b>Johann-S</b>
    </a></td><td>IOfate</td><td>France</td><td>856</td><td>1</td></tr><tr><td>196</td><td><a href="https://github.com/lindenb">
        <img src="https://avatars.githubusercontent.com/u/33838?s=72&u=69f92e5fef0d06f78b08e36877633efa0c7f5441&v=4" height="12" />
        <b>lindenb</b>
    </a></td><td>INSERM</td><td>Nantes, France</td><td>548</td><td>1</td></tr><tr><td>197</td><td><a href="https://github.com/kevinchalet">
        <img src="https://avatars.githubusercontent.com/u/6998306?s=72&u=71c40a231984c198d230974e6536b1aea5caf756&v=4" height="12" />
        <b>kevinchalet</b>
    </a></td><td>-</td><td>France</td><td>523</td><td>1</td></tr><tr><td>198</td><td><a href="https://github.com/XenocodeRCE">
        <img src="https://avatars.githubusercontent.com/u/4918142?s=72&u=04e5e74f4dfc5c163795e6d338c76b68ef76a875&v=4" height="12" />
        <b>XenocodeRCE</b>
    </a></td><td>-</td><td>France</td><td>415</td><td>1</td></tr><tr><td>199</td><td><a href="https://github.com/LostInBrittany">
        <img src="https://avatars.githubusercontent.com/u/726476?s=72&u=5f9c71501700a15d727e15fd0ddd699b884d2a11&v=4" height="12" />
        <b>LostInBrittany</b>
    </a></td><td>@CleverCloud</td><td>Brest, Brittany, France</td><td>307</td><td>1</td></tr><tr><td>200</td><td><a href="https://github.com/eunjae-lee">
        <img src="https://avatars.githubusercontent.com/u/499898?s=72&u=aa57cd1eecb1b6590e419d2114573c419d2894fc&v=4" height="12" />
        <b>eunjae-lee</b>
    </a></td><td>@calcom</td><td>Paris</td><td>268</td><td>1</td></tr>
    </tbody>
</table>

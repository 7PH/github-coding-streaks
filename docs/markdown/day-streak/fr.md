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
        <tr><td>🥇</td><td><a href="https://github.com/solygambas">
        <img src="https://avatars.githubusercontent.com/u/51904909?s=72&u=8b618cebbc76985e16a93b1ac34e80b5f4a80a60&v=4" height="12" />
        <b>solygambas</b>
    </a></td><td>Freelancer</td><td>France</td><td>591</td><td>1.9K</td></tr><tr><td>🥈</td><td><a href="https://github.com/bloodyowl">
        <img src="https://avatars.githubusercontent.com/u/1688645?s=72&u=1cf687904979439e58e6629628a0dd41b32a591b&v=4" height="12" />
        <b>bloodyowl</b>
    </a></td><td>@swan-io</td><td>Paris, France</td><td>414</td><td>1.62K</td></tr><tr><td>🥉</td><td><a href="https://github.com/Caceresenzo">
        <img src="https://avatars.githubusercontent.com/u/7386242?s=72&u=17d4617bb086732fd4da9287942494386d06ebb3&v=4" height="12" />
        <b>Caceresenzo</b>
    </a></td><td>-</td><td>France</td><td>226</td><td>1.26K</td></tr><tr><td>4</td><td><a href="https://github.com/Haroenv">
        <img src="https://avatars.githubusercontent.com/u/6270048?s=72&u=767b8fde5c473100da40c50fd2f7c2df139c8d48&v=4" height="12" />
        <b>Haroenv</b>
    </a></td><td>@algolia</td><td>Paris, France</td><td>598</td><td>1.02K</td></tr><tr><td>5</td><td><a href="https://github.com/ask0ldd">
        <img src="https://avatars.githubusercontent.com/u/117862447?s=72&u=26ccc7b22832feeb7a2dc7b8909f6cc90d239a82&v=4" height="12" />
        <b>ask0ldd</b>
    </a></td><td>-</td><td>Paris, France</td><td>645</td><td>822</td></tr><tr><td>6</td><td><a href="https://github.com/BrunoLevy">
        <img src="https://avatars.githubusercontent.com/u/19478253?s=72&u=5d291f158e7d7f0ebb99475e5f8974a7a8ec374d&v=4" height="12" />
        <b>BrunoLevy</b>
    </a></td><td>@inria</td><td>Saclay, France</td><td>715</td><td>593</td></tr><tr><td>7</td><td><a href="https://github.com/crazy-max">
        <img src="https://avatars.githubusercontent.com/u/1951866?s=72&v=4" height="12" />
        <b>crazy-max</b>
    </a></td><td>@docker</td><td>France</td><td>2.56K</td><td>578</td></tr><tr><td>8</td><td><a href="https://github.com/hugomd">
        <img src="https://avatars.githubusercontent.com/u/1646536?s=72&u=fd30e2bd322769f78c4e5f8091407b1cfb4794b6&v=4" height="12" />
        <b>hugomd</b>
    </a></td><td>@CashApp @Block</td><td>Lyon, France</td><td>497</td><td>526</td></tr><tr><td>9</td><td><a href="https://github.com/fxcoudert">
        <img src="https://avatars.githubusercontent.com/u/1980544?s=72&u=9a73e04b4876d134ff69035fd7ea77eebecda2a3&v=4" height="12" />
        <b>fxcoudert</b>
    </a></td><td>-</td><td>Paris, France</td><td>345</td><td>252</td></tr><tr><td>10</td><td><a href="https://github.com/NelleV">
        <img src="https://avatars.githubusercontent.com/u/184798?s=72&v=4" height="12" />
        <b>NelleV</b>
    </a></td><td>TIMC</td><td>Grenoble</td><td>267</td><td>215</td></tr><tr><td>11</td><td><a href="https://github.com/rlouf">
        <img src="https://avatars.githubusercontent.com/u/3885044?s=72&u=d25f1b19c341ad092b89b860547177a7b5107261&v=4" height="12" />
        <b>rlouf</b>
    </a></td><td>.txt</td><td>Bourron-Marlotte, France</td><td>501</td><td>204</td></tr><tr><td>12</td><td><a href="https://github.com/rozierguillaume">
        <img src="https://avatars.githubusercontent.com/u/22763678?s=72&u=f10c1d50d6f9ce7ed6c7d64a767c02911df19cf4&v=4" height="12" />
        <b>rozierguillaume</b>
    </a></td><td>-</td><td>Paris</td><td>334</td><td>201</td></tr><tr><td>13</td><td><a href="https://github.com/Progi1984">
        <img src="https://avatars.githubusercontent.com/u/1533248?s=72&u=096bead2eab90e4795096b7d518583223dd34be6&v=4" height="12" />
        <b>Progi1984</b>
    </a></td><td>@PrestaShopCorp </td><td>Rennes, France</td><td>235</td><td>183</td></tr><tr><td>14</td><td><a href="https://github.com/huang-julien">
        <img src="https://avatars.githubusercontent.com/u/63512348?s=72&u=b60a88c0337dc98b9cdbf1d0a4b3c635786a01b0&v=4" height="12" />
        <b>huang-julien</b>
    </a></td><td>Leetchi</td><td>France</td><td>239</td><td>129</td></tr><tr><td>15</td><td><a href="https://github.com/mcanouil">
        <img src="https://avatars.githubusercontent.com/u/8896044?s=72&u=86a5cbe0323a90349d87b7fa1fd4b22ae9d45ea2&v=4" height="12" />
        <b>mcanouil</b>
    </a></td><td>-</td><td>Lille, France</td><td>307</td><td>113</td></tr><tr><td>16</td><td><a href="https://github.com/xvw">
        <img src="https://avatars.githubusercontent.com/u/5732466?s=72&u=e2da3651aae7faf29d3c54c4d7cf66d92f35f16e&v=4" height="12" />
        <b>xvw</b>
    </a></td><td>@funkywork, @tarides</td><td>Nantes</td><td>323</td><td>109</td></tr><tr><td>17</td><td><a href="https://github.com/posva">
        <img src="https://avatars.githubusercontent.com/u/664177?s=72&u=06259cb98f3d65c5901edf488b6bf4ab5f4bccec&v=4" height="12" />
        <b>posva</b>
    </a></td><td>Freelance</td><td>Paris </td><td>6.16K</td><td>106</td></tr><tr><td>18</td><td><a href="https://github.com/ornicar">
        <img src="https://avatars.githubusercontent.com/u/140370?s=72&v=4" height="12" />
        <b>ornicar</b>
    </a></td><td>lichess.org</td><td>France</td><td>6.03K</td><td>102</td></tr><tr><td>19</td><td><a href="https://github.com/glemaitre">
        <img src="https://avatars.githubusercontent.com/u/7454015?s=72&u=d9704641f89c00ce86f8207e59aedb554109d7fa&v=4" height="12" />
        <b>glemaitre</b>
    </a></td><td>Chief ML Officer / OSS Engineeer @probabl-ai </td><td>Paris-Saclay / France</td><td>818</td><td>74</td></tr><tr><td>20</td><td><a href="https://github.com/ganatan">
        <img src="https://avatars.githubusercontent.com/u/32958393?s=72&u=fc4800d819397a6bc72c65257ae230c3348b8627&v=4" height="12" />
        <b>ganatan</b>
    </a></td><td>ganatan</td><td>France</td><td>431</td><td>73</td></tr><tr><td>21</td><td><a href="https://github.com/nhoizey">
        <img src="https://avatars.githubusercontent.com/u/78213?s=72&u=7a2b7a2aca0dcc113d7a61a6dcf9e7a338e22053&v=4" height="12" />
        <b>nhoizey</b>
    </a></td><td>@cleverage</td><td>Paris, France</td><td>264</td><td>71</td></tr><tr><td>22</td><td><a href="https://github.com/antoinevastel">
        <img src="https://avatars.githubusercontent.com/u/5827148?s=72&u=58bfd63c66ed664f66c1338464c502e88cfef45b&v=4" height="12" />
        <b>antoinevastel</b>
    </a></td><td>-</td><td>Nantes, France</td><td>347</td><td>65</td></tr><tr><td>23</td><td><a href="https://github.com/soyuka">
        <img src="https://avatars.githubusercontent.com/u/1321971?s=72&u=c89bcb8e5eeff581d304dcfc5f26628ddc1760a5&v=4" height="12" />
        <b>soyuka</b>
    </a></td><td>@coopTilleuls</td><td>Nantes, France</td><td>455</td><td>63</td></tr><tr><td>24</td><td><a href="https://github.com/ibelick">
        <img src="https://avatars.githubusercontent.com/u/14288396?s=72&u=73ee6fdd46dbab7bed83493f5f448654ff2d7f06&v=4" height="12" />
        <b>ibelick</b>
    </a></td><td>-</td><td>Paris</td><td>977</td><td>56</td></tr><tr><td>25</td><td><a href="https://github.com/MattKetmo">
        <img src="https://avatars.githubusercontent.com/u/334996?s=72&u=2b06b452771518c77550e819cb6991bbe8866078&v=4" height="12" />
        <b>MattKetmo</b>
    </a></td><td>Kiln</td><td>Paris</td><td>214</td><td>54</td></tr><tr><td>26</td><td><a href="https://github.com/LaurentMazare">
        <img src="https://avatars.githubusercontent.com/u/1041292?s=72&u=4d4c5fe94c63a8eb244d812c6d97511c3640d122&v=4" height="12" />
        <b>LaurentMazare</b>
    </a></td><td>-</td><td>Paris, France</td><td>2.42K</td><td>52</td></tr><tr><td>27</td><td><a href="https://github.com/rouault">
        <img src="https://avatars.githubusercontent.com/u/1192433?s=72&u=aebaf912a08a734156caf25b26ab78d1959f0ed5&v=4" height="12" />
        <b>rouault</b>
    </a></td><td>Spatialys</td><td>France</td><td>753</td><td>43</td></tr><tr><td>28</td><td><a href="https://github.com/mquandalle">
        <img src="https://avatars.githubusercontent.com/u/1730702?s=72&u=ebe99b2bcc14e2e2376df8637ddc47f1b26a5e7b&v=4" height="12" />
        <b>mquandalle</b>
    </a></td><td>-</td><td>Paris, France</td><td>321</td><td>43</td></tr><tr><td>29</td><td><a href="https://github.com/kartben">
        <img src="https://avatars.githubusercontent.com/u/128251?s=72&v=4" height="12" />
        <b>kartben</b>
    </a></td><td>-</td><td>Toulouse, France</td><td>397</td><td>42</td></tr><tr><td>30</td><td><a href="https://github.com/ldez">
        <img src="https://avatars.githubusercontent.com/u/5674651?s=72&u=45f0e097891f1e7e0c45c5224dcce11c867038af&v=4" height="12" />
        <b>ldez</b>
    </a></td><td>-</td><td>France</td><td>620</td><td>29</td></tr><tr><td>31</td><td><a href="https://github.com/fasterthanlime">
        <img src="https://avatars.githubusercontent.com/u/7998310?s=72&u=fd6cb24423c35c26ee1ce7e00f0a3925bc964d1d&v=4" height="12" />
        <b>fasterthanlime</b>
    </a></td><td>@bearcove</td><td>Lyon, France</td><td>4.35K</td><td>27</td></tr><tr><td>32</td><td><a href="https://github.com/simongravelle">
        <img src="https://avatars.githubusercontent.com/u/43388542?s=72&u=16bc101821423023268d74e239583cbcc21b3881&v=4" height="12" />
        <b>simongravelle</b>
    </a></td><td>LIPhy</td><td>Grenoble, France</td><td>563</td><td>22</td></tr><tr><td>33</td><td><a href="https://github.com/wtarreau">
        <img src="https://avatars.githubusercontent.com/u/8141789?s=72&u=e9359a488ad99600a4b9393a83c0f736c29ba401&v=4" height="12" />
        <b>wtarreau</b>
    </a></td><td>HAProxy Technologies</td><td>France</td><td>202</td><td>22</td></tr><tr><td>34</td><td><a href="https://github.com/emersion">
        <img src="https://avatars.githubusercontent.com/u/506932?s=72&u=04995169ac1851b91ca12b47f4862ded1b108765&v=4" height="12" />
        <b>emersion</b>
    </a></td><td>-</td><td>France</td><td>1.91K</td><td>21</td></tr><tr><td>35</td><td><a href="https://github.com/dgageot">
        <img src="https://avatars.githubusercontent.com/u/153495?s=72&u=7a06a6cbf585d2f329484b4f0b900bf48eee9b29&v=4" height="12" />
        <b>dgageot</b>
    </a></td><td>Docker</td><td>Paris, France</td><td>739</td><td>21</td></tr><tr><td>36</td><td><a href="https://github.com/cfrBernard">
        <img src="https://avatars.githubusercontent.com/u/153459846?s=72&u=65388d43a6fe3542df013dbba9875071d8762e71&v=4" height="12" />
        <b>cfrBernard</b>
    </a></td><td>-</td><td>France </td><td>4.11K</td><td>20</td></tr><tr><td>37</td><td><a href="https://github.com/CorentinTh">
        <img src="https://avatars.githubusercontent.com/u/25065347?s=72&u=ddfc8b7812ebc8cbd9245f499e4703bf3165ec31&v=4" height="12" />
        <b>CorentinTh</b>
    </a></td><td>@GeorgesTech </td><td>France - Lyon</td><td>867</td><td>20</td></tr><tr><td>38</td><td><a href="https://github.com/gsmet">
        <img src="https://avatars.githubusercontent.com/u/1279749?s=72&u=e462a6165ea17647aed446ca31fae604338ae18c&v=4" height="12" />
        <b>gsmet</b>
    </a></td><td>Red Hat</td><td>Lyon, France</td><td>346</td><td>20</td></tr><tr><td>39</td><td><a href="https://github.com/ggrossetie">
        <img src="https://avatars.githubusercontent.com/u/333276?s=72&u=9087930b05d462a706f06a9ce6bf0c8289d8069d&v=4" height="12" />
        <b>ggrossetie</b>
    </a></td><td>Yuzu tech</td><td>Lyon</td><td>233</td><td>20</td></tr><tr><td>40</td><td><a href="https://github.com/zoriya">
        <img src="https://avatars.githubusercontent.com/u/32224410?s=72&u=966b19ce0af0d82661baaea34396db0526f52f9d&v=4" height="12" />
        <b>zoriya</b>
    </a></td><td>-</td><td>France</td><td>249</td><td>19</td></tr><tr><td>41</td><td><a href="https://github.com/marvinroger">
        <img src="https://avatars.githubusercontent.com/u/990773?s=72&u=1eadb64e486234988a873bc4bc1f7860618573db&v=4" height="12" />
        <b>marvinroger</b>
    </a></td><td>@orus-tech </td><td>Paris, France</td><td>240</td><td>19</td></tr><tr><td>42</td><td><a href="https://github.com/sylvestre">
        <img src="https://avatars.githubusercontent.com/u/733326?s=72&u=77d7752593d6fa035b33e63386cc15479744ab24&v=4" height="12" />
        <b>sylvestre</b>
    </a></td><td>Mozilla</td><td>France</td><td>499</td><td>18</td></tr><tr><td>43</td><td><a href="https://github.com/maziyarpanahi">
        <img src="https://avatars.githubusercontent.com/u/5762953?s=72&u=17070601b919833c70fc8cb61381822fdb987639&v=4" height="12" />
        <b>maziyarpanahi</b>
    </a></td><td>@ISCPIF @JohnSnowLabs</td><td>Paris, France</td><td>438</td><td>18</td></tr><tr><td>44</td><td><a href="https://github.com/Phyronnaz">
        <img src="https://avatars.githubusercontent.com/u/16806877?s=72&u=9f22d47f8682df3061081987287e90d40f553cc8&v=4" height="12" />
        <b>Phyronnaz</b>
    </a></td><td>-</td><td>France</td><td>301</td><td>17</td></tr><tr><td>45</td><td><a href="https://github.com/ShutdownRepo">
        <img src="https://avatars.githubusercontent.com/u/40902872?s=72&u=a83152b1ababd07d2295e28b9cf0adb69049f42f&v=4" height="12" />
        <b>ShutdownRepo</b>
    </a></td><td>-</td><td>France</td><td>992</td><td>15</td></tr><tr><td>46</td><td><a href="https://github.com/bzg">
        <img src="https://avatars.githubusercontent.com/u/63500?s=72&u=5388581f4d8481e5c9ea311d4fb12eedee21647f&v=4" height="12" />
        <b>bzg</b>
    </a></td><td>@codegouvfr</td><td>Paris</td><td>808</td><td>15</td></tr><tr><td>47</td><td><a href="https://github.com/deepnight">
        <img src="https://avatars.githubusercontent.com/u/1671695?s=72&u=36316a70a49497f680e2efef9e8b48623178cdfb&v=4" height="12" />
        <b>deepnight</b>
    </a></td><td>Deepnight Games</td><td>Bordeaux, France</td><td>1.49K</td><td>14</td></tr><tr><td>48</td><td><a href="https://github.com/noirbizarre">
        <img src="https://avatars.githubusercontent.com/u/15725?s=72&u=24aa7a44ae7c957043e6a39675c3546d2f925a46&v=4" height="12" />
        <b>noirbizarre</b>
    </a></td><td>@apihackers @LedgerHQ </td><td>Paris, France</td><td>256</td><td>14</td></tr><tr><td>49</td><td><a href="https://github.com/pulgamecanica">
        <img src="https://avatars.githubusercontent.com/u/28810331?s=72&u=5f46d85747b93e8d9d37f8c5682e4af4026fcc22&v=4" height="12" />
        <b>pulgamecanica</b>
    </a></td><td>Pulgamecanica</td><td>Paris / Lisbon</td><td>251</td><td>14</td></tr><tr><td>50</td><td><a href="https://github.com/GromNaN">
        <img src="https://avatars.githubusercontent.com/u/400034?s=72&u=b92f9fbc757f5d361de7059b8e69a0eaac1164b5&v=4" height="12" />
        <b>GromNaN</b>
    </a></td><td>MongoDB</td><td>Rouen, France</td><td>232</td><td>14</td></tr><tr><td>51</td><td><a href="https://github.com/HiDeoo">
        <img src="https://avatars.githubusercontent.com/u/494699?s=72&u=e7468006f55deb36e1f3757f6691e0180b9257ca&v=4" height="12" />
        <b>HiDeoo</b>
    </a></td><td>-</td><td>France</td><td>224</td><td>14</td></tr><tr><td>52</td><td><a href="https://github.com/abougouffa">
        <img src="https://avatars.githubusercontent.com/u/3716399?s=72&u=ad7a1e120fef1c19d7b7864ac183798de2711c59&v=4" height="12" />
        <b>abougouffa</b>
    </a></td><td>Astek Research & Innovation | Sagemcom</td><td>Paris, France</td><td>218</td><td>13</td></tr><tr><td>53</td><td><a href="https://github.com/xoofx">
        <img src="https://avatars.githubusercontent.com/u/715038?s=72&u=944abb5708b2c03b6c13e3284dd76bb327791456&v=4" height="12" />
        <b>xoofx</b>
    </a></td><td>-</td><td>Grenoble - France</td><td>1.48K</td><td>12</td></tr><tr><td>54</td><td><a href="https://github.com/Charles-Chrismann">
        <img src="https://avatars.githubusercontent.com/u/78157563?s=72&u=fc17705222fa92912b9b8ad556101a0608308911&v=4" height="12" />
        <b>Charles-Chrismann</b>
    </a></td><td>Institut de l'Internet et du Multimédia (IIM)</td><td>Paris, La Défense</td><td>15.12K</td><td>11</td></tr><tr><td>55</td><td><a href="https://github.com/cor3ntin">
        <img src="https://avatars.githubusercontent.com/u/1409019?s=72&v=4" height="12" />
        <b>cor3ntin</b>
    </a></td><td>-</td><td>Bordeaux, France</td><td>359</td><td>11</td></tr><tr><td>56</td><td><a href="https://github.com/avidale">
        <img src="https://avatars.githubusercontent.com/u/8642136?s=72&u=861e910a7fb04c5e7dde11f8bd8a119fb602afdd&v=4" height="12" />
        <b>avidale</b>
    </a></td><td>-</td><td>Paris</td><td>265</td><td>11</td></tr><tr><td>57</td><td><a href="https://github.com/azerpas">
        <img src="https://avatars.githubusercontent.com/u/19282069?s=72&u=23fefaa28d073e8c7fc44a5a8737145773e38c74&v=4" height="12" />
        <b>azerpas</b>
    </a></td><td>@DataDome</td><td>Paris</td><td>216</td><td>11</td></tr><tr><td>58</td><td><a href="https://github.com/eko">
        <img src="https://avatars.githubusercontent.com/u/103900?s=72&u=d185654f4e625741e01fc42c4a625be4756344c0&v=4" height="12" />
        <b>eko</b>
    </a></td><td>Freelance</td><td>Annecy, France</td><td>435</td><td>10</td></tr><tr><td>59</td><td><a href="https://github.com/teolemon">
        <img src="https://avatars.githubusercontent.com/u/1689815?s=72&u=6301f2326ab5595912a1fa33b8989823bba40071&v=4" height="12" />
        <b>teolemon</b>
    </a></td><td>@openfoodfacts </td><td>Paris</td><td>215</td><td>10</td></tr><tr><td>60</td><td><a href="https://github.com/jedisct1">
        <img src="https://avatars.githubusercontent.com/u/124872?s=72&v=4" height="12" />
        <b>jedisct1</b>
    </a></td><td>-</td><td>Antibes, France</td><td>3.92K</td><td>9</td></tr><tr><td>61</td><td><a href="https://github.com/vincentbernat">
        <img src="https://avatars.githubusercontent.com/u/631446?s=72&u=4fa1b32955881f764b4ca8556b8ba62db83f55d2&v=4" height="12" />
        <b>vincentbernat</b>
    </a></td><td>Free</td><td>Paris, France</td><td>1.15K</td><td>9</td></tr><tr><td>62</td><td><a href="https://github.com/oliviertassinari">
        <img src="https://avatars.githubusercontent.com/u/3165635?s=72&u=15a7ca3a64c1839a55c83a987d6f906c817d9e85&v=4" height="12" />
        <b>oliviertassinari</b>
    </a></td><td>MUI</td><td>Paris, France</td><td>3.19K</td><td>8</td></tr><tr><td>63</td><td><a href="https://github.com/nadimkobeissi">
        <img src="https://avatars.githubusercontent.com/u/9953?s=72&u=bc47cbab7ce4b508a5ff9b32ac97396e77503687&v=4" height="12" />
        <b>nadimkobeissi</b>
    </a></td><td>@symbolicsoft, @cure53berlin</td><td>Paris, France</td><td>1.26K</td><td>8</td></tr><tr><td>64</td><td><a href="https://github.com/vdemeester">
        <img src="https://avatars.githubusercontent.com/u/6508?s=72&u=5363ca7ac268ab9848e955d0a3ca68cf0156d00c&v=4" height="12" />
        <b>vdemeester</b>
    </a></td><td>@RedHatOfficial</td><td>Paris, France</td><td>688</td><td>8</td></tr><tr><td>65</td><td><a href="https://github.com/cveneziani">
        <img src="https://avatars.githubusercontent.com/u/50518?s=72&u=c7b2a45bb87459c343007be7019dcac9eff24d2e&v=4" height="12" />
        <b>cveneziani</b>
    </a></td><td>Cecilitse</td><td>Nantes, France</td><td>397</td><td>8</td></tr><tr><td>66</td><td><a href="https://github.com/k33g">
        <img src="https://avatars.githubusercontent.com/u/491848?s=72&u=332138d1fe94fc2ab4953428187a92663e14eeac&v=4" height="12" />
        <b>k33g</b>
    </a></td><td>-</td><td>Lyon (France)</td><td>376</td><td>8</td></tr><tr><td>67</td><td><a href="https://github.com/veloce">
        <img src="https://avatars.githubusercontent.com/u/423393?s=72&v=4" height="12" />
        <b>veloce</b>
    </a></td><td>lichess.org</td><td>France</td><td>362</td><td>8</td></tr><tr><td>68</td><td><a href="https://github.com/JeanMeche">
        <img src="https://avatars.githubusercontent.com/u/1300985?s=72&u=ba0f3dbc4cae44232ebf50bdd845bc98750fa42e&v=4" height="12" />
        <b>JeanMeche</b>
    </a></td><td>👀</td><td>Grenoble - France</td><td>355</td><td>8</td></tr><tr><td>69</td><td><a href="https://github.com/benjamincrozat">
        <img src="https://avatars.githubusercontent.com/u/3613731?s=72&v=4" height="12" />
        <b>benjamincrozat</b>
    </a></td><td>-</td><td>France</td><td>335</td><td>8</td></tr><tr><td>70</td><td><a href="https://github.com/DamienCassou">
        <img src="https://avatars.githubusercontent.com/u/217543?s=72&v=4" height="12" />
        <b>DamienCassou</b>
    </a></td><td>finsit @ Wolters Kluwer</td><td>Brest, France</td><td>276</td><td>8</td></tr><tr><td>71</td><td><a href="https://github.com/ParisNeo">
        <img src="https://avatars.githubusercontent.com/u/827993?s=72&u=17ad3b01b402b36d9424d6b4437561304616eb18&v=4" height="12" />
        <b>ParisNeo</b>
    </a></td><td>CEA</td><td>France</td><td>260</td><td>8</td></tr><tr><td>72</td><td><a href="https://github.com/ysbaddaden">
        <img src="https://avatars.githubusercontent.com/u/47380?s=72&v=4" height="12" />
        <b>ysbaddaden</b>
    </a></td><td>Ruby, JavaScript, Crystal</td><td>Nogent sur Oise, France</td><td>257</td><td>8</td></tr><tr><td>73</td><td><a href="https://github.com/tchiotludo">
        <img src="https://avatars.githubusercontent.com/u/2064609?s=72&u=e0b81e6999b4fb51c0d7383ee10090d2d6332939&v=4" height="12" />
        <b>tchiotludo</b>
    </a></td><td>@kestra-io</td><td>Lille, France</td><td>253</td><td>8</td></tr><tr><td>74</td><td><a href="https://github.com/axeldelafosse">
        <img src="https://avatars.githubusercontent.com/u/10477267?s=72&u=0322ffa7017942defa4c6de7cdcd4d42b7d364e5&v=4" height="12" />
        <b>axeldelafosse</b>
    </a></td><td>-</td><td>Paris</td><td>209</td><td>8</td></tr><tr><td>75</td><td><a href="https://github.com/beaufortfrancois">
        <img src="https://avatars.githubusercontent.com/u/634478?s=72&v=4" height="12" />
        <b>beaufortfrancois</b>
    </a></td><td>@GoogleChrome</td><td>France</td><td>1.58K</td><td>7</td></tr><tr><td>76</td><td><a href="https://github.com/GuillaumeGomez">
        <img src="https://avatars.githubusercontent.com/u/3050060?s=72&u=6ca85464b07c5464a052250a4fc3e3f9c03c97ed&v=4" height="12" />
        <b>GuillaumeGomez</b>
    </a></td><td>@huawei</td><td>Paris</td><td>1.48K</td><td>7</td></tr><tr><td>77</td><td><a href="https://github.com/Calinou">
        <img src="https://avatars.githubusercontent.com/u/180032?s=72&v=4" height="12" />
        <b>Calinou</b>
    </a></td><td>@godotengine</td><td>Troyes, France</td><td>1.41K</td><td>7</td></tr><tr><td>78</td><td><a href="https://github.com/vstinner">
        <img src="https://avatars.githubusercontent.com/u/194129?s=72&u=cf52678f5f02f96d9c5bc1b5079d4e6c2e441af4&v=4" height="12" />
        <b>vstinner</b>
    </a></td><td>@RedHatOfficial</td><td>France</td><td>1.38K</td><td>7</td></tr><tr><td>79</td><td><a href="https://github.com/agramfort">
        <img src="https://avatars.githubusercontent.com/u/161052?s=72&u=28620e0e14597ad721a7505cf486aaf5687aea66&v=4" height="12" />
        <b>agramfort</b>
    </a></td><td>Meta</td><td>Paris, France</td><td>1.35K</td><td>7</td></tr><tr><td>80</td><td><a href="https://github.com/bblanchon">
        <img src="https://avatars.githubusercontent.com/u/5462433?s=72&u=bec379310fcd0063e7555115cc65357c396e0f9b&v=4" height="12" />
        <b>bblanchon</b>
    </a></td><td>-</td><td>France</td><td>585</td><td>7</td></tr><tr><td>81</td><td><a href="https://github.com/chalasr">
        <img src="https://avatars.githubusercontent.com/u/7502063?s=72&u=56b8ba0944e917bd324d87ec7c2074665a0e699d&v=4" height="12" />
        <b>chalasr</b>
    </a></td><td>@bakslashHQ</td><td>Lyon, France</td><td>572</td><td>7</td></tr><tr><td>82</td><td><a href="https://github.com/KtorZ">
        <img src="https://avatars.githubusercontent.com/u/5680256?s=72&u=020eb2bc68211d32c1691695b6ab22ad55478501&v=4" height="12" />
        <b>KtorZ</b>
    </a></td><td>@cardano-foundation</td><td>Toulouse</td><td>460</td><td>7</td></tr><tr><td>83</td><td><a href="https://github.com/Stormix">
        <img src="https://avatars.githubusercontent.com/u/18377687?s=72&u=84bad792fc870bdc31b2a05a06d2c886dd7e42f9&v=4" height="12" />
        <b>Stormix</b>
    </a></td><td>@Stormix-co </td><td>Marseille, France</td><td>350</td><td>7</td></tr><tr><td>84</td><td><a href="https://github.com/astahmer">
        <img src="https://avatars.githubusercontent.com/u/47224540?s=72&u=3bc3ac9c3c1f64b68704b973c30aae89ad99cc66&v=4" height="12" />
        <b>astahmer</b>
    </a></td><td>-</td><td>Montpellier</td><td>312</td><td>7</td></tr><tr><td>85</td><td><a href="https://github.com/jfalcou">
        <img src="https://avatars.githubusercontent.com/u/285977?s=72&u=aa9be7c63023593e6e3fb7765390e789f31b7509&v=4" height="12" />
        <b>jfalcou</b>
    </a></td><td>University Paris Sud XI, CNRS</td><td>Orsay, France</td><td>308</td><td>7</td></tr><tr><td>86</td><td><a href="https://github.com/rubenfiszel">
        <img src="https://avatars.githubusercontent.com/u/275584?s=72&u=eb0fe584ca9e8636a35ab822b93cc4a1ad10bf42&v=4" height="12" />
        <b>rubenfiszel</b>
    </a></td><td>Windmill</td><td>Paris, France</td><td>303</td><td>7</td></tr><tr><td>87</td><td><a href="https://github.com/sdpython">
        <img src="https://avatars.githubusercontent.com/u/4695832?s=72&u=9a0581b7da03088ea4ad3a37c5b680a64d864f33&v=4" height="12" />
        <b>sdpython</b>
    </a></td><td>@ENSAE</td><td>paris</td><td>299</td><td>7</td></tr><tr><td>88</td><td><a href="https://github.com/ArnaudBarre">
        <img src="https://avatars.githubusercontent.com/u/14235743?s=72&u=1e3fb343c89f3f3ab51080295026475541c390f8&v=4" height="12" />
        <b>ArnaudBarre</b>
    </a></td><td>Carbometrix</td><td>Paris</td><td>296</td><td>7</td></tr><tr><td>89</td><td><a href="https://github.com/tcapelle">
        <img src="https://avatars.githubusercontent.com/u/18441985?s=72&u=e10addd1db7a6280bc8f73d099df8b061ac121ef&v=4" height="12" />
        <b>tcapelle</b>
    </a></td><td>W&B</td><td>Chambery, France</td><td>283</td><td>7</td></tr><tr><td>90</td><td><a href="https://github.com/elbywan">
        <img src="https://avatars.githubusercontent.com/u/3428394?s=72&u=88d0088a68dd5e71c49063a5f97fe04d34d1e6ae&v=4" height="12" />
        <b>elbywan</b>
    </a></td><td>Datadog</td><td>Paris, France</td><td>273</td><td>7</td></tr><tr><td>91</td><td><a href="https://github.com/alexkirsz">
        <img src="https://avatars.githubusercontent.com/u/1621758?s=72&u=1920fad1c4b2656b527fea8cdfdfbb7d5f51753f&v=4" height="12" />
        <b>alexkirsz</b>
    </a></td><td>-</td><td>Paris</td><td>268</td><td>7</td></tr><tr><td>92</td><td><a href="https://github.com/joeybronner">
        <img src="https://avatars.githubusercontent.com/u/5888510?s=72&u=15e39a4e9954e51c531d3d636749bd80c6275b8c&v=4" height="12" />
        <b>joeybronner</b>
    </a></td><td>-</td><td>Paris</td><td>261</td><td>7</td></tr><tr><td>93</td><td><a href="https://github.com/frgfm">
        <img src="https://avatars.githubusercontent.com/u/26927750?s=72&u=dfbafc3534a42845875b527483a134ec48bfe6f9&v=4" height="12" />
        <b>frgfm</b>
    </a></td><td>@quack-ai @pyronear</td><td>Paris, FR</td><td>218</td><td>7</td></tr><tr><td>94</td><td><a href="https://github.com/tdimnet">
        <img src="https://avatars.githubusercontent.com/u/9935925?s=72&u=90d6020b1e99960d5cc4ad0517bf6e6e96907d6f&v=4" height="12" />
        <b>tdimnet</b>
    </a></td><td>@nx-academy, @EdenSchoolFrance</td><td>Paris, France</td><td>214</td><td>7</td></tr><tr><td>95</td><td><a href="https://github.com/rm3l">
        <img src="https://avatars.githubusercontent.com/u/593208?s=72&v=4" height="12" />
        <b>rm3l</b>
    </a></td><td>Red Hat</td><td>Lyon, France</td><td>206</td><td>7</td></tr><tr><td>96</td><td><a href="https://github.com/rossant">
        <img src="https://avatars.githubusercontent.com/u/1942359?s=72&v=4" height="12" />
        <b>rossant</b>
    </a></td><td>@int-brain-lab @cortex-lab </td><td>Paris</td><td>1.02K</td><td>6</td></tr><tr><td>97</td><td><a href="https://github.com/Ullaakut">
        <img src="https://avatars.githubusercontent.com/u/6976628?s=72&u=c5d65338794a0f1d49a561583d9c8114533520e3&v=4" height="12" />
        <b>Ullaakut</b>
    </a></td><td>GLAULABS S.A.R.L</td><td>Rennes, France</td><td>574</td><td>6</td></tr><tr><td>98</td><td><a href="https://github.com/spolu">
        <img src="https://avatars.githubusercontent.com/u/15067?s=72&u=6297f8db333ba5fbf2be0ee9d796a09b1419115f&v=4" height="12" />
        <b>spolu</b>
    </a></td><td>Dust</td><td>Paris</td><td>512</td><td>6</td></tr><tr><td>99</td><td><a href="https://github.com/dmathieu">
        <img src="https://avatars.githubusercontent.com/u/9347?s=72&u=ade95e23ea06fc13514de6a7bb9bf7b5b90d37a5&v=4" height="12" />
        <b>dmathieu</b>
    </a></td><td>@elastic</td><td>France</td><td>319</td><td>6</td></tr><tr><td>100</td><td><a href="https://github.com/arthaud">
        <img src="https://avatars.githubusercontent.com/u/2151557?s=72&u=20726f284e2b9874d52eddf9c2c447a0ac0c5ece&v=4" height="12" />
        <b>arthaud</b>
    </a></td><td>@facebook</td><td>Paris, France</td><td>286</td><td>6</td></tr><tr><td>101</td><td><a href="https://github.com/Fantomas42">
        <img src="https://avatars.githubusercontent.com/u/100376?s=72&v=4" height="12" />
        <b>Fantomas42</b>
    </a></td><td>-</td><td>Paris, France</td><td>231</td><td>6</td></tr><tr><td>102</td><td><a href="https://github.com/thierryvolpiatto">
        <img src="https://avatars.githubusercontent.com/u/1533939?s=72&v=4" height="12" />
        <b>thierryvolpiatto</b>
    </a></td><td>@emacs-helm </td><td>France</td><td>222</td><td>6</td></tr><tr><td>103</td><td><a href="https://github.com/Akryum">
        <img src="https://avatars.githubusercontent.com/u/2798204?s=72&u=d45556d7e920c0f57552d1dc1250a7cdb807eddb&v=4" height="12" />
        <b>Akryum</b>
    </a></td><td>-</td><td>France</td><td>5.16K</td><td>5</td></tr><tr><td>104</td><td><a href="https://github.com/glample">
        <img src="https://avatars.githubusercontent.com/u/8885556?s=72&v=4" height="12" />
        <b>glample</b>
    </a></td><td>Facebook AI Research</td><td>Paris</td><td>1.06K</td><td>5</td></tr><tr><td>105</td><td><a href="https://github.com/FGRibreau">
        <img src="https://avatars.githubusercontent.com/u/138050?s=72&u=09ca579f8ce5f86026aa0d8858432fe77719eee7&v=4" height="12" />
        <b>FGRibreau</b>
    </a></td><td>@nobullshitbooks @netwo-io @hook0 @image-charts  @killbugtoday @mailpopin  / Sold @Redsmin @bringr</td><td>France</td><td>774</td><td>5</td></tr><tr><td>106</td><td><a href="https://github.com/Guilouz">
        <img src="https://avatars.githubusercontent.com/u/12702322?s=72&u=f6da23f5fd8d72ed72413e5bc8b9b2c170670783&v=4" height="12" />
        <b>Guilouz</b>
    </a></td><td>-</td><td>France</td><td>531</td><td>5</td></tr><tr><td>107</td><td><a href="https://github.com/Kehrlann">
        <img src="https://avatars.githubusercontent.com/u/5676779?s=72&u=98595e18b5106e4526c48d984983ea525890f588&v=4" height="12" />
        <b>Kehrlann</b>
    </a></td><td>@broadcom </td><td>Paris, France</td><td>493</td><td>5</td></tr><tr><td>108</td><td><a href="https://github.com/LambdAurora">
        <img src="https://avatars.githubusercontent.com/u/12587332?s=72&u=5bc537e2ad331c812f09328154b69cee58adbe85&v=4" height="12" />
        <b>LambdAurora</b>
    </a></td><td>-</td><td>France</td><td>393</td><td>5</td></tr><tr><td>109</td><td><a href="https://github.com/sebanc">
        <img src="https://avatars.githubusercontent.com/u/22224731?s=72&v=4" height="12" />
        <b>sebanc</b>
    </a></td><td>-</td><td>Paris, France</td><td>351</td><td>5</td></tr><tr><td>110</td><td><a href="https://github.com/SirLynix">
        <img src="https://avatars.githubusercontent.com/u/3002461?s=72&u=cd05ef11e7f6a4e0d2800639896c37fa6dd49dc9&v=4" height="12" />
        <b>SirLynix</b>
    </a></td><td>Gameloft Paris</td><td>France</td><td>311</td><td>5</td></tr><tr><td>111</td><td><a href="https://github.com/RodZill4">
        <img src="https://avatars.githubusercontent.com/u/6957908?s=72&u=c19aecbe4d441eb008a4485fdcddb661ce659951&v=4" height="12" />
        <b>RodZill4</b>
    </a></td><td>-</td><td>France</td><td>259</td><td>5</td></tr><tr><td>112</td><td><a href="https://github.com/asbiin">
        <img src="https://avatars.githubusercontent.com/u/25419741?s=72&u=736357ef23ba1f333a7c72f53971fd94267fd131&v=4" height="12" />
        <b>asbiin</b>
    </a></td><td>@monicahq </td><td>Montreuil, France</td><td>210</td><td>5</td></tr><tr><td>113</td><td><a href="https://github.com/Grafikart">
        <img src="https://avatars.githubusercontent.com/u/395137?s=72&u=490adebe004adb66140ca0d5f14e4f2e1a986f9d&v=4" height="12" />
        <b>Grafikart</b>
    </a></td><td>-</td><td>Montpellier</td><td>6.08K</td><td>4</td></tr><tr><td>114</td><td><a href="https://github.com/NathanLovato">
        <img src="https://avatars.githubusercontent.com/u/12694995?s=72&u=e4abd5fa8b74c82c57955f490da199a1ac7b9d8c&v=4" height="12" />
        <b>NathanLovato</b>
    </a></td><td>GDQuest</td><td>France</td><td>859</td><td>4</td></tr><tr><td>115</td><td><a href="https://github.com/Yomguithereal">
        <img src="https://avatars.githubusercontent.com/u/2571951?s=72&v=4" height="12" />
        <b>Yomguithereal</b>
    </a></td><td>médialab - Sciences Po</td><td>France</td><td>819</td><td>4</td></tr><tr><td>116</td><td><a href="https://github.com/patrickheng">
        <img src="https://avatars.githubusercontent.com/u/9051314?s=72&u=5c38c6cf3e902645bcb37c7ca3744b89de422156&v=4" height="12" />
        <b>patrickheng</b>
    </a></td><td>Freelance</td><td>Paris</td><td>790</td><td>4</td></tr><tr><td>117</td><td><a href="https://github.com/oliviergimenez">
        <img src="https://avatars.githubusercontent.com/u/12683635?s=72&u=c5a60d598ab4e98660dc7589de4609414a6af089&v=4" height="12" />
        <b>oliviergimenez</b>
    </a></td><td>CNRS</td><td>Montpellier</td><td>495</td><td>4</td></tr><tr><td>118</td><td><a href="https://github.com/VonC">
        <img src="https://avatars.githubusercontent.com/u/79478?s=72&v=4" height="12" />
        <b>VonC</b>
    </a></td><td>-</td><td>France</td><td>458</td><td>4</td></tr><tr><td>119</td><td><a href="https://github.com/paraboul">
        <img src="https://avatars.githubusercontent.com/u/80341?s=72&u=eea124424525852e2c9add8afa3b25fb889671f3&v=4" height="12" />
        <b>paraboul</b>
    </a></td><td>-</td><td>France</td><td>349</td><td>4</td></tr><tr><td>120</td><td><a href="https://github.com/HungryProton">
        <img src="https://avatars.githubusercontent.com/u/52043844?s=72&u=9a018a7316016546d7208a0d6289200e17a283bf&v=4" height="12" />
        <b>HungryProton</b>
    </a></td><td>-</td><td>France</td><td>347</td><td>4</td></tr><tr><td>121</td><td><a href="https://github.com/davidbrochart">
        <img src="https://avatars.githubusercontent.com/u/4711805?s=72&u=d39696d995a9e02ec3613ffb2f62b20b14f92f26&v=4" height="12" />
        <b>davidbrochart</b>
    </a></td><td>@QuantStack</td><td>France</td><td>336</td><td>4</td></tr><tr><td>122</td><td><a href="https://github.com/nvuillam">
        <img src="https://avatars.githubusercontent.com/u/17500430?s=72&u=24ff06a935acf56fe06678874e2b297debb66fac&v=4" height="12" />
        <b>nvuillam</b>
    </a></td><td>Cloudity & OX Security</td><td>Paris, France</td><td>316</td><td>4</td></tr><tr><td>123</td><td><a href="https://github.com/gni">
        <img src="https://avatars.githubusercontent.com/u/42606?s=72&u=8ddf7bc0054a90aeca93cc6a35377a3e72ef9f74&v=4" height="12" />
        <b>gni</b>
    </a></td><td>-</td><td>France</td><td>2.25K</td><td>3</td></tr><tr><td>124</td><td><a href="https://github.com/noraj">
        <img src="https://avatars.githubusercontent.com/u/16578570?s=72&u=a95cbd7b496e688d77205c934c8ef9ebeb273a73&v=4" height="12" />
        <b>noraj</b>
    </a></td><td>Rawsec</td><td>FRANCE</td><td>1.96K</td><td>3</td></tr><tr><td>125</td><td><a href="https://github.com/iMokhles">
        <img src="https://avatars.githubusercontent.com/u/1247248?s=72&u=e55b628aeb081c16500dbd05783a13eb754cd3f6&v=4" height="12" />
        <b>iMokhles</b>
    </a></td><td>-</td><td>France</td><td>1.08K</td><td>3</td></tr><tr><td>126</td><td><a href="https://github.com/maelle">
        <img src="https://avatars.githubusercontent.com/u/8360597?s=72&u=824f03caa87c92420352e3dd9a05470320a67412&v=4" height="12" />
        <b>maelle</b>
    </a></td><td>@ropensci</td><td>Nancy, France</td><td>1.04K</td><td>3</td></tr><tr><td>127</td><td><a href="https://github.com/ptitSeb">
        <img src="https://avatars.githubusercontent.com/u/3250792?s=72&u=f206420ae21c0bbf92fea09871f11adea98adb39&v=4" height="12" />
        <b>ptitSeb</b>
    </a></td><td>-</td><td>France</td><td>945</td><td>3</td></tr><tr><td>128</td><td><a href="https://github.com/scraly">
        <img src="https://avatars.githubusercontent.com/u/2543381?s=72&u=d500ca96ff8a2a3f9b7bb300c71ed7e57449b072&v=4" height="12" />
        <b>scraly</b>
    </a></td><td>ovh</td><td>Toulouse</td><td>780</td><td>3</td></tr><tr><td>129</td><td><a href="https://github.com/nabla-c0d3">
        <img src="https://avatars.githubusercontent.com/u/1915165?s=72&u=e583ff7b079ed660d12b304503d0b0cfaf82856b&v=4" height="12" />
        <b>nabla-c0d3</b>
    </a></td><td>-</td><td>Paris & San Francisco</td><td>690</td><td>3</td></tr><tr><td>130</td><td><a href="https://github.com/lovasoa">
        <img src="https://avatars.githubusercontent.com/u/552629?s=72&u=3b5257f8d20ea6c313ed91ba80c024c3f00cf5dc&v=4" height="12" />
        <b>lovasoa</b>
    </a></td><td>@auto-grid @enexflow </td><td>Paris, France</td><td>595</td><td>3</td></tr><tr><td>131</td><td><a href="https://github.com/TerrorJack">
        <img src="https://avatars.githubusercontent.com/u/3889585?s=72&u=9f17aa6e8c5e916757801a1852b271f4a307c722&v=4" height="12" />
        <b>TerrorJack</b>
    </a></td><td>@tweag</td><td>Paris</td><td>458</td><td>3</td></tr><tr><td>132</td><td><a href="https://github.com/JCluzet">
        <img src="https://avatars.githubusercontent.com/u/55356071?s=72&u=1e399003c32fba533c32f1b912b9ca56756e3887&v=4" height="12" />
        <b>JCluzet</b>
    </a></td><td>42Paris</td><td>Paris</td><td>450</td><td>3</td></tr><tr><td>133</td><td><a href="https://github.com/martinbonnin">
        <img src="https://avatars.githubusercontent.com/u/3974977?s=72&u=309f78046395d0c58ca6afbdb5ddf82c939ae66c&v=4" height="12" />
        <b>martinbonnin</b>
    </a></td><td>Apollo GraphQL</td><td>Paris, France</td><td>417</td><td>3</td></tr><tr><td>134</td><td><a href="https://github.com/Julien-R44">
        <img src="https://avatars.githubusercontent.com/u/8337858?s=72&u=51dca49c82393b452f05ee4aa4129a659ef47e34&v=4" height="12" />
        <b>Julien-R44</b>
    </a></td><td>Freelancing </td><td>France</td><td>406</td><td>3</td></tr><tr><td>135</td><td><a href="https://github.com/Tk-Glitch">
        <img src="https://avatars.githubusercontent.com/u/741977?s=72&u=71e298c312c17a9a07c1c439e25199ab89e77045&v=4" height="12" />
        <b>Tk-Glitch</b>
    </a></td><td>-</td><td>France</td><td>365</td><td>3</td></tr><tr><td>136</td><td><a href="https://github.com/tpetazzoni">
        <img src="https://avatars.githubusercontent.com/u/1089203?s=72&v=4" height="12" />
        <b>tpetazzoni</b>
    </a></td><td>Bootlin @bootlin </td><td>Toulouse, France</td><td>346</td><td>3</td></tr><tr><td>137</td><td><a href="https://github.com/kelu124">
        <img src="https://avatars.githubusercontent.com/u/2452634?s=72&u=55b50a96ed1143c6cf84704446464eb7c069daf5&v=4" height="12" />
        <b>kelu124</b>
    </a></td><td>-</td><td>Paris</td><td>338</td><td>3</td></tr><tr><td>138</td><td><a href="https://github.com/alexandregv">
        <img src="https://avatars.githubusercontent.com/u/10067226?s=72&u=b87e0627a85990be28fbaae1373ce69b1595b5b2&v=4" height="12" />
        <b>alexandregv</b>
    </a></td><td>@42Paris</td><td>Paris, France</td><td>333</td><td>3</td></tr><tr><td>139</td><td><a href="https://github.com/bfontaine">
        <img src="https://avatars.githubusercontent.com/u/1334295?s=72&u=30d05c3a40d258edf7cd28dfd1694a34d9349dc4&v=4" height="12" />
        <b>bfontaine</b>
    </a></td><td>@bixoto</td><td>Paris, France</td><td>331</td><td>3</td></tr><tr><td>140</td><td><a href="https://github.com/toufik-airane">
        <img src="https://avatars.githubusercontent.com/u/5610269?s=72&u=1b72057199197e4edb29ee4928078e1633ea0efa&v=4" height="12" />
        <b>toufik-airane</b>
    </a></td><td>SecurityforTech</td><td>Paris, France</td><td>331</td><td>3</td></tr><tr><td>141</td><td><a href="https://github.com/NiLuJe">
        <img src="https://avatars.githubusercontent.com/u/111974?s=72&v=4" height="12" />
        <b>NiLuJe</b>
    </a></td><td>-</td><td>Paris, France</td><td>321</td><td>3</td></tr><tr><td>142</td><td><a href="https://github.com/ngxson">
        <img src="https://avatars.githubusercontent.com/u/7702203?s=72&u=c998d920dbca6506c9dda1df1b28adae9842720e&v=4" height="12" />
        <b>ngxson</b>
    </a></td><td>@huggingface </td><td>France</td><td>306</td><td>3</td></tr><tr><td>143</td><td><a href="https://github.com/louisabraham">
        <img src="https://avatars.githubusercontent.com/u/13174805?s=72&v=4" height="12" />
        <b>louisabraham</b>
    </a></td><td>-</td><td>Paris</td><td>270</td><td>3</td></tr><tr><td>144</td><td><a href="https://github.com/roblabla">
        <img src="https://avatars.githubusercontent.com/u/1069318?s=72&u=f270fc1cecf2076137002880491b4e25787de0e6&v=4" height="12" />
        <b>roblabla</b>
    </a></td><td>@Seed-Up </td><td>France, FR</td><td>244</td><td>3</td></tr><tr><td>145</td><td><a href="https://github.com/Kocal">
        <img src="https://avatars.githubusercontent.com/u/2103975?s=72&u=a736d3293c082d2fd28065a359bd578ebc06a7af&v=4" height="12" />
        <b>Kocal</b>
    </a></td><td>-</td><td>Lyon, France</td><td>236</td><td>3</td></tr><tr><td>146</td><td><a href="https://github.com/holtzy">
        <img src="https://avatars.githubusercontent.com/u/10254401?s=72&u=d554070e82949f6c7c6c57d4597f4cfddb053956&v=4" height="12" />
        <b>holtzy</b>
    </a></td><td>Software Engineer - Dataviz</td><td>Montpellier, France</td><td>4.21K</td><td>2</td></tr><tr><td>147</td><td><a href="https://github.com/Solido">
        <img src="https://avatars.githubusercontent.com/u/1295961?s=72&u=b85eaeb98c4c24aeec8046b7839a5ddf2d504289&v=4" height="12" />
        <b>Solido</b>
    </a></td><td>-</td><td>France, Bordeaux</td><td>2.99K</td><td>2</td></tr><tr><td>148</td><td><a href="https://github.com/0xN0x">
        <img src="https://avatars.githubusercontent.com/u/1781547?s=72&u=84f608fab306dd7b1c3df0a578bd476fefb15f7a&v=4" height="12" />
        <b>0xN0x</b>
    </a></td><td>-</td><td>France</td><td>2.29K</td><td>2</td></tr><tr><td>149</td><td><a href="https://github.com/donho">
        <img src="https://avatars.githubusercontent.com/u/90293?s=72&u=ecf6e2f9319cd333d4ffd0056c84848e91ae9870&v=4" height="12" />
        <b>donho</b>
    </a></td><td>Notepad++ Project</td><td>Paris France</td><td>2.11K</td><td>2</td></tr><tr><td>150</td><td><a href="https://github.com/p0dalirius">
        <img src="https://avatars.githubusercontent.com/u/79218792?s=72&u=f6b0f27134df6083787490cfcd2ccfdbd5eb70d6&v=4" height="12" />
        <b>p0dalirius</b>
    </a></td><td>Podalirius Labs</td><td>France</td><td>1.95K</td><td>2</td></tr><tr><td>151</td><td><a href="https://github.com/angristan">
        <img src="https://avatars.githubusercontent.com/u/11699655?s=72&u=03a18584b40e4d9fd656b2120c3e75232960b9ac&v=4" height="12" />
        <b>angristan</b>
    </a></td><td>Backend Engineer @qonto</td><td>Paris</td><td>1.87K</td><td>2</td></tr><tr><td>152</td><td><a href="https://github.com/Carreau">
        <img src="https://avatars.githubusercontent.com/u/335567?s=72&v=4" height="12" />
        <b>Carreau</b>
    </a></td><td>@Quansight-Labs</td><td>France</td><td>1.33K</td><td>2</td></tr><tr><td>153</td><td><a href="https://github.com/Geal">
        <img src="https://avatars.githubusercontent.com/u/119296?s=72&v=4" height="12" />
        <b>Geal</b>
    </a></td><td>-</td><td>Nantes, France</td><td>1.29K</td><td>2</td></tr><tr><td>154</td><td><a href="https://github.com/Bleuje">
        <img src="https://avatars.githubusercontent.com/u/17087687?s=72&u=43aeff24919f3b82dec581293d2f9df51bcfb187&v=4" height="12" />
        <b>Bleuje</b>
    </a></td><td>-</td><td>Paris</td><td>1.13K</td><td>2</td></tr><tr><td>155</td><td><a href="https://github.com/ncannasse">
        <img src="https://avatars.githubusercontent.com/u/1022912?s=72&u=38096d7e5a4d2a553fb90e5dd30e8a4f4aa782be&v=4" height="12" />
        <b>ncannasse</b>
    </a></td><td>Shiro Games</td><td>Bordeaux, France</td><td>1.05K</td><td>2</td></tr><tr><td>156</td><td><a href="https://github.com/antonioribeiro">
        <img src="https://avatars.githubusercontent.com/u/3182864?s=72&u=801b6ab616da34a5e443aa6268ceb43a17a65cd6&v=4" height="12" />
        <b>antonioribeiro</b>
    </a></td><td>@area17 </td><td>Paris, France</td><td>934</td><td>2</td></tr><tr><td>157</td><td><a href="https://github.com/byroot">
        <img src="https://avatars.githubusercontent.com/u/44640?s=72&v=4" height="12" />
        <b>byroot</b>
    </a></td><td>@Shopify (as @casperisfine)</td><td>Toulouse, France</td><td>882</td><td>2</td></tr><tr><td>158</td><td><a href="https://github.com/nicolargo">
        <img src="https://avatars.githubusercontent.com/u/776747?s=72&u=aa191d095cac0b9bb8ff2aca1d87370b47c0edee&v=4" height="12" />
        <b>nicolargo</b>
    </a></td><td>Le blog de Nicolargo</td><td>Valbonne, France</td><td>845</td><td>2</td></tr><tr><td>159</td><td><a href="https://github.com/jasonchampagne">
        <img src="https://avatars.githubusercontent.com/u/979506?s=72&u=2bdb20651e0cc5e6b8e751521638a003fb7305a9&v=4" height="12" />
        <b>jasonchampagne</b>
    </a></td><td>EvoluNoob</td><td>France</td><td>829</td><td>2</td></tr><tr><td>160</td><td><a href="https://github.com/Hackndo">
        <img src="https://avatars.githubusercontent.com/u/11051803?s=72&u=393d5e2fe597833da6063b156fab4931148c933a&v=4" height="12" />
        <b>Hackndo</b>
    </a></td><td>Login Sécurité</td><td>Paris</td><td>822</td><td>2</td></tr><tr><td>161</td><td><a href="https://github.com/arv">
        <img src="https://avatars.githubusercontent.com/u/45845?s=72&v=4" height="12" />
        <b>arv</b>
    </a></td><td>@rocicorp</td><td>Paris</td><td>813</td><td>2</td></tr><tr><td>162</td><td><a href="https://github.com/Naereen">
        <img src="https://avatars.githubusercontent.com/u/11994719?s=72&v=4" height="12" />
        <b>Naereen</b>
    </a></td><td>Lycée Kléber | Éducation Nationale</td><td>Strasbourg, France</td><td>587</td><td>2</td></tr><tr><td>163</td><td><a href="https://github.com/AstraaDev">
        <img src="https://avatars.githubusercontent.com/u/43183806?s=72&u=d3bc96c5d783478b819498fcb8c07a790204442f&v=4" height="12" />
        <b>AstraaDev</b>
    </a></td><td>-</td><td>France</td><td>582</td><td>2</td></tr><tr><td>164</td><td><a href="https://github.com/lindenb">
        <img src="https://avatars.githubusercontent.com/u/33838?s=72&u=69f92e5fef0d06f78b08e36877633efa0c7f5441&v=4" height="12" />
        <b>lindenb</b>
    </a></td><td>INSERM</td><td>Nantes, France</td><td>545</td><td>2</td></tr><tr><td>165</td><td><a href="https://github.com/Wenzel">
        <img src="https://avatars.githubusercontent.com/u/964610?s=72&u=7e6b8dd82339fe0349e7359908accf5543d95b8d&v=4" height="12" />
        <b>Wenzel</b>
    </a></td><td>-</td><td>Paris, France</td><td>542</td><td>2</td></tr><tr><td>166</td><td><a href="https://github.com/SimonMarquis">
        <img src="https://avatars.githubusercontent.com/u/1921278?s=72&u=ace12a9fb3a0532f35285bce04898f7a7c97b2f9&v=4" height="12" />
        <b>SimonMarquis</b>
    </a></td><td>@leboncoin</td><td>Paris, France</td><td>523</td><td>2</td></tr><tr><td>167</td><td><a href="https://github.com/LilaRest">
        <img src="https://avatars.githubusercontent.com/u/48853371?s=72&u=69566a79698e6f36c9afc03c3045d8d21ec48ba4&v=4" height="12" />
        <b>LilaRest</b>
    </a></td><td>@MeetVisitors</td><td>France</td><td>494</td><td>2</td></tr><tr><td>168</td><td><a href="https://github.com/Denis2054">
        <img src="https://avatars.githubusercontent.com/u/30811222?s=72&u=3adf400203ec8a612ac160daf29c812d9c91a55c&v=4" height="12" />
        <b>Denis2054</b>
    </a></td><td>AI Author Speaker Instructor</td><td>France</td><td>481</td><td>2</td></tr><tr><td>169</td><td><a href="https://github.com/rth">
        <img src="https://avatars.githubusercontent.com/u/630936?s=72&u=b5970c1f09aabdac20bd07baa3dccfb424ec0d5d&v=4" height="12" />
        <b>rth</b>
    </a></td><td>-</td><td>Paris, France</td><td>429</td><td>2</td></tr><tr><td>170</td><td><a href="https://github.com/garronej">
        <img src="https://avatars.githubusercontent.com/u/6702424?s=72&u=13f489f6f1b3fde3b4d6be6ddc503d2b95a0f5c7&v=4" height="12" />
        <b>garronej</b>
    </a></td><td>@InseeFrLab</td><td>Paris, France</td><td>419</td><td>2</td></tr><tr><td>171</td><td><a href="https://github.com/piitaya">
        <img src="https://avatars.githubusercontent.com/u/5878303?s=72&u=ab28a992669ff3369d3f23bebe1313e7b3fbee0b&v=4" height="12" />
        <b>piitaya</b>
    </a></td><td>@home-assistant @OpenHomeFoundation</td><td>Lille</td><td>415</td><td>2</td></tr><tr><td>172</td><td><a href="https://github.com/dmnsgn">
        <img src="https://avatars.githubusercontent.com/u/1636460?s=72&u=203ff00cf5097208e666acf35ef4a87304ba0d35&v=4" height="12" />
        <b>dmnsgn</b>
    </a></td><td>@variablestudio  </td><td>London / Paris</td><td>400</td><td>2</td></tr><tr><td>173</td><td><a href="https://github.com/innocenzi">
        <img src="https://avatars.githubusercontent.com/u/16060559?s=72&u=cf061757407ef529958cf24bac8d2f699ad6e6ed&v=4" height="12" />
        <b>innocenzi</b>
    </a></td><td>Developer @JetflyAviation</td><td>France</td><td>388</td><td>2</td></tr><tr><td>174</td><td><a href="https://github.com/RobinDavid">
        <img src="https://avatars.githubusercontent.com/u/1887063?s=72&u=0a61b1b95de647e0392b3596d6d451dc1e05401e&v=4" height="12" />
        <b>RobinDavid</b>
    </a></td><td>Quarkslab</td><td>Paris, France</td><td>383</td><td>2</td></tr><tr><td>175</td><td><a href="https://github.com/sailro">
        <img src="https://avatars.githubusercontent.com/u/638167?s=72&u=100f354f54a8f49ea4d89cf2d8f5e206ea09ad77&v=4" height="12" />
        <b>sailro</b>
    </a></td><td>Microsoft</td><td>Lyon, France</td><td>365</td><td>2</td></tr><tr><td>176</td><td><a href="https://github.com/MathisHammel">
        <img src="https://avatars.githubusercontent.com/u/6159437?s=72&u=a53de197adab2db63fd75671f1277043ae6f00b6&v=4" height="12" />
        <b>MathisHammel</b>
    </a></td><td>-</td><td>Paris</td><td>362</td><td>2</td></tr><tr><td>177</td><td><a href="https://github.com/Yanlry">
        <img src="https://avatars.githubusercontent.com/u/122649131?s=72&u=ed01f26921d8c98ec9c54de3db9568fe88dae0b9&v=4" height="12" />
        <b>Yanlry</b>
    </a></td><td>Fsociety</td><td>Lille, France</td><td>354</td><td>2</td></tr><tr><td>178</td><td><a href="https://github.com/Tucsky">
        <img src="https://avatars.githubusercontent.com/u/5738336?s=72&u=33e59d3c0f0f31900db8026ce93a4ed5a0ad89b1&v=4" height="12" />
        <b>Tucsky</b>
    </a></td><td>-</td><td>France</td><td>347</td><td>2</td></tr><tr><td>179</td><td><a href="https://github.com/mckenziearts">
        <img src="https://avatars.githubusercontent.com/u/14105989?s=72&u=9c230c3e470fd4ddbbec22005757893bfa61d3ef&v=4" height="12" />
        <b>mckenziearts</b>
    </a></td><td>@shopperlabs </td><td>Paris, France</td><td>338</td><td>2</td></tr><tr><td>180</td><td><a href="https://github.com/tbruyelle">
        <img src="https://avatars.githubusercontent.com/u/92280?s=72&u=3035228f64ba51ad6fc2f9452e22e928604152f8&v=4" height="12" />
        <b>tbruyelle</b>
    </a></td><td>@allinbits</td><td>Montpellier, France</td><td>330</td><td>2</td></tr><tr><td>181</td><td><a href="https://github.com/LostInBrittany">
        <img src="https://avatars.githubusercontent.com/u/726476?s=72&u=5f9c71501700a15d727e15fd0ddd699b884d2a11&v=4" height="12" />
        <b>LostInBrittany</b>
    </a></td><td>@CleverCloud</td><td>Brest, Brittany, France</td><td>307</td><td>2</td></tr><tr><td>182</td><td><a href="https://github.com/llenotre">
        <img src="https://avatars.githubusercontent.com/u/66486624?s=72&u=7da2690ef9c531b23456974d6b33dd5c56f16119&v=4" height="12" />
        <b>llenotre</b>
    </a></td><td>CleverCloud</td><td>France</td><td>299</td><td>2</td></tr><tr><td>183</td><td><a href="https://github.com/Liryna">
        <img src="https://avatars.githubusercontent.com/u/4311419?s=72&v=4" height="12" />
        <b>Liryna</b>
    </a></td><td>Google</td><td>France</td><td>298</td><td>2</td></tr><tr><td>184</td><td><a href="https://github.com/mickaelandrieu">
        <img src="https://avatars.githubusercontent.com/u/1247388?s=72&u=0506c42c2e317634cd1b3bc2144e5981bc3ec7e4&v=4" height="12" />
        <b>mickaelandrieu</b>
    </a></td><td>SolvoLabs</td><td>Bordeaux, France</td><td>295</td><td>2</td></tr><tr><td>185</td><td><a href="https://github.com/geromegrignon">
        <img src="https://avatars.githubusercontent.com/u/32737308?s=72&u=65991e3f02f05e572ae435e24659ba65ed5d6005&v=4" height="12" />
        <b>geromegrignon</b>
    </a></td><td>Lucca</td><td>France</td><td>287</td><td>2</td></tr><tr><td>186</td><td><a href="https://github.com/belem2050">
        <img src="https://avatars.githubusercontent.com/u/90107382?s=72&u=cb38380a892623c8b69482dfe86bbcfb62e9ba85&v=4" height="12" />
        <b>belem2050</b>
    </a></td><td>@cmrobotics </td><td>France</td><td>285</td><td>2</td></tr><tr><td>187</td><td><a href="https://github.com/mockersf">
        <img src="https://avatars.githubusercontent.com/u/8672791?s=72&u=6350847888b0006d335bc98ca32a5359389d26b5&v=4" height="12" />
        <b>mockersf</b>
    </a></td><td>-</td><td>France</td><td>276</td><td>2</td></tr><tr><td>188</td><td><a href="https://github.com/Bubhux">
        <img src="https://avatars.githubusercontent.com/u/110377006?s=72&u=0309cab6fd716667c5e7e7d50f14c51803135a83&v=4" height="12" />
        <b>Bubhux</b>
    </a></td><td>-</td><td>France</td><td>261</td><td>2</td></tr><tr><td>189</td><td><a href="https://github.com/darold">
        <img src="https://avatars.githubusercontent.com/u/538862?s=72&u=c7f0d89a00a8290d56d6168a3d1a7ab4be36f10d&v=4" height="12" />
        <b>darold</b>
    </a></td><td>-</td><td>France</td><td>259</td><td>2</td></tr><tr><td>190</td><td><a href="https://github.com/Nenkai">
        <img src="https://avatars.githubusercontent.com/u/13786175?s=72&u=c8c5184ee104323fcd17229ff4f44fc0568847e4&v=4" height="12" />
        <b>Nenkai</b>
    </a></td><td>-</td><td>France</td><td>250</td><td>2</td></tr><tr><td>191</td><td><a href="https://github.com/corsonr">
        <img src="https://avatars.githubusercontent.com/u/1649788?s=72&u=36a376b200fd98e6100788c1ec39b3b7e912797a&v=4" height="12" />
        <b>corsonr</b>
    </a></td><td>Be API</td><td>France</td><td>248</td><td>2</td></tr><tr><td>192</td><td><a href="https://github.com/wapiflapi">
        <img src="https://avatars.githubusercontent.com/u/1619783?s=72&u=de8d3e350532daba2f8b2f50c00e167f82dd2792&v=4" height="12" />
        <b>wapiflapi</b>
    </a></td><td>-</td><td>France</td><td>245</td><td>2</td></tr><tr><td>193</td><td><a href="https://github.com/Julow">
        <img src="https://avatars.githubusercontent.com/u/2310568?s=72&v=4" height="12" />
        <b>Julow</b>
    </a></td><td>@tarides</td><td>France</td><td>238</td><td>2</td></tr><tr><td>194</td><td><a href="https://github.com/woctezuma">
        <img src="https://avatars.githubusercontent.com/u/570669?s=72&u=af46fc886659da64e893e12e83eeaccf9445ed1c&v=4" height="12" />
        <b>woctezuma</b>
    </a></td><td>-</td><td>Paris, France</td><td>233</td><td>2</td></tr><tr><td>195</td><td><a href="https://github.com/jdesboeufs">
        <img src="https://avatars.githubusercontent.com/u/1231232?s=72&u=71bac788fd58c4cb53ae18559b6ffecd1e218725&v=4" height="12" />
        <b>jdesboeufs</b>
    </a></td><td>Living Data</td><td>Paris</td><td>229</td><td>2</td></tr><tr><td>196</td><td><a href="https://github.com/williamdes">
        <img src="https://avatars.githubusercontent.com/u/7784660?s=72&u=41b673444a231d4b51158f19405660bead34e360&v=4" height="12" />
        <b>williamdes</b>
    </a></td><td>@wdes, @phpmyadmin, @sudo-bot, @code-lts </td><td>Brittany, France</td><td>221</td><td>2</td></tr><tr><td>197</td><td><a href="https://github.com/apirrone">
        <img src="https://avatars.githubusercontent.com/u/6552564?s=72&u=0e79575bb391a4a98156e72b7f29da0ce6bd315f&v=4" height="12" />
        <b>apirrone</b>
    </a></td><td>Pollen Robotics</td><td>Bordeaux</td><td>218</td><td>2</td></tr><tr><td>198</td><td><a href="https://github.com/BenMorel">
        <img src="https://avatars.githubusercontent.com/u/1952838?s=72&v=4" height="12" />
        <b>BenMorel</b>
    </a></td><td>-</td><td>France</td><td>211</td><td>2</td></tr><tr><td>199</td><td><a href="https://github.com/dgirardeau">
        <img src="https://avatars.githubusercontent.com/u/2735509?s=72&u=0456c0faa0f0cef7fe90cc74d5ae9bb8a19b6bf8&v=4" height="12" />
        <b>dgirardeau</b>
    </a></td><td>CloudCompare</td><td>France (Grenoble)</td><td>206</td><td>2</td></tr><tr><td>200</td><td><a href="https://github.com/BoD">
        <img src="https://avatars.githubusercontent.com/u/372852?s=72&u=7569719a93bcc9da6dbec73e93464aded3bacfb7&v=4" height="12" />
        <b>BoD</b>
    </a></td><td>-</td><td>Paris, France</td><td>204</td><td>2</td></tr>
    </tbody>
</table>

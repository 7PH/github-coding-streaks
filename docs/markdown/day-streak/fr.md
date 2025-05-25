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
    </a></td><td>@swan-io</td><td>Paris, France</td><td>417</td><td>1.65K</td></tr><tr><td>🥈</td><td><a href="https://github.com/Caceresenzo">
        <img src="https://avatars.githubusercontent.com/u/7386242?s=72&u=17d4617bb086732fd4da9287942494386d06ebb3&v=4" height="12" />
        <b>Caceresenzo</b>
    </a></td><td>-</td><td>France</td><td>231</td><td>1.29K</td></tr><tr><td>🥉</td><td><a href="https://github.com/Haroenv">
        <img src="https://avatars.githubusercontent.com/u/6270048?s=72&u=767b8fde5c473100da40c50fd2f7c2df139c8d48&v=4" height="12" />
        <b>Haroenv</b>
    </a></td><td>@algolia</td><td>Paris, France</td><td>600</td><td>1.06K</td></tr><tr><td>4</td><td><a href="https://github.com/ask0ldd">
        <img src="https://avatars.githubusercontent.com/u/117862447?s=72&u=26ccc7b22832feeb7a2dc7b8909f6cc90d239a82&v=4" height="12" />
        <b>ask0ldd</b>
    </a></td><td>-</td><td>Paris, France</td><td>680</td><td>857</td></tr><tr><td>5</td><td><a href="https://github.com/BrunoLevy">
        <img src="https://avatars.githubusercontent.com/u/19478253?s=72&u=5d291f158e7d7f0ebb99475e5f8974a7a8ec374d&v=4" height="12" />
        <b>BrunoLevy</b>
    </a></td><td>@inria</td><td>Saclay, France</td><td>729</td><td>628</td></tr><tr><td>6</td><td><a href="https://github.com/crazy-max">
        <img src="https://avatars.githubusercontent.com/u/1951866?s=72&v=4" height="12" />
        <b>crazy-max</b>
    </a></td><td>@docker</td><td>France</td><td>2.57K</td><td>613</td></tr><tr><td>7</td><td><a href="https://github.com/Tahul">
        <img src="https://avatars.githubusercontent.com/u/1385263?s=72&u=5fa8ea08de4cd72e468943edabfa9d72f3c02e70&v=4" height="12" />
        <b>Tahul</b>
    </a></td><td>@thecompaniesapi</td><td>Nantes, France</td><td>471</td><td>511</td></tr><tr><td>8</td><td><a href="https://github.com/fxcoudert">
        <img src="https://avatars.githubusercontent.com/u/1980544?s=72&u=9a73e04b4876d134ff69035fd7ea77eebecda2a3&v=4" height="12" />
        <b>fxcoudert</b>
    </a></td><td>-</td><td>Paris, France</td><td>344</td><td>287</td></tr><tr><td>9</td><td><a href="https://github.com/NelleV">
        <img src="https://avatars.githubusercontent.com/u/184798?s=72&v=4" height="12" />
        <b>NelleV</b>
    </a></td><td>TIMC</td><td>Grenoble</td><td>267</td><td>250</td></tr><tr><td>10</td><td><a href="https://github.com/rlouf">
        <img src="https://avatars.githubusercontent.com/u/3885044?s=72&u=d25f1b19c341ad092b89b860547177a7b5107261&v=4" height="12" />
        <b>rlouf</b>
    </a></td><td>.txt</td><td>Bourron-Marlotte, France</td><td>510</td><td>239</td></tr><tr><td>11</td><td><a href="https://github.com/rozierguillaume">
        <img src="https://avatars.githubusercontent.com/u/22763678?s=72&u=f10c1d50d6f9ce7ed6c7d64a767c02911df19cf4&v=4" height="12" />
        <b>rozierguillaume</b>
    </a></td><td>-</td><td>Paris</td><td>334</td><td>236</td></tr><tr><td>12</td><td><a href="https://github.com/Progi1984">
        <img src="https://avatars.githubusercontent.com/u/1533248?s=72&u=096bead2eab90e4795096b7d518583223dd34be6&v=4" height="12" />
        <b>Progi1984</b>
    </a></td><td>@PrestaShopCorp </td><td>Rennes, France</td><td>235</td><td>218</td></tr><tr><td>13</td><td><a href="https://github.com/mcanouil">
        <img src="https://avatars.githubusercontent.com/u/8896044?s=72&u=86a5cbe0323a90349d87b7fa1fd4b22ae9d45ea2&v=4" height="12" />
        <b>mcanouil</b>
    </a></td><td>-</td><td>Lille, France</td><td>315</td><td>148</td></tr><tr><td>14</td><td><a href="https://github.com/glemaitre">
        <img src="https://avatars.githubusercontent.com/u/7454015?s=72&u=d9704641f89c00ce86f8207e59aedb554109d7fa&v=4" height="12" />
        <b>glemaitre</b>
    </a></td><td>Chief ML Officer / OSS Engineeer @probabl-ai </td><td>Paris-Saclay / France</td><td>828</td><td>109</td></tr><tr><td>15</td><td><a href="https://github.com/ganatan">
        <img src="https://avatars.githubusercontent.com/u/32958393?s=72&u=e53563d16cd220e4901251cc32c332df4496c87c&v=4" height="12" />
        <b>ganatan</b>
    </a></td><td>ganatan</td><td>France</td><td>432</td><td>108</td></tr><tr><td>16</td><td><a href="https://github.com/nhoizey">
        <img src="https://avatars.githubusercontent.com/u/78213?s=72&u=7a2b7a2aca0dcc113d7a61a6dcf9e7a338e22053&v=4" height="12" />
        <b>nhoizey</b>
    </a></td><td>@cleverage</td><td>Paris, France</td><td>263</td><td>106</td></tr><tr><td>17</td><td><a href="https://github.com/antoinevastel">
        <img src="https://avatars.githubusercontent.com/u/5827148?s=72&u=58bfd63c66ed664f66c1338464c502e88cfef45b&v=4" height="12" />
        <b>antoinevastel</b>
    </a></td><td>-</td><td>Nantes, France</td><td>350</td><td>100</td></tr><tr><td>18</td><td><a href="https://github.com/soyuka">
        <img src="https://avatars.githubusercontent.com/u/1321971?s=72&u=c89bcb8e5eeff581d304dcfc5f26628ddc1760a5&v=4" height="12" />
        <b>soyuka</b>
    </a></td><td>@coopTilleuls</td><td>Nantes, France</td><td>460</td><td>98</td></tr><tr><td>19</td><td><a href="https://github.com/mquandalle">
        <img src="https://avatars.githubusercontent.com/u/1730702?s=72&u=ebe99b2bcc14e2e2376df8637ddc47f1b26a5e7b&v=4" height="12" />
        <b>mquandalle</b>
    </a></td><td>-</td><td>Paris, France</td><td>321</td><td>78</td></tr><tr><td>20</td><td><a href="https://github.com/fasterthanlime">
        <img src="https://avatars.githubusercontent.com/u/7998310?s=72&u=fd6cb24423c35c26ee1ce7e00f0a3925bc964d1d&v=4" height="12" />
        <b>fasterthanlime</b>
    </a></td><td>@bearcove</td><td>Lyon, France</td><td>4.4K</td><td>69</td></tr><tr><td>21</td><td><a href="https://github.com/simongravelle">
        <img src="https://avatars.githubusercontent.com/u/43388542?s=72&u=16bc101821423023268d74e239583cbcc21b3881&v=4" height="12" />
        <b>simongravelle</b>
    </a></td><td>LIPhy</td><td>Grenoble, France</td><td>575</td><td>57</td></tr><tr><td>22</td><td><a href="https://github.com/gsmet">
        <img src="https://avatars.githubusercontent.com/u/1279749?s=72&u=e462a6165ea17647aed446ca31fae604338ae18c&v=4" height="12" />
        <b>gsmet</b>
    </a></td><td>Red Hat</td><td>Lyon, France</td><td>351</td><td>55</td></tr><tr><td>23</td><td><a href="https://github.com/ggrossetie">
        <img src="https://avatars.githubusercontent.com/u/333276?s=72&u=9087930b05d462a706f06a9ce6bf0c8289d8069d&v=4" height="12" />
        <b>ggrossetie</b>
    </a></td><td>Yuzu tech</td><td>Lyon</td><td>235</td><td>55</td></tr><tr><td>24</td><td><a href="https://github.com/Charles-Chrismann">
        <img src="https://avatars.githubusercontent.com/u/78157563?s=72&u=b02e3426a7d0cca0c38a58a3085e7bbca87a52e7&v=4" height="12" />
        <b>Charles-Chrismann</b>
    </a></td><td>Institut de l'Internet et du Multimédia (IIM)</td><td>Paris, La Défense</td><td>15.52K</td><td>46</td></tr><tr><td>25</td><td><a href="https://github.com/ngxson">
        <img src="https://avatars.githubusercontent.com/u/7702203?s=72&u=c998d920dbca6506c9dda1df1b28adae9842720e&v=4" height="12" />
        <b>ngxson</b>
    </a></td><td>@huggingface </td><td>France</td><td>697</td><td>38</td></tr><tr><td>26</td><td><a href="https://github.com/vstinner">
        <img src="https://avatars.githubusercontent.com/u/194129?s=72&u=cf52678f5f02f96d9c5bc1b5079d4e6c2e441af4&v=4" height="12" />
        <b>vstinner</b>
    </a></td><td>@RedHatOfficial</td><td>France</td><td>1.4K</td><td>34</td></tr><tr><td>27</td><td><a href="https://github.com/rouault">
        <img src="https://avatars.githubusercontent.com/u/1192433?s=72&u=aebaf912a08a734156caf25b26ab78d1959f0ed5&v=4" height="12" />
        <b>rouault</b>
    </a></td><td>Spatialys</td><td>France</td><td>751</td><td>29</td></tr><tr><td>28</td><td><a href="https://github.com/florian-lefebvre">
        <img src="https://avatars.githubusercontent.com/u/69633530?s=72&u=e2ef3f44db480e30e0e7fe90aa559d3c39fac7e6&v=4" height="12" />
        <b>florian-lefebvre</b>
    </a></td><td>-</td><td>France</td><td>254</td><td>29</td></tr><tr><td>29</td><td><a href="https://github.com/ibelick">
        <img src="https://avatars.githubusercontent.com/u/14288396?s=72&u=73ee6fdd46dbab7bed83493f5f448654ff2d7f06&v=4" height="12" />
        <b>ibelick</b>
    </a></td><td>-</td><td>Paris</td><td>1.04K</td><td>28</td></tr><tr><td>30</td><td><a href="https://github.com/SofianeHamlaoui">
        <img src="https://avatars.githubusercontent.com/u/16967174?s=72&u=1357194625eff600acb803134b1413824208ccb5&v=4" height="12" />
        <b>SofianeHamlaoui</b>
    </a></td><td>-</td><td>Lyon, France</td><td>419</td><td>24</td></tr><tr><td>31</td><td><a href="https://github.com/ArnaudBarre">
        <img src="https://avatars.githubusercontent.com/u/14235743?s=72&u=1e3fb343c89f3f3ab51080295026475541c390f8&v=4" height="12" />
        <b>ArnaudBarre</b>
    </a></td><td>Carbometrix</td><td>Paris</td><td>299</td><td>24</td></tr><tr><td>32</td><td><a href="https://github.com/GuillaumeGomez">
        <img src="https://avatars.githubusercontent.com/u/3050060?s=72&u=6ca85464b07c5464a052250a4fc3e3f9c03c97ed&v=4" height="12" />
        <b>GuillaumeGomez</b>
    </a></td><td>@huawei</td><td>Paris</td><td>1.48K</td><td>22</td></tr><tr><td>33</td><td><a href="https://github.com/ldez">
        <img src="https://avatars.githubusercontent.com/u/5674651?s=72&u=45f0e097891f1e7e0c45c5224dcce11c867038af&v=4" height="12" />
        <b>ldez</b>
    </a></td><td>-</td><td>France</td><td>632</td><td>22</td></tr><tr><td>34</td><td><a href="https://github.com/redox">
        <img src="https://avatars.githubusercontent.com/u/29529?s=72&v=4" height="12" />
        <b>redox</b>
    </a></td><td>Altertable</td><td>Paris</td><td>363</td><td>22</td></tr><tr><td>35</td><td><a href="https://github.com/kartben">
        <img src="https://avatars.githubusercontent.com/u/128251?s=72&v=4" height="12" />
        <b>kartben</b>
    </a></td><td>-</td><td>Toulouse, France</td><td>404</td><td>21</td></tr><tr><td>36</td><td><a href="https://github.com/corsonr">
        <img src="https://avatars.githubusercontent.com/u/1649788?s=72&u=36a376b200fd98e6100788c1ec39b3b7e912797a&v=4" height="12" />
        <b>corsonr</b>
    </a></td><td>Be API</td><td>France</td><td>247</td><td>21</td></tr><tr><td>37</td><td><a href="https://github.com/nvuillam">
        <img src="https://avatars.githubusercontent.com/u/17500430?s=72&u=24ff06a935acf56fe06678874e2b297debb66fac&v=4" height="12" />
        <b>nvuillam</b>
    </a></td><td>Cloudity & OX Security</td><td>Paris, France</td><td>320</td><td>18</td></tr><tr><td>38</td><td><a href="https://github.com/alexandreruban">
        <img src="https://avatars.githubusercontent.com/u/33979976?s=72&u=55cb7b791cdb7adf94ee02066347b63c0f835fe3&v=4" height="12" />
        <b>alexandreruban</b>
    </a></td><td>-</td><td>Lyon, France</td><td>502</td><td>17</td></tr><tr><td>39</td><td><a href="https://github.com/patrickheng">
        <img src="https://avatars.githubusercontent.com/u/9051314?s=72&u=5c38c6cf3e902645bcb37c7ca3744b89de422156&v=4" height="12" />
        <b>patrickheng</b>
    </a></td><td>Freelance</td><td>Paris</td><td>796</td><td>16</td></tr><tr><td>40</td><td><a href="https://github.com/stephrobert">
        <img src="https://avatars.githubusercontent.com/u/681788?s=72&u=cda76428fe4d06957a063238e1dcc1d4c4ae2cf6&v=4" height="12" />
        <b>stephrobert</b>
    </a></td><td>Outscale France</td><td>Lille</td><td>532</td><td>16</td></tr><tr><td>41</td><td><a href="https://github.com/huang-julien">
        <img src="https://avatars.githubusercontent.com/u/63512348?s=72&u=b60a88c0337dc98b9cdbf1d0a4b3c635786a01b0&v=4" height="12" />
        <b>huang-julien</b>
    </a></td><td>Leetchi</td><td>France</td><td>245</td><td>16</td></tr><tr><td>42</td><td><a href="https://github.com/posva">
        <img src="https://avatars.githubusercontent.com/u/664177?s=72&u=06259cb98f3d65c5901edf488b6bf4ab5f4bccec&v=4" height="12" />
        <b>posva</b>
    </a></td><td>Freelance</td><td>Paris </td><td>6.2K</td><td>15</td></tr><tr><td>43</td><td><a href="https://github.com/jedisct1">
        <img src="https://avatars.githubusercontent.com/u/124872?s=72&v=4" height="12" />
        <b>jedisct1</b>
    </a></td><td>-</td><td>Antibes, France</td><td>3.94K</td><td>15</td></tr><tr><td>44</td><td><a href="https://github.com/emersion">
        <img src="https://avatars.githubusercontent.com/u/506932?s=72&u=04995169ac1851b91ca12b47f4862ded1b108765&v=4" height="12" />
        <b>emersion</b>
    </a></td><td>-</td><td>France</td><td>1.94K</td><td>15</td></tr><tr><td>45</td><td><a href="https://github.com/JeanMeche">
        <img src="https://avatars.githubusercontent.com/u/1300985?s=72&u=ba0f3dbc4cae44232ebf50bdd845bc98750fa42e&v=4" height="12" />
        <b>JeanMeche</b>
    </a></td><td>👀</td><td>Grenoble - France</td><td>365</td><td>15</td></tr><tr><td>46</td><td><a href="https://github.com/ornicar">
        <img src="https://avatars.githubusercontent.com/u/140370?s=72&v=4" height="12" />
        <b>ornicar</b>
    </a></td><td>lichess.org</td><td>France</td><td>6.08K</td><td>14</td></tr><tr><td>47</td><td><a href="https://github.com/Calinou">
        <img src="https://avatars.githubusercontent.com/u/180032?s=72&v=4" height="12" />
        <b>Calinou</b>
    </a></td><td>@godotengine</td><td>Troyes, France</td><td>1.42K</td><td>14</td></tr><tr><td>48</td><td><a href="https://github.com/vinayak-mehta">
        <img src="https://avatars.githubusercontent.com/u/4329421?s=72&u=bced413b47ba8604871f6b4ac28f623f72bcf56d&v=4" height="12" />
        <b>vinayak-mehta</b>
    </a></td><td>-</td><td>Paris</td><td>560</td><td>14</td></tr><tr><td>49</td><td><a href="https://github.com/p0dalirius">
        <img src="https://avatars.githubusercontent.com/u/79218792?s=72&u=f6b0f27134df6083787490cfcd2ccfdbd5eb70d6&v=4" height="12" />
        <b>p0dalirius</b>
    </a></td><td>Podalirius Labs</td><td>France</td><td>1.99K</td><td>11</td></tr><tr><td>50</td><td><a href="https://github.com/moul">
        <img src="https://avatars.githubusercontent.com/u/94029?s=72&u=2acc3ed56cc696b595a069aef15cc975d8662e79&v=4" height="12" />
        <b>moul</b>
    </a></td><td>@gnolang, @berty, ...</td><td>France</td><td>1.6K</td><td>11</td></tr><tr><td>51</td><td><a href="https://github.com/vincentbernat">
        <img src="https://avatars.githubusercontent.com/u/631446?s=72&u=4fa1b32955881f764b4ca8556b8ba62db83f55d2&v=4" height="12" />
        <b>vincentbernat</b>
    </a></td><td>Free</td><td>Paris, France</td><td>1.15K</td><td>10</td></tr><tr><td>52</td><td><a href="https://github.com/valryon">
        <img src="https://avatars.githubusercontent.com/u/155884?s=72&u=115b607498d0b336a0f1648bef3f83ce4b14f5ec&v=4" height="12" />
        <b>valryon</b>
    </a></td><td>Pixelnest Studio</td><td>France</td><td>205</td><td>10</td></tr><tr><td>53</td><td><a href="https://github.com/0xN0x">
        <img src="https://avatars.githubusercontent.com/u/1781547?s=72&u=84f608fab306dd7b1c3df0a578bd476fefb15f7a&v=4" height="12" />
        <b>0xN0x</b>
    </a></td><td>-</td><td>France</td><td>2.28K</td><td>9</td></tr><tr><td>54</td><td><a href="https://github.com/sdeleuze">
        <img src="https://avatars.githubusercontent.com/u/141109?s=72&u=2c3c96eb7c44a666ecc9d8e124e4948101b6aa56&v=4" height="12" />
        <b>sdeleuze</b>
    </a></td><td>Broadcom</td><td>Lyon</td><td>1.24K</td><td>9</td></tr><tr><td>55</td><td><a href="https://github.com/sylvestre">
        <img src="https://avatars.githubusercontent.com/u/733326?s=72&u=77d7752593d6fa035b33e63386cc15479744ab24&v=4" height="12" />
        <b>sylvestre</b>
    </a></td><td>Mozilla</td><td>France</td><td>505</td><td>9</td></tr><tr><td>56</td><td><a href="https://github.com/harryjmg">
        <img src="https://avatars.githubusercontent.com/u/7394780?s=72&u=023539d62ce43f4941c72322bad57ad6d293647a&v=4" height="12" />
        <b>harryjmg</b>
    </a></td><td>JMG Harry</td><td>France</td><td>270</td><td>9</td></tr><tr><td>57</td><td><a href="https://github.com/Nenkai">
        <img src="https://avatars.githubusercontent.com/u/13786175?s=72&u=c8c5184ee104323fcd17229ff4f44fc0568847e4&v=4" height="12" />
        <b>Nenkai</b>
    </a></td><td>-</td><td>France</td><td>250</td><td>9</td></tr><tr><td>58</td><td><a href="https://github.com/gregberge">
        <img src="https://avatars.githubusercontent.com/u/266302?s=72&u=7b1d8d84bfbaf6cf8b340896f3cea02da2669c46&v=4" height="12" />
        <b>gregberge</b>
    </a></td><td>Argos</td><td>Paris, France</td><td>2.01K</td><td>8</td></tr><tr><td>59</td><td><a href="https://github.com/agoncal">
        <img src="https://avatars.githubusercontent.com/u/729277?s=72&u=d0da87cbc7086aaf1db7744e71017689abf4bd64&v=4" height="12" />
        <b>agoncal</b>
    </a></td><td>@microsoft</td><td>Paris</td><td>1.37K</td><td>8</td></tr><tr><td>60</td><td><a href="https://github.com/CorentinTh">
        <img src="https://avatars.githubusercontent.com/u/25065347?s=72&u=ddfc8b7812ebc8cbd9245f499e4703bf3165ec31&v=4" height="12" />
        <b>CorentinTh</b>
    </a></td><td>@GeorgesTech </td><td>France - Lyon</td><td>913</td><td>8</td></tr><tr><td>61</td><td><a href="https://github.com/Yomguithereal">
        <img src="https://avatars.githubusercontent.com/u/2571951?s=72&v=4" height="12" />
        <b>Yomguithereal</b>
    </a></td><td>médialab - Sciences Po</td><td>France</td><td>820</td><td>8</td></tr><tr><td>62</td><td><a href="https://github.com/melix">
        <img src="https://avatars.githubusercontent.com/u/316357?s=72&u=2d99b7a2de1d0530b77e897df3667db916dc1cdd&v=4" height="12" />
        <b>melix</b>
    </a></td><td>Oracle Labs </td><td>Nantes, France</td><td>622</td><td>8</td></tr><tr><td>63</td><td><a href="https://github.com/spolu">
        <img src="https://avatars.githubusercontent.com/u/15067?s=72&u=6297f8db333ba5fbf2be0ee9d796a09b1419115f&v=4" height="12" />
        <b>spolu</b>
    </a></td><td>Dust</td><td>Paris</td><td>516</td><td>8</td></tr><tr><td>64</td><td><a href="https://github.com/thoas">
        <img src="https://avatars.githubusercontent.com/u/19938?s=72&u=c1fa51350dbf4bc260670b025c94810ac19d6634&v=4" height="12" />
        <b>thoas</b>
    </a></td><td>Ulule</td><td>Paris, France</td><td>412</td><td>8</td></tr><tr><td>65</td><td><a href="https://github.com/k33g">
        <img src="https://avatars.githubusercontent.com/u/491848?s=72&u=332138d1fe94fc2ab4953428187a92663e14eeac&v=4" height="12" />
        <b>k33g</b>
    </a></td><td>-</td><td>Lyon (France)</td><td>378</td><td>8</td></tr><tr><td>66</td><td><a href="https://github.com/cor3ntin">
        <img src="https://avatars.githubusercontent.com/u/1409019?s=72&v=4" height="12" />
        <b>cor3ntin</b>
    </a></td><td>-</td><td>Bordeaux, France</td><td>360</td><td>8</td></tr><tr><td>67</td><td><a href="https://github.com/tbruyelle">
        <img src="https://avatars.githubusercontent.com/u/92280?s=72&u=3035228f64ba51ad6fc2f9452e22e928604152f8&v=4" height="12" />
        <b>tbruyelle</b>
    </a></td><td>@allinbits</td><td>Montpellier, France</td><td>329</td><td>8</td></tr><tr><td>68</td><td><a href="https://github.com/dmathieu">
        <img src="https://avatars.githubusercontent.com/u/9347?s=72&u=ade95e23ea06fc13514de6a7bb9bf7b5b90d37a5&v=4" height="12" />
        <b>dmathieu</b>
    </a></td><td>@elastic</td><td>France</td><td>321</td><td>8</td></tr><tr><td>69</td><td><a href="https://github.com/geromegrignon">
        <img src="https://avatars.githubusercontent.com/u/32737308?s=72&u=65991e3f02f05e572ae435e24659ba65ed5d6005&v=4" height="12" />
        <b>geromegrignon</b>
    </a></td><td>Lucca</td><td>France</td><td>293</td><td>8</td></tr><tr><td>70</td><td><a href="https://github.com/l-lin">
        <img src="https://avatars.githubusercontent.com/u/5452304?s=72&u=2e2f03b021b647037453379a788385f317c8208f&v=4" height="12" />
        <b>l-lin</b>
    </a></td><td>@doctolib</td><td>Paris</td><td>263</td><td>8</td></tr><tr><td>71</td><td><a href="https://github.com/joeybronner">
        <img src="https://avatars.githubusercontent.com/u/5888510?s=72&u=15e39a4e9954e51c531d3d636749bd80c6275b8c&v=4" height="12" />
        <b>joeybronner</b>
    </a></td><td>-</td><td>Paris</td><td>261</td><td>8</td></tr><tr><td>72</td><td><a href="https://github.com/Dimillian">
        <img src="https://avatars.githubusercontent.com/u/535509?s=72&u=764d85a6d85e56cb2029e0e64af1bf37296e02a4&v=4" height="12" />
        <b>Dimillian</b>
    </a></td><td>@Medium @Glose </td><td>France</td><td>2.99K</td><td>7</td></tr><tr><td>73</td><td><a href="https://github.com/stof">
        <img src="https://avatars.githubusercontent.com/u/439401?s=72&u=bdedf550601e30f65b8759680868744e6c2607ed&v=4" height="12" />
        <b>stof</b>
    </a></td><td>@Incenteev</td><td>Paris</td><td>2.11K</td><td>7</td></tr><tr><td>74</td><td><a href="https://github.com/nicolas-grekas">
        <img src="https://avatars.githubusercontent.com/u/243674?s=72&u=85243de9963ea46d545961980e34e6538ad59fd1&v=4" height="12" />
        <b>nicolas-grekas</b>
    </a></td><td>@SymfonyCorp</td><td>Paris, France</td><td>2.02K</td><td>7</td></tr><tr><td>75</td><td><a href="https://github.com/slorber">
        <img src="https://avatars.githubusercontent.com/u/749374?s=72&u=d966ea75548708c18bda3d4d2acca2817169639e&v=4" height="12" />
        <b>slorber</b>
    </a></td><td>This Week In React</td><td>Paris</td><td>1.94K</td><td>7</td></tr><tr><td>76</td><td><a href="https://github.com/mpgn">
        <img src="https://avatars.githubusercontent.com/u/5891788?s=72&u=b9940284a900247ecbd99c9517c1142c33586621&v=4" height="12" />
        <b>mpgn</b>
    </a></td><td>-</td><td>France</td><td>1.28K</td><td>7</td></tr><tr><td>77</td><td><a href="https://github.com/MaxHalford">
        <img src="https://avatars.githubusercontent.com/u/8095957?s=72&u=a2b8377ac29978e4268b713834185198f08b9eef&v=4" height="12" />
        <b>MaxHalford</b>
    </a></td><td>@carbonfact</td><td>France</td><td>1.03K</td><td>7</td></tr><tr><td>78</td><td><a href="https://github.com/vvo">
        <img src="https://avatars.githubusercontent.com/u/123822?s=72&u=06ca1e71b04541addd1b9d41337d8f8cb6dea10c&v=4" height="12" />
        <b>vvo</b>
    </a></td><td>Vercel</td><td>Nantes, France</td><td>1.02K</td><td>7</td></tr><tr><td>79</td><td><a href="https://github.com/ShutdownRepo">
        <img src="https://avatars.githubusercontent.com/u/40902872?s=72&u=a83152b1ababd07d2295e28b9cf0adb69049f42f&v=4" height="12" />
        <b>ShutdownRepo</b>
    </a></td><td>-</td><td>France</td><td>1.01K</td><td>7</td></tr><tr><td>80</td><td><a href="https://github.com/byroot">
        <img src="https://avatars.githubusercontent.com/u/44640?s=72&v=4" height="12" />
        <b>byroot</b>
    </a></td><td>@Shopify (as @casperisfine)</td><td>Toulouse, France</td><td>896</td><td>7</td></tr><tr><td>81</td><td><a href="https://github.com/arv">
        <img src="https://avatars.githubusercontent.com/u/45845?s=72&v=4" height="12" />
        <b>arv</b>
    </a></td><td>@rocicorp</td><td>Paris</td><td>818</td><td>7</td></tr><tr><td>82</td><td><a href="https://github.com/teh-cmc">
        <img src="https://avatars.githubusercontent.com/u/2910679?s=72&u=21549b9a01e9e644a422f9c2dc62cd3b37a83eaf&v=4" height="12" />
        <b>teh-cmc</b>
    </a></td><td>@rerun-io</td><td>Paris, France</td><td>642</td><td>7</td></tr><tr><td>83</td><td><a href="https://github.com/ayamflow">
        <img src="https://avatars.githubusercontent.com/u/1998991?s=72&u=1b9615af6920665b4830647322d632de72f403ae&v=4" height="12" />
        <b>ayamflow</b>
    </a></td><td>-</td><td>Nantes, France</td><td>617</td><td>7</td></tr><tr><td>84</td><td><a href="https://github.com/lovasoa">
        <img src="https://avatars.githubusercontent.com/u/552629?s=72&u=3b5257f8d20ea6c313ed91ba80c024c3f00cf5dc&v=4" height="12" />
        <b>lovasoa</b>
    </a></td><td>@auto-grid @enexflow </td><td>Paris, France</td><td>598</td><td>7</td></tr><tr><td>85</td><td><a href="https://github.com/Ullaakut">
        <img src="https://avatars.githubusercontent.com/u/6976628?s=72&u=c5d65338794a0f1d49a561583d9c8114533520e3&v=4" height="12" />
        <b>Ullaakut</b>
    </a></td><td>GLAULABS S.A.R.L</td><td>Rennes, France</td><td>582</td><td>7</td></tr><tr><td>86</td><td><a href="https://github.com/pawamoy">
        <img src="https://avatars.githubusercontent.com/u/3999221?s=72&u=b030e4c89df2f3a36bc4710b925bdeb6745c9856&v=4" height="12" />
        <b>pawamoy</b>
    </a></td><td>@pawamoy-insiders </td><td>France</td><td>531</td><td>7</td></tr><tr><td>87</td><td><a href="https://github.com/hbredin">
        <img src="https://avatars.githubusercontent.com/u/1080837?s=72&v=4" height="12" />
        <b>hbredin</b>
    </a></td><td>@pyannoteai and CNRS</td><td>France</td><td>431</td><td>7</td></tr><tr><td>88</td><td><a href="https://github.com/Julien-R44">
        <img src="https://avatars.githubusercontent.com/u/8337858?s=72&u=51dca49c82393b452f05ee4aa4129a659ef47e34&v=4" height="12" />
        <b>Julien-R44</b>
    </a></td><td>Freelancing </td><td>France</td><td>418</td><td>7</td></tr><tr><td>89</td><td><a href="https://github.com/alexarchambault">
        <img src="https://avatars.githubusercontent.com/u/7063723?s=72&u=d5befca0ebfec0042dad7ef93973490eef750ff4&v=4" height="12" />
        <b>alexarchambault</b>
    </a></td><td>-</td><td>Paris</td><td>343</td><td>7</td></tr><tr><td>90</td><td><a href="https://github.com/julien-deramond">
        <img src="https://avatars.githubusercontent.com/u/17381666?s=72&u=a9b71c0b77efa17719595a35f1d1c637c4ad63ac&v=4" height="12" />
        <b>julien-deramond</b>
    </a></td><td>Thales</td><td>Paris, France</td><td>339</td><td>7</td></tr><tr><td>91</td><td><a href="https://github.com/adrienpoly">
        <img src="https://avatars.githubusercontent.com/u/7847244?s=72&u=f4330ca5e036d365b3c41199ac76e3b979ab10bb&v=4" height="12" />
        <b>adrienpoly</b>
    </a></td><td>-</td><td>Bordeaux</td><td>319</td><td>7</td></tr><tr><td>92</td><td><a href="https://github.com/rubenfiszel">
        <img src="https://avatars.githubusercontent.com/u/275584?s=72&u=eb0fe584ca9e8636a35ab822b93cc4a1ad10bf42&v=4" height="12" />
        <b>rubenfiszel</b>
    </a></td><td>Windmill</td><td>Paris, France</td><td>308</td><td>7</td></tr><tr><td>93</td><td><a href="https://github.com/Phyronnaz">
        <img src="https://avatars.githubusercontent.com/u/16806877?s=72&u=9f22d47f8682df3061081987287e90d40f553cc8&v=4" height="12" />
        <b>Phyronnaz</b>
    </a></td><td>-</td><td>France</td><td>301</td><td>7</td></tr><tr><td>94</td><td><a href="https://github.com/ramnes">
        <img src="https://avatars.githubusercontent.com/u/835072?s=72&u=3fca03c3ba0051e2eb652b1def2188a94d1e1dc2&v=4" height="12" />
        <b>ramnes</b>
    </a></td><td>@formalco</td><td>Paris, France</td><td>273</td><td>7</td></tr><tr><td>95</td><td><a href="https://github.com/travier">
        <img src="https://avatars.githubusercontent.com/u/64795720?s=72&u=7f7c094b847bc8dc140f2e5aaa44dcd6b70a9486&v=4" height="12" />
        <b>travier</b>
    </a></td><td>Red Hat</td><td>Paris, France</td><td>270</td><td>7</td></tr><tr><td>96</td><td><a href="https://github.com/ydshieh">
        <img src="https://avatars.githubusercontent.com/u/2521628?s=72&u=eccf2f21c851f85a6ce762102a024bdfb092b082&v=4" height="12" />
        <b>ydshieh</b>
    </a></td><td>-</td><td>Paris</td><td>242</td><td>7</td></tr><tr><td>97</td><td><a href="https://github.com/Kocal">
        <img src="https://avatars.githubusercontent.com/u/2103975?s=72&u=a736d3293c082d2fd28065a359bd578ebc06a7af&v=4" height="12" />
        <b>Kocal</b>
    </a></td><td>-</td><td>Lyon, France</td><td>237</td><td>7</td></tr><tr><td>98</td><td><a href="https://github.com/HiDeoo">
        <img src="https://avatars.githubusercontent.com/u/494699?s=72&u=e7468006f55deb36e1f3757f6691e0180b9257ca&v=4" height="12" />
        <b>HiDeoo</b>
    </a></td><td>-</td><td>France</td><td>236</td><td>7</td></tr><tr><td>99</td><td><a href="https://github.com/GromNaN">
        <img src="https://avatars.githubusercontent.com/u/400034?s=72&u=b92f9fbc757f5d361de7059b8e69a0eaac1164b5&v=4" height="12" />
        <b>GromNaN</b>
    </a></td><td>MongoDB</td><td>Rouen, France</td><td>234</td><td>7</td></tr><tr><td>100</td><td><a href="https://github.com/zhouzi">
        <img src="https://avatars.githubusercontent.com/u/2291025?s=72&u=f9dbd23893a5f81e51834472df344596d2b90668&v=4" height="12" />
        <b>zhouzi</b>
    </a></td><td>-</td><td>France</td><td>233</td><td>7</td></tr><tr><td>101</td><td><a href="https://github.com/greeeg">
        <img src="https://avatars.githubusercontent.com/u/12447517?s=72&u=848b5a2fa03fa7cc0c99078d30750d5b6837a514&v=4" height="12" />
        <b>greeeg</b>
    </a></td><td>@pennylane-hq</td><td>Paris, France</td><td>229</td><td>7</td></tr><tr><td>102</td><td><a href="https://github.com/williamdes">
        <img src="https://avatars.githubusercontent.com/u/7784660?s=72&u=41b673444a231d4b51158f19405660bead34e360&v=4" height="12" />
        <b>williamdes</b>
    </a></td><td>@wdes, @phpmyadmin, @sudo-bot, @code-lts </td><td>Brittany, France</td><td>223</td><td>7</td></tr><tr><td>103</td><td><a href="https://github.com/frgfm">
        <img src="https://avatars.githubusercontent.com/u/26927750?s=72&u=dfbafc3534a42845875b527483a134ec48bfe6f9&v=4" height="12" />
        <b>frgfm</b>
    </a></td><td>@quack-ai @pyronear</td><td>Paris, FR</td><td>220</td><td>7</td></tr><tr><td>104</td><td><a href="https://github.com/tdimnet">
        <img src="https://avatars.githubusercontent.com/u/9935925?s=72&u=90d6020b1e99960d5cc4ad0517bf6e6e96907d6f&v=4" height="12" />
        <b>tdimnet</b>
    </a></td><td>@nx-academy, @EdenSchoolFrance</td><td>Paris, France</td><td>215</td><td>7</td></tr><tr><td>105</td><td><a href="https://github.com/nfroidure">
        <img src="https://avatars.githubusercontent.com/u/229633?s=72&v=4" height="12" />
        <b>nfroidure</b>
    </a></td><td>@DiagRAMS-Technologies</td><td>Lille - Nord Pas-de-Calais</td><td>212</td><td>7</td></tr><tr><td>106</td><td><a href="https://github.com/cfrBernard">
        <img src="https://avatars.githubusercontent.com/u/153459846?s=72&u=65388d43a6fe3542df013dbba9875071d8762e71&v=4" height="12" />
        <b>cfrBernard</b>
    </a></td><td>-</td><td>France </td><td>4.27K</td><td>6</td></tr><tr><td>107</td><td><a href="https://github.com/SylvainCorlay">
        <img src="https://avatars.githubusercontent.com/u/2397974?s=72&u=8c2e50e43baf59740e5b12b48b0f1699caa058f8&v=4" height="12" />
        <b>SylvainCorlay</b>
    </a></td><td>QuantStack</td><td>Paris</td><td>907</td><td>6</td></tr><tr><td>108</td><td><a href="https://github.com/kevinchalet">
        <img src="https://avatars.githubusercontent.com/u/6998306?s=72&u=71c40a231984c198d230974e6536b1aea5caf756&v=4" height="12" />
        <b>kevinchalet</b>
    </a></td><td>-</td><td>France</td><td>525</td><td>6</td></tr><tr><td>109</td><td><a href="https://github.com/taylor-arnold">
        <img src="https://avatars.githubusercontent.com/u/5752184?s=72&u=2849b75fec1a72dc1197b839b64bebc9441c62f1&v=4" height="12" />
        <b>taylor-arnold</b>
    </a></td><td>-</td><td>Paris, France</td><td>329</td><td>6</td></tr><tr><td>110</td><td><a href="https://github.com/EiffL">
        <img src="https://avatars.githubusercontent.com/u/861591?s=72&u=49d14cd4b0db6b074c7c010dfc0a32d4d7eac615&v=4" height="12" />
        <b>EiffL</b>
    </a></td><td>-</td><td>Paris / New York City</td><td>281</td><td>6</td></tr><tr><td>111</td><td><a href="https://github.com/pascalgrimaud">
        <img src="https://avatars.githubusercontent.com/u/9156882?s=72&u=048a3f914bddbb33320df8ec2c7cc22c26f22646&v=4" height="12" />
        <b>pascalgrimaud</b>
    </a></td><td>Freelance</td><td>Lyon, France</td><td>275</td><td>6</td></tr><tr><td>112</td><td><a href="https://github.com/aymeric-roucher">
        <img src="https://avatars.githubusercontent.com/u/69208727?s=72&u=132c8ca18143866b79253a6fcbc10f58984f61ab&v=4" height="12" />
        <b>aymeric-roucher</b>
    </a></td><td>Hugging Face</td><td>Paris</td><td>266</td><td>6</td></tr><tr><td>113</td><td><a href="https://github.com/JohanMabille">
        <img src="https://avatars.githubusercontent.com/u/6754742?s=72&u=775b86dd500eb42711a48b35928b898bfa183c92&v=4" height="12" />
        <b>JohanMabille</b>
    </a></td><td>QuantStack</td><td>Paris</td><td>258</td><td>6</td></tr><tr><td>114</td><td><a href="https://github.com/teolemon">
        <img src="https://avatars.githubusercontent.com/u/1689815?s=72&u=6301f2326ab5595912a1fa33b8989823bba40071&v=4" height="12" />
        <b>teolemon</b>
    </a></td><td>@openfoodfacts </td><td>Paris</td><td>219</td><td>6</td></tr><tr><td>115</td><td><a href="https://github.com/jdrouet">
        <img src="https://avatars.githubusercontent.com/u/6329508?s=72&u=f5bd082c68c76dd5df1b33a3eacc72912308c4da&v=4" height="12" />
        <b>jdrouet</b>
    </a></td><td>Previously @proton, @datadog and @docker</td><td>France</td><td>208</td><td>6</td></tr><tr><td>116</td><td><a href="https://github.com/MaJerle">
        <img src="https://avatars.githubusercontent.com/u/405717?s=72&u=38e08e0842ed71ef9d972f001cfa73e8aa896362&v=4" height="12" />
        <b>MaJerle</b>
    </a></td><td>-</td><td>France</td><td>2.72K</td><td>5</td></tr><tr><td>117</td><td><a href="https://github.com/FGRibreau">
        <img src="https://avatars.githubusercontent.com/u/138050?s=72&u=09ca579f8ce5f86026aa0d8858432fe77719eee7&v=4" height="12" />
        <b>FGRibreau</b>
    </a></td><td>@nobullshitbooks @netwo-io @hook0 @image-charts  @killbugtoday @mailpopin  / Sold @Redsmin @bringr</td><td>France</td><td>775</td><td>5</td></tr><tr><td>118</td><td><a href="https://github.com/JCluzet">
        <img src="https://avatars.githubusercontent.com/u/55356071?s=72&u=1e399003c32fba533c32f1b912b9ca56756e3887&v=4" height="12" />
        <b>JCluzet</b>
    </a></td><td>42Paris</td><td>Paris</td><td>454</td><td>5</td></tr><tr><td>119</td><td><a href="https://github.com/arthaud">
        <img src="https://avatars.githubusercontent.com/u/2151557?s=72&u=20726f284e2b9874d52eddf9c2c447a0ac0c5ece&v=4" height="12" />
        <b>arthaud</b>
    </a></td><td>@facebook</td><td>Paris, France</td><td>289</td><td>5</td></tr><tr><td>120</td><td><a href="https://github.com/Bubhux">
        <img src="https://avatars.githubusercontent.com/u/110377006?s=72&u=0309cab6fd716667c5e7e7d50f14c51803135a83&v=4" height="12" />
        <b>Bubhux</b>
    </a></td><td>-</td><td>France</td><td>270</td><td>5</td></tr><tr><td>121</td><td><a href="https://github.com/ParisNeo">
        <img src="https://avatars.githubusercontent.com/u/827993?s=72&u=17ad3b01b402b36d9424d6b4437561304616eb18&v=4" height="12" />
        <b>ParisNeo</b>
    </a></td><td>CEA</td><td>France</td><td>266</td><td>5</td></tr><tr><td>122</td><td><a href="https://github.com/NTag">
        <img src="https://avatars.githubusercontent.com/u/906276?s=72&u=c686367f063914cb3978840fc52a44199bdb8639&v=4" height="12" />
        <b>NTag</b>
    </a></td><td>-</td><td>Paris</td><td>250</td><td>5</td></tr><tr><td>123</td><td><a href="https://github.com/fabpot">
        <img src="https://avatars.githubusercontent.com/u/47313?s=72&u=7ba05204271a726f8642ac15864e2f361b5c0198&v=4" height="12" />
        <b>fabpot</b>
    </a></td><td>Symfony/Platform.sh/Blackfire</td><td>Paris, France</td><td>13.3K</td><td>4</td></tr><tr><td>124</td><td><a href="https://github.com/cyrildiagne">
        <img src="https://avatars.githubusercontent.com/u/144372?s=72&u=e829a8ddba74bc0744e55d91d735ee931ffbe07f&v=4" height="12" />
        <b>cyrildiagne</b>
    </a></td><td>-</td><td>Paris - France</td><td>2.57K</td><td>4</td></tr><tr><td>125</td><td><a href="https://github.com/4ian">
        <img src="https://avatars.githubusercontent.com/u/1280130?s=72&u=18f856cccd8f77b611b17865cd8562165c49eeab&v=4" height="12" />
        <b>4ian</b>
    </a></td><td>@GDevelopApp</td><td>Paris, France</td><td>1.97K</td><td>4</td></tr><tr><td>126</td><td><a href="https://github.com/thomasync">
        <img src="https://avatars.githubusercontent.com/u/12927290?s=72&u=46e5c515789397dc2f91f4fe0a5cfa3f9ea40177&v=4" height="12" />
        <b>thomasync</b>
    </a></td><td>-</td><td>Montpellier, France</td><td>1.02K</td><td>4</td></tr><tr><td>127</td><td><a href="https://github.com/scraly">
        <img src="https://avatars.githubusercontent.com/u/2543381?s=72&u=d500ca96ff8a2a3f9b7bb300c71ed7e57449b072&v=4" height="12" />
        <b>scraly</b>
    </a></td><td>ovh</td><td>Toulouse</td><td>788</td><td>4</td></tr><tr><td>128</td><td><a href="https://github.com/gildas-lormeau">
        <img src="https://avatars.githubusercontent.com/u/396787?s=72&u=9c2aeab0c23cb368b4ae3df9e17bc1ba9d8a51ce&v=4" height="12" />
        <b>gildas-lormeau</b>
    </a></td><td>Capsule Code</td><td>Rennes, France</td><td>746</td><td>4</td></tr><tr><td>129</td><td><a href="https://github.com/fraxken">
        <img src="https://avatars.githubusercontent.com/u/4438263?s=72&u=5e2d0c11f001871b76e25dd3a96bd662d6a706ba&v=4" height="12" />
        <b>fraxken</b>
    </a></td><td>@OpenAlly</td><td>Paris</td><td>669</td><td>4</td></tr><tr><td>130</td><td><a href="https://github.com/belem2050">
        <img src="https://avatars.githubusercontent.com/u/90107382?s=72&u=cb38380a892623c8b69482dfe86bbcfb62e9ba85&v=4" height="12" />
        <b>belem2050</b>
    </a></td><td>@cmrobotics </td><td>France</td><td>407</td><td>4</td></tr><tr><td>131</td><td><a href="https://github.com/unixfox">
        <img src="https://avatars.githubusercontent.com/u/4016501?s=72&u=d113bfcd7a1bb996a29af9ace2c158a3c6289b40&v=4" height="12" />
        <b>unixfox</b>
    </a></td><td>-</td><td>Auvergne-Rhône-Alpes, France - Wallonia, Belgium</td><td>375</td><td>4</td></tr><tr><td>132</td><td><a href="https://github.com/NiLuJe">
        <img src="https://avatars.githubusercontent.com/u/111974?s=72&v=4" height="12" />
        <b>NiLuJe</b>
    </a></td><td>-</td><td>Paris, France</td><td>328</td><td>4</td></tr><tr><td>133</td><td><a href="https://github.com/ysbaddaden">
        <img src="https://avatars.githubusercontent.com/u/47380?s=72&v=4" height="12" />
        <b>ysbaddaden</b>
    </a></td><td>Ruby, JavaScript, Crystal</td><td>Nogent sur Oise, France</td><td>260</td><td>4</td></tr><tr><td>134</td><td><a href="https://github.com/tomalaforge">
        <img src="https://avatars.githubusercontent.com/u/30832608?s=72&u=a577fa5a2afc8e523c21cb0237b0c24adefeaedd&v=4" height="12" />
        <b>tomalaforge</b>
    </a></td><td>@rosahealth </td><td>Grenoble</td><td>257</td><td>4</td></tr><tr><td>135</td><td><a href="https://github.com/Gregwar">
        <img src="https://avatars.githubusercontent.com/u/367022?s=72&v=4" height="12" />
        <b>Gregwar</b>
    </a></td><td>-</td><td>Bordeaux, France</td><td>244</td><td>4</td></tr><tr><td>136</td><td><a href="https://github.com/leoetlino">
        <img src="https://avatars.githubusercontent.com/u/4209061?s=72&v=4" height="12" />
        <b>leoetlino</b>
    </a></td><td>-</td><td>Paris</td><td>229</td><td>4</td></tr><tr><td>137</td><td><a href="https://github.com/thierryvolpiatto">
        <img src="https://avatars.githubusercontent.com/u/1533939?s=72&v=4" height="12" />
        <b>thierryvolpiatto</b>
    </a></td><td>@emacs-helm </td><td>France</td><td>223</td><td>4</td></tr><tr><td>138</td><td><a href="https://github.com/abougouffa">
        <img src="https://avatars.githubusercontent.com/u/3716399?s=72&u=ad7a1e120fef1c19d7b7864ac183798de2711c59&v=4" height="12" />
        <b>abougouffa</b>
    </a></td><td>-</td><td>Paris, France</td><td>219</td><td>4</td></tr><tr><td>139</td><td><a href="https://github.com/arcanis">
        <img src="https://avatars.githubusercontent.com/u/1037931?s=72&u=b7caf9bbaa35c1114918e82b0a6d436f761dbec3&v=4" height="12" />
        <b>arcanis</b>
    </a></td><td>@datadog</td><td>Nantes, France</td><td>1.87K</td><td>3</td></tr><tr><td>140</td><td><a href="https://github.com/mxrch">
        <img src="https://avatars.githubusercontent.com/u/17338428?s=72&u=0d4467f33757a8ea5f3404b1e2c1897ceec3df1d&v=4" height="12" />
        <b>mxrch</b>
    </a></td><td>HideAndSec</td><td>France</td><td>1.67K</td><td>3</td></tr><tr><td>141</td><td><a href="https://github.com/ArthurSonzogni">
        <img src="https://avatars.githubusercontent.com/u/4759106?s=72&v=4" height="12" />
        <b>ArthurSonzogni</b>
    </a></td><td>-</td><td>Paris</td><td>789</td><td>3</td></tr><tr><td>142</td><td><a href="https://github.com/Naereen">
        <img src="https://avatars.githubusercontent.com/u/11994719?s=72&v=4" height="12" />
        <b>Naereen</b>
    </a></td><td>Lycée Kléber | Éducation Nationale</td><td>Strasbourg, France</td><td>588</td><td>3</td></tr><tr><td>143</td><td><a href="https://github.com/davidgohel">
        <img src="https://avatars.githubusercontent.com/u/4331618?s=72&v=4" height="12" />
        <b>davidgohel</b>
    </a></td><td>ArData</td><td>Paris</td><td>568</td><td>3</td></tr><tr><td>144</td><td><a href="https://github.com/SimonMarquis">
        <img src="https://avatars.githubusercontent.com/u/1921278?s=72&u=ace12a9fb3a0532f35285bce04898f7a7c97b2f9&v=4" height="12" />
        <b>SimonMarquis</b>
    </a></td><td>@leboncoin</td><td>Paris, France</td><td>530</td><td>3</td></tr><tr><td>145</td><td><a href="https://github.com/jvoisin">
        <img src="https://avatars.githubusercontent.com/u/325724?s=72&u=4446b76c0f4ebcbecb2678759f8d13817a67f85d&v=4" height="12" />
        <b>jvoisin</b>
    </a></td><td>-</td><td>France</td><td>468</td><td>3</td></tr><tr><td>146</td><td><a href="https://github.com/maziyarpanahi">
        <img src="https://avatars.githubusercontent.com/u/5762953?s=72&u=17070601b919833c70fc8cb61381822fdb987639&v=4" height="12" />
        <b>maziyarpanahi</b>
    </a></td><td>@ISCPIF @JohnSnowLabs</td><td>Paris, France</td><td>459</td><td>3</td></tr><tr><td>147</td><td><a href="https://github.com/garronej">
        <img src="https://avatars.githubusercontent.com/u/6702424?s=72&u=13f489f6f1b3fde3b4d6be6ddc503d2b95a0f5c7&v=4" height="12" />
        <b>garronej</b>
    </a></td><td>@InseeFrLab</td><td>Paris, France</td><td>426</td><td>3</td></tr><tr><td>148</td><td><a href="https://github.com/martinbonnin">
        <img src="https://avatars.githubusercontent.com/u/3974977?s=72&u=309f78046395d0c58ca6afbdb5ddf82c939ae66c&v=4" height="12" />
        <b>martinbonnin</b>
    </a></td><td>Apollo GraphQL</td><td>Paris, France</td><td>418</td><td>3</td></tr><tr><td>149</td><td><a href="https://github.com/cveneziani">
        <img src="https://avatars.githubusercontent.com/u/50518?s=72&u=c7b2a45bb87459c343007be7019dcac9eff24d2e&v=4" height="12" />
        <b>cveneziani</b>
    </a></td><td>Cecilitse</td><td>Nantes, France</td><td>400</td><td>3</td></tr><tr><td>150</td><td><a href="https://github.com/tgalopin">
        <img src="https://avatars.githubusercontent.com/u/1651494?s=72&u=ff057fae3d32e16223fbd1238811d5203111edb5&v=4" height="12" />
        <b>tgalopin</b>
    </a></td><td>@symfony  </td><td>France</td><td>377</td><td>3</td></tr><tr><td>151</td><td><a href="https://github.com/kylekatarnls">
        <img src="https://avatars.githubusercontent.com/u/5966783?s=72&v=4" height="12" />
        <b>kylekatarnls</b>
    </a></td><td>-</td><td>France</td><td>372</td><td>3</td></tr><tr><td>152</td><td><a href="https://github.com/mckenziearts">
        <img src="https://avatars.githubusercontent.com/u/14105989?s=72&u=9c230c3e470fd4ddbbec22005757893bfa61d3ef&v=4" height="12" />
        <b>mckenziearts</b>
    </a></td><td>@shopperlabs </td><td>Paris, France</td><td>340</td><td>3</td></tr><tr><td>153</td><td><a href="https://github.com/DeveloppeurPascal">
        <img src="https://avatars.githubusercontent.com/u/29439699?s=72&u=3b413495092a9927526da35a406812d44b64048b&v=4" height="12" />
        <b>DeveloppeurPascal</b>
    </a></td><td>-</td><td>Orléans, France</td><td>335</td><td>3</td></tr><tr><td>154</td><td><a href="https://github.com/llenotre">
        <img src="https://avatars.githubusercontent.com/u/66486624?s=72&u=7da2690ef9c531b23456974d6b33dd5c56f16119&v=4" height="12" />
        <b>llenotre</b>
    </a></td><td>CleverCloud</td><td>France</td><td>301</td><td>3</td></tr><tr><td>155</td><td><a href="https://github.com/mickaelandrieu">
        <img src="https://avatars.githubusercontent.com/u/1247388?s=72&u=0506c42c2e317634cd1b3bc2144e5981bc3ec7e4&v=4" height="12" />
        <b>mickaelandrieu</b>
    </a></td><td>SolvoLabs</td><td>Bordeaux, France</td><td>296</td><td>3</td></tr><tr><td>156</td><td><a href="https://github.com/aymanfarhat">
        <img src="https://avatars.githubusercontent.com/u/823713?s=72&u=5b4b31ed1641df460cebae7853788310d92e9f96&v=4" height="12" />
        <b>aymanfarhat</b>
    </a></td><td>@Google</td><td>Paris</td><td>288</td><td>3</td></tr><tr><td>157</td><td><a href="https://github.com/adrienjoly">
        <img src="https://avatars.githubusercontent.com/u/531781?s=72&u=889860aae8b88fb1e813a3b2c0134bf2eecc6ff1&v=4" height="12" />
        <b>adrienjoly</b>
    </a></td><td>-</td><td>Montreuil, Paris area, France</td><td>276</td><td>3</td></tr><tr><td>158</td><td><a href="https://github.com/jilljenn">
        <img src="https://avatars.githubusercontent.com/u/1729581?s=72&u=9a61a902e862f5f139a5c47339d462d1947b6cf2&v=4" height="12" />
        <b>jilljenn</b>
    </a></td><td>Inria</td><td>Paris</td><td>266</td><td>3</td></tr><tr><td>159</td><td><a href="https://github.com/greg0ire">
        <img src="https://avatars.githubusercontent.com/u/657779?s=72&u=96a0c076123934fb61c88da5b4d5b72b03dd69cb&v=4" height="12" />
        <b>greg0ire</b>
    </a></td><td>@ManoManoTech </td><td>Paris</td><td>247</td><td>3</td></tr><tr><td>160</td><td><a href="https://github.com/Makio64">
        <img src="https://avatars.githubusercontent.com/u/213351?s=72&v=4" height="12" />
        <b>Makio64</b>
    </a></td><td>Freelancer</td><td>Paris / Seoul / Tokyo </td><td>208</td><td>3</td></tr><tr><td>161</td><td><a href="https://github.com/tchak">
        <img src="https://avatars.githubusercontent.com/u/12428?s=72&v=4" height="12" />
        <b>tchak</b>
    </a></td><td>@betagouv</td><td>Paris</td><td>204</td><td>3</td></tr><tr><td>162</td><td><a href="https://github.com/angristan">
        <img src="https://avatars.githubusercontent.com/u/11699655?s=72&u=03a18584b40e4d9fd656b2120c3e75232960b9ac&v=4" height="12" />
        <b>angristan</b>
    </a></td><td>Backend Engineer @qonto</td><td>Paris</td><td>1.9K</td><td>2</td></tr><tr><td>163</td><td><a href="https://github.com/FaridSafi">
        <img src="https://avatars.githubusercontent.com/u/388375?s=72&u=a10567f0c2ae0b6a68a4d590c8fbdd40851a7d59&v=4" height="12" />
        <b>FaridSafi</b>
    </a></td><td>@LeReacteur</td><td>Paris, France</td><td>1.8K</td><td>2</td></tr><tr><td>164</td><td><a href="https://github.com/samber">
        <img src="https://avatars.githubusercontent.com/u/2951285?s=72&u=571c795227b4edbd29f027478346834f83a95076&v=4" height="12" />
        <b>samber</b>
    </a></td><td>-</td><td>Nantes, France</td><td>1.62K</td><td>2</td></tr><tr><td>165</td><td><a href="https://github.com/mnapoli">
        <img src="https://avatars.githubusercontent.com/u/720328?s=72&u=dc9333a6798810e941a0240566fe2a38a5f55bd7&v=4" height="12" />
        <b>mnapoli</b>
    </a></td><td>@brefphp </td><td>Lyon, France</td><td>1.45K</td><td>2</td></tr><tr><td>166</td><td><a href="https://github.com/Carreau">
        <img src="https://avatars.githubusercontent.com/u/335567?s=72&v=4" height="12" />
        <b>Carreau</b>
    </a></td><td>@Quansight-Labs</td><td>France</td><td>1.34K</td><td>2</td></tr><tr><td>167</td><td><a href="https://github.com/MoOx">
        <img src="https://avatars.githubusercontent.com/u/157534?s=72&u=7f6ef9c51c733eb73da5aec65c0a04149604ad10&v=4" height="12" />
        <b>MoOx</b>
    </a></td><td>Freelance at MoOx.io</td><td>Toulouse, France</td><td>1.25K</td><td>2</td></tr><tr><td>168</td><td><a href="https://github.com/Androz2091">
        <img src="https://avatars.githubusercontent.com/u/42497995?s=72&u=6f40d52a49652087722a05d55013645bca6745b6&v=4" height="12" />
        <b>Androz2091</b>
    </a></td><td>EPFL</td><td>France, Toulouse</td><td>1.25K</td><td>2</td></tr><tr><td>169</td><td><a href="https://github.com/rossant">
        <img src="https://avatars.githubusercontent.com/u/1942359?s=72&v=4" height="12" />
        <b>rossant</b>
    </a></td><td>@int-brain-lab @cortex-lab </td><td>Paris</td><td>1.03K</td><td>2</td></tr><tr><td>170</td><td><a href="https://github.com/LouisCAD">
        <img src="https://avatars.githubusercontent.com/u/6975237?s=72&v=4" height="12" />
        <b>LouisCAD</b>
    </a></td><td>Amande | Previously @Beepiz - SuiviDeFlotte.net </td><td>France</td><td>971</td><td>2</td></tr><tr><td>171</td><td><a href="https://github.com/mratsim">
        <img src="https://avatars.githubusercontent.com/u/22738317?s=72&u=2a86b7777fb12d4153cc9a805595445e81f7b537&v=4" height="12" />
        <b>mratsim</b>
    </a></td><td>-</td><td>Paris</td><td>920</td><td>2</td></tr><tr><td>172</td><td><a href="https://github.com/Shipow">
        <img src="https://avatars.githubusercontent.com/u/976175?s=72&u=159c3493dda0865aab7f00e8ab6f5fc53ea40b4d&v=4" height="12" />
        <b>Shipow</b>
    </a></td><td>UX Devsigner @Algolia</td><td>Paris – SF</td><td>869</td><td>2</td></tr><tr><td>173</td><td><a href="https://github.com/NathanLovato">
        <img src="https://avatars.githubusercontent.com/u/12694995?s=72&u=e4abd5fa8b74c82c57955f490da199a1ac7b9d8c&v=4" height="12" />
        <b>NathanLovato</b>
    </a></td><td>GDQuest</td><td>France</td><td>859</td><td>2</td></tr><tr><td>174</td><td><a href="https://github.com/eliemichel">
        <img src="https://avatars.githubusercontent.com/u/5802849?s=72&v=4" height="12" />
        <b>eliemichel</b>
    </a></td><td>@adobe</td><td>Paris</td><td>856</td><td>2</td></tr><tr><td>175</td><td><a href="https://github.com/jasonchampagne">
        <img src="https://avatars.githubusercontent.com/u/979506?s=72&u=2bdb20651e0cc5e6b8e751521638a003fb7305a9&v=4" height="12" />
        <b>jasonchampagne</b>
    </a></td><td>EvoluNoob</td><td>France</td><td>835</td><td>2</td></tr><tr><td>176</td><td><a href="https://github.com/Canop">
        <img src="https://avatars.githubusercontent.com/u/617006?s=72&u=d37ffb41ad4ef32e831e315ef5316b51e57c2597&v=4" height="12" />
        <b>Canop</b>
    </a></td><td>-</td><td>Lyon, France</td><td>619</td><td>2</td></tr><tr><td>177</td><td><a href="https://github.com/solygambas">
        <img src="https://avatars.githubusercontent.com/u/51904909?s=72&u=8b618cebbc76985e16a93b1ac34e80b5f4a80a60&v=4" height="12" />
        <b>solygambas</b>
    </a></td><td>Freelancer</td><td>France</td><td>604</td><td>2</td></tr><tr><td>178</td><td><a href="https://github.com/ccadic">
        <img src="https://avatars.githubusercontent.com/u/6250103?s=72&u=9c651ca426bbca33a9bf3201515fd70c8f672af8&v=4" height="12" />
        <b>ccadic</b>
    </a></td><td>Morpheans</td><td>France, Europe</td><td>551</td><td>2</td></tr><tr><td>179</td><td><a href="https://github.com/gdalle">
        <img src="https://avatars.githubusercontent.com/u/22795598?s=72&u=f2e448edb1e79720c999ccd5282d1124c9613ef3&v=4" height="12" />
        <b>gdalle</b>
    </a></td><td>École des Ponts</td><td>Paris</td><td>548</td><td>2</td></tr><tr><td>180</td><td><a href="https://github.com/Litarvan">
        <img src="https://avatars.githubusercontent.com/u/8712146?s=72&u=18f92332d51cc7b4b0fc26fcfdcc4dd2727c6157&v=4" height="12" />
        <b>Litarvan</b>
    </a></td><td>Stockly</td><td>Paris, France</td><td>541</td><td>2</td></tr><tr><td>181</td><td><a href="https://github.com/mrkkrp">
        <img src="https://avatars.githubusercontent.com/u/8165792?s=72&u=d1f6d1a5e2a1f73d8f3255172d3fd2a1b5091e02&v=4" height="12" />
        <b>mrkkrp</b>
    </a></td><td>@tweag</td><td>Château-Thierry, France</td><td>469</td><td>2</td></tr><tr><td>182</td><td><a href="https://github.com/VonC">
        <img src="https://avatars.githubusercontent.com/u/79478?s=72&v=4" height="12" />
        <b>VonC</b>
    </a></td><td>-</td><td>France</td><td>461</td><td>2</td></tr><tr><td>183</td><td><a href="https://github.com/luislavena">
        <img src="https://avatars.githubusercontent.com/u/4182?s=72&u=baab980311df526d41631de7362837955f474076&v=4" height="12" />
        <b>luislavena</b>
    </a></td><td>@area17 </td><td>Paris, France</td><td>413</td><td>2</td></tr><tr><td>184</td><td><a href="https://github.com/dmnsgn">
        <img src="https://avatars.githubusercontent.com/u/1636460?s=72&u=203ff00cf5097208e666acf35ef4a87304ba0d35&v=4" height="12" />
        <b>dmnsgn</b>
    </a></td><td>@variablestudio  </td><td>London / Paris</td><td>405</td><td>2</td></tr><tr><td>185</td><td><a href="https://github.com/arnaudgiuliani">
        <img src="https://avatars.githubusercontent.com/u/2360688?s=72&u=651f0b632e8dbb2f6d09857d71caf7e30d3af58f&v=4" height="12" />
        <b>arnaudgiuliani</b>
    </a></td><td>Kotzilla</td><td>France</td><td>394</td><td>2</td></tr><tr><td>186</td><td><a href="https://github.com/JulienPalard">
        <img src="https://avatars.githubusercontent.com/u/239510?s=72&u=82a97cf72dd9dd061ec34e653c6e50eee0704c18&v=4" height="12" />
        <b>JulienPalard</b>
    </a></td><td>-</td><td>Paris, France</td><td>388</td><td>2</td></tr><tr><td>187</td><td><a href="https://github.com/RobinDavid">
        <img src="https://avatars.githubusercontent.com/u/1887063?s=72&u=0a61b1b95de647e0392b3596d6d451dc1e05401e&v=4" height="12" />
        <b>RobinDavid</b>
    </a></td><td>Quarkslab</td><td>Paris, France</td><td>383</td><td>2</td></tr><tr><td>188</td><td><a href="https://github.com/nox">
        <img src="https://avatars.githubusercontent.com/u/123095?s=72&v=4" height="12" />
        <b>nox</b>
    </a></td><td>-</td><td>Paris, France</td><td>365</td><td>2</td></tr><tr><td>189</td><td><a href="https://github.com/mpromonet">
        <img src="https://avatars.githubusercontent.com/u/1367630?s=72&u=656527786957614d8cf8dec22644fe40dadbbe6f&v=4" height="12" />
        <b>mpromonet</b>
    </a></td><td>-</td><td>France</td><td>358</td><td>2</td></tr><tr><td>190</td><td><a href="https://github.com/kelu124">
        <img src="https://avatars.githubusercontent.com/u/2452634?s=72&u=55b50a96ed1143c6cf84704446464eb7c069daf5&v=4" height="12" />
        <b>kelu124</b>
    </a></td><td>-</td><td>Paris</td><td>343</td><td>2</td></tr><tr><td>191</td><td><a href="https://github.com/MichaelMure">
        <img src="https://avatars.githubusercontent.com/u/294669?s=72&u=68632a70dd599298a95e9476d439f5320d07e216&v=4" height="12" />
        <b>MichaelMure</b>
    </a></td><td>@INFURA </td><td>France</td><td>316</td><td>2</td></tr><tr><td>192</td><td><a href="https://github.com/sdpython">
        <img src="https://avatars.githubusercontent.com/u/4695832?s=72&u=9a0581b7da03088ea4ad3a37c5b680a64d864f33&v=4" height="12" />
        <b>sdpython</b>
    </a></td><td>@ENSAE</td><td>paris</td><td>301</td><td>2</td></tr><tr><td>193</td><td><a href="https://github.com/privefl">
        <img src="https://avatars.githubusercontent.com/u/11161036?s=72&u=bd883039d7f52cd9f97ade17949dab9487a2ccf4&v=4" height="12" />
        <b>privefl</b>
    </a></td><td>National Center for Register-based Research (NCRR, Aarhus University)</td><td>Aarhus, Denmark // Lyon, France</td><td>296</td><td>2</td></tr><tr><td>194</td><td><a href="https://github.com/mockersf">
        <img src="https://avatars.githubusercontent.com/u/8672791?s=72&u=6350847888b0006d335bc98ca32a5359389d26b5&v=4" height="12" />
        <b>mockersf</b>
    </a></td><td>-</td><td>France</td><td>284</td><td>2</td></tr><tr><td>195</td><td><a href="https://github.com/aiekick">
        <img src="https://avatars.githubusercontent.com/u/1434736?s=72&u=41204d71f1aa785ef74f57c0987bc3ae7c32f1f7&v=4" height="12" />
        <b>aiekick</b>
    </a></td><td>-</td><td>France</td><td>282</td><td>2</td></tr><tr><td>196</td><td><a href="https://github.com/abique">
        <img src="https://avatars.githubusercontent.com/u/31200?s=72&u=19e037bfe18806c410947eba3bab6d8e70c4654d&v=4" height="12" />
        <b>abique</b>
    </a></td><td>@bitwig </td><td>Sisteron, France</td><td>281</td><td>2</td></tr><tr><td>197</td><td><a href="https://github.com/Supercip971">
        <img src="https://avatars.githubusercontent.com/u/30377970?s=72&u=ba8011bdb63e4af8bc5253884aeb3bf7fef5717d&v=4" height="12" />
        <b>Supercip971</b>
    </a></td><td>-</td><td>France (Lyon)</td><td>278</td><td>2</td></tr><tr><td>198</td><td><a href="https://github.com/Barbapapazes">
        <img src="https://avatars.githubusercontent.com/u/45267552?s=72&u=b4b5ab12a72fb2d26c2c3b8197033324be374956&v=4" height="12" />
        <b>Barbapapazes</b>
    </a></td><td>-</td><td>Paris</td><td>277</td><td>2</td></tr><tr><td>199</td><td><a href="https://github.com/mandubian">
        <img src="https://avatars.githubusercontent.com/u/77193?s=72&v=4" height="12" />
        <b>mandubian</b>
    </a></td><td>Job Free (Paris)</td><td>Paris</td><td>275</td><td>2</td></tr><tr><td>200</td><td><a href="https://github.com/ManUtopiK">
        <img src="https://avatars.githubusercontent.com/u/188172?s=72&v=4" height="12" />
        <b>ManUtopiK</b>
    </a></td><td>-</td><td>France</td><td>271</td><td>2</td></tr>
    </tbody>
</table>

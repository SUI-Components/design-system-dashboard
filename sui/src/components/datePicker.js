import React from 'react'

export default function DatePicker() {
  const value = ''
  const dataPerWeek = [
    {
      value: '/scmspain/design-systems/sui/220213/index.html',
      label: 'Week 7 · 220213'
    },
    {
      value: '/scmspain/design-systems/sui/220206/index.html',
      label: 'Week 6 · 220206'
    },
    {
      value: '/scmspain/design-systems/sui/220130/index.html',
      label: 'Week 5 · 220130'
    },
    {
      value: '/scmspain/design-systems/sui/220123/index.html',
      label: 'Week 4 · 220123'
    },
    {
      value: '/scmspain/design-systems/sui/220116/index.html',
      label: 'Week 3 · 220116'
    },
    {
      value: '/scmspain/design-systems/sui/220109/index.html',
      label: 'Week 2 · 220109'
    },
    {
      value: '/scmspain/design-systems/sui/220102/index.html',
      label: 'Week 1 · 220102'
    },
    {
      value: '/scmspain/design-systems/sui/221226/index.html',
      label: 'Week 52 · 221226'
    },
    {
      value: '/scmspain/design-systems/sui/221219/index.html',
      label: 'Week 51 · 221219'
    },
    {
      value: '/scmspain/design-systems/sui/221212/index.html',
      label: 'Week 50 · 221212'
    },
    {
      value: '/scmspain/design-systems/sui/221205/index.html',
      label: 'Week 49 · 221205'
    },
    {
      value: '/scmspain/design-systems/sui/221128/index.html',
      label: 'Week 48 · 221128'
    },
    {
      value: '/scmspain/design-systems/sui/221121/index.html',
      label: 'Week 47 · 221121'
    },
    {
      value: '/scmspain/design-systems/sui/221114/index.html',
      label: 'Week 46 · 221114'
    },
    {
      value: '/scmspain/design-systems/sui/221107/index.html',
      label: 'Week 45 · 221107'
    },
    {
      value: '/scmspain/design-systems/sui/221031/index.html',
      label: 'Week 44 · 221031'
    },
    {
      value: '/scmspain/design-systems/sui/221024/index.html',
      label: 'Week 43 · 221024'
    },
    {
      value: '/scmspain/design-systems/sui/221017/index.html',
      label: 'Week 42 · 221017'
    },
    {
      value: '/scmspain/design-systems/sui/221010/index.html',
      label: 'Week 41 · 221010'
    },
    {
      value: '/scmspain/design-systems/sui/221003/index.html',
      label: 'Week 40 · 221003'
    },
    {
      value: '/scmspain/design-systems/sui/220926/index.html',
      label: 'Week 39 · 220926'
    },
    {
      value: '/scmspain/design-systems/sui/220919/index.html',
      label: 'Week 38 · 220919'
    },
    {
      value: '/scmspain/design-systems/sui/220912/index.html',
      label: 'Week 37 · 220912'
    },
    {
      value: '/scmspain/design-systems/sui/220905/index.html',
      label: 'Week 36 · 220905'
    },
    {
      value: '/scmspain/design-systems/sui/220829/index.html',
      label: 'Week 35 · 220829'
    },
    {
      value: '/scmspain/design-systems/sui/220822/index.html',
      label: 'Week 34 · 220822'
    },
    {
      value: '/scmspain/design-systems/sui/220815/index.html',
      label: 'Week 33 · 220815'
    },
    {
      value: '/scmspain/design-systems/sui/220808/index.html',
      label: 'Week 32 · 220808'
    },
    {
      value: '/scmspain/design-systems/sui/220801/index.html',
      label: 'Week 31 · 220801'
    },
    {
      value: '/scmspain/design-systems/sui/220725/index.html',
      label: 'Week 30 · 220725'
    },
    {
      value: '/scmspain/design-systems/sui/220718/index.html',
      label: 'Week 29 · 220718'
    },
    {
      value: '/scmspain/design-systems/sui/220711/index.html',
      label: 'Week 28 · 220711'
    },
    {
      value: '/scmspain/design-systems/sui/220706/index.html',
      label: 'Week 27 · 220706'
    },
    {
      value: '/scmspain/design-systems/sui/220629/index.html',
      label: 'Week 26 · 220629'
    },
    {
      value: '/scmspain/design-systems/sui/220622/index.html',
      label: 'Week 25 · 220622'
    },
    {
      value: '/scmspain/design-systems/sui/220615/index.html',
      label: 'Week 24 · 220615'
    },
    {
      value: '/scmspain/design-systems/sui/220608/index.html',
      label: 'Week 23 · 220608'
    },
    {
      value: '/scmspain/design-systems/sui/220418/index.html',
      label: 'Week 22 · 220418'
    },
    {
      value: '/scmspain/design-systems/sui/220418/index.html',
      label: 'Week 21 · 220418'
    },
    {
      value: '/scmspain/design-systems/sui/220418/index.html',
      label: 'Week 20 · 220418'
    },
    {
      value: '/scmspain/design-systems/sui/220418/index.html',
      label: 'Week 19 · 220418'
    },
    {
      value: '/scmspain/design-systems/sui/220418/index.html',
      label: 'Week 18 · 220418'
    },
    {
      value: '/scmspain/design-systems/sui/220418/index.html',
      label: 'Week 17 · 220418'
    },
    {
      value: '/scmspain/design-systems/sui/220418/index.html',
      label: 'Week 16 · 220418'
    },
    {
      value: '/scmspain/design-systems/sui/220411/index.html',
      label: 'Week 15 · 220411'
    },
    {
      value: '/scmspain/design-systems/sui/220328/index.html',
      label: 'Week 14 · 220328'
    },
    {
      value: '/scmspain/design-systems/sui/220321/index.html',
      label: 'Week 13 · 220321'
    },
    {
      value: '/scmspain/design-systems/sui/220314/index.html',
      label: 'Week 12 · 220314'
    },
    {
      value: '/scmspain/design-systems/sui/220307/index.html',
      label: 'Week 11 · 220307'
    },
    {
      value: '/scmspain/design-systems/sui/220228/index.html',
      label: 'Week 10 · 220228'
    },
    {
      value: '/scmspain/design-systems/sui/220221/index.html',
      label: 'Week 09 · 220221'
    },
    {
      value: '/scmspain/design-systems/sui/220214/index.html',
      label: 'Week 08 · 220214'
    },
    {
      value: '/scmspain/design-systems/sui/220214/index.html',
      label: 'Week 07 · 220214'
    },
    {
      value: '/scmspain/design-systems/sui/220207/index.html',
      label: 'Week 06 · 220207'
    },
    {
      value: '/scmspain/design-systems/sui/220131/index.html',
      label: 'Week 05 · 220131'
    },
    {
      value: '/scmspain/design-systems/sui/220124/index.html',
      label: 'Week 04 · 220124'
    },
    {
      value: '/scmspain/design-systems/sui/220117/index.html',
      label: 'Week 03 · 220117'
    },
    {
      value: '/scmspain/design-systems/sui/220110/index.html',
      label: 'Week 02 · 220110'
    },
    {
      value: '/scmspain/design-systems/sui/220103/index.html',
      label: 'Week 01 · 220103'
    },
    {
      value: '/scmspain/design-systems/sui/211220/index.html',
      label: 'Week 51 · 211220'
    },
    {
      value: '/scmspain/design-systems/sui/211213/index.html',
      label: 'Week 50 · 211213'
    },
    {
      value: '/scmspain/design-systems/sui/211206/index.html',
      label: 'Week 49 · 211206'
    },
    {
      value: '/scmspain/design-systems/sui/211129/index.html',
      label: 'Week 48 · 211129'
    },
    {
      value: '/scmspain/design-systems/sui/211122/index.html',
      label: 'Week 47 · 211122'
    },
    {
      value: '/scmspain/design-systems/sui/211115/index.html',
      label: 'Week 46 · 211115'
    },
    {
      value: '/scmspain/design-systems/sui/211110/index.html',
      label: 'Week 45 · 211110'
    },
    {
      value: '/scmspain/design-systems/sui/211103/index.html',
      label: 'Week 44 · 211103'
    },
    {
      value: '/scmspain/design-systems/sui/211025/index.html',
      label: 'Week 43 · 211025'
    },
    {
      value: '/scmspain/design-systems/sui/211018/index.html',
      label: 'Week 42 · 211018'
    },
    {
      value: '/scmspain/design-systems/sui/211011/index.html',
      label: 'Week 41 · 211011'
    },
    {
      value: '/scmspain/design-systems/sui/211004/index.html',
      label: 'Week 40 · 211004'
    },
    {
      value: '/scmspain/design-systems/sui/210927/index.html',
      label: 'Week 39 · 210927'
    },
    {
      value: '/scmspain/design-systems/sui/210920/index.html',
      label: 'Week 38 · 210920'
    },
    {
      value: '/scmspain/design-systems/sui/210913/index.html',
      label: 'Week 37· 210913'
    },
    {
      value: '/scmspain/design-systems/sui/210907/index.html',
      label: 'Week 36· 210907'
    },
    {
      value: '/scmspain/design-systems/sui/210830/index.html',
      label: 'Week 35· 210830'
    },
    {
      value: '/scmspain/design-systems/sui/210823/index.html',
      label: 'Week 34· 210823'
    },
    {
      value: '/scmspain/design-systems/sui/210816/index.html',
      label: 'Week 33· 210816'
    },
    {
      value: '/scmspain/design-systems/sui/210809/index.html',
      label: 'Week 32· 210809'
    },
    {
      value: '/scmspain/design-systems/sui/210802/index.html',
      label: 'Week 31· 210802'
    },
    {
      value: '/scmspain/design-systems/sui/210726/index.html',
      label: 'Week 30· 210726'
    },
    {
      value: '/scmspain/design-systems/sui/210719/index.html',
      label: 'Week 29· 210719'
    },
    {
      value: '/scmspain/design-systems/sui/210712/index.html',
      label: 'Week 28· 210712'
    },
    {
      value: '/scmspain/design-systems/sui/210705/index.html',
      label: 'Week 27· 210705'
    },
    {
      value: '/scmspain/design-systems/sui/210628/index.html',
      label: 'Week 26· 210628'
    },
    {
      value: '/scmspain/design-systems/sui/210621/index.html',
      label: 'Week 25· 210621'
    },
    {
      value: '/scmspain/design-systems/sui/210614/index.html',
      label: 'Week 24· 210614'
    },
    {
      value: '/scmspain/design-systems/sui/210607/index.html',
      label: 'Week 23· 210607'
    },
    {
      value: '/scmspain/design-systems/sui/210531/index.html',
      label: 'Week 22· 210531'
    },
    {
      value: '/scmspain/design-systems/sui/210524/index.html',
      label: 'Week 21· 210524'
    },
    {
      value: '/scmspain/design-systems/sui/210517/index.html',
      label: 'Week 20· 210517'
    },
    {
      value: '/scmspain/design-systems/sui/210510/index.html',
      label: 'Week 19· 210510'
    },
    {
      value: '/scmspain/design-systems/sui/210503/index.html',
      label: 'Week 18· 210503'
    },
    {
      value: '/scmspain/design-systems/sui/210426/index.html',
      label: 'Week 17· 210426'
    },
    {
      value: '/scmspain/design-systems/sui/210419/index.html',
      label: 'Week 16· 210419'
    },
    {
      value: '/scmspain/design-systems/sui/210412/index.html',
      label: 'Week 15· 210412'
    },
    {
      value: '/scmspain/design-systems/sui/210405/index.html',
      label: 'Week 14· 210405'
    },
    {
      value: '/scmspain/design-systems/sui/210329/index.html',
      label: 'Week 13· 210329'
    },
    {
      value: '/scmspain/design-systems/sui/210322/index.html',
      label: 'Week 12· 210322'
    },
    {
      value: '/scmspain/design-systems/sui/210315/index.html',
      label: 'Week 11· 210315'
    },
    {
      value: '/scmspain/design-systems/sui/210308/index.html',
      label: 'Week 10· 210308'
    },
    {
      value: '/scmspain/design-systems/sui/210301/index.html',
      label: 'Week 9· 210301'
    },
    {
      value: '/scmspain/design-systems/sui/210222/index.html',
      label: 'Week 8· 210222'
    },
    {
      value: '/scmspain/design-systems/sui/210215/index.html',
      label: 'Week 7· 210215'
    },
    {
      value: '/scmspain/design-systems/sui/210208/index.html',
      label: 'Week 6· 210208'
    },
    {
      value: '/scmspain/design-systems/sui/210201/index.html',
      label: 'Week 5· 210201'
    },
    {
      value: '/scmspain/design-systems/sui/210125/index.html',
      label: 'Week 4· 210125'
    },
    {
      value: '/scmspain/design-systems/sui/210118/index.html',
      label: 'Week 3· 210118'
    },
    {
      value: '/scmspain/design-systems/sui/210111/index.html',
      label: 'Week 2· 210111'
    },
    {
      value: '/scmspain/design-systems/sui/210104/index.html',
      label: 'Week 1· 210104'
    },
    {
      value: '/scmspain/design-systems/sui/201228/index.html',
      label: 'Week 53· 201228'
    },
    {
      value: '/scmspain/design-systems/sui/201221/index.html',
      label: 'Week 52· 201221'
    },
    {
      value: '/scmspain/design-systems/sui/201214/index.html',
      label: 'Week 51· 201214'
    },
    {
      value: '/scmspain/design-systems/sui/201207/index.html',
      label: 'Week 50· 201207'
    },
    {
      value: '/scmspain/design-systems/sui/201201/index.html',
      label: 'Week 49· 201201'
    },
    {
      value: '/scmspain/design-systems/sui/201123/index.html',
      label: 'Week 48· 201123'
    },
    {
      value: '/scmspain/design-systems/sui/201116/index.html',
      label: 'Week 47· 201116'
    },
    {
      value: '/scmspain/design-systems/sui/201109/index.html',
      label: 'Week 46 · 201109'
    },
    {
      value: '/scmspain/design-systems/sui/201102/index.html',
      label: 'Week 45 · 201102'
    },
    {
      value: '/scmspain/design-systems/sui/201026/index.html',
      label: 'Week 44 · 201026'
    },
    {
      value: '/scmspain/design-systems/sui/201019/index.html',
      label: 'Week 43 · 201019'
    },
    {
      value: '/scmspain/design-systems/sui/201012/index.html',
      label: 'Week 42 · 201012'
    },
    {
      value: '/scmspain/design-systems/sui/201005/index.html',
      label: 'Week 41 · 201005'
    },
    {
      value: '/scmspain/design-systems/sui/200928/index.html',
      label: 'Week 40 · 200928'
    },
    {
      value: '/scmspain/design-systems/sui/200921/index.html',
      label: 'Week 39 · 200921'
    },
    {
      value: '/scmspain/design-systems/sui/200914/index.html',
      label: 'Week 38 · 200914'
    },
    {
      value: '/scmspain/design-systems/sui/200907/index.html',
      label: 'Week 37 · 200907'
    },
    {
      value: '/scmspain/design-systems/sui/200831/index.html',
      label: 'Week 36 · 200831'
    },
    {
      value: '/scmspain/design-systems/sui/200824/index.html',
      label: 'Week 35 · 200824'
    },
    {
      value: '/scmspain/design-systems/sui/200817/index.html',
      label: 'Week 34 · 200817'
    },

    {
      value: '/scmspain/design-systems/sui/200810/index.html',
      label: 'Week 33 · 200810'
    },
    {
      value: '/scmspain/design-systems/sui/200803/index.html',
      label: 'Week 32 · 200803'
    },
    {
      value: '/scmspain/design-systems/sui/200727/index.html',
      label: 'Week 31 · 200727'
    },
    {
      value: '/scmspain/design-systems/sui/200720/index.html',
      label: 'Week 30 · 200720'
    },
    {
      value: '/scmspain/design-systems/sui/200713/index.html',
      label: 'Week 29 · 200713'
    },
    {
      value: '/scmspain/design-systems/sui/200706/index.html',
      label: 'Week 28 · 200706'
    },
    {
      value: '/scmspain/design-systems/sui/200629/index.html',
      label: 'Week 27 · 200629'
    },
    {
      value: '/scmspain/design-systems/sui/200622/index.html',
      label: 'Week 26 · 200622'
    },
    {
      value: '/scmspain/design-systems/sui/200615/index.html',
      label: 'Week 25 · 200615'
    },
    {
      value: '/scmspain/design-systems/sui/200608/index.html',
      label: 'Week 24 · 200608'
    },
    {
      value: '/scmspain/design-systems/sui/200601/index.html',
      label: 'Week 23 · 200601'
    },
    {
      value: '/scmspain/design-systems/sui/200525/index.html',
      label: 'Week 22 · 200525'
    },
    {
      value: '/scmspain/design-systems/sui/200518/index.html',
      label: 'Week 21 · 200518'
    },
    {
      value: '/scmspain/design-systems/sui/200511/index.html',
      label: 'Week 20 · 200511'
    },
    {
      value: '/scmspain/design-systems/sui/200504/index.html',
      label: 'Week 19 · 200504'
    },
    {
      value: '/scmspain/design-systems/sui/200427/index.html',
      label: 'Week 18 · 200427'
    },
    {
      value: '/scmspain/design-systems/sui/200420/index.html',
      label: 'Week 17 · 200420'
    },
    {
      value: '/scmspain/design-systems/sui/200413/index.html',
      label: 'Week 16 · 200413'
    },
    {
      value: '/scmspain/design-systems/sui/200406/index.html',
      label: 'Week 15 · 200406'
    },
    {
      value: '/scmspain/design-systems/sui/200330/index.html',
      label: 'Week 14 · 200330'
    },
    {
      value: '/scmspain/design-systems/sui/200324/index.html',
      label: 'Week 13 · 200324'
    },
    {
      value: '/scmspain/design-systems/sui/200316/index.html',
      label: 'Week 12 · 200316'
    },
    {
      value: '/scmspain/design-systems/sui/200309/index.html',
      label: 'Week 11 · 200309'
    },
    {
      value: '/scmspain/design-systems/sui/200302/index.html',
      label: 'Week 10 · 200302'
    },
    {
      value: '/scmspain/design-systems/sui/200224/index.html',
      label: 'Week 9 · 200224'
    },
    {
      value: '/scmspain/design-systems/sui/200217/index.html',
      label: 'Week 8 · 200217'
    },
    {
      value: '/scmspain/design-systems/sui/200210/index.html',
      label: 'Week 7 · 200210'
    },
    {
      value: '/scmspain/design-systems/sui/200203/index.html',
      label: 'Week 6 · 200203'
    },
    {
      value: '/scmspain/design-systems/sui/200127/index.html',
      label: 'Week 5 · 200127'
    },
    {
      value: '/scmspain/design-systems/sui/200120/index.html',
      label: 'Week 4 · 200120'
    },
    {
      value: '/scmspain/design-systems/sui/200113/index.html',
      label: 'Week 3 · 200113'
    },
    {
      value: '/scmspain/design-systems/sui/200106/index.html',
      label: 'Week 2 · 200106'
    },
    {
      value: '/scmspain/design-systems/sui/191230/index.html',
      label: 'Week 1 · 191230'
    },
    {
      value: '/scmspain/design-systems/sui/191223/index.html',
      label: 'Week 52 · 191223'
    },
    {
      value: '/scmspain/design-systems/sui/191216/index.html',
      label: 'Week 51 · 191216'
    },
    {
      value: '/scmspain/design-systems/sui/191209/index.html',
      label: 'Week 50 · 191209'
    },
    {
      value: '/scmspain/design-systems/sui/191202/index.html',
      label: 'Week 49 · 191202'
    },
    {
      value: '/scmspain/design-systems/sui/191125/index.html',
      label: 'Week 48 · 191125'
    },
    {
      value: '/scmspain/design-systems/sui/191118/index.html',
      label: 'Week 47 · 191118'
    },
    {
      value: '/scmspain/design-systems/sui/191111/index.html',
      label: 'Week 46 · 191111'
    },
    {
      value: '/scmspain/design-systems/sui/191104/index.html',
      label: 'Week 45 · 191104'
    },
    {
      value: '/scmspain/design-systems/sui/191028/index.html',
      label: 'Week 44 · 191028'
    },
    {
      value: '/scmspain/design-systems/sui/191021/index.html',
      label: 'Week 43 · 191021'
    },
    {
      value: '/scmspain/design-systems/sui/191014/index.html',
      label: 'Week 42 · 191014'
    },
    {
      value: '/scmspain/design-systems/sui/191007/index.html',
      label: 'Week 41 · 191007'
    }
  ]

  function handleChange(e) {
    location.href = e.currentTarget.value
  }

  return (
    <>
      <div className="this-Week">
        <select value={value} onChange={handleChange} name="Weeks">
          <option value="/scmspain/design-systems/sui/index.html">
            Current Week
          </option>

          {dataPerWeek.map(({label, value}) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}

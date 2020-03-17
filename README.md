# react-examination

Building a user friendly interface with React.js, Redux/Mobx and LESS/SCSS.

## Steps

- Step1: clone this repository to your account.
- Step2: finish the following tasks.
- Step3: Send Pull Request to repository *bridge5/react-examination*.

## Tasks

- Please add pagination support to the list when there are more than *5* entries.
- Please add option to select position of a player SF/PG and display it.
- Please add tests using your preferred testing tool (jest, enzyme, mocha, ...).
- Please add some features that could help you show your personal abilities.

## Objectives

- Please check for small things like syntax errors, since details matter.
- Please deliver something that works, non working project is an automatic disqualification.

## 步骤

- 第一步：克隆这个仓库到你自己的账号里。
- 第二步：完成下列任务。
- 第三步：发送 * Pull Request*  到仓库 *bridge5/react-examination*。


## 说明:
- 测试用例用的少，之前在vue demo中写过，没有实际运用到项目中。
- 分页几种情况:
    1. 当在第一页时，少于5条则不显示分页
    2. 当在第一页时，0条则显示暂无数据
    3. 当只有6条时，第二页删除一项回到第一页
- 点击按钮'SF在前'则排序SF在前
- 点击按钮'PG在前'则排序PG在前
- 点击按钮'sort star'则排序star在前
import icon from "../assets/imprint-icon-white.png";
import { Left } from "@icon-park/react";

function PrivatePolicy() {
  return (
    <div className="flex flex-col text-white  bg-neutral-900 min-h-screen">
      <div className="flex h-[64px] py-[12px] px-[16px] md:px-[64px] w-full items-center justify-between">
        <div className="flex flex-row">
          <a href="/imprint">
            <Left theme="outline" size="32" fill="#fff"/>
          </a>
          <img className="ml-4 h-[32px]" src={icon} alt="screen short" />
        </div>
        <div className="flex flex-row gap-2"></div>
      </div>
      <div className="w-full flex p-[24px] md:p-[64px] justify-center">
        <div className="flex flex-col gap-4 max-w-[1024px]">
          <h1 className="inline-block text-2xl sm:text-3xl font-extrabold tracking-tight">
            企途隐私政策
          </h1>
          <p>
            欢迎使用“企途”旅行攻略工具（以下简称“本应用”）。我们高度重视用户隐私保护，特此说明本应用的数据处理方式，请您仔细阅读。
          </p>
          <h2 className="inline-block text-xl sm:text-2xl font-extrabold tracking-tight">
            1. 个人信息收集声明
          </h2>
          <p>本应用无需且不会收集任何个人信息，包括但不限于：</p>
          <ul className="list-disc">
            <li>无需用户注册或登录；</li>
            <li>不获取姓名、手机号、邮箱等身份信息；</li>
            <li>不采集地理位置、设备标识符（如IMEI、MAC地址）；</li>
            <li>无第三方账号绑定或社交功能。</li>
          </ul>

          <h2 className="inline-block text-xl sm:text-2xl font-extrabold tracking-tight">
            2. 数据存储与使用
          </h2>
          <ul className="list-disc">
            <li>
              本地化运行：所有旅行攻略数据（如行程、笔记）仅保存在您的设备本地，不上传至任何服务器或云端。
            </li>
            <li>
              数据安全：建议您妥善保管设备，避免丢失或越权访问导致数据泄露。本应用不主动加密本地数据，您需自行确保设备安全。
            </li>
            <li>
              数据删除：卸载本应用将清除所有本地数据，请提前备份重要内容。
            </li>
          </ul>
          <h2 className="inline-block text-xl sm:text-2xl font-extrabold tracking-tight">
            3. 权限说明
          </h2>
          <p>本应用仅在必要时申请以下权限，且均不涉及信息上传：</p>
          <ul className="list-disc">
            <li>
              其他权限：访问网络、获取用户位置等权限，仅用于提供基础功能，不会上传用户数据。
            </li>
          </ul>
          <h2 className="inline-block text-xl sm:text-2xl font-extrabold tracking-tight">
            4. 第三方服务与数据共享
          </h2>
          <p>本应用仅在必要时申请以下权限，且均不涉及信息上传：</p>
          <ul className="list-disc">
            <li>无嵌入SDK：本应用未集成任何第三方广告、统计或社交SDK。</li>
            <li>
              零数据共享：您的数据仅存储于本地，不会与任何个人、企业或机构共享。
            </li>
          </ul>
          <h2 className="inline-block text-xl sm:text-2xl font-extrabold tracking-tight">
            5. 隐私政策变更
          </h2>
          <p>
            若政策内容更新，我们将在应用内或官网公示修订版本，请您定期查阅。
          </p>
          <p>
            <strong>生效日期：2025-01-01</strong>
            <strong>最后更新日期：2025-02-09</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivatePolicy;
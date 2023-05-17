import React from "react";
import CommonForm from "../CommonForm/CommonForm";
import { formForCall } from "../../info";

const CommonPage = (props) => {
  return (
    <div className="common-page-container md:flex justify-evenly flex-wrap md:mt-64 mt-40 mb-9">
      <div>
        {props.info.title && <h1 className="text-4xl">{props.info.title}</h1>}
        {props.info.title2 && (
          <h2 className="text-xl mt-10">{props.info.title2}</h2>
        )}
        {props.info.infoT2 && (
          <p className="text-gray-500 text-sm mt-5">{props.info.infoT2}</p>
        )}
        {props.info.title3 && (
          <h2 className="text-xl mt-10 md:mb-8">{props.info.title3}</h2>
        )}
        {props.info.infoT3 && (
          <ul className="common-page-list">
            {props.info.infoT3.map((info) => (
              <li key={Math.random() * 10} className="text-gray-500 text-sm">
                {info}
              </li>
            ))}
          </ul>
        )}
        {props.info.title22 && (
          <h2 className="text-xl mt-10">{props.info.title22}</h2>
        )}
        {props.info.infoT22 && (
          <ul className="common-page-list">
            {props.info.infoT22.map((info) => (
              <li key={Math.random() * 10} className="text-gray-500 text-sm">
                {info}
              </li>
            ))}
          </ul>
        )}
        {props.info.title4 && (
          <h2 className="text-xl mt-10">{props.info.title4}</h2>
        )}
        {props.info.infoT4 && (
          <p className="text-gray-500 text-sm mt-5">{props.info.infoT4}</p>
        )}
        {props.info.title5 && (
          <h2 className="text-xl mt-10">{props.info.title5}</h2>
        )}
        {props.info.infoT5 && (
          <p className="text-gray-500 text-sm mt-5">{props.info.infoT5}</p>
        )}
        {props.info.table1 && (
          <h2 className="text-xl mt-10">{props.info.table1}</h2>
        )}
        {props.info.table1Info1 && (
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              {/* head */}
              <tbody>
                {/* row 1 */}
                <tr>
                  {props.info.table1Info1 &&
                    props.info.table1Info1.map((info) => (
                      <td key={Math.random() * 10}>{info}</td>
                    ))}
                </tr>
                {/* row 2 */}
                <tr>
                  {props.info.table1Info1 &&
                    props.info.table1Info2.map((info) => (
                      <td key={Math.random() * 10}>{info}</td>
                    ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div className="md:mt-8">
        <CommonForm info={formForCall} />
      </div>
    </div>
  );
};

export default CommonPage;

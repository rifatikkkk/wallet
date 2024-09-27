import React from "react";
import { Text } from "../text";
import { Input } from "../input";
import { Button } from "../button";
import { Title } from "../title";

const Action = () => {
  return (
    <div className="pt-12 pb-[86px] flex flex-row justify-between h-screen font-bebas">
      <div className="flex flex-col">
        <div className="flex flex-col gap-[18px]">
          <Title color="text-orange">Beta Test Registration</Title>
          <Text />
        </div>

        <div className="flex flex-col gap-[18px] mt-9 mb-6">
          <div className="flex flex-col gap-2">
            <h4 className="text-white text-2xl uppercase">Name</h4>
            <Input
              type="text"
              placeholder="We will display your name in participation list"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-white text-2xl uppercase">Email</h4>
            <Input
              type="email"
              placeholder="We will display your name in participation list"
            />
          </div>
        </div>

        <Button>connect metamask</Button>
      </div>

      <div className="flex flex-col gap-9 mr-[58.75px]">
        <Title color="text-white">
          Participation listing (enable only for participants)
        </Title>
        <div
          className="table-card w-full overflow-x-auto pr-[28.25px] 
        "
        >
          <table className="text-left table-auto min-w-full text-white">
            <thead className="font-bebas uppercase">
              <tr className="border-b-1 border-white">
                <th className="pb-4 px-0">
                  <h4 className="text-white text-2xl font-normal">Name</h4>
                </th>
                <th className="pb-4 px-0">
                  <h4 className="text-white text-2xl font-normal">Email</h4>
                </th>
                <th className="pb-4 px-0">
                  <h4 className="text-white text-2xl font-normal">Wallet</h4>
                </th>
              </tr>
            </thead>

            <tbody className="font-avenir text-sm w-full">
              <tr className="border-b-1 border-white">
                <td className="py-4 px-0">
                  <p>Rojer Waters</p>
                </td>
                <td className="py-4 px-0">
                  <p>Charadeyouare@gmail.com</p>
                </td>
                <td className="py-4 px-0">
                  <p>0x279D9f0c10fBB3D44fEf96...</p>
                </td>
              </tr>

              <tr className="border-b-1 border-white">
                <td className="py-4">
                  <p>Rojer Waters</p>
                </td>
                <td className="py-4">
                  <p>Charadeyouare@gmail.com</p>
                </td>
                <td className="py-4">
                  <p>0x279D9f0c10fBB3D44fEf96...</p>
                </td>
              </tr>

              <tr className="border-b-1 border-white">
                <td className="py-4">
                  <p>Rojer Waters</p>
                </td>
                <td className="py-4">
                  <p>Charadeyouare@gmail.com</p>
                </td>
                <td className="py-4">
                  <p>0x279D9f0c10fBB3D44fEf96...</p>
                </td>
              </tr>

              <tr className="border-b-1 border-white">
                <td className="py-4">
                  <p>Rojer Waters</p>
                </td>
                <td className="py-4">
                  <p>Charadeyouare@gmail.com</p>
                </td>
                <td className="py-4">
                  <p>0x279D9f0c10fBB3D44fEf96...</p>
                </td>
              </tr>

              <tr className="border-b-1 border-white">
                <td className="py-4">
                  <p>Rojer Waters</p>
                </td>
                <td className="py-4">
                  <p>Charadeyouare@gmail.com</p>
                </td>
                <td className="py-4">
                  <p>0x279D9f0c10fBB3D44fEf96...</p>
                </td>
              </tr>

              <tr className="border-b-1 border-white">
                <td className="py-4">
                  <p>Rojer Waters</p>
                </td>
                <td className="py-4">
                  <p>Charadeyouare@gmail.com</p>
                </td>
                <td className="py-4">
                  <p>0x279D9f0c10fBB3D44fEf96...</p>
                </td>
              </tr>

              <tr className="border-b-1 border-white">
                <td className="py-4">
                  <p>Rojer Waters</p>
                </td>
                <td className="py-4">
                  <p>Charadeyouare@gmail.com</p>
                </td>
                <td className="py-4">
                  <p>0x279D9f0c10fBB3D44fEf96...</p>
                </td>
              </tr>

              <tr className="border-b-1 border-white">
                <td className="py-4">
                  <p>Rojer Waters</p>
                </td>
                <td className="py-4">
                  <p>Charadeyouare@gmail.com</p>
                </td>
                <td className="py-4">
                  <p>0x279D9f0c10fBB3D44fEf96...</p>
                </td>
              </tr>

              <tr className="border-b-1 border-white">
                <td className="py-4">
                  <p>Rojer Waters</p>
                </td>
                <td className="py-4">
                  <p>Charadeyouare@gmail.com</p>
                </td>
                <td className="py-4">
                  <p>0x279D9f0c10fBB3D44fEf96...</p>
                </td>
              </tr>

              <tr className="border-b-1 border-white">
                <td className="py-4">
                  <p>Rojer Waters</p>
                </td>
                <td className="py-4">
                  <p>Charadeyouare@gmail.com</p>
                </td>
                <td className="py-4">
                  <p>0x279D9f0c10fBB3D44fEf96...</p>
                </td>
              </tr>

              <tr className="border-b-1 border-white">
                <td className="py-4">
                  <p>Rojer Waters</p>
                </td>
                <td className="py-4">
                  <p>Charadeyouare@gmail.com</p>
                </td>
                <td className="py-4">
                  <p>0x279D9f0c10fBB3D44fEf96...</p>
                </td>
              </tr>

              <tr className="border-b-1 border-white">
                <td className="py-4">
                  <p>Rojer Waters</p>
                </td>
                <td className="py-4">
                  <p>Charadeyouare@gmail.com</p>
                </td>
                <td className="py-4">
                  <p>0x279D9f0c10fBB3D44fEf96...</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Action;

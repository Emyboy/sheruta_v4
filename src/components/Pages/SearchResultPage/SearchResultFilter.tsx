'use client'
import { currencySymbol } from '@/constants/app.constrant'
import SSelect from '@/packages/ui/SSelect'
import { Button, Label, Radio } from 'flowbite-react'
import React from 'react'

type Props = {}

export default function SearchResultFilter({ }: Props) {
  return (
    <div className='flex flex-col gap-8 pb-5'>
      <div className='p-3 bg-gray-200 rounded-lg flex flex-col gap-3'>
        <SSelect options={[]} onChange={e => { }} />
        <SSelect options={[]} onChange={e => { }} />
      </div>
      <hr className='my-1' />
      <div className='flex flex-col gap-4'>
        <h5 className='font-semibold'>Budget</h5>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Radio
              defaultChecked
              id="150,000"
              name="countries"
              value="USA"
            />
            <Label htmlFor="150,000" className='text-dark_lighter'>
              {currencySymbol}100,000 - {currencySymbol}150,000
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio
              defaultChecked
              id="1,000,000"
              name="countries"
              value="USA"
            />
            <Label htmlFor="1,000,000" className='text-dark_lighter'>
              {currencySymbol}500,000 - {currencySymbol}1 Million
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio
              defaultChecked
              id="5,000,000"
              name="countries"
              value="USA"
            />
            <Label htmlFor="5,000,000" className='text-dark_lighter'>
              {currencySymbol}1 Million - {currencySymbol}5 Million
            </Label>
          </div>
        </div>
      </div>
      <hr className='my-1' />
      <div className='flex flex-col gap-4'>
        <h5 className='font-semibold'>Type</h5>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Radio
              defaultChecked
              id="join-paddy"
              name="countries"
              value="USA"
            />
            <Label htmlFor="join-paddy" className='text-dark_lighter'>
              Join Paddy
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio
              defaultChecked
              id="join-paddy"
              name="carry-over"
              value="carry-over"
            />
            <Label htmlFor="carry-over" className='text-dark_lighter'>
              Carry Over
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio
              defaultChecked
              id="for-share"
              name="countries"
              value="USA"
            />
            <Label htmlFor="for-share" className='text-dark_lighter'>
              For Share
            </Label>
          </div>
          
        </div>
      </div>
      <hr className='my-1' />
      <div className='flex flex-col gap-4'>
        <h5 className='font-semibold'>Find By</h5>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Radio
              defaultChecked
              id="request"
              name="request"
              value="request"
            />
            <Label htmlFor="request" className='text-dark_lighter'>
              Request
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio
              defaultChecked
              id="flatmate"
              name="countries"
              value="USA"
            />
            <Label htmlFor="flatmate" className='text-dark_lighter'>
              Flatmates
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio
              defaultChecked
              id="available-spaces"
              name="countries"
              value="USA"
            />
            <Label htmlFor="available-spaces" className='text-dark_lighter'>
              Available Spaces
            </Label>
          </div>
          
        </div>
      </div>
      <hr className='my-1' />
      <div className='flex flex-col gap-4'>
        <h5 className='font-semibold'>Payment Mode</h5>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Radio
              defaultChecked
              id="request"
              name="request"
              value="request"
            />
            <Label htmlFor="request" className='text-dark_lighter'>
              Weekly
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio
              defaultChecked
              id="flatmate"
              name="countries"
              value="USA"
            />
            <Label htmlFor="flatmate" className='text-dark_lighter'>
              Monthly
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio
              defaultChecked
              id="available-spaces"
              name="countries"
              value="USA"
            />
            <Label htmlFor="available-spaces" className='text-dark_lighter'>
              Yearly
            </Label>
          </div>
        </div>
        <hr className='my-1' />
        <div className="flex flex-col gap-3">
          <Button className='bg-black text-white py-1' >Apply</Button>
        </div>
      </div>
    </div>
  )
}
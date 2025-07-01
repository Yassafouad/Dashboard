'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { Plus, Download, Trash2 } from 'lucide-react';

export default function TestPage() {
  return (
    <div className="p-8 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Button Test Page</h1>
        <p className="text-gray-600">Testing button component functionality</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Basic Buttons */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Basic Buttons</h3>
          <div className="space-y-2">
            <Button>Default Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
          </div>
        </div>

        {/* Variants */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Variants</h3>
          <div className="space-y-2">
            <Button variant="default" icon={<Plus />}>Default</Button>
            <Button variant="destructive" icon={<Trash2 />}>Destructive</Button>
            <Button variant="gradient" icon={<Download />}>Gradient</Button>
          </div>
        </div>

        {/* Sizes */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Sizes</h3>
          <div className="space-y-2">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>

        {/* Shadows */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Shadows</h3>
          <div className="space-y-2">
            <Button shadow="none">No Shadow</Button>
            <Button shadow="md">Medium Shadow</Button>
            <Button shadow="xl">Extra Large Shadow</Button>
          </div>
        </div>

        {/* Border Radius */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Border Radius</h3>
          <div className="space-y-2">
            <Button rounded="sm">Small Radius</Button>
            <Button rounded="lg">Large Radius</Button>
            <Button rounded="full">Full Radius</Button>
          </div>
        </div>

        {/* Full Width */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Full Width</h3>
          <div className="space-y-2">
            <Button fullWidth>Full Width Button</Button>
            <Button variant="outline" fullWidth>Full Width Outline</Button>
          </div>
        </div>
      </div>

      {/* Debug Info */}
      <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Debug Information</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          If you can see this page and the buttons above, the Button component is working correctly.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          Check the browser console for any JavaScript errors.
        </p>
      </div>
    </div>
  );
} 